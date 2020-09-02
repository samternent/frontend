module.exports = {
  chainWebpack: config => {
    const { resolve } = require('path')
    config.resolve.alias.set('@teamwork/js-api', resolve(__dirname, './packages/js-api'));
    config.resolve.alias.set('@teamwork/js-core', resolve(__dirname, './packages/js-core'));
    config.resolve.alias.set('@teamwork/ui-core', resolve(__dirname, './packages/ui-core'));
  },
}
