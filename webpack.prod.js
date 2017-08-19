const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
    entry : {
        app : './src/index.js',
        print : './src/print.js',
        emma : './src/emma.js'

    },
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist'),
        publicPath : '/webpack-demo/dist/'
    },
    devtool : 'eval-source-map',
    devServer : {
        contentBase : path.join(__dirname, 'dist'),
        compress : true,
        port : 9000
    },
    module : {
        rules : [
            {
                test : /.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.(png|svg|jpg|gif)$/,
                use : [
                    'file-loader'
                ]
            }
        ]
    },
    plugins : [
        new webpack.LoaderOptionsPlugin({
            minimize : true,
            debug : false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify : false,
            comments : false
        })
    ]
}
