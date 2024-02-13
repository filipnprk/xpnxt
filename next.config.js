const withPWA = require("next-pwa")({
  dest: "public",
  swSrc: "src/worker.js",
  swDest: "worker.js",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
