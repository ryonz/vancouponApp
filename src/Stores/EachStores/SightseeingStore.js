import { observable, action } from 'mobx';
import firebase from 'firebase';

class SightseeingStore {
  @observable
  Items = [];

  @action.bound
  handleFirestoreCollectionOfSightseeing () {
    const db = firebase.firestore();
    this.Items.length = 0;
    db.collection('sightseeing')
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

export default SightseeingStore;
