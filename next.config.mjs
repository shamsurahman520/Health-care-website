
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Add rule for handling SVG files
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"], // Use svgr for importing SVG as components
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  