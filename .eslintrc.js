module.exports = {
  env: { es6: true },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"]
    }
  },
  plugins: ["unicorn"]
}