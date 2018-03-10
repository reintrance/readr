const path = require('path');

const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.\jsx?$/,
            use: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules')
        }]
    },
    devtool: 'inline-source-map'
};

module.exports = config;