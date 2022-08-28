const path = require("node:path");

module.exports = /** @type {import('@storybook/react/types').StorybookConfig} */({
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@ergosign/storybook-addon-pseudo-states-react',
    '@ergosign/storybook-addon-pseudo-states-react/preset-postcss',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: "local",
              localIdentName: "[local]",
              // localIdentName: '[path][name]__[local]',
              exportOnlyLocals: false,
            }
          },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config
  },
});
