const path = require('path');
 
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       use: [
         {
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'img/',
             publicPath: 'img/'
           }
         }
       ],
       type: 'asset/resource',
     },
    ],
  },
};