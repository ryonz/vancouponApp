import { observable, action } from 'mobx';
import firebase from 'firebase';

class OthersStore {
  @observable
  Items = [];

  @action.bound
  handleFirestoreCollectionOfOthers () {
    const db = firebase.firestore();
    this.Items.length = 0;
    db.collection('others')
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

export default OthersStore;
