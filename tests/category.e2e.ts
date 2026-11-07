import { expect } from 'e2e';
import { test } from '@e2e-dev/web';
import { blockAds } from './support/block-ads.ts';

test.describe('Category Navigation', () => {
  test.beforeEach(async ({ browser }) => {
    await blockAds(browser);
  });

  test('should display categories sidebar', async ({ app, screen }) => {
    await app.open('/');
    await expect(screen.getByRole('heading', { name: /category/i })).toBeVisible();
    await expect(screen.getByRole('link', 'Women')).toBeVisible();
    await expect(screen.getByRole('link', 'Men')).toBeVisible();
    await expect(screen.getByRole('link', 'Kids')).toBeVisible();
  });

  test('should filter products by women category', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', 'Women').tap();
    await screen.getByRole('link', { name: /dress/i }).tap();

    await expect(screen.getByRole('heading', { name: /women - dress products/i })).toBeVisible();
  });

  test('should filter products by men category', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', 'Men').tap();
    await screen.getByRole('link', { name: /tshirts/i }).tap();

    await expect(screen.getByRole('heading', { name: /men - tshirts products/i })).toBeVisible();
  });

  test('should filter products by kids category', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', 'Kids').tap();
    await screen.getByRole('link', { name: /dress/i }).tap();

    await expect(screen.getByRole('heading', { name: /kids - dress products/i })).toBeVisible();
  });
});
