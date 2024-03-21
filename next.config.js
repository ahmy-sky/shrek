/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

// module.exports = {
//   webpack5: true,
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           net: false,
//           dns: false,
//           tls: false,
//           fs: false,
//           request: false,
//         },
//       };
//     }
//     return config;
//   },
// };

// module.exports = {
//   // Can be safely removed in newer versions of Next.js
//   future: {
//     // by default, if you customize webpack config, they switch back to version 4.
//     // Looks like backward compatibility approach.
//     webpack5: true,
//   },

//   webpack(config) {
//     config.resolve.fallback = {
//       // if you miss it, all the other options in fallback, specified
//       // by next.js will be dropped.
//       ...config.resolve.fallback,

//       fs: false, // the solution
//     };

//     return config;
//   },
// };

// module.exports = {
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };

//     return config;
//   },
// };

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Exclude fs, path, and child_process in both client and server bundles
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         fs: false,
//         path: false,
//         child_process: false,
//       };
//     }

//     // Add a rule for handling HTML files
//     config.module.rules.push({
//       test: /\.html$/,
//       use: 'raw-loader', // Use raw-loader to handle HTML files
//     });

//     return config;
//   },
// };
