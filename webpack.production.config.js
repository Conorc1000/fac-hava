var webpack = require('webpack');

module.exports = {

    entry: [
      "./src/components/index.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js",
    },
    module: {
      loaders: [
        { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']},
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
