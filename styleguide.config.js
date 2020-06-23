const path = require('path')

module.exports = {
  styleguideDir: 'dev',
  title: 'Windmill React UI',
  components: 'src/**/*.js',
  styles: {
    Code: {
      code: {
        color: 'rgb(128, 90, 213)',
        backgroundColor: 'rgb(247, 250, 252)',
        padding: '0 4px',
        fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
      },
    },
  },
  require: [path.join(__dirname, 'style/output.css')],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
}
