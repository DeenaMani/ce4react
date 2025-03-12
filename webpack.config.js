// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './app/Views/src/index.js',  // Entry file for React app
//     output: {
//         path: path.resolve(__dirname, 'public/dist'),
//         filename: 'bundle.js',  // Output bundled JS
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,  // Match both .js and .jsx files
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: [
//                             '@babel/preset-env',  // Transpile modern JavaScript
//                             '@babel/preset-react' // Transpile React JSX
//                         ],
//                         sourceType: 'module',  // Make sure Babel treats files as modules
//                     },
//                 },
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'],  // Resolve .js and .jsx extensions
//     },
//     devServer: {
//         static: {
//             directory: path.join(__dirname, 'public'),  // Serve static files from public directory
//         },
//         port: 3000,
//         proxy: [
//             {
//                 context: ['/react', '/api'],  // Proxy requests to CodeIgniter
//                 target: 'http://localhost/php/codeigniter/sample/',  // Adjust this URL as per your CodeIgniter setup
//                 secure: false,  // Disable SSL verification for local development
//                 changeOrigin: true,  // Change origin of requests for better compatibility
//             },
//         ],
//         hot: true,  // Enable hot module replacement
//         open: true,  // Automatically open the browser
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './public/index.html',  // HTML template to inject the bundled JS
//         }),
//     ],
// };

import path from 'path';
/* const HtmlWebpackPlugin = require('html-webpack-plugin'); */

export default {
  entry: './app/Views/src/index.js', // Entry point for your JavaScript
  output: {
    filename: 'bundle.js', // Output bundled file
    path: path.resolve('public/assets/js'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Support modern JavaScript and React
          },
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg)$/, // Process images
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve('app/Views/src'), // Alias to simplify imports
    },
    extensions: ['.js', '.jsx'], // Support both JS and JSX files
  },
/*   plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to the template HTML file
    }),
  ], */
  devServer: {
    static: path.resolve('public'),
      port: 3000,
      headers: {
        'Access-Control-Allow-Origin': '*',  // Allow all origins, or specify your frontend URL if needed
      },
      allowedHosts: 'all',
    open: true, // Automatically open browser
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true,
  },
  mode: 'development', // Use development mode for better debugging
  // watch: true,
};
