const { test, expect } = require('@playwright/test');
import { testData } from './Common/TestData';
import { URLs } from './Common/URLs';
import { PageGlobalSearch } from './PageObjects.js/PageGlobalSearch';

test('Global search - search with valid keyword', async ({ page }) => {
    test.setTimeout(50000);


    // Navigate to the website
    await page.goto(URLs.pageLinkHomePage);
    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);


    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const GlobalSearch = new PageGlobalSearch(page);
    const fieldSearchGlobalSearch = page.locator(GlobalSearch.fieldSearchGlobalSearch);
    await fieldSearchGlobalSearch.fill(testData.GlobalSearch.validGlobalSearch);
    await fieldSearchGlobalSearch.press("Enter");

    //Add Assertion
    const pagetitleSearchResultGlobalSearch = page.locator(GlobalSearch.pagetitleSearchResultGlobalSearch);
    await expect((pagetitleSearchResultGlobalSearch)).toBeVisible();

});

test('Global search - search with invalid keyword', async ({ page }) => {
    test.setTimeout(50000);


    // Navigate to the website
    await page.goto(URLs.pageLinkHomePage);
    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);


    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const GlobalSearch = new PageGlobalSearch(page);
    const fieldSearchGlobalSearch = page.locator(GlobalSearch.fieldSearchGlobalSearch);
    await fieldSearchGlobalSearch.fill(testData.GlobalSearch.invalidGlobalSearch);
    await fieldSearchGlobalSearch.press("Enter");

    //Add Assertion
    const pagetitleSearchResultGlobalSearch = page.locator(GlobalSearch.pagetitleSearchResultGlobalSearch);
    await expect((pagetitleSearchResultGlobalSearch)).toBeVisible();

});

test('Global search - search with partial keyword', async ({ page }) => {
    test.setTimeout(50000);


    // Navigate to the website
    await page.goto(URLs.pageLinkHomePage);
    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);


    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const GlobalSearch = new PageGlobalSearch(page);
    const fieldSearchGlobalSearch = page.locator(GlobalSearch.fieldSearchGlobalSearch);
    await fieldSearchGlobalSearch.fill(testData.GlobalSearch.partialGlobalSearch);
    await fieldSearchGlobalSearch.press("Enter");

    //Add Assertion
    const pagetitleSearchResultGlobalSearch = page.locator(GlobalSearch.pagetitleSearchResultGlobalSearch);
    await expect((pagetitleSearchResultGlobalSearch)).toBeVisible();

});

test('Global search - click on close option of search field', async ({ page }) => {
    test.setTimeout(50000);


    // Navigate to the website
    await page.goto(URLs.pageLinkHomePage);
    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);


    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const GlobalSearch = new PageGlobalSearch(page);
    const fieldSearchGlobalSearch = page.locator(GlobalSearch.fieldSearchGlobalSearch);
    await fieldSearchGlobalSearch.fill(testData.GlobalSearch.invalidGlobalSearch);

    const optionCloseGlobalSearch = page.locator(GlobalSearch.optionCloseGlobalSearch);
    await optionCloseGlobalSearch.click();

    //Add Assertion
    const pagetitleHomePageGlobalSearch = page.locator(GlobalSearch.pagetitleHomePageGlobalSearch);
    await expect((pagetitleHomePageGlobalSearch)).toBeVisible();


});

test('Global search - search with blank space', async ({ page }) => {
    test.setTimeout(50000);


    // Navigate to the website
    await page.goto(URLs.pageLinkHomePage);
    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);


    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const GlobalSearch = new PageGlobalSearch(page);
    const fieldSearchGlobalSearch = page.locator(GlobalSearch.fieldSearchGlobalSearch);
    await fieldSearchGlobalSearch.fill('            ');
    await fieldSearchGlobalSearch.press("Enter");

    //Add Assertion
    const pagetitleSearchResultGlobalSearch = page.locator(GlobalSearch.pagetitleSearchResultGlobalSearch);
    await expect((pagetitleSearchResultGlobalSearch)).toBeVisible();

    
});

test('Global search - Trending Products list', async ({ page }) => {
    test.setTimeout(50000);


    // Navigate to the website
    await page.goto(URLs.pageLinkHomePage);
    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);


    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const GlobalSearch = new PageGlobalSearch(page);
    const fieldSearchGlobalSearch = page.locator(GlobalSearch.fieldSearchGlobalSearch);
    await fieldSearchGlobalSearch.click();

    //Add Assertion
    const dropdownTrendingProductsGlobalSearch = page.locator(GlobalSearch.dropdownTrendingProductsGlobalSearch);
    await expect((dropdownTrendingProductsGlobalSearch)).toBeVisible();
    
});

test('Global search - inbetween space in keyword', async ({ page }) => {
    test.setTimeout(50000);


    // Navigate to the website
    await page.goto(URLs.pageLinkHomePage);
    // Wait a bit after page load (to allow popup to appear)
    await page.waitForTimeout(5000);


    // Check and act. If consent popup is displayed click on Consent button 
    if (await page.getByLabel('Consent', { exact: true }).isVisible())
        await page.getByLabel('Consent', { exact: true }).click();

    const GlobalSearch = new PageGlobalSearch(page);
    const fieldSearchGlobalSearch = page.locator(GlobalSearch.fieldSearchGlobalSearch);
    await fieldSearchGlobalSearch.fill(testData.GlobalSearch.middleSpaceGlobalSerch);
    await fieldSearchGlobalSearch.press("Enter");

    //Add Assertion
    const pagetitleSearchResultGlobalSearch = page.locator(GlobalSearch.pagetitleSearchResultGlobalSearch);
    await expect((pagetitleSearchResultGlobalSearch)).toBeVisible();

});






