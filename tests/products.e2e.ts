import { test, expect } from 'e2e';

test.describe('Products functionality', () => {
  test('should display all products', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /products/i }).tap();

    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();
    await expect(screen.getByText(/blue top/i)).toBeVisible();
  });

  test('should search for a product', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/products');
    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();

    const searchInput = screen.getByRole('textbox', { name: /search/i });
    await searchInput.fill('dress');

    const submitBtn = screen.getByRole('button', { name: /submit_search|search/i });
    await submitBtn.tap();

    await expect(screen.getByRole('heading', { name: /searched products/i })).toBeVisible();
  });
});
