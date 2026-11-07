import { expect } from 'e2e';
import { test } from '@e2e-dev/web';
import { blockAds } from './support/block-ads.ts';

test.describe('Product Details', () => {
  test.beforeEach(async ({ browser }) => {
    await blockAds(browser);
  });

  test('should view product details', async ({ app, screen }) => {
    await app.open('/product_details/1');

    await expect(screen.getByRole('heading', 'Blue Top')).toBeVisible();
    await expect(screen.getByText(/rs\. 500/i)).toBeVisible();
    await expect(screen.getByText(/availability:/i)).toBeVisible();
    await expect(screen.getByText(/condition:/i)).toBeVisible();
    await expect(screen.getByText(/brand:/i)).toBeVisible();
  });

  test('should set quantity and add to cart from product detail page', async ({ app, screen }) => {
    await app.open('/product_details/1');

    const quantityInput = screen.getByRole('spinbutton');
    await quantityInput.fill('3');

    await screen.getByRole('button', 'Add to cart').tap();

    await expect(screen.getByRole('heading', { name: /added!/i })).toBeVisible();

    await screen.getByRole('link', { name: /view cart/i }).tap();
    await expect(screen.getByRole('table')).toBeVisible();
  });
});
