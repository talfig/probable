/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Export the app as static HTML files
    basePath: '/portfolio',  // Add the GitHub Pages subdirectory
    assetPrefix: '/portfolio/',  // Prefix for static assets
    images: {
      unoptimized: true,  // Since Next.js images won't be optimized on GitHub Pages
    },
  };
  
  export default nextConfig;
  