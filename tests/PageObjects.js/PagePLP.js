class pagePLP{

    constructor(page) {
        this.page = page;

        // Define the Xpath of product listing page -PLP"
        this.buttonSorting = "xpath=//span[text()='Sorting']";
        this.buttonAddtocart = "xpath=//div[@data-slug='americano']//button[@data-hook='product-item-add-to-cart-button']";
        this.confirmationmessage = "xpath=//span[@data-hook='BodyDataHooks.emptyState']";
        
       
        //this.checkoutconfirmation = "xpath=//div[@data-hook='EmptyState.root']//h2[@data-hook='EmptyState.title']";
        //this.textboxEmail = "xpath=//input[@type='email' and @aria-label='Email']";
        //this.textboxFirstName ="xpath=//input[@type='text' and @aria-label='First name']";
    }

    
}
export {pagePLP};
