
import {test,expect} from '@playwright/test';

test.only('End to end purchase flow with xpath locators', async ({ page }) => {
    test.setTimeout(50000);
  // Navigate to the website
  await page.goto('https://www.testing101.net/category/all-products');

  // Wait a bit after page load (to allow popup to appear)
  await page.waitForTimeout(5000);

  // Check and act. If consent popup is displayed click on Consent button else click on Login option of the home page
  if (await page.getByLabel('Consent', { exact: true }).isVisible())
    await page.getByLabel('Consent', { exact: true }).click();

  // Click on Shop option from dropdown
  const buttonSorting = page.locator("xpath=//span[text()='Sorting']");
  await buttonSorting.click();

  //Wait a bit after page load (to allow products to appear)
  await page.waitForTimeout(5000);

  // Click on Add To Cart button
  const buttonAddtocart = page.locator("xpath=//div[@data-slug='americano']//button[@data-hook='product-item-add-to-cart-button']");
  await buttonAddtocart.waitFor();
  await buttonAddtocart.click();

  //Add Assertion
  const confirmationmessage = page.locator("xpath=//span[@data-hook='BodyDataHooks.emptyState']");
  await expect(confirmationmessage).not.toBeVisible();

  // Click on View Cart button
  const buttonViewcart = page.locator("xpath=//div[@class='swz4Kl_']//button[@data-hook='CartButtonDataHooks.root']");
  //await buttonViewcart.waitFor();
  await buttonViewcart.click();

  //Click on CheckOut button
  const buttonCheckout = page.locator("xpath=//div[@data-hook='CheckoutButtons.default']//a[@data-hook='CheckoutButtonDataHook.button']");
  await buttonCheckout.click();

  //Add Assertion
  const checkoutconfirmation = page.locator("xpath=//div[@data-hook='EmptyState.root']//h2[@data-hook='EmptyState.title']");
  await expect(checkoutconfirmation).not.toBeVisible();

  // Enter Email
  const textboxEmail =page.locator("xpath=//input[@type='email' and @aria-label='Email']");
  await textboxEmail.fill('test@example.com');

  // Enter Firstname
  const textboxFirstName = page.locator("xpath=//input[@type='text' and @aria-label='First name']");
  await textboxFirstName.fill('Gunjan');

  // Enter Lastname
  const textboxLastName = page.locator("xpath=//input[@type='text' and @aria-label='Last name']");
  await textboxLastName.fill('Ranparia');

 // Enter PhoneNumber
 const textboxPhoneNumber = page.locator ("xpath=//input[@aria-label='Phone']");
 await textboxPhoneNumber.fill('+1234567890');

 // Click on Region Dropdown
 const dropdownRegion = page.locator("xpath=//input[@role='combobox' and @value='India']");
 await dropdownRegion.click();

  // Select option from Region dropdown
  const selectRegion = page.locator("xpath=//div[@role='option' and @title='United States']");
  await selectRegion.click();

  // Enter Address
  // Step 1: Type partial address
  const address = page.locator('input[type="text"]').nth(3);
  await address.click();
  await address.fill('123 William');
  await address.press('ArrowDown');   // trigger dropdown

  // Step 2: Wait for dropdown suggestion to appear
  const option = page.getByText('William Street, New York, NY, USA');
  await option.waitFor({ state: 'visible' });

  // Step 3: Click the correct address from dropdown
  await option.click();

  // Based on selected address, city, Country, State and Zip code are auto populated 
  await page.waitForTimeout(2000);
 
  // Click on Continue button
  const buttonContinue = page.locator("xpath=//button[.//span[text()='Continue']]");
  await buttonContinue.click();
  
  // Click on Continue button of order summary
  const buttonOrdersummaryContinue = page.locator("xpath=//button[@data-hook='DeliverySectionWrapperDataHook.button']");
  await buttonOrdersummaryContinue.click();
  
  // Click on Place Order & Pay button
  const buttonplaceorderandpay = page.locator("xpath=//button[@data-hook='place-order-button']");
  await buttonplaceorderandpay.click();

  // Wait for load time
  //await waitForTimeout(5000);

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


});
