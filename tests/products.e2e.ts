import { test, expect } from 'e2e';

test.describe('Automation Exercise - E-Commerce flows', () => {
  test('verify home page and navigate to products', async ({ app, screen }) => {
    await app.open('/');
    await expect(screen.getByRole('link', { name: /home/i })).toBeVisible();

    // Navigate to Products page
    await screen.getByRole('link', { name: /products/i }).tap();
    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();
  });

  test('search for a product and view results', async ({ app, screen }) => {
    await app.open('/products');
    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();

    // Fill in product search
    const searchInput = screen.getByRole('textbox', { name: /search/i });
    await searchInput.fill('Dress');

    const submitSearch = screen.getByRole('button', { name: /submit_search|search/i });
    await submitSearch.tap();

    await expect(screen.getByRole('heading', { name: /searched products/i })).toBeVisible();
  });

  test('view cart page when empty', async ({ app, screen }) => {
    await app.open('/view_cart');
    await expect(screen.getByRole('link', { name: /cart/i })).toBeVisible();
  });
});
