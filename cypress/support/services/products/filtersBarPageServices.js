import { filtersBarPage } from '../../pageObjects/pageObjects'

export class filtersBarPageServices {

  /*
   * Selects a given designer filter
  */
  selectDesignerFilter(filterName){
    cy.get(filtersBarPage.designer.container)
      .contains(filtersBarPage.designer.checkboxes, filterName)
      .click();
  }

}

export const filtersBarPagePO = new filtersBarPageServices();