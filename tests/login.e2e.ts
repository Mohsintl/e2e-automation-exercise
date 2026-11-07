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

    const emailInput = screen.getByRole('textbox', 'Email Address').first();
    await emailInput.fill('invalid@test.com');

    // Fill password in login form
    const passwordInput = screen.getByRole('textbox', 'Password');
    await passwordInput.fill('wrongpassword');

    await screen.getByRole('button', 'Login').tap();

    await expect(screen.getByText(/your email or password is incorrect/i)).toBeVisible();
  });
});
