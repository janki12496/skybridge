const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@models': path.resolve(__dirname, 'src/app/models'),
      '@services': path.resolve(__dirname, 'src/app/services'),
      '@store': path.resolve(__dirname, 'src/app/store'),
      '@components': path.resolve(__dirname, 'src/app/components')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        angular: {
          test: /[\\/]node_modules[\\/]@angular[\\/]/,
          name: 'angular',
          chunks: 'all',
          priority: 10
        },
        ngrx: {
          test: /[\\/]node_modules[\\/]@ngrx[\\/]/,
          name: 'ngrx',
          chunks: 'all',
          priority: 9
        }
      }
    }
  }
};