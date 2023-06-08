module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    '@typescript-eslint/no-unused-vars': 'error',
  },
}
