import { test, expect } from './fixture';

test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.login();
    await page.goto('/hello');
});

test('should display hello world', async ({ page }) => {
    await expect(page.getByText('Hello World!')).toBeVisible();
});

test('should display hello from Colombia', async ({ page }) => {
    await page.route('*/**/api/hello', async route => {
        await route.fulfill({ json: {message: 'Hello from Colombia'} });
    });

    await expect(page.getByText('Hello from Colombia')).toBeVisible();
});

test('should display error message', async ({ page }) => {
    await page.route('*/**/api/hello', async route => {
        await route.fulfill({ status: 500 });
    });

    await expect(page.getByText('Lo sentimos. Ha ocurrido un error')).toBeVisible();
});
