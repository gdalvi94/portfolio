//next.config.js
module.exports = {
  basePath: "/portfolio", // Replace with your actual repository name
  assetPrefix: "/portfolio/", // Replace with your actual repository name
  reactStrictMode: true,
  images: {
    domains: ["gdalvi94.github.io"], // Add domains for external images
    unoptimized: true, // Unoptimize images for faster development builds
  },
  // Other configuration options
};
