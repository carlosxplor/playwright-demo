import { test, expect } from './fixture';

test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.login();
    await page.goto('/transactions');
});

test('should display a table', async ({ page }) => {
    await expect(page.getByRole('table')).toBeVisible();
    expect(await page.locator('tbody tr').count()).toBeGreaterThan(0);
});
