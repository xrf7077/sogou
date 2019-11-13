module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      '/json': {
        target: 'https://mall.sogou.com',
        changOrigin: true
      },
      '/api': {
        target: 'https://mall.sogou.com',
        changOrigin: true
      }
    },
    overlay: {
      warning: false,
      errors: false
    }

  }
}
