import { test, expect } from 'e2e';

test.describe('Site Navigation', () => {
  test('should navigate to all main sections', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/');

    await screen.getByRole('link', 'Products').tap();
    await expect(screen.getByRole('heading', { name: /all products/i })).toBeVisible();

    await screen.getByRole('link', 'Cart').tap();
    await expect(screen.getByText('Shopping Cart')).toBeVisible();

    await screen.getByRole('link', 'Signup / Login').tap();
    await expect(screen.getByRole('heading', { name: /login to your account/i })).toBeVisible();

    await screen.getByRole('link', 'Home').tap();
    await expect(screen.getByRole('heading', 'Full-Fledged practice website for Automation Engineers')).toBeVisible();
  });

  test('should navigate to test cases page', async ({ app, screen }) => {
    await app.open('/');
    // The header link and the hero button both lead to Test Cases.
    await screen.getByRole('link', 'Test Cases').first().tap();

    await expect(screen.getByRole('heading', 'Test Cases')).toBeVisible();
  });

  test('should navigate to API testing page', async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /api testing/i }).tap();

    await expect(screen.getByRole('heading', { name: /apis list for practice/i })).toBeVisible();
  });

  test('should verify subscription in footer', async ({ app, screen }) => {
    await app.open('/');
    await expect(screen.getByRole('heading', { name: /subscription/i })).toBeVisible();

    const footer = screen.getByRole('contentinfo');
    await footer.getByRole('textbox', 'Your email address').fill('subscriber@example.com');

    // The subscribe button has no accessible name; it is the only button in the footer.
    await footer.getByRole('button').tap();
    await expect(screen.getByText(/you have been successfully subscribed/i)).toBeVisible();
  });
});
