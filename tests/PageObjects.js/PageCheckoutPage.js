class pageCheckoutPage {

    constructor(page) {
        this.page = page;

        //Define the xpath locators of checkout
        this.textboxEmail = "xpath=//input[@type='email' and @aria-label='Email']";
        this.textboxFirstName = "xpath=//input[@type='text' and @aria-label='First name']";
        this.textboxLastName = "xpath=//input[@type='text' and @aria-label='Last name']";
        this.textboxPhoneNumber = "xpath=//input[@aria-label='Phone']";
        this.dropdownRegion = "xpath=//input[@role='combobox' and @value='India']";
        this.selectRegion = "xpath=//div[@role='option' and @title='United States']";
        this.address = page.locator('input[type="text"]').nth(3);
        this.buttonContinue = "xpath=//button[.//span[text()='Continue']]";
        this.buttonOrdersummaryContinue = "xpath=//button[@data-hook='DeliverySectionWrapperDataHook.button']";
        this.buttonplaceorderandpay = "xpath=//button[@data-hook='place-order-button']";



    }

}
export { pageCheckoutPage };