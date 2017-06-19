var webpack = require("webpack");
var path = require('path');
var webpackConfig = require('./webpack.config.js');

webpackConfig.module.rules.push({ //delays coverage til after tests are run, fixing transpiled source coverage error
    enforce: 'post',
    test: /\.(ts|tsx)$/,
    exclude: [
        'node_modules',
        /\.spec\.(ts|tsx)$/
    ],
    loader: 'istanbul-instrumenter-loader',
    query: {
        esModules: true
    }
});

webpackConfig.externals = {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
};
webpackConfig.node = {
    fs: "empty",
    child_process: 'empty'
}

module.exports = webpackConfig;