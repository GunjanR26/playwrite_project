import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { PageSignUp } from './PageObjects.js/PageSignup';
import { testData } from './Common/TestData';
import { pageLogin } from './PageObjects.js/PageLogin';



test('SignUp with valid details', async ({ page }) => {
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

    //Add Assertion - After successful signup - Account name should be displayed
    const successSignUp = page.locator(SignUpPage.successSignUp);
    await expect((successSignUp)).not.toBeVisible();

});

test('SignUp with empty fields of signup form', async ({ page }) => {
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

    //Do not enter Email
    const SignUpPage = new PageSignUp(page);
    const fieldSignUpEmail = page.locator(SignUpPage.fieldSignUpEmail);
    await fieldSignUpEmail.fill('');

    //Do not enter Password
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill('');

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    //Add Assertion - 
    const blankEmailErrorSignup = page.locator(SignUpPage.blankEmailErrorSignup);
    await expect((blankEmailErrorSignup)).toBeVisible();

    const blankPasswordErrorSignUp = page.locator(SignUpPage.blankPasswordErrorSignUp);
    await expect((blankPasswordErrorSignUp)).toBeVisible();

});

test('Signup with blank email', async ({ page }) => {
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

    //Do not enter Email
    const SignUpPage = new PageSignUp(page);
    const fieldSignUpEmail = page.locator(SignUpPage.fieldSignUpEmail);
    await fieldSignUpEmail.fill('');

    //Enter Password
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill(testData.validSignUpDetails.validUnregisteredPassword);

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    //Add Assertion - 
    const blankEmailErrorSignup = page.locator(SignUpPage.blankEmailErrorSignup);
    await expect((blankEmailErrorSignup)).toBeVisible();

});

test('Signup with blank password', async ({ page }) => {
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

    //Do not enter Password
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill('');

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    //Add Assertion - 
    const blankPasswordErrorSignUp = page.locator(SignUpPage.blankPasswordErrorSignUp);
    await expect((blankPasswordErrorSignUp)).toBeVisible();

});

test('SignUp with invalid email format', async ({ page }) => {
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

    //Enter invalid Email format
    const SignUpPage = new PageSignUp(page);
    const fieldSignUpEmail = page.locator(SignUpPage.fieldSignUpEmail);
    await fieldSignUpEmail.fill(testData.invalidformat.invaidEmailformat);

    //Enter Password
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill(testData.validSignUpDetails.validUnregisteredPassword);

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    //Add Assertion - 
    const invalidEmailformatSignUp = page.locator(SignUpPage.invalidEmailformatSignUp);
    await expect((invalidEmailformatSignUp)).toBeVisible();

});

test('SignUp with leading and trailing spaces in email and password', async ({ page }) => {
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

    //Enter Email with leading and trailing space
    const SignUpPage = new PageSignUp(page);
    const fieldSignUpEmail = page.locator(SignUpPage.fieldSignUpEmail);
    await fieldSignUpEmail.fill(testData.leadingtrailingSpaceSignUp.leadingtrailingSpaceEmail);

    //Enter Password with leading and trailing space
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill(testData.leadingtrailingSpaceSignUp.leadingtrailingSpacePassword);

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    //Add Assertion - 
    const successSignUp = page.locator(SignUpPage.successSignUp);
    await expect((successSignUp)).not.toBeVisible();

});

test('SignUp with middle space in email', async ({ page }) => {
    // Navigate to the website

    await page.goto(URLs.pageLinkHomePage);


    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Check and act. If consent popup is displayed click on Consent button else click on Login option of the home page
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();
    else
        await page.getByTestId('handle-button').click();

    //Enter valid Email with middle space
    const SignUpPage = new PageSignUp(page);
    const fieldSignUpEmail = page.locator(SignUpPage.fieldSignUpEmail);
    await fieldSignUpEmail.fill(testData.middleSpaceSignUp.middleSpaceEmailSignUp);

    //Enter Password 
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill(testData.validSignUpDetails.validUnregisteredPassword);

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    //Add Assertion - 
    const middlespaceEmailSignUp = page.locator(SignUpPage.middlespaceinEmailSignUp);
    await expect((middlespaceEmailSignUp)).toBeVisible();

});

test('SignUp with middle space in password', async ({ page }) => {
    // Navigate to the website

    await page.goto(URLs.pageLinkHomePage);


    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Check and act. If consent popup is displayed click on Consent button else click on Login option of the home page
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();
    else
        await page.getByTestId('handle-button').click();

    //Enter valid Email 
    const SignUpPage = new PageSignUp(page);
    const fieldSignUpEmail = page.locator(SignUpPage.fieldSignUpEmail);
    await fieldSignUpEmail.fill(testData.validSignUpDetails.validUnregisteredEmail);

    //Enter Password with middle space
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill(testData.middleSpaceSignUp.middleSpacePasswordSignUp);

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    //Add Assertion - This is unexpectd behavior, System should show proper error message
    const successSignUp = page.locator(SignUpPage.successSignUp);
    await expect((successSignUp)).not.toBeVisible();
   

});

test('SignUp with existing credentials', async ({ page }) => {
    // Navigate to the website

    await page.goto(URLs.pageLinkHomePage);


    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);

    // Check and act. If consent popup is displayed click on Consent button else click on Login option of the home page
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();
    else
        await page.getByTestId('handle-button').click();

    //Enter valid existing Email 
    const SignUpPage = new PageSignUp(page);
    const fieldSignUpEmail = page.locator(SignUpPage.fieldSignUpEmail);
    await fieldSignUpEmail.fill(testData.validLoginDetails.validEmail);

    //Enter valid Password 
    const fieldSignUpPassword = page.locator(SignUpPage.fieldSignUpPassword);
    await fieldSignUpPassword.fill(testData.validLoginDetails.validPassword);

    //Click on Sign Up button
    const buttonSignUp = page.locator(SignUpPage.buttonSignUp);
    await buttonSignUp.click();

    //Add Assertion 
    const signupwithExistingcredentials = page.locator(SignUpPage.signupwithExistingcredentials);
    await expect((signupwithExistingcredentials)).toBeVisible();
    await page.pause();

});




