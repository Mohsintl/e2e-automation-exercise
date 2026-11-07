import type { Browser } from '@e2e-dev/web';

/**
 * Ad networks the site loads. Their ads inject links such as "Polo T-Shirts"
 * or "Dress" that collide with the site's own, and cover elements, so a run
 * that loads them is not deterministic.
 */
const AD_HOSTS = /googlesyndication|doubleclick|googleadservices|adservice\.google|googletagservices|adnxs|adsystem/;

/** Aborts every request to an ad network for the rest of the attempt. */
export async function blockAds(browser: Browser): Promise<void> {
  await browser.route(AD_HOSTS, (route) => route.abort());
}
