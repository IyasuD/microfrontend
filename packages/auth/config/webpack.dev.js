const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      //   shared:['react', 'react-dom']
      shared: packageJson.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
