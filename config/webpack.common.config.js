const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, '../src/common/main/index.js'),
    output: {
        filename: 'static/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            '@': path.join(__dirname,'../src'),
        },
        extensions: ['.js', '.jsx', '.css', '.jpg', '.png', '.jpeg', '.gif']
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
                // include: /src/,          // 只转化src目录下的js
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
                use: [
                    {
                        loader: 'url-loader', //要用到的loader
                        options: {
                            limit: 500,
                            //palceholder占位符
                            name:'images/[name].[ext]', //打包后的图片名字，后缀和打包的之前的图片一样
                            // outputPath: 'images/[name].[ext]' //图片打包后的地址
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                // exclude: [cssmodules, ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     sourceMap: flag ? true : false,
                        //     modules: true,
                        //     localIdentName: "[local]___[hash:base64:6]"
                        // }
                    },
                    'postcss-loader' // css兼容性加前缀loader处理
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'true',
            favicon: path.resolve(__dirname, '../favicon.ico'),
            // hash: true,
            // chunks: ['home']   // 只允许该模块被使用
        }),
        new CleanWebpackPlugin(),  // 打包前清空打包文件夹的内容
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:8].css",
            chunkFilename: "css/[id].[chunkhash:8].css"  // 入口文件文件以外的css文件名
        }),
        require('autoprefixer')
    ]
}
