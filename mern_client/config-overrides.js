/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react-hooks/rules-of-hooks */
const { alias, configPaths } = require("react-app-rewire-alias");
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  useBabelRc(),
  alias(configPaths("./tsconfig.paths.json"))
);
