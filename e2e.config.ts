import { defineConfig } from 'e2e';
import { web } from '@e2e-dev/web';

export default defineConfig({
  tests: 'tests/**/*.e2e.ts',
  targets: [
    {
      name: 'web',
      engine: web(),
      app: {
        url: 'https://automationexercise.com',
      },
    },
  ],
});
