import { headerPagePO }  from './common/headerPageServices'
import { loginPagePO }  from './common/loginPageServices'
import { filtersBarPagePO }  from './products/filtersBarPageServices'
import { itemsListPagePO }  from './products/itemsListPageServices'
import { closetItemsListPagePO }  from './closet/closetItemsListPageServices'
import { closetPagePO }  from './closet/closetPageServices'

const pageServices = {

  headerPageServices : headerPagePO,
  loginPageServices : loginPagePO,
  filtersBarPageServices : filtersBarPagePO,
  itemsListPageServices : itemsListPagePO,
  closetItemsListPageServices : closetItemsListPagePO,
  closetPageServices : closetPagePO

}

export default pageServices