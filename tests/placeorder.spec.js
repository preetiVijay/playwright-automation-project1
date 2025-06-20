import { test, expect } from '@playwright/test';

test('Validate user should be successfully able to place the order', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('#login').click();
    await expect(page.locator('.card-body b').last()).toContainText('Fav Gucci');
    // const itemsList = await page.locator('.card-body b').allTextContents();
    // for(let i = 0; i < itemsList.length; i++){
    //     if(itemsList[i] == "IPHONE 13 PRO"){
    //         await page.locator("[class*='w-10']").nth(i).click();
    //         break;
    //     }
    // }

    // Alternative way of doing the above is below
    const products = page.locator(".card-body");
    const count = await products.count();
    for(let i = 0; i < count; i++){
        if(products.nth(i).locator('b').textContent() == "IPHONE 13 PRO"){
            await products.nth(i).locator("[class*='w-10']").click();
            break;
        }
    }
});