const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './static/src');
const outputPath = path.join(__dirname, './../../app/view/public/');
const rucksack = require('rucksack-css');
const autoprefixer = require('autoprefixer');

const postcssBasePlugins = [
    require('postcss-import')({
        addDependencyTo: webpack
    }),
    require('postcss-cssnext'),
    require('postcss-nested'),
    rucksack
];

module.exports = {
  
  entry: {
    'index' : './static/src/index.js',
    vendor: ['react', 'react-dom', 'whatwg-fetch'],
  },
  output: {
    path: outputPath,
    publicPath: '',
    filename: 'public/js/[name].js',
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test : /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true, }
            }, { loader: 'postcss-loader', options: {importLoaders: 1 } }
          ]
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', 
                options: {
                sourceMap: true,
                modules:true,
                importLoaders: 1,
                localIdentName:"[local]___[hash:base64:5]"
              } },
              { loader: 'postcss-loader',
                options: {
                    plugins: postcssBasePlugins,
                    importLoaders: 1
                } },
              { loader: 'less-loader', query: { sourceMaps: true ,modifyVars:{
                "@border-radius-base":"3px",
                "@border-radius-sm":"2px","@shadow-color":"rgba(0,0,0,0.05)",
                "@shadow-1-down":"4px 4px 40px @shadow-color",
                "@border-color-split":"#f4f4f4",
                "@border-color-base":"#e5e5e5",
                "@menu-dark-bg":"#3e3e3e",
                "@text-color":"#666",
                "@font-family":"\"AvenirNext-Regular\", \"Helvetica Neue\", \"lucida grande\", \"PingFangHK-Light\", \"STHeiti\", \"Heiti SC\", \"Hiragino Sans GB\", \"Microsoft JhengHei\", \"Microsoft Yahei\", SimHei, \"WenQuanYi Micro Hei\", \"Droid Sans\", \"Roboto\", Helvetica, Tahoma, Arial, \"sans-serif\""}} 
              },
            ]
        })
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff' }, 
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff' }, 
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/octet-stream' }, 
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' }, 
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=image/svg+xml' }, 
      { test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i, loader: 'url?limit=10000' }, 
      { test: /\.json$/, loader: 'json' }, 
      { test: /\.html?$/, loader: 'file-loader?name=[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules'
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
      filename: 'public/js/[name].js'
    }),
  ]
};