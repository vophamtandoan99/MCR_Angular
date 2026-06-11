import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'login',
  exposes: {
    './Routes': 'apps/angular/login/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
