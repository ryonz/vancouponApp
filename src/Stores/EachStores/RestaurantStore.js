import { observable } from 'mobx';

class RestaurantStore {
  @observable
  name = 'コンビニ';

  @observable
  tag = 'ショッピング';

  @observable
  shortDescription = '＄10以上のお買い上げでスタンプ１個';
}

export default RestaurantStore;
