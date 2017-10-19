const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundles.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['angular2-template-loader', 'ts-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.html$/,
                use: "raw-loader"
            },
            {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "raw-loader"
					},
					{
						loader: "less-loader"
					}],
					// use style-loader in development
					fallback: "style-loader"
				}),
	
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader:'file-loader', 
						options: {
							name: '[name].[ext]',
							useRelativePath: true
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader:'file-loader', 
						options: {
							name: '[name].[ext]',
							useRelativePath: true
						}
					}
				]
			}
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.resolve(__dirname, '../src')
		),
		new ExtractTextPlugin({
			filename: '[name].css',
			disable: false,
			allChunks: true
		}),
		new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            "template": "./src/index.html",
            "filename": "./index.html",
            "inject": true,
            "compile": true
        })
    ]
};
