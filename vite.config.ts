import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['json', 'text'],
      exclude: ['test', 'examples', '.eslintrc.js', 'vite.config.ts'],
    },
  },
});
