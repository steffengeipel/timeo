// next.config.js
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    })

    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
}