module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'react-refresh', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'off' }],
  },
};
