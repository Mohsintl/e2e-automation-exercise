import { test, expect } from 'e2e';

test.describe('Site Navigation', () => {
  test('should navigate to all main sections', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/');

    await screen.getByRole('link', { name: /products/i }).tap();
    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();

    await screen.getByRole('link', { name: /cart/i }).tap();
    await expect(screen.getByRole('link', { name: /shopping cart/i })).toBeVisible();

    await screen.getByRole('link', { name: /signup \/ login/i }).tap();
    await expect(screen.getByRole('heading', { name: /login to your account/i })).toBeVisible();

    await screen.getByRole('link', { name: /home/i }).tap();
    await expect(screen.getByRole('link', { name: /home/i })).toBeVisible();
  });

  test('should navigate to test cases page', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /test cases/i }).tap();

    await expect(screen.getByRole('heading', { name: /test cases/i })).toBeVisible();
  });

  test('should navigate to API testing page', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /api testing/i }).tap();

    await expect(screen.getByRole('heading', { name: /apis list for practice/i })).toBeVisible();
  });

  test('should verify subscription in footer', async ({ app, screen }) => {
    await app.open('/');
    await expect(screen.getByRole('heading', { name: /subscription/i })).toBeVisible();

    const emailBox = screen.getByRole('textbox', { name: /susbscribe_email|subscribe/i });
    await emailBox.fill('subscriber@example.com');

    await screen.getByRole('button', { name: /subscribe/i }).tap();
    await expect(screen.getByText(/you have been successfully subscribed/i)).toBeVisible();
  });
});
