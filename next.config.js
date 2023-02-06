/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require("path");

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            publicPath: "/_next/",
          },
        },
      ],
    });

    return config;
  },
};
