import { observable, action } from 'mobx';
import firebase from 'firebase';

class ShopStore {
  @observable
  Items = [];

  @action.bound
  handleFirestoreCollectionOfShop () {
    const db = firebase.firestore();
    this.Items.length = 0;
    db.collection('shops')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const docData = doc.data();
          this.Items.push(docData);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ShopStore;
