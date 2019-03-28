import { observable, action } from 'mobx';
import firebase from 'firebase';

class RestaurantStore {
 @observable Items = [];

 @action.bound handleFirestoreCollectionOfFoods () {
   const db = firebase.firestore();
   this.Items.length = 0;
   db.collection('foods')
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

export default RestaurantStore;
