const { test, expect } = require('@playwright/test');
const { execPath } = require('node:process');

import { URLs } from './Common/URLs';



test('Xpath Playwright Locators', async ({ page }) => {
  // Navigate to the website

  await page.goto(URLs.pageLinkPlaywrightLocators);


  // Wait a bit after page load (to allow popup to appear)
  await page.waitForTimeout(5000);

  // Check and act. If consent popup is displayed click on Consent button else click on Login option of the home page
  if (await page.getByLabel('Consent', { exact: true }).isVisible())
    await page.getByLabel('Consent', { exact: true }).click();


  //Xpath Locators
  await page.locator('xpath=//input[@name="first-name"]').fill('Gunjan');
  await page.locator('xpath=//input[@name="last-name"]').fill('Ranparia');
  await page.locator("xpath=//input[@name='email']").nth(0).fill('test@example.com');
  await page.locator("xpath=//input[@name='email']").nth(1).fill('test@example.com');

  await page.locator('xpath=//select').click();
  await page.locator("xpath=//div[@id='menuitem-1']").click();
  await page.locator("xpath=//input[@class='cCdhN7']").check();
  await page.locator("xpath=//span[text()='Submit']").click();
  //await page.pause()


  //Interaction with iFrame + add assertion

  await expect(page.locator("xpath=//h2[@data-testid='title' and text()='Verification']")).toBeVisible();
  await page.waitForTimeout(2000);
  //expect() is only for assertions (toBeVisible, toHaveText, etc.)
  //❌ You cannot use .click() , .tobechecked() on expect()
  await page.locator("xpath=//*[name()='svg']/*[name()='path' and @fill='#000']").click();


});

