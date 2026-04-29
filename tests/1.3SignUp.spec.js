import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { PageSignUp } from './PageObjects.js/PageSignup';
import { testData } from './Common/TestData';
import { pageLogin } from './PageObjects.js/PageLogin';



test.only('SignUp with valid details', async ({ page }) => {
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

    // click on Login option from Signup
    const LoginPage = new pageLogin(page);
    const buttonLoginHeader = page.locator(LoginPage.buttonLoginHeader)
    await buttonLoginHeader.click();

    //Enter Email
    const SignUpPage = new PageSignUp(page);
    const fieldSignUpEmail = page.locator(SignUpPage.fieldSignUpEmail);
    await fieldSignUpEmail.fill(testData.validSignUpDetails.validUnregisteredEmail);

    //Enter Password
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill(testData.validSignUpDetails.validUnregisteredPassword);

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    await page.pause();
});