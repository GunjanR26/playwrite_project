
import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { pagePLP } from './PageObjects.js/PagePLP';
import { ConsentPopup } from './Common/ConsentPopup';
import { pageCartPage } from './PageObjects.js/PageCartpage';
import { pageCheckoutPage } from './PageObjects.js/PageCheckoutPage';
import { testData } from './Common/TestData';


test('End to end purchase flow with xpath locators', async ({ page }) => {
  test.setTimeout(50000);

  // Navigate to the website
  await page.goto(URLs.pageLinkCategoryAllProducts);

  //Consent popop
  //const consentPopupWindow = new ConsentPopup(page);
  //await consentPopupWindow.clickManageOptions();

  // Wait a bit after page load (to allow popup to appear)
  await page.waitForTimeout(5000);

  // Check and act. If consent popup is displayed click on Consent button else click on Login option of the home page
  if (await page.getByLabel('Consent', { exact: true }).isVisible())
    await page.getByLabel('Consent', { exact: true }).click();

  const plpPage = new pagePLP(page);

  // Click on Shop option from dropdown
  const buttonSorting = page.locator(plpPage.buttonSorting);
  await buttonSorting.click();

  //Wait a bit after page load (to allow products to appear)
  await page.waitForTimeout(5000);

  // Click on Add To Cart button
  const buttonAddtocart = page.locator(plpPage.buttonAddtocart);
  await buttonAddtocart.waitFor();
  await buttonAddtocart.click();

  //Add Assertion
  const confirmationmessage = page.locator(plpPage.confirmationmessage);
  await expect(confirmationmessage).not.toBeVisible();

  const cartPage = new pageCartPage(page);
  
  // Click on View Cart button
  const buttonViewcart = page.locator(cartPage.buttonViewcart);
  //await buttonViewcart.waitFor();
  await buttonViewcart.click();

  //Click on CheckOut button
  const buttonCheckout = page.locator(cartPage.buttonCheckout);
  await buttonCheckout.click();

  //Add Assertion
  const checkoutconfirmation = page.locator(cartPage.checkoutconfirmation);
  await expect(checkoutconfirmation).not.toBeVisible();

  const checkoutPage = new pageCheckoutPage(page);

  // Enter Email
  const textboxEmail = page.locator(checkoutPage.textboxEmail);
  await textboxEmail.fill(testData.checkoutCustomerDetils.Email);

  // Enter Firstname
  const textboxFirstName = page.locator(checkoutPage.textboxFirstName);
  await textboxFirstName.fill(testData.checkoutCustomerDetils.FirstName);

  // Enter Lastname
  const textboxLastName = page.locator(checkoutPage.textboxLastName);
  await textboxLastName.fill(testData.checkoutCustomerDetils.LastName);

  // Enter PhoneNumber
  const textboxPhoneNumber = page.locator(checkoutPage.textboxPhoneNumber);
  await textboxPhoneNumber.fill(testData.checkoutCustomerDetils.PhoneNumber);

  // Click on Region Dropdown
  const dropdownRegion = page.locator(checkoutPage.dropdownRegion);
  await dropdownRegion.click();

  // Select option from Region dropdown
  const selectRegion = page.locator(checkoutPage.selectRegion);
  await selectRegion.click();

  // Enter Address
  // Step 1: Type partial address
  const address = checkoutPage.address;
  await address.click();
  await address.fill(testData.checkoutDeliveryDetails.Address);
  await address.press('ArrowDown');   // trigger dropdown

  // Step 2: Wait for dropdown suggestion to appear
  const option = page.getByText(testData.checkoutDeliveryDetails.AddressOption);
  await option.waitFor({ state: 'visible' });

  // Step 3: Click the correct address from dropdown
  await option.click();

  // Based on selected address, city, Country, State and Zip code are auto populated 
  await page.waitForTimeout(2000);

  // Click on Continue button
  const buttonContinue = page.locator(checkoutPage.buttonContinue);
  await buttonContinue.click();

  // Click on Continue button of order summary
  const buttonOrdersummaryContinue = page.locator(checkoutPage.buttonOrdersummaryContinue);
  await buttonOrdersummaryContinue.click();

  // Click on Place Order & Pay button
  const buttonplaceorderandpay = page.locator(checkoutPage.buttonplaceorderandpay);
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
