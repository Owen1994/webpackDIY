const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩代码，去代码注释

module.exports = merge(common, {
    mode: 'production',
    stats: {
        colors: true,
        hash: true,
        timings: true,
        assets: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: false,
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: /node_modules/
            }),
        ],
    },
})