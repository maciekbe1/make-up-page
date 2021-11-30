module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  reactStrictMode: false,
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
};
