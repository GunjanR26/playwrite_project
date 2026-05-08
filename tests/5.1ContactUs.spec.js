import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { testData } from './Common/TestData';
import { PageContactUs } from './PageObjects.js/PageContactUs';

test('Contact Us - Valid scenario', async ({ page }) => {
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


test('Contact Us - Directly click on Submit button', async ({ page }) => {
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
    await fieldFirstNameContactUs.fill('');

    //Enter Last Name
    const fieldLastNameContactUs = page.locator(ContactUspage.fieldLastNameContactUs);
    await fieldLastNameContactUs.fill('');

    //Enter Email
    const fieldEmailContactUs = page.locator(ContactUspage.fieldEmailContactUs);
    await fieldEmailContactUs.fill('');

    //Click on Country dropdown
    // const dropdownCountryContactUs = page.locator(ContactUspage.dropdownCountryContactUs);
    //await dropdownCountryContactUs.click();

    //Select country option from dropdown
    //const dropdownoptionCountryContactUs = page.locator(ContactUspage.dropdownoptionCountryContactUs);
    //await dropdownoptionCountryContactUs.click();

    //Click on certification dropdown
    //const dropdownCertificationContactUs = page.locator(ContactUspage.dropdownCertificationContactUs);
    // await dropdownCertificationContactUs.click();

    //Select certification option from dropdown
    //const dropdownoptionCertificationContactUs = page.locator(ContactUspage.dropdownoptionCertificationContactUs);
    // await dropdownoptionCertificationContactUs.click();

    //Enter Message
    //const textareaMessageContactUs = page.locator(ContactUspage.textareaMessageContactUs);
    //await textareaMessageContactUs.fill(testData.ContactUsdetails.MessageContactUs);

    //Click on Submit button
    const buttonSubmitContactUs = page.locator(ContactUspage.buttonSubmitContactUs);
    await buttonSubmitContactUs.click();

    // Wait a bit after cliking on submit button
    await page.waitForTimeout(5000);

    //Add Assertion of  Email
    const mandatoryvalidationEmailContactUs = page.locator(ContactUspage.mandatoryvalidationEmailContactUs);
    await expect((mandatoryvalidationEmailContactUs)).toHaveAttribute('aria-invalid', 'true');
    await expect((mandatoryvalidationEmailContactUs)).toHaveAttribute('required', '');

    //Add Assertion of  Country
    const mandatoryvalidationCountryContactUs = page.locator(ContactUspage.mandatoryvalidationCountryContactUs);
    await expect((mandatoryvalidationCountryContactUs)).toHaveAttribute('aria-required', 'true');
    await expect((mandatoryvalidationCountryContactUs)).toHaveAttribute('required', '');

});

test('Contact Us - Submit the form with mandatory details', async ({ page }) => {
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
    await fieldFirstNameContactUs.fill('');

    //Enter Last Name
    const fieldLastNameContactUs = page.locator(ContactUspage.fieldLastNameContactUs);
    await fieldLastNameContactUs.fill('');

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

test('Contact Us - Invalid Email Format', async ({ page }) => {
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
    await fieldEmailContactUs.fill(testData.invalidformat.invaidEmailformat);

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
    const invalidEmailFormatContactUs = page.locator(ContactUspage.invalidEmailFormatContactUs);
    await expect((invalidEmailFormatContactUs)).toHaveClass('KvoMHf has-custom-focus wixui-text-input__input');
    await expect((invalidEmailFormatContactUs)).toHaveAttribute ('pattern','^.+@.+\\.[a-zA-Z]{2,63}$');
   
});


test('Contact Us - Max character validation', async ({ page }) => {
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
    await fieldEmailContactUs.fill(testData.maxcharacterEmail.EmailwithMaxcharacterlimit);

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
    const invalidEmailFormatContactUs = page.locator(ContactUspage.invalidEmailFormatContactUs);
    await expect((invalidEmailFormatContactUs)).toHaveClass('KvoMHf has-custom-focus wixui-text-input__input');
    await expect((invalidEmailFormatContactUs)).toHaveAttribute ('maxlength','250');
});

test('Contact Us - Inbetween space in email', async ({ page }) => {
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
    await fieldEmailContactUs.fill(testData.middleSpace.middleSpaceEmail);

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
    const invalidEmailFormatContactUs = page.locator(ContactUspage.invalidEmailFormatContactUs);
    await expect((invalidEmailFormatContactUs)).toHaveClass('KvoMHf has-custom-focus wixui-text-input__input');
    await expect((invalidEmailFormatContactUs)).toHaveAttribute ('name','email');
    
});

test('Contact Us - Leading and Trailing Space', async ({ page }) => {
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
    await fieldEmailContactUs.fill(testData.leadingtrailingSpace.leadingtrailingSpaceEmail);

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











