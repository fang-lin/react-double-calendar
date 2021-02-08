// const path = require('path');
// const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
// const {version} = require('./package.json');
//
// module.exports = (env, argv) => {
//     const config = {
//         entry: './src/index.tsx',
//
//         devtool: 'source-map',
//
//         output: {
//             filename: 'js/[name].[chunkhash:8].js',
//             path: path.resolve(__dirname, 'dist'),
//         },
//
//         plugins: [
//             new webpack.ProgressPlugin(),
//             new HtmlWebpackPlugin({
//                 title: `Sorting animation ${version}`,
//                 template: 'src/index.html',
//                 inject: false
//             })
//         ],
//
//         module: {
//             rules: [{
//                 test: /\.(ts|tsx)$/,
//                 loader: 'ts-loader',
//                 include: [path.resolve(__dirname, 'src')],
//                 exclude: [/node_modules/]
//             }, {
//                 enforce: 'pre',
//                 test: /\.js$/,
//                 loader: 'source-map-loader'
//             }]
//         },
//
//         devServer: {
//             contentBase: './src'
//         },
//
//         resolve: {
//             extensions: ['.tsx', '.ts', '.js']
//         },
//     };
//
//     if (argv.mode !== 'development') {
//         config.devtool = 'none';
//         config.optimization = {
//             splitChunks: {
//                 cacheGroups: {
//                     commons: {
//                         test: /([\\/]node_modules[\\/]|[\\/]fonts)/,
//                         name: 'vendors',
//                         chunks: 'all'
//                     }
//                 },
//                 chunks: 'async',
//                 minChunks: 1,
//                 minSize: 30000,
//                 name: true
//             },
//             minimizer: [new TerserPlugin()]
//         };
//     }
//
//     return config;
// };
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.tsx',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'src/index.html',
            inject: false
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
};