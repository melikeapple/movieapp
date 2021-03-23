const { merge } = require("webpack-merge");

const common = require("./webpack.config.common");

const env = {
  development: "dev",
  production: "prod",
};

const envConfig = require(`./webpack.config.${env[process.env.NODE_ENV]}.js`);

module.exports = merge(common, envConfig);
