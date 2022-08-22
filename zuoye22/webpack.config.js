const {
  VueLoaderPlugin
} = require('vue-loader')
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: "./src/main.js", // 入口
  output: {
    path: path.join(__dirname, "lib"), // 出口路径
    filename: "./lib/index.js" // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    open: true,
    port: 9999
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.less$/i,
      use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    {
      test: /\.(png|gif)$/i,
      type: 'asset/resource',
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024
        }
      },
      generator: {
        filename: 'images/[hash:6][ext]'
      }
    },

    {
      test: /\.(eot|svg|ttf|woff|woff2)/i,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 2 * 1024
        }
      },
      generator: {
        filename: 'fonts/[hash:6][ext]'
      }
    },
    //   { // 处理字体图标的解析
    //     test: /\.(eot|svg|ttf|woff|woff2)$/,
    //         use: [
    //             {
    //                 loader: 'url-loader',
    //                 options: {
    //                     limit: 2 * 1024,
    //                     // 配置输出的文件名
    //                     name: '[name].[ext]',
    //                     // 配置输出的文件目录
    //                     outputPath: "fonts/"
    //                 }
    //             }
    //         ]
    // },

    {
      test: /\.vue/i,
      use: ['vue-loader']
    }
    ]
  }
}
