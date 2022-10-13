module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'indent': ["error", 2],
    'no-unused-vars': 0,
    'no-undef': 0,
    'vue/attribute-hyphenation': 0,
    'vue/max-attributes-per-line': 0,
    'vue/require-default-prop': 0,
    'vue/attributes-order': 0,
    'vue/name-property-casing': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/no-confusing-v-for-v-if': 0,
    'vue/no-v-html': 0
  }
}
