const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',  // 设为此模式可用于源码调试
    devServer: {
        contentBase: path.join(__dirname, "../dist"), // 你要提供哪里的内容给虚拟服务器用。这里最好填 绝对路径。
        compress: true, // 如果为 true ，开启虚拟服务器时，为你的代码进行压缩。加快开发流程和优化的作用。
        inline: true,
        port: 8281,
        historyApiFallback: {
            rewrites: [
                {from: /^\/$/, to: '/home/index.html'}
            ]
        }, // 如果为 true ，页面出错不会弹出 404 页面。 如果为 {...} , 看看一般里面有什么
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api' : ''}
            }
        },
        // openPage: 'login/',
    }
})