/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // we are running "typescript" checks as part of the "lint" step in our CI
    ignoreBuildErrors: true,
  },
  eslint: {
    // we are running "eslint" checks as part of the "lint" step in our CI
    ignoreDuringBuilds: true,
  },
}