// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['lib/*', 'node_modules/*', 'jest.config.js']
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
);