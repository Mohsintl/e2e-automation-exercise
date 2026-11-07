import { expect } from 'e2e';
import { test } from '@e2e-dev/web';
import { blockAds } from './support/block-ads.ts';

test.describe('Shopping Cart', () => {
  test.beforeEach(async ({ browser }) => {
    await blockAds(browser);
  });

  test('should view cart page', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /cart/i }).tap();

    await expect(screen.getByText('Shopping Cart')).toBeVisible();
    await expect(screen.getByText(/cart is empty/i)).toBeVisible();
  });

  test('should add product to cart', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/products');
    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();

    // "Add to cart" is an anchor without href, so it is text, not a link; each card repeats it in its hover overlay.
    await screen.getByText('Add to cart').first().tap();

    // Verify modal appeared
    await expect(screen.getByRole('heading', { name: /added!/i })).toBeVisible();

    // Continue shopping and navigate to cart
    await screen.getByRole('button', { name: /continue shopping/i }).tap();
    await screen.getByRole('link', 'Cart').tap();

    await expect(screen.getByRole('table')).toBeVisible();
  });
});
