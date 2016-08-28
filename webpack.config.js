var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var plugins = [];
var css_loader = 'css-loader!postcss-loader!sass-loader';
if(process.env.NODE_ENV === 'production') {
	plugins = [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	];
	css_loader = 'css-loader?minimize!postcss-loader!sass-loader';
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
					loader: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		plugins: plugins
	},
	{
		entry: path.join(__dirname, 'style/style.scss'),
		output: {
			filename: 'public/css/style.css'
		},
		resolve: {
			extensions: ['', '.scss', '.css']
		},
		module: {
			loaders: [
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('style-loader', css_loader)
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('public/css/style.css')
		],
		postcss: [
			autoprefixer({
				browsers: ['last 2 versions']
			})
		]
	}
];
