import { test, expect } from 'e2e';

test.describe('User Registration', () => {
  test('should navigate to registration and submit signup details', async ({ app, screen }) => {
    await app.open('/login');

    const timestamp = Date.now();
    const name = 'Test User';
    const email = `testuser${timestamp}@test.com`;

    const nameInput = screen.getByRole('textbox', 'Name');
    await nameInput.fill(name);

    const emailInput = screen.getByRole('textbox', 'Email Address').last();
    await emailInput.fill(email);

    await screen.getByRole('button', 'Signup').tap();

    await expect(screen.getByRole('heading', { name: /enter account information/i })).toBeVisible();
  });
});
