const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client/src", "index.js"),
  output: {
    path:path.resolve(__dirname, "client/dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', {'plugins': ['@babel/plugin-syntax-jsx', '@babel/plugin-proposal-class-properties']}]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 10 * 1024 // Inline images under 10KB
            }
        },
        generator: {
            filename: 'images/[name]-[hash][ext]'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client/src", "index.html"),
    }),

  ],
  resolve: {
    fallback: { "url": require.resolve("url/") },

  }
}