import { observable, action } from 'mobx';
import firebase from 'firebase';

class RestaurantStore {
 @observable Items = [];

 @action handleFirestoreCollectionOfFoods () {
   const db = firebase.firestore();
   db.collection('foods')
     .get()
     .then((snapshot) => {
       const preItems = [];
       snapshot.forEach((doc) => {
         const docData = doc.data();
         preItems.push(docData);
       });
       this.Items.push(preItems);
     })
     .catch((error) => {
       console.log(error);
     });
 }
}

export default RestaurantStore;
