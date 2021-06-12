import { loginPage } from '../../pageObjects/pageObjects'
import { genericActions } from '../../genericActions'

export class loginPageServices {

  /*
   * Sets a given email
  */
  setEmail(email){
    genericActions.clearSetText(loginPage.emailInput, email);
  }

  /*
   * Sets a given password
  */
  setPassword(password){
    genericActions.clearSetText(loginPage.passwordInput, password);
  }

  /*
   * Clicks on the login button
  */
  clickLoginButton(){
    genericActions.click(loginPage.loginButton);
  }

  /*
   * Sets a given user and password and clicks login button
  */
  loginByEmailAndPass(email, password){
    this.setEmail(email);
    this.setPassword(password);
    this.clickLoginButton();
  }

}

export const loginPagePO = new loginPageServices();