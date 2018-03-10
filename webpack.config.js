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
            exclude: '/node_modules/'
        }]
    }
};

module.exports = config;