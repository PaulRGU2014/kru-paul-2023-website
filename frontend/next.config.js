module.exports = {
  env: {
    dataPath: process.env.DATA_PATH
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  experimental: { esmExternals: false },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
};
