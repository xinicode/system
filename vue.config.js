// Vue.config.js 配置选项
module.exports = {
  publicPath: "./",//  基本路径
  outputDir: "dist", //  构建时的输出目录
  assetsDir: "static", //  放置静态资源的目录
  indexPath: "index.html",  //  html 的输出路径
  filenameHashing: true, //文件名哈希
  pages: {
    index: {
      entry: 'src/main.js', // page 的入口文件
      template: 'public/index.html', // 模板文件
      filename: 'index.html', // 在 dist/index.html 的输出文件
      title: 'Index Page', // 当使用页面 title 选项时， template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // subpage: 'src/subpage/main.js'
  },
  lintOnSave: true, //  是否在保存的时候使用 `eslint-loader` 进行检查。
  runtimeCompiler: false,  //  是否使用带有浏览器内编译器的完整构建版本
  transpileDependencies: [ /* string or regex */],   //  babel-loader 默认会跳过 node_modules 依赖。
  productionSourceMap: true, //  是否为生产环境构建生成 source map？
  crossorigin: "", //  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  integrity: false, //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  configureWebpack: () => { }, //(Object | Function)
  chainWebpack: () => { },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/': {
        target: "http://10.201.61.188",
        changeOrigin: true,
        secure: false,
        // pathRewrite: {
        //   "^/api": ""
        // }
      },
    }, // string | Object
    before: app => { }
  },
  // css: {
  //   extract: true, // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
  //   sourceMap: false, // 是否开启 CSS source map？
  //   loaderOptions: {
  //     css: {
  //       // 这里的选项会传递给 css-loader
  //     },
  //     postcss: {
  //     }
  //   },
  //   modules: false
  // },
  // parallel: require('os').cpus().length > 1,
  // pluginOptions: { }

}