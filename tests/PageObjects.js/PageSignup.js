class PageSignUp {

    constructor(page) {
        this.page = page;

        // Define the Xpath of Signup
        this.buttonLoginSignup = "xpath=//button[@data-testid='signUp.switchToSignUp']"; // At the time of login, when user clicks on Login link of Signup page
        this.fieldSignUpEmail = "xpath=//div[@class='pUnTVX']//input[@type='email']";
        this.fieldSignUpPassword = "xpath=//input[@type='password']";
        this.buttonSignUp = "xpath=//button[@data-testid='buttonElement' and .//span[text()='Sign Up']]";
        this.successSignUp = "xpath=//button[.//span[normalize-space()='Log In']]";
        this.blankEmailErrorSignup = "xpath=//span[@data-testid='siteMembers.inlineErrorMsg' and text()='Email cannot be blank']";
        this.blankPasswordErrorSignUp = "xpath=//span[@data-testid='siteMembers.inlineErrorMsg' and text()='Make sure you enter a password.']";
        this.invalidEmailformatSignUp = "xpath=//span[@data-testid='siteMembers.inlineErrorMsg' and text()='Double check your email and try again.']";
        this.middlespaceinEmailSignUp = "xpath=//span[@data-testid='siteMembers.inlineErrorMsg' and text()='Double check your email and try again.']"
        this.signupwithExistingcredentials = "xpath=//span[@data-testid='siteMembers.inlineErrorMsg' and text()='An account with this email already exists.']";
    }


}
export { PageSignUp };
