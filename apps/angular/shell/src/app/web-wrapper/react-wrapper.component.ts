import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { loadRemoteModule } from '@nx/angular/mf';
import * as React from 'react';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  template: `<div id="react-root" style="width: 100%; height: 100%;"></div>`,
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private reactRootInstance: any = null;

  async ngOnInit() {
    try {
      // 1. Load module từ remote React 'freeblock'
      let remoteModule: any = null;
      try {
        remoteModule = await loadRemoteModule('freeblock', './Module');
      } catch (err: any) {
        console.warn('loadRemoteModule failed, will try script fallback:', err);
        const msg = err && err.message ? String(err.message) : '';
        if (msg.includes('container.init is not a function')) {
          try {
            const manifestRes = await fetch(
              '/assets/module-federation.manifest.json'
            );
            const manifest = await manifestRes.json();
            const remoteUrl = manifest['freeblock'];
            if (remoteUrl) {
              const scriptUrl = remoteUrl.endsWith('.js')
                ? remoteUrl
                : `${remoteUrl}/remoteEntry.js`;
              if (!(window as any)['freeblock']) {
                await new Promise<void>((resolve, reject) => {
                  const s = document.createElement('script');
                  s.src = scriptUrl;
                  s.onload = () => resolve();
                  s.onerror = (e) => reject(e);
                  document.head.appendChild(s);
                });
              }
              remoteModule = (window as any)['freeblock'];
            }
          } catch (e) {
            console.error('Fallback script load failed:', e);
          }
        } else {
          throw err;
        }
      }

      // 2. Lấy element chứa React
      const container = this.el.nativeElement.querySelector('#react-root');
      console.debug('Remote module loaded:', remoteModule);

      const tryMount = async () => {
        let resolvedModule: any = remoteModule;
        if (remoteModule && typeof (remoteModule as any).get === 'function') {
          console.debug(
            'Remote returned a container. Resolving exposed module via container.get.'
          );
          const containerObj: any = remoteModule;

          try {
            const factory = await containerObj.get('./Module');
            const moduleExports = factory();
            console.debug(
              'Resolved moduleExports from container:',
              moduleExports
            );
            resolvedModule = moduleExports;
          } catch (e) {
            console.error('Failed to resolve module from container:', e);
            return null;
          }
        }

        if (resolvedModule && typeof resolvedModule.mount === 'function') {
          return resolvedModule.mount(container);
        }

        if (
          resolvedModule &&
          resolvedModule.default &&
          typeof resolvedModule.default.mount === 'function'
        ) {
          return resolvedModule.default.mount(container);
        }

        if (resolvedModule && resolvedModule.default) {
          const comp = resolvedModule.default;
          try {
            if (!container) {
              console.error('Container element for React mount not found');
              return null;
            }
            const ReactDOM = await import('react-dom/client');
            const root = (ReactDOM as any).createRoot(container as HTMLElement);
            root.render(React.createElement(comp));
            return root;
          } catch (err) {
            console.error('Failed to mount default React component:', err);
            return null;
          }
        }

        console.error(
          'Remote React module không export hàm mount hoặc component hợp lệ.',
          resolvedModule
        );
        return null;
      };

      this.reactRootInstance = await tryMount();
    } catch (error) {
      console.error('Lỗi khi load ứng dụng React freeblock:', error);
    }
  }

  ngOnDestroy() {
    if (
      this.reactRootInstance &&
      typeof this.reactRootInstance.unmount === 'function'
    ) {
      this.reactRootInstance.unmount();
    }
  }
}
