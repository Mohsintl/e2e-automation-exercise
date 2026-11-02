import { test, expect } from 'e2e';

test.describe('Contact Us Form', () => {
  test('should submit contact form successfully', async ({ app, screen }) => {
    await app.open('/contact_us');
    await expect(screen.getByRole('heading', { name: /get in touch/i })).toBeVisible();

    await screen.getByRole('textbox', { name: /name/i }).fill('Test User');
    await screen.getByRole('textbox', { name: /email/i }).fill('test@test.com');
    await screen.getByRole('textbox', { name: /subject/i }).fill('Test Subject');
    await screen.getByRole('textbox', { name: /message/i }).fill('This is an e2e test message.');

    await screen.getByRole('button', { name: /submit/i }).tap();

    await expect(screen.getByText(/success! your details have been submitted successfully/i)).toBeVisible();
  });

  test('should navigate home from contact page', async ({ app, screen }) => {
    await app.open('/contact_us');
    await screen.getByRole('link', { name: /home/i }).tap();
    await expect(screen.getByRole('link', { name: /signup \/ login/i })).toBeVisible();
  });
});
