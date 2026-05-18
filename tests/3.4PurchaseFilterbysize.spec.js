import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { pagePLP } from './PageObjects.js/PagePLP';
import { ConsentPopup } from './Common/ConsentPopup';
import { pageCartPage } from './PageObjects.js/PageCartpage';
import { pageCheckoutPage } from './PageObjects.js/PageCheckoutPage';
import { testData } from './Common/TestData';



test('Purchase product using filter by size method', async ({ page }) => {
    test.setTimeout(50000);

    // Navigate to the website
    await page.goto(URLs.pageLinkCategoryAllProducts);

    //Consent popup
    //const consentPopupWindow = new ConsentPopup(page);
    //await consentPopupWindow.clickManageOptions();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    // Create a new object of class pagePLP and pass Playwright’s page into it
    const plpPage = new pagePLP(page);

    // Click on + icon of the size
    const buttonSizePurchaseFilterbysize = page.locator(plpPage.buttonSizePurchaseFilterbysize);
    await expect(buttonSizePurchaseFilterbysize).toBeVisible();
    await buttonSizePurchaseFilterbysize.click();

    // select checkbox of  80ml 
    const option80mlSizePurchaseFilterbysize = page.locator(plpPage.option80mlSizePurchaseFilterbysize);
    await expect(option80mlSizePurchaseFilterbysize).toBeVisible();
    await option80mlSizePurchaseFilterbysize.click();

    // Wait a bit after applying size filter (to allow products to appear)
    await page.waitForTimeout(1000);

    // Add Assertion - Filter by size should be displayed along with Clear All option
    const buttonClearAll = page.locator(plpPage.buttonClearAll);
    await expect((buttonClearAll)).toBeVisible();

    // Click on Add to cart button of Cappuccino
    const buttonAddtocartCappuccinoPurchaseFilterbysize = page.locator(plpPage.buttonAddtocartCappuccinoPurchaseFilterbysize);
    await buttonAddtocartCappuccinoPurchaseFilterbysize.click();

    // Wait a bit after page load (to allow products to appear)
    await page.waitForTimeout(1000);

    // Product detail popup of Cappuccino - select size
    const dropdownSizeProductdetailpopupCappuccinoPurchaseFilterbysize = page
        .frameLocator(plpPage.iframeProductdetailpopupCappuccinoPurchaseFilterbysize)
        .locator(plpPage.dropdownSizeProductdetailpopupCappuccinoPurchaseFilterbysize);
    await dropdownSizeProductdetailpopupCappuccinoPurchaseFilterbysize.click();
    await dropdownSizeProductdetailpopupCappuccinoPurchaseFilterbysize.press('ArrowDown'); //Trigger Dropdown
    //await page.waitForTimeout(2000);

    // Select option using value attribute
    await dropdownSizeProductdetailpopupCappuccinoPurchaseFilterbysize.selectOption('3');

    // Wait until option is selected 
    await page.waitForTimeout(1000);

    // Increse the quantity
    const buttonQuantityProductdetailpopupCappuccinoPurchaseFilterbysize = page
        .frameLocator(plpPage.iframeProductdetailpopupCappuccinoPurchaseFilterbysize)
        .locator(plpPage.buttonQuantityProductdetailpopupCappuccinoPurchaseFilterbysize);
    await buttonQuantityProductdetailpopupCappuccinoPurchaseFilterbysize.dblclick();

    // Click on Add To cart button of product detail popup
    const buttonAddtocartProductdetailpopupCappuccinoPurchaseFilterbysize = page
        .frameLocator(plpPage.iframeProductdetailpopupCappuccinoPurchaseFilterbysize)
        .locator(plpPage.buttonAddtocartProductdetailpopupCappuccinoPurchaseFilterbysize);
    await buttonAddtocartProductdetailpopupCappuccinoPurchaseFilterbysize.click();

    // Click on View Cart button of Cart page
    const buttonViewcart = page.locator(plpPage.buttonViewcart);
    await buttonViewcart.click();

    //Click on Checkout button
    const buttonCheckout = page.locator(plpPage.buttonCheckout);
    await buttonCheckout.click();

    //Add Assertion
    const cartPage = new pageCartPage(page);
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

    // Wait until enabled
    await expect((buttonplaceorderandpay)).toBeEnabled();

    // Click on button
    await buttonplaceorderandpay.click();

    // Wait for load time
    //await waitForTimeout(5000);

    // Add assertion wait for success message
    const successMsg = page.locator(checkoutPage.successMessage);
    await expect((successMsg)).toBeVisible({ timeout: 15000 });

    const errorMsg = page.getByText(/error|failed/i);

    if (await successMsg.isVisible().catch(() => false)) {
        console.log('✅ Order success');
    } else if (await errorMsg.isVisible().catch(() => false)) {
        console.log('❌ Order failed');
    } else {
        console.log('⚠️ Unknown state');

    }

});


test('Purchase product using filter by size method - check validation', async ({ page }) => {
    test.setTimeout(50000);

    // Navigate to the website
    await page.goto(URLs.pageLinkCategoryAllProducts);

    //Consent popup
    //const consentPopupWindow = new ConsentPopup(page);
    //await consentPopupWindow.clickManageOptions();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    // Create a new object of class pagePLP and pass Playwright’s page into it
    const plpPage = new pagePLP(page);

    // Click on + icon of the size
    const buttonSizePurchaseFilterbysize = page.locator(plpPage.buttonSizePurchaseFilterbysize);
    await expect(buttonSizePurchaseFilterbysize).toBeVisible();
    await buttonSizePurchaseFilterbysize.click();

    // select checkbox of  80ml 
    const option80mlSizePurchaseFilterbysize = page.locator(plpPage.option80mlSizePurchaseFilterbysize);
    await expect(option80mlSizePurchaseFilterbysize).toBeVisible();
    await option80mlSizePurchaseFilterbysize.click();

    // Wait a bit after applying size filter (to allow products to appear)
    await page.waitForTimeout(1000);

    // Add Assertion - Filter by size should be displayed along with Clear All option
    const buttonClearAll = page.locator(plpPage.buttonClearAll);
    await expect((buttonClearAll)).toBeVisible();

    // Click on Add to cart button of Cappuccino
    const buttonAddtocartCappuccinoPurchaseFilterbysize = page.locator(plpPage.buttonAddtocartCappuccinoPurchaseFilterbysize);
    await buttonAddtocartCappuccinoPurchaseFilterbysize.click();

    // Wait a bit after page load (to allow products to appear)
    await page.waitForTimeout(1000);

    // Product detail popup of Cappuccino - Do not selct size

    // Click on Add To cart button of product detail popup
    const buttonAddtocartProductdetailpopupCappuccinoPurchaseFilterbysize = page
        .frameLocator(plpPage.iframeProductdetailpopupCappuccinoPurchaseFilterbysize)
        .locator(plpPage.buttonAddtocartProductdetailpopupCappuccinoPurchaseFilterbysize);
    await buttonAddtocartProductdetailpopupCappuccinoPurchaseFilterbysize.click();

    // Add Assertion - Error message
    const errorSizeProductdetailpopupCappuccino = page
        .frameLocator(plpPage.iframeProductdetailpopupCappuccinoPurchaseFilterbysize)
        .locator(plpPage.errorSizeProductdetailpopupCappuccino);
    await expect((errorSizeProductdetailpopupCappuccino)).toBeVisible();

    await page.pause();
});







