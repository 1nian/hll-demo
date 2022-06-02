const { defineConfig } = require('@vue/cli-service');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = defineConfig({
  transpileDependencies: true,

  // 项目优化可视化
  // configureWebpack: {
  //   plugins: [
  //     new BundleAnalyzerPlugin()
  //   ]
  // }
})
