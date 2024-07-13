/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["geist"],

  images: {
    domains: [
      "res.cloudinary.com",
      "https://res.cloudinary.com",
      "framerusercontent.com",
    ],
  },
};

module.exports = nextConfig;
