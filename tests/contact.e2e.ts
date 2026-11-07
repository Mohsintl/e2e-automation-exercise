import { expect } from 'e2e';
// The web engine's `test` adds the `browser` fixture, used here for the native dialog.
import { test } from '@e2e-dev/web';

test.describe('Contact Us Form', () => {
  test('should submit contact form successfully', async ({ app, screen, browser }) => {
    await app.open('/contact_us');
    await expect(screen.getByRole('heading', { name: /get in touch/i })).toBeVisible();

    await screen.getByRole('textbox', 'Name').fill('Test User');
    await screen.getByRole('textbox', 'Email').fill('test@test.com');
    await screen.getByRole('textbox', 'Subject').fill('Test Subject');
    await screen.getByRole('textbox', 'Your Message Here').fill('This is an e2e test message.');

    // Submitting opens a native confirm dialog.
    await browser.onDialog('accept');
    await screen.getByRole('button', 'Submit').tap();

    await expect(screen.getByText(/success! your details have been submitted successfully/i).first()).toBeVisible();
  });

  test('should navigate home from contact page', async ({ app, screen }) => {
    await app.open('/contact_us');
    await screen.getByRole('link', { name: /home/i }).tap();
    await expect(screen.getByRole('link', { name: /signup \/ login/i })).toBeVisible();
  });
});
