import { test, expect } from 'e2e';

test.describe('Home Page', () => {
  test('should load home page successfully', async ({ app, screen }) => {
    await app.open('/');
    await expect(screen.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /signup \/ login/i })).toBeVisible();
    await expect(screen.getByRole('link', { name: /products/i })).toBeVisible();
  });
});
