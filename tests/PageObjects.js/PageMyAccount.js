class pageMyAccount {

    constructor(page) {
        this.page = page;

        // Define the Xpath of Login 
        this.accountName = "xpath=//div[contains(@class,'ukB2Bd') and contains(.,'stero26')]";
        this.MyAddresses = "xpath=//a[@href='https://www.testing101.net/account/my-addresses']";
        this.iframeMyAddress = "xpath=//iframe[@title='My Addresses']";
        this.buttonAddNewAddress = "xpath=//div[@class='_10o0_ _26mkp hidden-mobile' and @data-hook='add-address-button']//button[@data-hook='button' and text()='Add New Address']";
        this.iframeEnterNewAddress = "xpath=//iframe[contains(@title,'tpapopup')]";
        this.fieldFirstName = "xpath=//input[@data-hook='firstName']";
        this.fieldLastName = "xpath=//input[@data-hook='lastName']";
        this.fieldCompanyName = "xpath=//input[@data-hook='company']";
        this.dropdownAddress = "xpath=//input[@name='addressLine1']";
        this.dropdownOption = "xpath=//div[@data-hook='dropdown-layout-options']//div[contains(text(),'William Street, New York, NY, USA')]";
        this.fieldAddressLine2 = "xpath=//input[@data-hook='addressLine2']";
        this.fieldPhoneNumber = "xpath=//input[@data-hook='phone']";
        this.buttonAddAddress = "xpath=//button[@data-hook='submit-add-address']"
        this.assertionMessage ='xpath=//div[contains(text(),"haven\'t saved any addresses")]';

    }
}
export { pageMyAccount };
