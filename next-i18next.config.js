// next-i18next.config.js

module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["en", "ro"],
    defaultLocale: "en",
  },
};
