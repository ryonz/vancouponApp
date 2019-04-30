import RestaurantStore from './EachStores/RestaurantStore';
import BeautyStore from './EachStores/BeautyStore';
import ShopStore from './EachStores/ShopStore';
import EntertainmentStore from './EachStores/EntertainmentStore';
import HospitalStore from './EachStores/HospitalStore';
import SightseeingStore from './EachStores/SightseeingStore';
import OthersStore from './EachStores/OthersStore';

export default class RootStore {
  constructor() {
    this.restaurantStore = new RestaurantStore(this);
    this.beautyStore = new BeautyStore(this);
    this.shopStore = new ShopStore(this);
    this.entertainmentStore = new EntertainmentStore(this);
    this.hospitalStore = new HospitalStore(this);
    this.sightseeingStore = new SightseeingStore(this);
    this.othersStore = new OthersStore(this);
  }
}
