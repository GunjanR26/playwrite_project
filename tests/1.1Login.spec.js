const { test, expect } = require('@playwright/test');
import { URLs } from './Common/URLs';


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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter valid email
  await page.getByRole('textbox', { name: 'Email' }).fill('stero26@gmail.com');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  //Assertion check. If 'stero26' account menu is displayed after successful login
  await expect(page.getByTestId('handle-button')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Do not enter email
  await page.getByRole('textbox', { name: 'Email' }).fill('');

  // Do not enter password
  await page.getByRole('textbox', { name: 'Password' }).fill('');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByText('Email cannot be blank')).toBeVisible();
  await expect(page.getByText('Make sure you enter a')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByText('Email cannot be blank')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('stero26@gmail.com');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByText('Make sure you enter a')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('stero27@gmail.com');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('123457');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByTestId('siteMembers.inlineErrorMsg')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('stero26gmail.com');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByTestId('siteMembers.inlineErrorMsg')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('   stero26@gmail.com  ');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('  123456  ');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByTestId('siteMembers.inlineErrorMsg')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('stero26 @gmail.com');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByTestId('siteMembers.inlineErrorMsg')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('stero26@gmail.com');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('123 456');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByTestId('siteMembers.inlineErrorMsg')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('stero27@gmail.com');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByTestId('siteMembers.inlineErrorMsg')).toBeVisible();

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
  await page.getByTestId('signUp.switchToSignUp').click();

  // Enter blank  email
  await page.getByRole('textbox', { name: 'Email' }).fill('stero26@gmail.com');

  // Enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('1234568');

  // Click on Login button of login form
  await page.getByTestId('buttonElement').click();

  // Assert error messages
  await expect(page.getByTestId('siteMembers.inlineErrorMsg')).toBeVisible();

});




