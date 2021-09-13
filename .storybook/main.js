module.exports = {
  webpackFinal: (config) => {
    config.resolve.extensions.push('.svg')

    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|/.test(String(data.test)))
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

      return data
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: require.resolve('babel-loader') },
        { loader: require.resolve('@svgr/webpack') },
      ],
    })

    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
}
