const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry : {
        index : './src/index.js'
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
