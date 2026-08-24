const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        Promise: 'readonly',
        Math: 'readonly',
        Date: 'readonly',
        Error: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
