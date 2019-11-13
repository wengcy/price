
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.resolve.alias
      .set('@', resolve('src'));
      config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin) .init(Plugin => new Plugin());
  },
  // 修改webpack的配置
  configureWebpack: () => {
    return {
        plugins: [new CompressionPlugin({
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 0, //对超过10k的数据进行压缩
            deleteOriginalAssets: false //是否删除原文件
        })],
        externals: {
          'vue': 'Vue',
          'vue-router': 'VueRouter',
          'element-ui': 'elementUI',
          'axios': 'axios',
        },
        optimization:{
          splitChunks: {
            chunks: "async",
            minSize: 10, // 模块的最小体积
            minChunks: 1, // 模块的最小被引用次数
            maxAsyncRequests: 2, // 按需加载的最大并行请求数
            maxInitialRequests: 2, // 一个入口最大并行请求数
            automaticNameDelimiter: '~', // 文件名的连接符
            name: true,
            cacheGroups: { // 缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
          }
        }
      }
  },
  css: {
    extract: false,
    sourceMap: false,
    modules: false,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/variables.scss";
        `
      }
    }
  }
};
  