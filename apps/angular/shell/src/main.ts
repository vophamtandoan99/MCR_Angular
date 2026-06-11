import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('/assets/module-federation.manifest.json')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Manifest fetch failed: ${res.status} ${res.statusText}`);
    }
    return res.json();
  })
  .then((definitions) => setRemoteDefinitions(definitions))
  .catch((err) => {
    console.warn(
      'Could not set remote definitions, continuing bootstrap:',
      err
    );
  })
  .finally(() => import('./bootstrap').catch((err) => console.error(err)));
