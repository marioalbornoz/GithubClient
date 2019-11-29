const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8081,
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: "./src/index.html",

        })
    ]
}
