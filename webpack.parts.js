const webpack = require('webpack');

exports.devServer = (options) => {
    return {
        devServer: {
            historyApiFallback: true,
            hot: true,
            // don't refresh if hot loading fails
            hotOnly: true,
            stats: 'errors-only',
            host: process.env.host,
            port: process.env.PORT,
            plugins: [
                new webpack.HotModuleReplacementPlugin()
            ]
        }
    }
};

exports.lintJavaScript = ({ paths, options} ) => {
    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true
                    }
                }
            ],
        }
    }
}
