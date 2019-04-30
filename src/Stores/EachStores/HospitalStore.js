import { observable, action } from 'mobx';
import firebase from 'firebase';

class HospitalStore {
  @observable
  Items = [];

  @action.bound
  handleFirestoreCollectionOfHospital () {
    const db = firebase.firestore();
    this.Items.length = 0;
    db.collection('hospital')
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

export default HospitalStore;
