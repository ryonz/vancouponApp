import React from 'react';
import { observable, action } from 'mobx';

class ShopStore {
  @observable title = 'コンビニ屋',
  
}

const Shop = new ShopStore();
export default Shop;