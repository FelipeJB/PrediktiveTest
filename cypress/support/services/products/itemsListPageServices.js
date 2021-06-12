import { itemsListPage } from '../../pageObjects/pageObjects'

export class itemsListPageServices {

  /*
   * Clicks on the favorite button on a given search result according to its index
   * If item is already is a favorite, the service will double click the button in order to add it to favorites again
   * Stores selectedItemLink Alias to record the link of favorited item
  */
  favoriteItem(index){
    cy.get(itemsListPage.items.container)
      .its('length')
      .then(itemsLength => {
        index = (index == 'last') ? itemsLength - 1 : index;

        cy.get(itemsListPage.items.container)
          .eq(index)
          .find(itemsListPage.items.link)
          .invoke('attr', 'href')
          .as('selectedItemLink');

          cy.get(itemsListPage.items.container)
          .eq(index)
          .find(itemsListPage.items.favoriteButton)
          .then(hearthIcon => {
            if(hearthIcon.hasClass("ti-ut-love")){
              cy.wrap(hearthIcon).click();
            } else {
              cy.wrap(hearthIcon).click();
              cy.wrap(hearthIcon)
                .should('have.class', "ti-ut-love")
                .click();
            }
          });
      });    
  }

  /*
   * Checks if all items match its respective designer filter
  */
  isDesignerFilterApplied(filterName){
    cy.get(itemsListPage.items.designerName)
      .should('contain.text', filterName);
  }

}

export const itemsListPagePO = new itemsListPageServices();