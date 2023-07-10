/**
* @type {import('next').NextConfig}
*/

const nextConfig = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
    output: process.env.NODE_ENV == "production"? "export" : "standalone"
  };
  
module.exports = nextConfig;