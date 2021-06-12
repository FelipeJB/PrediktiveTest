import { closetItemsListPage } from '../../pageObjects/pageObjects'

export class closetItemsListPageServices {

  /*
   * Checks if a given name is present on the items list
   * Requires selectedItemLink Alias to be set before using
  */
  isSelectedItemOnList(){
    cy.get('@selectedItemLink')
      .then(selectedItem => {
        cy.get(closetItemsListPage.items.container)
          .eq(0)
          .find(closetItemsListPage.items.link)
          .should('have.attr', 'href', selectedItem);
      });
  }

}

export const closetItemsListPagePO = new closetItemsListPageServices();