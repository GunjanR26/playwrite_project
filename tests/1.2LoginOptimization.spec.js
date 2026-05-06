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

    // Enter valid Email
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

    //Do not enter Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill('');

    //Do not enter Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill('');

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const blankEmailErrorLogIn = page.locator(LoginPage.blankEmailErrorLogIn);
    await expect(blankEmailErrorLogIn).toBeVisible();

    const blankPasswordErrorLogIn = page.locator(LoginPage.blankEmailErrorLogIn);
    await expect(blankPasswordErrorLogIn).toBeVisible();

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

    //Do not enter Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.blankLoginDetails.blankEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const blankEmailErrorLogIn = page.locator(LoginPage.blankEmailErrorLogIn);
    await expect(blankEmailErrorLogIn).toBeVisible();

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

    //Enter valid Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validLoginDetails.validEmail);

    //Do not enter Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.blankLoginDetails.blankPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const blankPasswordErrorLogIn = page.locator(LoginPage.blankPasswordErrorLogIn);
    await expect(blankPasswordErrorLogIn).toBeVisible();

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

    //Enter invalid Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.invalidLoginDetails.invalidEmail);

    //Enter invalid Password
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

    //Enter invalid Email format
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.invalidformat.invaidEmailformat);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const invalidEmailFormatLogIn = page.locator(LoginPage.invalidEmailFormatLogIn);
    await expect(invalidEmailFormatLogIn).toBeVisible();

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

    // Enter Email with leading and trailing space
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.leadingtrailingSpace.leadingtrailingSpaceEmail);

    //Enter  Password with leading and trailing space
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.leadingtrailingSpace.leadingtrailingSpacePassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const leadingtrailingSpacePasswordLogIn = page.locator(LoginPage.leadingtrailingSpacePasswordLogIn);
    await expect(leadingtrailingSpacePasswordLogIn).toBeVisible();
    

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

    //Enter Email with middle space
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.middleSpace.middleSpaceEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const spaceinEmailLogIn = page.locator(LoginPage.spaceinEmailLogIn);
    await expect(spaceinEmailLogIn).toBeVisible();
   

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

    //Enter Valid Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validLoginDetails.validEmail);

    //Enter  Password with middle space
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.middleSpace.middleSpacePassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const spaceinPasswordLogIn = page.locator(LoginPage.spaceinPasswordLogIn);
    await expect(spaceinPasswordLogIn).toBeVisible();
    
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

    //Enter Unregistered Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.invalidLoginDetails.invalidEmail);

    //Enter valid Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.validLoginDetails.validPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const invalidEmailLogIn = page.locator(LoginPage.invalidEmailLogIn);
    await expect(invalidEmailLogIn).toBeVisible();
    


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

    //Enter valid registered Email
    const fieldEmail = page.locator(LoginPage.fieldEmail);
    await fieldEmail.fill(testData.validLoginDetails.validEmail);

    //Enter  incorrect  Password
    const fieldPassword = page.locator(LoginPage.fieldPassword);
    await fieldPassword.fill(testData.invalidLoginDetails.invalidPassword);

    // Click on Login button of login form
    const Loginbutton = page.locator(LoginPage.Loginbutton);
    await Loginbutton.click();

    // Assert error messages
    const invalidPasswordLogIn = page.locator(LoginPage.invalidPasswordLogIn);
    await expect(invalidPasswordLogIn).toBeVisible();

});



