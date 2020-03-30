const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
          new HtmlWebpackPlugin({
              title: 'Webpack 4 Starter',
              template: './src/index.html',
              inject: true,
              minify: {
                  removeComments: true,
                  collapseWhitespace: false
              }
          }),
          new MiniCssExtractPlugin({
           filename: 'style.css'
         }),
         new CopyWebpackPlugin([{
           from:'./src/assets/images',
           to:'assets/images'
         }]),
         new CopyWebpackPlugin([{
           from:'./src/assets/fonts',
           to:'assets/fonts'
         }])
      ],
      module: {
        rules: [
            {
                test: [/.js$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },

            {
              test: [/.css$|.scss$/],
              use:[
               'style-loader',
               'css-loader',
               'sass-loader'
              ]
            },

        ]
}
};
