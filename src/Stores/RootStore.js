import RestaurantStore from './EachStores/RestaurantStore';

export default class RootStore {
  constructor() {
    this.restaurantStore = new RestaurantStore(this);
  }
}