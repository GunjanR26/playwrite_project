
class pageCartPage {

    constructor(page) {
        this.page = page;

        // Define the Xpath of cart page"
        this.buttonViewcart = "xpath=//div[@class='swz4Kl_']//button[@data-hook='CartButtonDataHooks.root']";
         this.buttonCheckout = "xpath=//div[@data-hook='CheckoutButtons.default']//a[@data-hook='CheckoutButtonDataHook.button']";
         this.checkoutconfirmation = "xpath=//div[@data-hook='EmptyState.root']//h2[@data-hook='EmptyState.title']";

    }


}
export {pageCartPage};