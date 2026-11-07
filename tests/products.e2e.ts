import { test, expect } from 'e2e';

test.describe('Products functionality', () => {
  test('should display all products', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', 'Products').tap();

    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();
    // Each card repeats the name in its hover overlay.
    await expect(screen.getByText('Blue Top').first()).toBeVisible();
  });

  test('should search for a product', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/products');
    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();

    const searchInput = screen.getByRole('textbox', 'Search Product');
    await searchInput.fill('dress');

    // The search button has no accessible name; it is the first button on the page.
    await screen.getByRole('button').first().tap();

    await expect(screen.getByRole('heading', { name: /searched products/i })).toBeVisible();
  });
});
