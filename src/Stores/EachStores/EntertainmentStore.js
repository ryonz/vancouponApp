import { observable, action } from 'mobx';
import firebase from 'firebase';

class EntertainmentStore {
  @observable
  Items = [];

  @action.bound
  handleFirestoreCollectionOfEntertainment () {
    const db = firebase.firestore();
    this.Items.length = 0;
    db.collection('entertainment')
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

export default EntertainmentStore;
