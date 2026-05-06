class pageLogin {

    constructor(page) {
        this.page = page;

        // Define the Xpath of Login 
        this.buttonLoginHeader = "xpath=//button[.//span[normalize-space()='Log In']]";
        this.fieldEmail = "xpath=//input[@type='email']";
        this.fieldPassword = "xpath=//input[@type='password']"
        this.Loginbutton = "xpath=//button[@aria-label='Log In']";
        this.sucessLogin = "xpath=//div[contains(@class,'ukB2Bd') and contains(.,'stero26')]";
        this.blankEmailErrorLogIn = "xpath=//span[@data-testid='siteMembers.inlineErrorMsg' and normalize-space()='Email cannot be blank']";
        this.blankPasswordErrorLogIn = "xpath=//span[@data-testid='siteMembers.inlineErrorMsg' and normalize-space()='Make sure you enter a password.']";
        this.invalidLoginDetails = 'xpath=//span[normalize-space()="This email doesn\'t match any account. Try again."]';
        this.invalidEmailFormatLogIn = 'xpath=//span[normalize-space()="Double check your email and try again."]';
        this.leadingtrailingSpacePasswordLogIn = "xpath=//*[normalize-space()='Wrong email or password']";
        this.spaceinEmailLogIn = 'xpath=//span[normalize-space()="Double check your email and try again."]';
        this.spaceinPasswordLogIn = "xpath=//span[@data-testid='siteMembers.inlineErrorMsg' and normalize-space()='Wrong email or password']";
        this.invalidEmailLogIn = 'xpath=//span[normalize-space()="This email doesn\'t match any account. Try again."]';
        this.invalidPasswordLogIn = "xpath=//*[normalize-space()='Wrong email or password']";
    }

}

export { pageLogin };