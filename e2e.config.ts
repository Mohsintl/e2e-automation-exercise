import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';

export default {
  tests: 'tests/**/*.e2e.ts',
  // One worker everywhere: the target is a public demo site with load limits.
  workers: 1,
  targets: [
    {
      name: 'web',
      engine: web({ browser: 'chromium' }),
      app: { url: 'https://automationexercise.com' },
    },
  ],
} satisfies E2EConfig;
