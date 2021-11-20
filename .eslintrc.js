module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': ['error',{'endOfLine': 'auto',}],
    "prettier/prettier": [ "error", { "endOfLine":"auto", "printWidth": 80, "trailingComma": "es5", "semi": false, "doubleQuote":true, "jsxSingleQuote": true, "singleQuote": false, "useTabs": false, "tabWidth":4 } ]
  },
};
