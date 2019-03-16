const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	output: {
		path: `${__dirname}/dist`,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: './dist',
		hot: true
		// port: 7000,
		// proxy: {
		//   '/graphql': 'http://localhost:8000'
		// }
	}
}
