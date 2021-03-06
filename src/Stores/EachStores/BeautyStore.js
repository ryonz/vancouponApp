import { observable, action } from 'mobx';
import firebase from 'firebase';

class BeautyStore {
  @observable
  Items = [];

  @action.bound
  handleFirestoreCollectionOfBeauty () {
    const db = firebase.firestore();
    this.Items.length = 0;
    db.collection('beauties')
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

export default BeautyStore;
