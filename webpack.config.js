var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var plugins = [];
var css_loader = 'css!postcss!sass';
if(process.env.NODE_ENV === 'production') {
	plugins = [
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	];
	css_loader = 'css?minimize!postcss!sass';
}

module.exports = [
	{
		entry: path.join(__dirname, 'script/index.tsx'),
		output: {
			filename: 'public/js/bundle.js'
		},
		resolve: {
			extensions: ['', '.tsx', '.ts', '.js']
		},
		module: {
			loaders: [
				{
					test: /\.tsx?$/,
					loader: 'ts',
					exclude: /node_modules/
				}
			]
		},
		plugins: plugins
	},
	{
		entry: path.join(__dirname, 'style/style.scss'),
		output: {
			path: path.join(__dirname, 'public/css'),
			filename: 'style.css'
		},
		resolve: {
			extensions: ['', '.scss', '.woff2', '.woff', '.ttf', '.svg', '.eot', '.png']
		},
		module: {
			loaders: [
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('style', css_loader)
				},
				{
					test: /\.(woff2|woff|ttf|svg|eot|png)$/,
					loader: 'file?name=[name].[ext]'
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('style.css')
		],
		postcss: [
			autoprefixer({
				browsers: ['last 2 versions']
			})
		]
	}
];
