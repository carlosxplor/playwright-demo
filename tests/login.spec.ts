import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/login');
});

test('should display required credentials', async ({page}) => {    
    await page.getByRole('button', {name: /Log In/i}).click();

    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
});

test('should log in successfuly', async ({page}) => {    
    await page.getByLabel('Email').fill('example@mail.com')
    await page.getByLabel('Password').fill('-Lorem345#-!')
    await page.getByRole('button', {name: /Log In/i}).click();

    await expect(page.getByText('Dashboard')).toBeVisible();
    await expect(page.getByText('Transactions')).toBeVisible();
    await expect(page.getByText('Kiosks')).toBeVisible();
});

test('should log out successfuly', async ({page}) => {    
    await page.getByLabel('Email').fill('example@mail.com')
    await page.getByLabel('Password').fill('-Lorem345#-!')
    await page.getByRole('button', {name: /Log In/i}).click();

    await page.getByRole('button', {name: /login-user-button/i}).click();
    await page.getByRole('menuitem', {name: /Sign out/i}).click();

    await expect(page.getByText('Xplor Demo App')).toBeVisible();
});
