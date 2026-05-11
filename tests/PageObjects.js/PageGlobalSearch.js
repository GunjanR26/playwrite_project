class PageGlobalSearch {

    constructor(page) {
        this.page = page;

        // Define the Xpath of GlobalSearch
        this.fieldSearchGlobalSearch = "xpath=//input[@name='q' and @type='search']";
        this.pagetitleSearchResultGlobalSearch = "xpath=//h1[text()='Search Results']";
        this.optionCloseGlobalSearch = "xpath=//*[local-name()='svg' and @width='24']";
        this.pagetitleHomePageGlobalSearch = "xpath=//span[text()='Software Testing 101']";
        this.dropdownTrendingProductsGlobalSearch = "xpath=//span[text()='Trending Products']";


    }


}

export { PageGlobalSearch };