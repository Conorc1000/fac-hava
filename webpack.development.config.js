var webpack = require('webpack');

module.exports = {

    entry: [
      'webpack/hot/dev-server',
      "./src/components/index.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js",
      publicPath: "/public/"
    },
    module: {
      loaders: [
        { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader']},
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
