const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const dev = process.env.NODE_ENV === dev

let config = {
    entry: './assets/js/app.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, './dist/main.js'),
        filename: 'main.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {}
                  },
                type: 'javascript/auto',
              },
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
}

module.exports = config;