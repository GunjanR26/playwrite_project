import { test, expect } from '@playwright/test';
import { URLs } from './Common/URLs';
import { pageLogin } from './PageObjects.js/PageLogin';
import { PageSignUp } from './PageObjects.js/PageSignup';
import { testData } from './Common/TestData';
import { pageMyAccount } from './PageObjects.js/PageMyAccount';


test('AddressOptimization', async ({ page }) => {
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

    //Click on Stero26 option
    const MyAccountPage = new pageMyAccount(page);
    const accountName = page.locator(MyAccountPage.accountName);
    await accountName.click();

    // Click on My Address
    const MyAddresses = page.locator(MyAccountPage.MyAddresses);
    await MyAddresses.click();

    //Click on Add New Address button of My Address page
    const buttonAddNewAddress = page
        .frameLocator(MyAccountPage.iframeMyAddress)
        .locator(MyAccountPage.buttonAddNewAddress);
    await page.waitForTimeout(2000);
    await buttonAddNewAddress.click();

    // Add new address popup - Enter first name
    const fieldFirstName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldFirstName);
    await page.waitForTimeout(2000);
    await fieldFirstName.fill(testData.checkoutCustomerDetils.FirstName);

    //Enter Last Name
    const fieldLastName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldLastName);
    //await page.waitForTimeout(2000);
    await fieldLastName.fill(testData.checkoutCustomerDetils.LastName);

    //Enter Company Name
    const fieldCompanyName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldCompanyName);
    await page.waitForTimeout(2000);
    await fieldCompanyName.fill(testData.checkoutDeliveryDetails.CompanyName);

    //Step 1 Enter Partial Address
    const dropdownAddress = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.dropdownAddress);
    await dropdownAddress.click();
    await dropdownAddress.fill(testData.checkoutDeliveryDetails.Address);
    await dropdownAddress.press('ArrowDown');   // trigger dropdown
    await page.waitForTimeout(2000);

    // Step 2: Wait for dropdown suggestion to appear
    const dropdownOption = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.dropdownOption);
    await dropdownOption.waitFor({ state: 'visible' });
    await dropdownOption.click();

    //Based on selected address, city, Country, State and Zip code are auto populated
    await page.waitForTimeout(2000);

    //Enter Address Line 2
    const fieldAddressLine2 = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldAddressLine2);
    await fieldAddressLine2.fill(testData.checkoutDeliveryDetails.AddressLine2);

    //Enter Phone Number
    const fieldPhoneNumber = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldPhoneNumber);
    await fieldPhoneNumber.fill(testData.checkoutCustomerDetils.PhoneNumber);

    //CLick on Add Address button
    const buttonAddAddress = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.buttonAddAddress);
    await buttonAddAddress.click();

    //Add Assertion
    const assertionMessage = page
        .frameLocator(MyAccountPage.iframeMyAddress)
        .locator(MyAccountPage.assertionMessage);
    await expect((assertionMessage)).not.toBeVisible();


});


test('AddressOptimization - First Name is blank', async ({ page }) => {
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

    //Click on Stero26 option
    const MyAccountPage = new pageMyAccount(page);
    const accountName = page.locator(MyAccountPage.accountName);
    await accountName.click();

    // Click on My Address
    const MyAddresses = page.locator(MyAccountPage.MyAddresses);
    await MyAddresses.click();

    //Click on Add New Address button of My Address page
    const buttonAddNewAddress = page
        .frameLocator(MyAccountPage.iframeMyAddress)
        .locator(MyAccountPage.buttonAddNewAddress);
    await page.waitForTimeout(2000);
    await buttonAddNewAddress.click();

    // Add new address popup - Enter first name
    const fieldFirstName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldFirstName);
    await page.waitForTimeout(2000);
    await fieldFirstName.fill('');

    //Enter Last Name
    const fieldLastName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldLastName);
    //await page.waitForTimeout(2000);
    await fieldLastName.fill(testData.checkoutCustomerDetils.LastName);

    //Enter Company Name
    const fieldCompanyName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldCompanyName);
    await page.waitForTimeout(2000);
    await fieldCompanyName.fill(testData.checkoutDeliveryDetails.CompanyName);

    //Step 1 Enter Partial Address
    const dropdownAddress = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.dropdownAddress);
    await dropdownAddress.click();
    await dropdownAddress.fill(testData.checkoutDeliveryDetails.Address);
    await dropdownAddress.press('ArrowDown');   // trigger dropdown
    await page.waitForTimeout(2000);

    // Step 2: Wait for dropdown suggestion to appear
    const dropdownOption = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.dropdownOption);
    await dropdownOption.waitFor({ state: 'visible' });
    await dropdownOption.click();

    //Based on selected address, city, Country, State and Zip code are auto populated
    await page.waitForTimeout(2000);

    //Enter Address Line 2
    const fieldAddressLine2 = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldAddressLine2);
    await fieldAddressLine2.fill(testData.checkoutDeliveryDetails.AddressLine2);

    //Enter Phone Number
    const fieldPhoneNumber = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldPhoneNumber);
    await fieldPhoneNumber.fill(testData.checkoutCustomerDetils.PhoneNumber);

    //CLick on Add Address button
    const buttonAddAddress = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.buttonAddAddress);
    await buttonAddAddress.click();
    await page.waitForTimeout(2000);

    //Add Assertion
    const blankFirstNameErrorMessage = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.blankFirstNameErrorMessage);
    await expect((blankFirstNameErrorMessage)).toBeVisible();
    


});


test('AddressOptimization - Last name is blank', async ({ page }) => {
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

    //Click on Stero26 option
    const MyAccountPage = new pageMyAccount(page);
    const accountName = page.locator(MyAccountPage.accountName);
    await accountName.click();

    // Click on My Address
    const MyAddresses = page.locator(MyAccountPage.MyAddresses);
    await MyAddresses.click();

    //Click on Add New Address button of My Address page
    const buttonAddNewAddress = page
        .frameLocator(MyAccountPage.iframeMyAddress)
        .locator(MyAccountPage.buttonAddNewAddress);
    await page.waitForTimeout(2000);
    await buttonAddNewAddress.click();

    // Add new address popup - Enter first name
    const fieldFirstName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldFirstName);
    await page.waitForTimeout(2000);
    await fieldFirstName.fill(testData.checkoutCustomerDetils.FirstName);

    //Enter Last Name
    const fieldLastName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldLastName);
    //await page.waitForTimeout(2000);
    await fieldLastName.fill('');

    //Enter Company Name
    const fieldCompanyName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldCompanyName);
    await page.waitForTimeout(2000);
    await fieldCompanyName.fill(testData.checkoutDeliveryDetails.CompanyName);

    //Step 1 Enter Partial Address
    const dropdownAddress = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.dropdownAddress);
    await dropdownAddress.click();
    await dropdownAddress.fill(testData.checkoutDeliveryDetails.Address);
    await dropdownAddress.press('ArrowDown');   // trigger dropdown
    await page.waitForTimeout(2000);

    // Step 2: Wait for dropdown suggestion to appear
    const dropdownOption = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.dropdownOption);
    await dropdownOption.waitFor({ state: 'visible' });
    await dropdownOption.click();

    //Based on selected address, city, Country, State and Zip code are auto populated
    await page.waitForTimeout(2000);

    //Enter Address Line 2
    const fieldAddressLine2 = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldAddressLine2);
    await fieldAddressLine2.fill(testData.checkoutDeliveryDetails.AddressLine2);

    //Enter Phone Number
    const fieldPhoneNumber = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldPhoneNumber);
    await fieldPhoneNumber.fill(testData.checkoutCustomerDetils.PhoneNumber);

    //CLick on Add Address button
    const buttonAddAddress = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.buttonAddAddress);
    await buttonAddAddress.click();

    //Add Assertion
    const blankLastNameErrorMessage = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.blankLastNameErrorMessage);
    await expect((blankLastNameErrorMessage)).toBeVisible();


});


test('AddressOptimization -Mandatory fields are blank', async ({ page }) => {
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

    //Click on Stero26 option
    const MyAccountPage = new pageMyAccount(page);
    const accountName = page.locator(MyAccountPage.accountName);
    await accountName.click();

    // Click on My Address
    const MyAddresses = page.locator(MyAccountPage.MyAddresses);
    await MyAddresses.click();

    //Click on Add New Address button of My Address page
    const buttonAddNewAddress = page
        .frameLocator(MyAccountPage.iframeMyAddress)
        .locator(MyAccountPage.buttonAddNewAddress);
    await page.waitForTimeout(2000);
    await buttonAddNewAddress.click();

    // Add new address popup - Enter first name
    const fieldFirstName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldFirstName);
    await page.waitForTimeout(2000);
    await fieldFirstName.fill('');

    //Enter Last Name
    const fieldLastName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldLastName);
    //await page.waitForTimeout(2000);
    await fieldLastName.fill('');

    //Enter Company Name
    const fieldCompanyName = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldCompanyName);
    await page.waitForTimeout(2000);
    await fieldCompanyName.fill(testData.checkoutDeliveryDetails.CompanyName);

    //Step 1 Enter Partial Address
    const dropdownAddress = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.dropdownAddress);
    await dropdownAddress.click();
    await dropdownAddress.fill(testData.checkoutDeliveryDetails.Address);
    await dropdownAddress.press('ArrowDown');   // trigger dropdown
    await page.waitForTimeout(2000);

    // Step 2: Wait for dropdown suggestion to appear
    const dropdownOption = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.dropdownOption);
    await dropdownOption.waitFor({ state: 'visible' });
    await dropdownOption.click();

    //Based on selected address, city, Country, State and Zip code are auto populated
    await page.waitForTimeout(2000);

    //Enter Address Line 2
    const fieldAddressLine2 = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldAddressLine2);
    await fieldAddressLine2.fill(testData.checkoutDeliveryDetails.AddressLine2);

    //Enter Phone Number
    const fieldPhoneNumber = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.fieldPhoneNumber);
    await fieldPhoneNumber.fill(testData.checkoutCustomerDetils.PhoneNumber);

    //CLick on Add Address button
    const buttonAddAddress = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.buttonAddAddress);
    await buttonAddAddress.click();

    //Add Assertion - Error message of  when First Name is blank
    const blankFirstNameErrorMessage = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.blankFirstNameErrorMessage);
    await expect((blankFirstNameErrorMessage)).toBeVisible();

    //Add Assertion- Error message of  when Last Name is blank
    const blankLastNameErrorMessage = page
        .frameLocator(MyAccountPage.iframeEnterNewAddress)
        .locator(MyAccountPage.blankLastNameErrorMessage);
    await expect((blankLastNameErrorMessage)).toBeVisible();

});