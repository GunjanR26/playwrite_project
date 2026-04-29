class PageSignUp {

    constructor(page) {
        this.page = page;

        // Define the Xpath of Signup
        this.buttonLoginSignup = "xpath=//button[@data-testid='signUp.switchToSignUp']";
        this.fieldSignUpEmail = "xpath=//div[@class='pUnTVX']//input[@type='email']";
        this.fieldSignUpPassword = "xpath=//input[@type='password']";
        this.buttonSignUp = "xpath=//button[@data-testid='buttonElement' and .//span[text()='Sign Up']]";

    }

}
export { PageSignUp };
