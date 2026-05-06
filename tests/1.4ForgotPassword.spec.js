import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { PageSignUp } from './PageObjects.js/PageSignup';
import { testData } from './Common/TestData';
import { pageLogin } from './PageObjects.js/PageLogin';
import { PageForgotpassword } from './PageObjects.js/PageForgotpassword';


test('Forgot password valid scenario', async ({ page }) => {
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

    // click on Login option from Signup
    const SignUpPage = new PageSignUp(page);
    const buttonLoginSignup = page.locator(SignUpPage.buttonLoginSignup);
    await buttonLoginSignup.click();

    // Click on Forgot Password link
    const ForgotPassword = new PageForgotpassword(page);
    const buttonForgotPassword = page.locator(ForgotPassword.buttonForgotPassword);
    await buttonForgotPassword.click();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Enter valid and registered Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validLoginDetails.validEmail);

    // Click on Reset Password button
    const buttonResetPassword = page.locator(ForgotPassword.buttonResetPassword);
    await buttonResetPassword.click();

    // Add Assertion
    const successMessage = page.locator(ForgotPassword.successMessage);
    await expect((successMessage)).toBeVisible();

    // Click on Got it button
    const buttonGotIt = page.locator(ForgotPassword.buttonGotIt);
    await buttonGotIt.click();

    // Add Assertion
    const redirectedtoLoginScreen = page.locator(ForgotPassword.redirectedtoLoginScreen);
    await expect((redirectedtoLoginScreen)).toBeVisible();
    
});


test('Forgot password - Blank Email', async ({ page }) => {
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

    // click on Login option from Signup
    const SignUpPage = new PageSignUp(page);
    const buttonLoginSignup = page.locator(SignUpPage.buttonLoginSignup);
    await buttonLoginSignup.click();

    // Click on Forgot Password link
    const ForgotPassword = new PageForgotpassword(page);
    const buttonForgotPassword = page.locator(ForgotPassword.buttonForgotPassword);
    await buttonForgotPassword.click();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Do not enter Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill('');

    // Click on Reset Password button
    const buttonResetPassword = page.locator(ForgotPassword.buttonResetPassword);
    await buttonResetPassword.click();

    // Add Assertion
    const blankEmailErrorMessage = page.locator(ForgotPassword.blankEmailErrorMessage);
    await expect((blankEmailErrorMessage)).toBeVisible();

});


test('Forgot password - Unregisterd Email', async ({ page }) => {
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

    // click on Login option from Signup
    const SignUpPage = new PageSignUp(page);
    const buttonLoginSignup = page.locator(SignUpPage.buttonLoginSignup);
    await buttonLoginSignup.click();

    // Click on Forgot Password link
    const ForgotPassword = new PageForgotpassword(page);
    const buttonForgotPassword = page.locator(ForgotPassword.buttonForgotPassword);
    await buttonForgotPassword.click();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Enter valid and Unregistered Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validSignUpDetails.validUnregisteredEmail);

    // Click on Reset Password button
    const buttonResetPassword = page.locator(ForgotPassword.buttonResetPassword);
    await buttonResetPassword.click();

    // Add Assertion
    const unregisteredEmailErrorMessage = page.locator(ForgotPassword.unregisteredEmailErrorMessage);
    await expect((unregisteredEmailErrorMessage)).toBeVisible();

});

test('Forgot password - Invalid Email Format', async ({ page }) => {
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

    // click on Login option from Signup
    const SignUpPage = new PageSignUp(page);
    const buttonLoginSignup = page.locator(SignUpPage.buttonLoginSignup);
    await buttonLoginSignup.click();

    // Click on Forgot Password link
    const ForgotPassword = new PageForgotpassword(page);
    const buttonForgotPassword = page.locator(ForgotPassword.buttonForgotPassword);
    await buttonForgotPassword.click();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Enter Invalid Email Format
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.invalidformat.invaidEmailformat);

    // Click on Reset Password button
    const buttonResetPassword = page.locator(ForgotPassword.buttonResetPassword);
    await buttonResetPassword.click();

    // Add Assertion
    const invalidEmailFormat = page.locator(ForgotPassword.invalidEmailFormat);
    await expect((invalidEmailFormat)).toBeVisible();

});
 

 test('Forgot Password - Leading and Trailing space in email', async ({ page }) => {
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

    // click on Login option from Signup
    const SignUpPage = new PageSignUp(page);
    const buttonLoginSignup = page.locator(SignUpPage.buttonLoginSignup);
    await buttonLoginSignup.click();

    // Click on Forgot Password link
    const ForgotPassword = new PageForgotpassword(page);
    const buttonForgotPassword = page.locator(ForgotPassword.buttonForgotPassword);
    await buttonForgotPassword.click();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Enter Leading and Trailing place in Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.leadingtrailingSpace.leadingtrailingSpaceEmail);

    // Click on Reset Password button
    const buttonResetPassword = page.locator(ForgotPassword.buttonResetPassword);
    await buttonResetPassword.click();

    // Add Assertion
    const successMessage = page.locator(ForgotPassword.successMessage);
    await expect((successMessage)).toBeVisible();

    // Click on Got it button
    const buttonGotIt = page.locator(ForgotPassword.buttonGotIt);
    await buttonGotIt.click();

    // Add Assertion
    const redirectedtoLoginScreen = page.locator(ForgotPassword.redirectedtoLoginScreen);
    await expect((redirectedtoLoginScreen)).toBeVisible();

});

test('Forgot Password - Inbetween space in email', async ({ page }) => {
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

    // click on Login option from Signup
    const SignUpPage = new PageSignUp(page);
    const buttonLoginSignup = page.locator(SignUpPage.buttonLoginSignup);
    await buttonLoginSignup.click();

    // Click on Forgot Password link
    const ForgotPassword = new PageForgotpassword(page);
    const buttonForgotPassword = page.locator(ForgotPassword.buttonForgotPassword);
    await buttonForgotPassword.click();

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Enter email with in between space
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.middleSpace.middleSpaceEmail);

    // Click on Reset Password button
    const buttonResetPassword = page.locator(ForgotPassword.buttonResetPassword);
    await buttonResetPassword.click();

    // Add Assertion
    const middleSpaceEmailForgotPassword = page.locator(ForgotPassword.middleSpaceEmailForgotPassword);
    await expect((middleSpaceEmailForgotPassword)).toBeVisible();

});

