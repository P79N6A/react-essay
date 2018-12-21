
const path = require('path')

const config  = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader',
            }
        ]
    }
}

module.exports = config