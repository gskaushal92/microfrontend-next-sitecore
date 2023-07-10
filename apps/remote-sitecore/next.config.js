const jssConfig = require('./src/temp/config');
const { getPublicUrl } = require('@sitecore-jss/sitecore-jss-nextjs');
const plugins = require('./src/temp/next-config-plugins') || {};
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { dependencies } = require('./package.json');

const publicUrl = getPublicUrl();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ['ui'],
  // Set assetPrefix to our public URL
  // crossOrigin: 'anonymous',

  images: {
    domains: ['sc103cm.dev.local/'],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  assetPrefix: publicUrl,

  // Allow specifying a distinct distDir when concurrently running app in a container
  distDir: process.env.NEXTJS_DIST_DIR || '.next',

  // Make the same PUBLIC_URL available as an environment variable on the client bundle
  env: {
    PUBLIC_URL: publicUrl,
  },

  i18n: {
    // These are all the locales you want to support in your application.
    // These should generally match (or at least be a subset of) those in Sitecore.
    locales: ['en'],
    // This is the locale that will be used when visiting a non-locale
    // prefixed path e.g. `/styleguide`.
    defaultLocale: jssConfig.defaultLanguage,
  },

  // Enable React Strict Mode
  reactStrictMode: true,

  async rewrites() {
    // When in connected mode we want to proxy Sitecore paths off to Sitecore
    return [
      // API endpoints
      {
        source: '/sitecore/api/:path*',
        destination: `${jssConfig.sitecoreApiHost}/sitecore/api/:path*`,
      },
      // media items
      {
        source: '/-/:path*',
        destination: `${jssConfig.sitecoreApiHost}/-/:path*`,
      },
      // visitor identification
      {
        source: '/layouts/system/:path*',
        destination: `${jssConfig.sitecoreApiHost}/layouts/system/:path*`,
      },
      // healthz check
      {
        source: '/healthz',
        destination: '/api/healthz',
      },
      // rewrite for Sitecore service pages
      {
        source: '/sitecore/service/:path*',
        destination: `${jssConfig.sitecoreApiHost}/sitecore/service/:path*`,
      },
    ];
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: '/brand',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },

  // webpack: (config, options) => {
  //   const { isServer } = options;
  //   config.plugins.push(
  //     new NextFederationPlugin({
  //       name: 'module1',
  //       filename: 'static/chunks/remoteEntry.js',
  //       exposes: {
  //         './PromotionalBanner': './src/components/PromotionalBanner',
  //         './CiplaLogo': './src/components/CiplaLogo/CiplaLogo',
  //         './Navigation': './src/components/Navigation/Navigation',
  //         './Featured': './src/components/Featured/Featured',
  //         './WelcomeCard': './src/components/WelcomeCard/WelcomeCard',
  //         './Blog': './src/components/Blog',
  //         './HeroCarousel': './src/components/HeroCarousel',
  //         './News': './src/components/News',
  //       },
  //       shared: {
  //         // whatever else
  //         // ...dependencies,
  //         // next: { singleton: true, eager: true, requiredVersion: dependencies.next },
  //         // react: { singleton: true, eager: true, requiredVersion: dependencies.react },
  //         // 'react-dom': {
  //         //   singleton: true,
  //         //   eager: true,
  //         //   requiredVersion: dependencies['react-dom'],
  //         // },
  //       },
  //     })
  //   );
  //   if (!isServer) {
  //     config.output.publicPath = 'http://localhost:3001/_next/';
  //   }

  //   return config;
  // },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = () => {
  // Run the base config through any configured plugins
  return Object.values(plugins).reduce((acc, plugin) => plugin(acc), nextConfig);
};
