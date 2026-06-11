import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import baseConfig from './module-federation.config';

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation({ ...baseConfig }, { dts: false }),
  (webpackConfig) => {
    if (webpackConfig.output) {
      webpackConfig.output.publicPath = 'http://localhost:4203/';
    }
    return webpackConfig;
  }
);
