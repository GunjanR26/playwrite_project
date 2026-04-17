const { test, expect } = require('@playwright/test');
import { URLs } from './Common/URLs';



test.only('Purchase scenario', async ({ page }) => {
  // Navigate to the website
  await page.goto(URLs.pageLinkHomePage);


  // Wait a bit after page load (to allow popup to appear)
  await page.waitForTimeout(5000);

  // Check and act. If consent popup is displayed click on Consent button else click on Login option of the home page
  if (await page.getByLabel('Consent', { exact: true }).isVisible())
    await page.getByLabel('Consent', { exact: true }).click();
  else
    await page.getByRole('link', { name: 'Automation', exact: true }).hover();

  // Click on Shop option from dropdown
  await page.getByRole('link', { name: 'Shop' }).click();

  // Click on Sorting option
  await page.getByRole('link', { name: 'Sorting' }).click();

  //Wait a bit after page load (to allow products to appear)
  await page.waitForTimeout(5000);

  // Click on Add To Cart button
  await page.getByRole('group', { name: 'Americano gallery' }).getByLabel('Add to Cart').click();

  //Add Assertion
  await expect(page.getByText('Your cart is empty.')).not.toBeVisible();

  // Click on View Cart button
  await page.getByRole('button', { name: 'View Cart' }).click();

  //Click on CheckOut button
  await page.getByRole('link', { name: 'Secure Checkout' }).click();

  //Add Assertion
  await expect(page.getByRole('heading', { name: 'Cart is empty' })).not.toBeVisible();

  // Enter Email 
  await page.getByRole('textbox', { name: 'Email' }).fill('test@example.com');

  // Enter First name
  await page.getByRole('textbox', { name: 'First name' }).fill('John');

  // Enter Last name
  await page.getByRole('textbox', { name: 'Last name' }).fill('Doe');

  // Enter Phone Number
  await page.getByRole('textbox', { name: 'Phone' }).fill('+1234567890');

  // Click on Country/Region Dropdown
  await page.getByRole('combobox', { name: 'Country/Region' }).click();


  // Wait for dropdown suggestion to appear

  // Select option from Region dropdown

  await page.getByText('United States', { exact: true }).click();

  //Enter Address
  // Step 1: Type partial address
  const address = page.locator('input[type="text"]').nth(3);
  await address.click();
  await address.fill('123 William');
  await address.press('ArrowDown');   // trigger dropdown


  // Step 2: Wait for dropdown suggestion to appear
  const option = page.getByText('William Street, New York, NY, USA');
  await option.waitFor({ state: 'visible' });

  // Wait a bit after dropdown is visible (to allow dropdown to appear)
  //await page.waitForTimeout(2000);

  // Step 3: Click the correct address from dropdown
  await option.click();

  // Based on selected address, city, Country, State and Zip code are auto populated 
  await page.waitForTimeout(2000);

  // Click on Continue button
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  //Wait for page load
  //await page.waitForTimeout(2000);

  // Click on Continue button of order summary
  await page.getByRole('button', { name: 'Continue', exact: true}).click();

  //Wait for page load
  ///await page.waitForTimeout(5000);

  // Click on Place Order & Pay button
  const btn = page.getByRole('button', { name: 'Place Order & Pay', exact: true });

if (await btn.isEnabled()) {
  await btn.click();
} else {
  console.log('Button is disabled - cannot place order');
}
  
// Add assertion



const successMsg = page.getByText("You\'ll receive a confirmation email soon.");

const errorMsg = page.getByText(/error|failed/i);

if (await successMsg.isVisible().catch(() => false)) {
  console.log('✅ Order success');
} else if (await errorMsg.isVisible().catch(() => false)) {
  console.log('❌ Order failed');
} else {
  console.log('⚠️ Unknown state');
}
 await page.pause();
  
});


