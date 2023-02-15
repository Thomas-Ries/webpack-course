const path = require('path');

module.export = {
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
    }
}