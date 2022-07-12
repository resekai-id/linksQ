/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,

    legacyBrowsers: false,
    browsersListForSwc: true,

    images: { allowFutureImage: true },
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,
}
