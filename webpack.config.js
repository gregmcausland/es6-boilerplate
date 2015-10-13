module.exports = {
    entry: './source/scripts/index.js',
    output: {
        path: './build/scripts',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/,  loader: "babel-loader?stage=0" }
        ]
    }
}
