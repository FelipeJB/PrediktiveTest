import { headerPageServices, loginPageServices, itemsListPageServices, closetPageServices, closetItemsListPageServices } from "../support/services/pageServices"

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

context('Tradesy products interaction tests', () => {

  //These 3 tests should be separated on different specs according to the feature or function.

  beforeEach(() => {
    //This code should be defined as a command or as a custom service, as login may be common for different specs.
    cy.fixture('appUrls.json').then((urls) => {
      cy.visit(urls.home);
    });
    cy.fixture('credentials.json').then((creds) => {
      headerPageServices.clickLoginButton();
      loginPageServices.loginByEmailAndPass(creds.email, creds.password);
    });
    headerPageServices.waitForUserLogin();
  })

  it('Favorite an item', () => {
    headerPageServices.search("Hermès");
    itemsListPageServices.favoriteItem("last");
    cy.fixture('appUrls.json').then((urls) => {
      cy.visit(urls.favorites);
    });
    closetItemsListPageServices.isSelectedItemOnList();
  })

  it('Ensure JSON Data Matches Front End', () => {
    closetPageServices.interceptClosetInfo();
    cy.fixture('appUrls.json').then((urls) => {
      cy.visit(urls.externalCloset);
    });
    closetPageServices.isClosetItemsAmmountAccordingAPI();
  })

 

});