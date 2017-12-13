import merge from 'webpack-merge';
import webpack from 'webpack';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig from './webpack.config.base';

export default merge.smart(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    new ExtractTextPlugin({
      filename: './styles/style.css',
      disable: false,
      allChunks: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
