const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry : {
        app : './src/index.js',
        print : './src/print.js',
        emma : './src/emma.js'
        
    },
    output:{
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /.css$/,
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
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title : 'Output Management'
        }),
        new ManifestPlugin({
            fileName : 'my-manifest.json',
            basePath:'/dist/',
            seed:{
                name : 'my manifest'
            }
        })
    ]

}