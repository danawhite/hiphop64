var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, 'src');
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const TARGET = process.env.BABEL_ENV = process.env.npm_lifecycle_event;

find();

function find() {
    console.log(__dirname);
}

const common = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: APP_PATH + '/main.js',
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hip Hop 64',
            template: './src/index.html',
            inject: 'body'
        }),
        new OpenBrowserWebpackPlugin({ url: 'http://localhost:8080'})
    ],
    module: {
        loaders: [
            { test: /\.css$/,
                include: APP_PATH,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(js|jsx)$/,
                include: APP_PATH,
                loader: 'babel-loader'
            },
            { test: /\\.(ttf|eot|svg)$/, loader: "file-loader" },

        ]
    }
};

module.exports = function(env) {
    return common
   // if(env === 'production') {
   //     return common
   // }
   //
   // return Object.assign(
   //     {},
   //     common,
   //     developmentConfig,
   //     {
   //         plugins: common.plugins.concat(developmentConfig.plugins)
   //     }
   // )
};

// provides default in the event that we're running Webpack outside of npm
if(TARGET === 'build' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new OpenBrowserWebpackPlugin(),
            //new ExtractTextPlugin('bundle.css')
        ]
    });
}


