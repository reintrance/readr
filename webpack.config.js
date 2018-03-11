const path = require('path');

const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /.\jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/dist/',
        open: true,
        compress: true,
        port: 9000
    }
};

module.exports = config;