class PageForgotpassword {


    constructor(page) {
        this.page = page;

        // Define the Xpath of Forgot password
        this.buttonForgotPassword = "xpath=//button[@data-testid='forgotPasswordDesktop']";
        this.buttonResetPassword = "xpath=//button[.//span[text()='Reset Password']]";
        this.successMessage = "xpath=//h2[@data-testid='title' and text()='Reset password link was sent']";
        this.buttonGotIt = "xpath=//button[.//span[text()='Got It']]";
        this.redirectedtoLoginScreen = "xpath=//h2[text()='Log In']";
        this.blankEmailErrorMessage = "xpath=//span[text()='Email cannot be blank']";
        this.unregisteredEmailErrorMessage ='xpath=//span[text()="This email doesn\'t match any account. Try again."]';
        this.invalidEmailFormat = "xpath=//span[text()='Double check your email and try again.']";
        this.middleSpaceEmailForgotPassword ="xpath=//span[text()='Double check your email and try again.']";

    }
}

export { PageForgotpassword };