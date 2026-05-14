import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { pagePLP } from './PageObjects.js/PagePLP';
import { ConsentPopup } from './Common/ConsentPopup';
import { pageCartPage } from './PageObjects.js/PageCartpage';
import { pageCheckoutPage } from './PageObjects.js/PageCheckoutPage';
import { testData } from './Common/TestData';



test('Purchase product using filter by price method - valid scenario', async ({ page }) => {
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
    const sliderPricePurchaseFlterbyPrice = page.locator(plpPage.sliderPricePurchaseFlterbyPrice);
    //// focus on slider
    await sliderPricePurchaseFlterbyPrice.focus();

    /*
========================================================
SLIDER AUTOMATION LOGIC
========================================================

If you want to set slider value 91 in UI, in below code set the amount 84 for example 91-7 = 84.
i.e. if you want to set slider value 98 in UI, then set the value 91 in following code because 98-7 = 91

========================================================
*/
    let currentValue = Number(
        await sliderPricePurchaseFlterbyPrice.getAttribute('aria-valuenow')
    );

    console.log("Initial Value:", currentValue);

    // reduce value until it becomes 91
    while (currentValue > 84) {

        await sliderPricePurchaseFlterbyPrice.press('ArrowLeft');

        currentValue = Number(
            await sliderPricePurchaseFlterbyPrice.getAttribute('aria-valuenow')
        );

    }

    // validation
    expect(currentValue).toBe(84);

    //Click on Add to cart button of Tea
    const buttonAddtocartTeaPurchaseFilterbyPrice = page.locator(plpPage.buttonAddtocartTeaPurchaseFilterbyPrice);
    await buttonAddtocartTeaPurchaseFilterbyPrice.click();

    // Wait a bit after page load (to allow products to appear)
    await page.waitForTimeout(1000);

    // Product detail popup click on Size dropdown
    const dropdownSizePurchaseFilterbyPrice = page
        .frameLocator(plpPage.iframeProductdetailpopupTeaPurchaseFilterbyPrice)
        .locator(plpPage.dropdownSizePurchaseFilterbyPrice);
    await dropdownSizePurchaseFilterbyPrice.click();
    await dropdownSizePurchaseFilterbyPrice.press('ArrowDown');   // trigger dropdown
    await page.waitForTimeout(2000);


    // Select option using value attribute
    await dropdownSizePurchaseFilterbyPrice.selectOption('8');

    //Wait until option is selected 
    await page.waitForTimeout(1000);

    // Click on Type Dropdown
    const dropdownTypePurchaseFilterbyPrice = page
        .frameLocator(plpPage.iframeProductdetailpopupTeaPurchaseFilterbyPrice)
        .locator(plpPage.dropdownTypePurchaseFilterbyPrice);
    await dropdownTypePurchaseFilterbyPrice.click();
    await dropdownTypePurchaseFilterbyPrice.press('ArrowDown') // trigger dropdown
    await page.waitForTimeout(2000);

    // Select option using value attribute
    await dropdownTypePurchaseFilterbyPrice.selectOption("Green");

    // Wait until option is selected 
    await page.waitForTimeout(1000);

    // Increse the quantity
    const buttonQuantityPurchaseFilterbyPrice = page
        .frameLocator(plpPage.iframeProductdetailpopupTeaPurchaseFilterbyPrice)
        .locator(plpPage.buttonQuantityPurchaseFilterbyPrice);
    await buttonQuantityPurchaseFilterbyPrice.dblclick();

    // Click on Add To cart button of product detail popup
    const buttonAddtocartProductdetailpopupTeaPurchaseFilterbyPrice = page
        .frameLocator(plpPage.iframeProductdetailpopupTeaPurchaseFilterbyPrice)
        .locator(plpPage.buttonAddtocartProductdetailpopupTeaPurchaseFilterbyPrice);
    await buttonAddtocartProductdetailpopupTeaPurchaseFilterbyPrice.click();

    // Wait until Cart page load
    await page.waitForTimeout(1000);

    // Click on View Cart button of Cart page
    const buttonViewcartPurchaseFilterbyPrice = page.locator(plpPage.buttonViewcartPurchaseFilterbyPrice);
    await buttonViewcartPurchaseFilterbyPrice.click();

    //Click on Checkout button
    const buttonCheckoutPurchaseFilterbyPrice = page.locator(plpPage.buttonCheckoutPurchaseFilterbyPrice);
    await buttonCheckoutPurchaseFilterbyPrice.click();

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


test('Purchase product using filter by price method - Check validation', async ({ page }) => {
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
    const sliderPricePurchaseFlterbyPrice = page.locator(plpPage.sliderPricePurchaseFlterbyPrice);
    //// focus on slider
    await sliderPricePurchaseFlterbyPrice.focus();

    /*
========================================================
SLIDER AUTOMATION LOGIC
========================================================

If you want to set slider value 91 in UI, in below code set the amount 84 for example 91-7 = 84.
i.e. if you want to set slider value 98 in UI, then set the value 91 in following code because 98-7 = 91

========================================================
*/
    let currentValue = Number(
        await sliderPricePurchaseFlterbyPrice.getAttribute('aria-valuenow')
    );

    console.log("Initial Value:", currentValue);

    // reduce value until it becomes 91
    while (currentValue > 84) {

        await sliderPricePurchaseFlterbyPrice.press('ArrowLeft');

        currentValue = Number(
            await sliderPricePurchaseFlterbyPrice.getAttribute('aria-valuenow')
        );

    }

    // validation
    expect(currentValue).toBe(84);

    //Click on Add to cart button of Tea
    const buttonAddtocartTeaPurchaseFilterbyPrice = page.locator(plpPage.buttonAddtocartTeaPurchaseFilterbyPrice);
    await buttonAddtocartTeaPurchaseFilterbyPrice.click();

    // Wait a bit after page load (to allow products to appear)
    await page.waitForTimeout(1000);

    // Do not click on Product detail popup 

    // Wait until option is selected 
    await page.waitForTimeout(1000);

    // Do not Click on Type Dropdown
    // Do not Increse the quantity

    // Click on Add To cart button of product detail popup
    const buttonAddtocartProductdetailpopupTeaPurchaseFilterbyPrice = page
        .frameLocator(plpPage.iframeProductdetailpopupTeaPurchaseFilterbyPrice)
        .locator(plpPage.buttonAddtocartProductdetailpopupTeaPurchaseFilterbyPrice);
    await buttonAddtocartProductdetailpopupTeaPurchaseFilterbyPrice.click();

    // Add Assertion - Error message of Type and Size
    const errorSizeProductdetailpopup = page
        .frameLocator(plpPage.iframeProductdetailpopupTeaPurchaseFilterbyPrice)
        .locator(plpPage.errorSizeProductdetailpopup);
    await expect((errorSizeProductdetailpopup)).toBeVisible();

    const errorTypeProducedetailpopup = page
        .frameLocator(plpPage.iframeProductdetailpopupTeaPurchaseFilterbyPrice)
        .locator(plpPage.errorTypeProducedetailpopup);
    await expect((errorTypeProducedetailpopup)).toBeVisible();



    await page.pause();

});






















