import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation(
  {
    ...config,
    shared: (libraryName, shareConfig) => {
      if (libraryName === 'tds-ui') {
        return {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        };
      }
      return shareConfig;
    },
  },
  { dts: false }
);
