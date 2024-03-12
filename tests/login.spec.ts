import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/login');
});

test('should display required credentials', async ({page}) => {    
    await page.getByRole('button', {name: /Log In/}).click();

    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
});

test('should log in successfuly', async ({page}) => {    
    await page.getByLabel('Email').fill('example@mail.com')
    await page.getByLabel('Password').fill('-Lorem345#-!')
    await page.getByRole('button', {name: /Log In/}).click();

    await expect(page.getByText('Dashboard')).toBeVisible();
    await expect(page.getByText('Transactions')).toBeVisible();
    await expect(page.getByText('Kiosks')).toBeVisible();
});
