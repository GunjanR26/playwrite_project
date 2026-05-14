import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { pagePLP } from './PageObjects.js/PagePLP';
import { ConsentPopup } from './Common/ConsentPopup';
import { pageCartPage } from './PageObjects.js/PageCartpage';
import { pageCheckoutPage } from './PageObjects.js/PageCheckoutPage';
import { testData } from './Common/TestData';



test('Purchase product using filter by color method', async ({ page }) => {
    test.setTimeout(50000);

    // Navigate to the website
    await page.goto(URLs.pageLinkCategoryAllProducts);

    //Consent popop
    //const consentPopupWindow = new ConsentPopup(page);
    //await consentPopupWindow.clickManageOptions();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const plpPage = new pagePLP(page);

    // Click on + icon of color
    const buttonColorPurchaseFilterbycolor = page.locator(plpPage.buttonColorPurchaseFilterbycolor);
    await buttonColorPurchaseFilterbycolor.click();

    // Click on Purple color
    const optionPurpleColorPurchaseFilterbycolor = page.locator(plpPage.optionPurpleColorPurchaseFilterbycolor);
    await optionPurpleColorPurchaseFilterbycolor.click();

    // Wait a bit after applying color filter (to allow products to appear)
    await page.waitForTimeout(1000);

    // Add Assertion - Filter by color should be displayed along with Clear All option 
    const buttonClearAllPurchaseFilterbycolor = page.locator(plpPage.buttonClearAllPurchaseFilterbycolor);
    await expect((buttonClearAllPurchaseFilterbycolor)).toBeVisible();

    // Click on Clear All option
    await buttonClearAllPurchaseFilterbycolor.click();

    // Add Assertion - Clear All option should not be displayed
    await expect((buttonClearAllPurchaseFilterbycolor)).not.toBeVisible();

    // Click on Black color
    const optionBlackColorPurchaseFilterbycolor = page.locator(plpPage.optionBlackColorPurchaseFilterbycolor);
    await optionBlackColorPurchaseFilterbycolor.click();

    // Wait a bit after applying color filter (to allow products to appear)
    await page.waitForTimeout(1000);

    // Add Assertion - Filter by color should be displayed along with Clear All option 
    await expect((buttonClearAllPurchaseFilterbycolor)).toBeVisible();

    // Click on Clear All option
    await buttonClearAllPurchaseFilterbycolor.click();

    // Add Assertion - Clear All option should not be displayed
    await expect((buttonClearAllPurchaseFilterbycolor)).not.toBeVisible();

    // Click on White color
    const optionWhiteColorPurchaseFilterbycolor = page.locator(plpPage.optionWhiteColorPurchaseFilterbycolor);
    await optionWhiteColorPurchaseFilterbycolor.click();

    // Wait a bit after applying color filter (to allow products to appear)
    await page.waitForTimeout(1000);

    // Add Assertion - Filter by color should be displayed along with Clear All option 
    await expect((buttonClearAllPurchaseFilterbycolor)).toBeVisible();

    // Click on - icon of Color Filter to make it Shrink
    await buttonColorPurchaseFilterbycolor.click();

    // Click on Add to cart button of ChatGPT2
    const buttonAddtocartChatGPT2PurchaseFilterbycolor = page.locator(plpPage.buttonAddtocartChatGPT2PurchaseFilterbycolor);
    await buttonAddtocartChatGPT2PurchaseFilterbycolor.click();

    // Wait a bit after page load (to allow products to appear)
    await page.waitForTimeout(1000);

    // Product detail popup select color
    const optionPurpleProductdetailpopupChatGPT2PurchaseFilterbycolor = page
        .frameLocator(plpPage.iframeProducedetailpopupChatGPT2PurchaseFilterbycolor)
        .locator(plpPage.optionPurpleProductdetailpopupChatGPT2PurchaseFilterbycolor);
    await optionPurpleProductdetailpopupChatGPT2PurchaseFilterbycolor.click();

    // Incrased quantity
    const buttonQuantityProductdetailpopupChatGPT2PurchaseFilterbycolor = page
        .frameLocator(plpPage.iframeProducedetailpopupChatGPT2PurchaseFilterbycolor)
        .locator(plpPage.buttonQuantityProductdetailpopupChatGPT2PurchaseFilterbycolor);
    await buttonQuantityProductdetailpopupChatGPT2PurchaseFilterbycolor.dblclick();

    // Click on Add To Cart button of Product Detail popup
    const buttonAddtocartProductdetailpopupChatGPT2PurchaseFilterbycolor = page
        .frameLocator(plpPage.iframeProducedetailpopupChatGPT2PurchaseFilterbycolor)
        .locator(plpPage.buttonAddtocartProductdetailpopupChatGPT2PurchaseFilterbycolor);
    await buttonAddtocartProductdetailpopupChatGPT2PurchaseFilterbycolor.click();

    // Wait until Cart page load
    await page.waitForTimeout(1000);

    // Click on View Cart button of Cart page
    const buttonViewcartPurchaseFilterbycolor = page.locator(plpPage.buttonViewcartPurchaseFilterbycolor);
    await buttonViewcartPurchaseFilterbycolor.click();

    //Click on Checkout button
    const buttonCheckoutPurchaseFilterbycolor = page.locator(plpPage.buttonCheckoutPurchaseFilterbycolor);
    await buttonCheckoutPurchaseFilterbycolor.click();

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



test('Purchase product using filter by color method - check validation', async ({ page }) => {
    test.setTimeout(50000);

    // Navigate to the website
    await page.goto(URLs.pageLinkCategoryAllProducts);

    //Consent popop
    //const consentPopupWindow = new ConsentPopup(page);
    //await consentPopupWindow.clickManageOptions();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const plpPage = new pagePLP(page);

    // Click on + icon of color
    const buttonColorPurchaseFilterbycolor = page.locator(plpPage.buttonColorPurchaseFilterbycolor);
    await buttonColorPurchaseFilterbycolor.click();

    // Click on White color
    const optionWhiteColorPurchaseFilterbycolor = page.locator(plpPage.optionWhiteColorPurchaseFilterbycolor);
    await optionWhiteColorPurchaseFilterbycolor.click();

    // Wait a bit after applying color filter (to allow products to appear)
    await page.waitForTimeout(1000);

    // Add Assertion - Filter by color should be displayed along with Clear All option 
    const buttonClearAllPurchaseFilterbycolor = page.locator(plpPage.buttonClearAllPurchaseFilterbycolor);
    await expect((buttonClearAllPurchaseFilterbycolor)).toBeVisible();

    // Click on - icon of Color Filter to make it Shrink
    await buttonColorPurchaseFilterbycolor.click();

    // Click on Add to cart button of ChatGPT2
    const buttonAddtocartChatGPT2PurchaseFilterbycolor = page.locator(plpPage.buttonAddtocartChatGPT2PurchaseFilterbycolor);
    await buttonAddtocartChatGPT2PurchaseFilterbycolor.click();

    // Wait a bit after page load (to allow products to appear)
    await page.waitForTimeout(1000);

    // Do not select color
    // Do not incresed quantity

    // Click on Add To Cart button of Product Detail popup
    const buttonAddtocartProductdetailpopupChatGPT2PurchaseFilterbycolor = page
        .frameLocator(plpPage.iframeProducedetailpopupChatGPT2PurchaseFilterbycolor)
        .locator(plpPage.buttonAddtocartProductdetailpopupChatGPT2PurchaseFilterbycolor);
    await buttonAddtocartProductdetailpopupChatGPT2PurchaseFilterbycolor.click();

    // Add Assertion
    const errorColorProductdetailpopup = page
        .frameLocator(plpPage.iframeProducedetailpopupChatGPT2PurchaseFilterbycolor)
        .locator(plpPage.errorColorProductdetailpopup);
    await expect((errorColorProductdetailpopup)).toBeVisible();


});