import { expect } from 'e2e';
import { test } from '@e2e-dev/web';
import { blockAds } from './support/block-ads.ts';

test.describe('Home Page', () => {
  test.beforeEach(async ({ browser }) => {
    await blockAds(browser);
  });

  test('should load home page successfully', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/');
    await expect(screen.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /signup \/ login/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /products/i })).toBeVisible();
  });
});
