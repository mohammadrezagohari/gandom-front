const { i18n } = require('./next-i18next.config');

const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  i18n,
  reactStrictMode: true,
  future: { webpack5: true },
  include: path.resolve(__dirname, 'assets/svg'),
    webpack(config, options) {
        return config;
    },
});
