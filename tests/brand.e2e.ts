import { expect } from 'e2e';
import { test } from '@e2e-dev/web';
import { blockAds } from './support/block-ads.ts';

test.describe('Brand Navigation', () => {
  test.beforeEach(async ({ browser }) => {
    await blockAds(browser);
  });

  test('should display brands on products page', async ({ app, screen }) => {
    await app.open('/products');
    await expect(screen.getByRole('heading', { name: /brands/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /polo/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /h&m/i })).toBeVisible();
  });

  test('should filter products by brand', async ({ app, screen }) => {
    await app.open('/products');
    await screen.getByRole('link', { name: /polo/i }).tap();

    await expect(screen.getByRole('heading', { name: /brand - polo products/i })).toBeVisible();
  });

  test('should navigate between different brands', async ({ app, screen }) => {
    await app.open('/products');

    await screen.getByRole('link', { name: /h&m/i }).tap();
    await expect(screen.getByRole('heading', { name: /brand - h&m products/i })).toBeVisible();

    await screen.getByRole('link', { name: /madame/i }).tap();
    await expect(screen.getByRole('heading', { name: /brand - madame products/i })).toBeVisible();
  });
});
