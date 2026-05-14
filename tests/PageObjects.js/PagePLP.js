class pagePLP {

    constructor(page) {
        this.page = page;

        // Define the Xpath of product listing page - PLP"
        this.buttonSorting = "xpath=//span[text()='Sorting']";
        this.buttonAddtocart = "xpath=//div[@data-slug='americano']//button[@data-hook='product-item-add-to-cart-button']";
        this.confirmationmessage = "xpath=//span[@data-hook='BodyDataHooks.emptyState']";

        // xpath of Purchse FilterbyPrice 
        this.sliderPricePurchaseFlterbyPrice = "xpath=//div[@role='slider' and @aria-label='Maximum price']";
        this.buttonAddtocartTeaPurchaseFilterbyPrice = "xpath=//div[@data-hook='product-item-root' and @aria-label='Tea. New gallery']//button[@data-hook='product-item-add-to-cart-button']";
        this.iframeProductdetailpopupTeaPurchaseFilterbyPrice = "xpath=//iframe[@title='Tea' and contains(@name,'tpaModal')]";
        this.dropdownSizePurchaseFilterbyPrice = "xpath=//select[@data-hook='native-select' and @aria-label='Size']";
        this.dropdownTypePurchaseFilterbyPrice = "xpath=//select[@data-hook='native-select' and @aria-label='Type']";
        this.buttonQuantityPurchaseFilterbyPrice = 'xpath=//button[@class="s__62cEX6 swTmkp2 sCORvhT has-custom-focus"]';
        this.buttonAddtocartProductdetailpopupTeaPurchaseFilterbyPrice = "xpath=//div[@class='siy7RL']//button[@data-hook='add-to-cart']";
        this.buttonViewcartPurchaseFilterbyPrice = "xpath=//button[@data-hook='CartButtonDataHooks.root']//span[text()='View Cart']";
        this.buttonCheckoutPurchaseFilterbyPrice = "xpath=//a[@data-hook='CheckoutButtonDataHook.button']";
        this.errorSizeProductdetailpopup = "xpath=//div[@id='error-message-2' and @data-hook='errormessagewrapper-message' and contains(text(),'Select Size')]";
        this.errorTypeProducedetailpopup = "xpath=//div[@data-hook='errormessagewrapper-message' and @id='error-message-5' and normalize-space()='Select Type']";
        
        
        //xpath of Purchse Filter by Color
        this.buttonColorPurchaseFilterbycolor = "xpath=//span[@data-hook='filter-title' and text()='Color'] /ancestor::button //span[@data-hook='filter-expand-icon' and contains(@class,'vsscqN')]";
        this.optionPurpleColorPurchaseFilterbycolor = "xpath=//label[@data-hook='color-sample'][.//input[@aria-label='Purple']]//span[@data-hook='color-sample-color']";
        this.buttonClearAllPurchaseFilterbycolor = "xpath=//button[@data-hook='applied-filters-clear' and .//span[text()='Clear All']]";
        this.optionBlackColorPurchaseFilterbycolor = "xpath=//label[@data-hook='color-sample'][.//input[@aria-label='Black']]//span[@data-hook='color-sample-color']";
        this.optionWhiteColorPurchaseFilterbycolor = "xpath=//label[@data-hook='color-sample'][.//input[@aria-label='White']]//span[@data-hook='color-sample-color']";
        this.buttonAddtocartChatGPT2PurchaseFilterbycolor = "xpath=//p[@data-hook='product-item-name' and text()='ChatGPT 2']/ancestor::li//button[@data-hook='product-item-add-to-cart-button']";
        this.iframeProducedetailpopupChatGPT2PurchaseFilterbycolor = "xpath=//iframe[@title='ChatGPT 2' and contains(@name,'tpaModal')]";
        this.optionPurpleProductdetailpopupChatGPT2PurchaseFilterbycolor = "xpath=//div[@class='sv_Nsfg'][.//input[@aria-label='Purple']]//span[@data-hook='icon']";
        this.buttonQuantityProductdetailpopupChatGPT2PurchaseFilterbycolor = 'xpath=//button[@class="s__62cEX6 swTmkp2 sCORvhT has-custom-focus"]';
        this.buttonAddtocartProductdetailpopupChatGPT2PurchaseFilterbycolor = "xpath=//div[@class='siy7RL']//button[@data-hook='add-to-cart']";
        this.buttonViewcartPurchaseFilterbycolor = "xpath=//button[@data-hook='CartButtonDataHooks.root']//span[text()='View Cart']";
        this.buttonCheckoutPurchaseFilterbycolor = "xpath=//a[@data-hook='CheckoutButtonDataHook.button']";
        this.errorColorProductdetailpopup = "xpath=//div[@data-hook='errormessagewrapper-message' and @id='error-message-1' and normalize-space()='Select Color']";
        this.linkViewmoredetailsProductdetailpopupChatGPT2= "xpath=//a[@data-hook='quick-view-more' and @href='https://www.testing101.net/product-page/chatgpt-2' and normalize-space()='View More Details']";
        
    }


}
export { pagePLP };
