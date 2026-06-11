import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  exposes: {
    './Routes': 'apps/angular/dashboard/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
