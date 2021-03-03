const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { targets: "defaults" }]],
                        plugins: ['@babel/transform-runtime']
                    }
                }
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    }, 
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), 
        publicPath: '/scripts/', 
	watchContentBase: true
    }, 
    devtool: 'source-map'
}
