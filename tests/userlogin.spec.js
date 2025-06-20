import { test, expect } from '@playwright/test';

test('User successfully login', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('#login').click();
    await expect(page).toHaveTitle("Let's Shop");
});