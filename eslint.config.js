import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules']
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      'no-console': 'warn'
    }
  }
);
