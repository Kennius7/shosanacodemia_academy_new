// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   // Strict mode for catching common bugs
//   reactStrictMode: true,

//   // Allow Firebase image domains if needed later
//   images: {
//     domains: ['firebasestorage.googleapis.com'],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode for catching common bugs
  reactStrictMode: true,

  // Allow Firebase image domains if needed later
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ]
    // domains: ['firebasestorage.googleapis.com'],
  },
};

export default nextConfig;
