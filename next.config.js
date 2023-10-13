/** @type {import('next').NextConfig} */

const nextConfig = {
    // useClient: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.waifu.pics",
        },
      ],
    },
  };

module.exports = nextConfig
