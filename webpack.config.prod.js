import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';

import baseConfig from './webpack.config.base';

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  PUBLIC: path.resolve(__dirname, 'assets'),
};

export default merge.smart(baseConfig, {
  output: {
    filename: '[name]-[hash].min.js',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')},
    }),
    require('autoprefixer')
  ],
});
