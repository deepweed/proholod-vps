/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.yandexcloud.net',
          port: '',
          pathname: '/proholod.pro/images/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  
