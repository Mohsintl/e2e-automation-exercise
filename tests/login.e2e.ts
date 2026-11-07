import { test, expect } from 'e2e';

test.describe('Login functionality', () => {
  test('should navigate to login page', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/');
    await screen.getByRole('link', { name: /signup \/ login/i }).tap();

    await expect(screen.getByRole('heading', { name: /login to your account/i })).toBeVisible();
    await expect(screen.getByRole('heading', { name: /new user signup!/i })).toBeVisible();
  });

  test('login with invalid credentials should show error', { tags: ['smoke'] }, async ({ app, screen }) => {
    await app.open('/login');

    const emailInput = screen.getByRole('textbox', { name: /email address/i });
    await emailInput.fill('invalid@test.com');

    // Fill password in login form
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    await passwordInput.fill('wrongpassword');

    await screen.getByRole('button', { name: /^login$/i }).tap();

    await expect(screen.getByText(/your email or password is incorrect/i)).toBeVisible();
  });
});
