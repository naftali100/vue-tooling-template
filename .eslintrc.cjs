/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    // TODO: 'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vuejs-accessibility/recommended',
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
    'no-undef': 'off'
  }
}
