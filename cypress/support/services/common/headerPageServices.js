import { headerPage } from '../../pageObjects/pageObjects'
import { genericActions } from '../../genericActions'

export class headerPageServices {

  /*
   * Sets a given value on the search input and clicks the search button
  */
  search(value){
    genericActions.clearSetText(headerPage.topSection.searchInput, value);
    genericActions.click(headerPage.topSection.searchButton);
  }

  /*
   * Waits for user to be logged in
  */
  waitForUserLogin(){
    cy.get(headerPage.topSection.privateButtons.usernameButton)
      .should('be.visible');
  }

  /*
   * Clicks on the login button
  */
  clickLoginButton(){
    genericActions.click(headerPage.topSection.publicButtons.loginLink);
  }

}

export const headerPagePO = new headerPageServices();