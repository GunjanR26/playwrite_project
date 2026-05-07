import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { testData } from './Common/TestData';
import { PageContactUs } from './PageObjects.js/PageContactUs';

test.only('Contact Us - Valid scenario', async ({ page }) => {
    test.setTimeout(50000);

    // Navigate to the website
    await page.goto(URLs.pageLinkHomePage);
    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Check and act. If consent popup is displayed click on Consent button else click on Login option of the home page
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();
    else
        await page.getByTestId('handle-button').click();

    const ContactUspage = new PageContactUs(page);
    const optionContactUs = page.locator(ContactUspage.optionContactUs);
    await optionContactUs.click();

    // Wait a bit after page load 
    await page.waitForTimeout(5000);

    //Enter First Name
    const fieldFirstNameContactUs = page.locator(ContactUspage.fieldFirstNameContactUs);
    await fieldFirstNameContactUs.fill(testData.ContactUsdetails.FirstNameConatctUs);

    //Enter Last Name
    const fieldLastNameContactUs = page.locator(ContactUspage.fieldLastNameContactUs);
    await fieldLastNameContactUs.fill(testData.ContactUsdetails.LastNameContactUs);

    //Enter Email
    const fieldEmailContactUs = page.locator(ContactUspage.fieldEmailContactUs);
    await fieldEmailContactUs.fill(testData.ContactUsdetails.EmailContactUs);

    //Click on Country dropdown
    const dropdownCountryContactUs = page.locator(ContactUspage.dropdownCountryContactUs);
    await dropdownCountryContactUs.click();

    //Select country option from dropdown
    const dropdownoptionCountryContactUs = page.locator(ContactUspage.dropdownoptionCountryContactUs);
    await dropdownoptionCountryContactUs.click();

    //Click on certification dropdown
    const dropdownCertificationContactUs = page.locator(ContactUspage.dropdownCertificationContactUs);
    await dropdownCertificationContactUs.click();

    //Select certification option from dropdown
    const dropdownoptionCertificationContactUs = page.locator(ContactUspage.dropdownoptionCertificationContactUs);
    await dropdownoptionCertificationContactUs.click();

    //Enter Message
    const textareaMessageContactUs = page.locator(ContactUspage.textareaMessageContactUs);
    await textareaMessageContactUs.fill(testData.ContactUsdetails.MessageContactUs);

    //Click on Submit button
    const buttonSubmitContactUs = page.locator(ContactUspage.buttonSubmitContactUs);
    await buttonSubmitContactUs.click();

    //Add Assertion
    const popupVerificationContactUs = page.locator(ContactUspage.popupVerificationContactUs);
    await expect((popupVerificationContactUs)).toBeVisible();

});



