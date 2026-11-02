import { test, expect } from 'e2e';

test.describe('Product Details', () => {
  test('should view product details', async ({ app, screen }) => {
    await app.open('/product_details/1');

    await expect(screen.getByRole('heading', { name: /blue top/i })).toBeVisible();
    await expect(screen.getByText(/rs\. 500/i)).toBeVisible();
    await expect(screen.getByText(/availability:/i)).toBeVisible();
    await expect(screen.getByText(/condition:/i)).toBeVisible();
    await expect(screen.getByText(/brand:/i)).toBeVisible();
  });

  test('should set quantity and add to cart from product detail page', async ({ app, screen }) => {
    await app.open('/product_details/1');

    const quantityInput = screen.getByRole('spinbutton', { name: /quantity/i });
    await quantityInput.fill('3');

    await screen.getByRole('button', { name: /add to cart/i }).tap();

    await expect(screen.getByRole('heading', { name: /added!/i })).toBeVisible();

    await screen.getByRole('link', { name: /view cart/i }).tap();
    await expect(screen.getByRole('table')).toBeVisible();
  });
});
