import { test, expect } from 'e2e';

test.describe('Category Navigation', () => {
  test('should display categories sidebar', async ({ app, screen }) => {
    await app.open('/');
    await expect(screen.getByRole('heading', { name: /category/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /women/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /men/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /kids/i })).toBeVisible();
  });

  test('should filter products by women category', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /women/i }).tap();
    await screen.getByRole('link', { name: /dress/i }).tap();

    await expect(screen.getByRole('heading', { name: /women - dress products/i })).toBeVisible();
  });

  test('should filter products by men category', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /men/i }).tap();
    await screen.getByRole('link', { name: /tshirts/i }).tap();

    await expect(screen.getByRole('heading', { name: /men - tshirts products/i })).toBeVisible();
  });

  test('should filter products by kids category', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /kids/i }).tap();
    await screen.getByRole('link', { name: /dress/i }).tap();

    await expect(screen.getByRole('heading', { name: /kids - dress products/i })).toBeVisible();
  });
});
