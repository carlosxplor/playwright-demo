/**
 * Para mas información: https://playwright.dev/docs/test-fixtures
 */

import type { Page } from '@playwright/test';
import { test as base, expect } from '@playwright/test';

//  Page

class LoginPage {
    constructor(private readonly page: Page) {}

    async login() {
        await this.page.goto('/login');
        // La API MOCK espera que el correo sea: pregister@getxplor.com
        await this.page.getByLabel('Email').fill('pregister@getxplor.com')
        await this.page.getByLabel('Password').fill('-Lorem345#-!')
        await this.page.getByRole('button', {name: /Log In/i}).click();

        await expect(this.page.getByText('Dashboard')).toBeVisible();
    }
}

//  Fixture

const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        //await loginPage.login();
        /*
        Se puede invocar el login desde aquí o desde el test. Pero si se hace desde ambos entonces habra repetición
        https://playwright.dev/docs/test-fixtures#using-a-fixture
        */
        await use(loginPage);
    },
});

export { test, expect };
