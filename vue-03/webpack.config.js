// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const PRODUCTION = 'production'
const env = process.env.NODE_ENV || ''
const isDev = env !== PRODUCTION
module.exports = {
    entry: {
        app: './src/index.js', // "app"key值可以随便定义，输出的时候就可以取这个key值为输出文件命名
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: isDev ? '[name].js' : '[name].[chunkhash].js', // 这里[name]就对应entry中的‘app’key值
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // web服务的目录为 "dist" 目录
        port: 9000 // web服务端口
    },
    mode: isDev ? 'development' : PRODUCTION,
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.ejs')
        }),
        new webpack.DefinePlugin({
            // 'process.env': {
            //     NODE_ENV: JSON.stringify(env || 'production')
            // }
        }),
        new VueLoaderPlugin()
    ]
}