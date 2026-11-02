import { test, expect } from 'e2e';

test.describe('Shopping Cart', () => {
  test('should view cart page', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /cart/i }).tap();

    await expect(screen.getByRole('link', { name: /shopping cart/i })).toBeVisible();
    await expect(screen.getByText(/cart is empty/i)).toBeVisible();
  });

  test('should add product to cart', async ({ app, screen }) => {
    await app.open('/products');
    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();

    // Tap first add to cart button
    await screen.getByRole('link', { name: /add to cart/i }).tap();

    // Verify modal appeared
    await expect(screen.getByRole('heading', { name: /added!/i })).toBeVisible();

    // Continue shopping and navigate to cart
    await screen.getByRole('button', { name: /continue shopping/i }).tap();
    await screen.getByRole('link', { name: /cart/i }).tap();

    await expect(screen.getByRole('table')).toBeVisible();
  });
});
