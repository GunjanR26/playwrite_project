class pagePLP {

    constructor(page) {
        this.page = page;

        // Define the Xpath of product listing page -PLP"
        this.buttonSorting = "xpath=//span[text()='Sorting']";
        this.buttonAddtocart = "xpath=//div[@data-slug='americano']//button[@data-hook='product-item-add-to-cart-button']";
        this.confirmationmessage = "xpath=//span[@data-hook='BodyDataHooks.emptyState']";


    }


}
export { pagePLP };
