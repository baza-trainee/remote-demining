/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "remote-demining.onrender.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  env: {
    SERVICE_ID: "service_7ll2pvb",
    TEMPLATE_ID: "template_2j1mjx4",
    PUBLIC_KEY: "vpKbRCkkOvFZKJUoA",
    RECAPTCHA_SITE: "6LcC1VwnAAAAAAM8s2T5FyidAYdXPuYT9vByiRyJ",
  },
};

module.exports = nextConfig;
