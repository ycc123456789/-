var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    //npm安装--保存开发压缩网页包插件
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    //运行带有额外参数的build命令
    //生成完成后查看
    //`npm运行构建--报告`
    //设置为'true'或'false'以始终打开或关闭它
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 10734,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/api': {
            target: 'http://localhost:3003',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api'
            }
        }
    },
    cssSourceMap: false
  },
  jwt: {
      cert: '123'
  }
}
