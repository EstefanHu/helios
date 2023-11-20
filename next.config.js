const { securityHeaders } = require('./src/lib/constants/httpHeaders');

module.exports = async (phase, { defaultConfig }) => {
  return {
    reactStrictMode: true,
    swcMinify: true,
    headers: async () => [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ],
    experimental: {
      scrollRestoration: false,
    },
  };
};
