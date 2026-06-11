import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'freeblock',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
