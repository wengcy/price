
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'));
      config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin) .init(Plugin => new Plugin());
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/variables.scss";
        `
      }
    }
  }
};