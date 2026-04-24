import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { pageLogin } from './PageObjects.js/PageLogin';
import { PageSignUp } from './PageObjects.js/PageSignup';
import { testData } from './Common/TestData';


test('Login with valid credentials', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Enter valid email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validLoginDetails.validEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    //Assertion check. If 'stero26' account menu is displayed after successful login
    const sucessLogin = page.locator(LoginPage.sucessLogin);
    await expect(sucessLogin).toBeVisible();

});

test('Login with empty fields of login form', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.blankLoginDetails.blankEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.blankLoginDetails.blankPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const blankEmailError = page.locator(LoginPage.blankEmailError);
    await expect(blankEmailError).toBeVisible();

    const blankPasswordError = page.locator(LoginPage.blankPasswordError);
    await expect(blankPasswordError).toBeVisible();

});

test('Login with blank email', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.blankLoginDetails.blankEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const blankEmailError = page.locator(LoginPage.blankEmailError);
    await expect(blankEmailError).toBeVisible();

});

test('Login with blank password', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validLoginDetails.validEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.blankLoginDetails.blankPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const blankPasswordError = page.locator(LoginPage.blankPasswordError);
    await expect(blankPasswordError).toBeVisible();

});

test('Login with invalid credentials', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.invalidLoginDetails.invalidEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.invalidLoginDetails.invalidPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const invalidLoginDetails = page.locator(LoginPage.invalidLoginDetails);
    await expect(invalidLoginDetails).toBeVisible();

});

test('Login with invalid email format', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.invalidformat.invaidEmailformat);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const invalidEmailFormat = page.locator(LoginPage.invalidEmailFormat);
    await expect(invalidEmailFormat).toBeVisible();

});

test('Login with leading and trailing spaces in email and password', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.leadingtrailingSpace.leadingtrailingSpaceEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.leadingtrailingSpace.leadingtrailingSpacePassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const leadingtrailingSpacePassword = page.locator(LoginPage.leadingtrailingSpacePassword);
    await expect(leadingtrailingSpacePassword).toBeVisible();

});


test('Login with middle space in email', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.middleSpace.middleSpaceEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const spaceinEmail = page.locator(LoginPage.spaceinEmail);
    await expect(spaceinEmail).toBeVisible();

});


test('Login with middle space in password', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validLoginDetails.validEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.middleSpace.middleSpacePassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const spaceinPassword = page.locator(LoginPage.spaceinPassword);
    await expect(spaceinPassword).toBeVisible();

});

test('Email invalid and password valid', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.invalidLoginDetails.invalidEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const invalidEmail = page.locator(LoginPage.invalidEmail);
    await expect(invalidEmail).toBeVisible();

});

test('Email valid and password invalid', async ({ page }) => {
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

    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validLoginDetails.validEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.invalidLoginDetails.invalidPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const invalidPassword = page.locator(LoginPage.invalidPassword);
    await expect(invalidPassword).toBeVisible();

});



