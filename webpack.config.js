const path = require('path');

module.exports = {
    entry : './src/index.js',
    output:{
        filename : 'index.js',
        path : path.resolve(__dirname, 'dist'),
        publicPath: "/webpack-demo/dist/"
    },
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
    }

}