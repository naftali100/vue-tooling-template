/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:vuejs-accessibility/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  // plugins: ['vue', 'vuejs-accessibility', '@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'require-await': 'error',
    'no-shadow': 'error'
  }
}
