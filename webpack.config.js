
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    module : {
        rules : [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                    'postcss-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })

    ],
    mode : devMode ? 'development' : 'production'
};
