/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images');

const nextConfig = {
  // Ensure you have the static export enabled
  output: 'export', 
  
  // Add any other existing config options here
};

module.exports = withExportImages(nextConfig);