class PageContactUs {

    constructor(page) {
        this.page = page;

        // Define the Xpath of Contact Us
        this.optionContactUs = "xpath=//p[text()='Contact us']";
        this.fieldFirstNameContactUs = "xpath=//input[@name='first-name']";
        this.fieldLastNameContactUs = "xpath=//input[@name='last-name']";
        this.fieldEmailContactUs = "xpath=//input[@name='email']";
        this.dropdownCountryContactUs = "xpath=//select[@id='collection_comp-m2vok786' and @data-testid='select-trigger']";
        this.dropdownoptionCountryContactUs = "xpath=//div[@role='option' and .//div[normalize-space()='Algeria']]";
        this.dropdownCertificationContactUs = "xpath=//input[@role='combobox' and @data-testid='input-trigger']";
        this.dropdownoptionCertificationContactUs = "xpath=//div[@role='option' and .//div[normalize-space()='Certified Tester Foundation Level Agile Tester (CTFL-AT)']]";
        this.textareaMessageContactUs = "xpath=//textarea[@id='textarea_comp-m2vok78p' and contains(@class,'wixui-text-box__input')]";
        this.buttonSubmitContactUs = "xpath=//button[@data-testid='buttonElement' and @aria-label='Submit']";
        this.popupVerificationContactUs = "xpath=//h2[text()='Verification']";
        

    }

}

export { PageContactUs };