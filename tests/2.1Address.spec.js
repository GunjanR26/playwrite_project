const { test, expect } = require('@playwright/test');


test('Add new Address in My Account', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.testing101.net/');

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

  //Click on Stero26 option
  await page.getByTestId('handle-button').click();

  //Select My Address option from dropdown
  await page.getByRole('menuitem', { name: 'My Addresses' }).click();

  // Click on Add new Address button of My Address 
  await page.frameLocator('iframe[title="My Addresses"]').getByRole('button', { name: 'Add New Address' }).click();

  // Start interect with iFrame
  const frame = page.frameLocator('iframe[name^="tpapopup"]');
  
  // Enter First name 
  await frame.locator('input').first().fill('Gunjan');
  
  // Enter Last name 
  await frame.locator('input').nth(1).fill('Ranparia');
  
  //Enter Company Name 
  await frame.locator('input').nth(2).fill('ABC Pvt Ltd.');
  
  //Enter Address
  // Step 1: Type partial address
  const addressInput = frame.locator('input').nth(3);
  await addressInput.fill('123 William');

  // Step 2: Wait for dropdown suggestion to appear
  const suggestion = frame.getByText('123 William Street, New York, NY, USA');
  await suggestion.waitFor({ state: 'visible' });

  // Wait a bit after dropdown is visible (to allow dropdown to appear)
  await page.waitForTimeout(2000);

  // Step 3: Click the correct address from dropdown
  await suggestion.click();

  //Enter Address line 2
  await frame.locator('input').nth(4).fill('Apartment 202');

  // Based on selected address, city, Country, State and Zip code are auto populated 

  //Enter Phone number
  await frame.locator('input').nth(9).fill('+1234567890');

  // Wait a bit after all the details are filled up
  await page.waitForTimeout(2000);

  //Click on Add Address button
  await frame.getByRole('button', { name: 'Add Address and close dialog' }).click();

  //Add assertion
  await expect(page.frameLocator('iframe[title="My Addresses"]').getByText('Gunjan Ranparia ABC Pvt Ltd. 123')).toBeVisible();
  
  
});


test('Address - First name field is blank', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.testing101.net/');

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

  //Click on Stero26 option
  await page.getByTestId('handle-button').click();

  //Select My Address option from dropdown
  await page.getByRole('menuitem', { name: 'My Addresses' }).click();

  // Click on Add new Address button of My Address 
  await page.frameLocator('iframe[title="My Addresses"]').getByRole('button', { name: 'Add New Address' }).click();

  // Start interect with iFrame
  const frame = page.frameLocator('iframe[name^="tpapopup"]');
  
  // Enter First name 
  await frame.locator('input').first().fill('');
  
  // Enter Last name 
  await frame.locator('input').nth(1).fill('Ranparia');
  
  //Enter Company Name 
  await frame.locator('input').nth(2).fill('ABC Pvt Ltd.');
  
  //Enter Address
  // Step 1: Type partial address
  const addressInput = frame.locator('input').nth(3);
  await addressInput.fill('123 William');

  // Step 2: Wait for dropdown suggestion to appear
  const suggestion = frame.getByText('123 William Street, New York, NY, USA');
  await suggestion.waitFor({ state: 'visible' });

  // Wait a bit after dropdown is visible (to allow dropdown to appear)
  await page.waitForTimeout(2000);

  // Step 3: Click the correct address from dropdown
  await suggestion.click();

  //Enter Address line 2
  await frame.locator('input').nth(4).fill('Apartment 202');

  // Based on selected address, city, Country, State and Zip code are auto populated 

  //Enter Phone number
  await frame.locator('input').nth(9).fill('+1234567890');

  // Wait a bit after all the details are filled up
  await page.waitForTimeout(2000);

  //Click on Add Address button
  await frame.getByRole('button', { name: 'Add Address and close dialog' }).click();

  //Add assertion
  await expect(frame.getByText('Please enter first name')).toBeVisible();
  });


  test('Address - Last name field is blank', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.testing101.net/');

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

  //Click on Stero26 option
  await page.getByTestId('handle-button').click();

  //Select My Address option from dropdown
  await page.getByRole('menuitem', { name: 'My Addresses' }).click();

  // Click on Add new Address button of My Address 
  await page.frameLocator('iframe[title="My Addresses"]').getByRole('button', { name: 'Add New Address' }).click();

  // Start interect with iFrame
  const frame = page.frameLocator('iframe[name^="tpapopup"]');
  
  // Enter First name 
  await frame.locator('input').first().fill('Gunjan');
  
  // Enter Last name 
  await frame.locator('input').nth(1).fill('');
  
  //Enter Company Name 
  await frame.locator('input').nth(2).fill('ABC Pvt Ltd.');
  
  //Enter Address
  // Step 1: Type partial address
  const addressInput = frame.locator('input').nth(3);
  await addressInput.fill('123 William');

  // Step 2: Wait for dropdown suggestion to appear
  const suggestion = frame.getByText('123 William Street, New York, NY, USA');
  await suggestion.waitFor({ state: 'visible' });

  // Wait a bit after dropdown is visible (to allow dropdown to appear)
  await page.waitForTimeout(5000);

  // Step 3: Click the correct address from dropdown
  await suggestion.click();

  //Enter Address line 2
  await frame.locator('input').nth(4).fill('Apartment 202');

  // Based on selected address, city, Country, State and Zip code are auto populated 

  //Enter Phone number
  await frame.locator('input').nth(9).fill('+1234567890');

  // Wait a bit after all the details are filled up
  await page.waitForTimeout(2000);

  //Click on Add Address button
  await frame.getByRole('button', { name: 'Add Address and close dialog' }).click();

  //Add assertion
  await expect(frame.getByText('Please enter last name')).toBeVisible();
  });


  test('Address - Mandatory fields are blank', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.testing101.net/');

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

  //Click on Stero26 option
  await page.getByTestId('handle-button').click();

  //Select My Address option from dropdown
  await page.getByRole('menuitem', { name: 'My Addresses' }).click();

  // Click on Add new Address button of My Address 
  await page.frameLocator('iframe[title="My Addresses"]').getByRole('button', { name: 'Add New Address' }).click();

  // Start interect with iFrame
  const frame = page.frameLocator('iframe[name^="tpapopup"]');
  
  // Enter First name 
  await frame.locator('input').first().fill('');
  
  // Enter Last name 
  await frame.locator('input').nth(1).fill('');
  
  //Enter Company Name 
  await frame.locator('input').nth(2).fill('ABC Pvt Ltd.');
  
  //Enter Address
  // Step 1: Type partial address
  const addressInput = frame.locator('input').nth(3);
  await addressInput.fill('123 William');

  // Step 2: Wait for dropdown suggestion to appear
  const suggestion = frame.getByText('123 William Street, New York, NY, USA');
  await suggestion.waitFor({ state: 'visible' });

  // Wait a bit after dropdown is visible (to allow dropdown to appear)
  await page.waitForTimeout(2000);

  // Step 3: Click the correct address from dropdown
  await suggestion.click();

  //Enter Address line 2
  await frame.locator('input').nth(4).fill('Apartment 202');

  // Based on selected address, city, Country, State and Zip code are auto populated 

  //Enter Phone number
  await frame.locator('input').nth(9).fill('+1234567890');

  // Wait a bit after all the details are filled up
  await page.waitForTimeout(2000);

  //Click on Add Address button
  await frame.getByRole('button', { name: 'Add Address and close dialog' }).click();

  //Add assertion
  await expect(frame.getByText('Please enter first name')).toBeVisible();
  await expect(frame.getByText('Please enter last name')).toBeVisible();
  
  });
