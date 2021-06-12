import { closetPage } from '../../pageObjects/pageObjects'

export class closetPageServices {

  /*
   * Intercepts the closet info service call
   * Stores closetInfoService Alias to record the intercepted service
  */
  interceptClosetInfo(){
    cy.intercept('GET', '/closet/**/?payload=full&view=index&tradesy_synchronizer=*')
      .as('closetInfoService')
  }

  /*
   * Verifies if the items amount displayed on the page banner matches the service items amount
   * Requires closetInfoService Alias to be set before using
  */
  isClosetItemsAmmountAccordingAPI(){
    cy.wait('@closetInfoService');
    cy.get('@closetInfoService')
      .its('response.body.closet_summary.item_qty')
      .then(closetResponseItems => {
        cy.get(closetPage.stats.items)
          .should('contain.text', closetResponseItems);
      });
  }

}

export const closetPagePO = new closetPageServices();