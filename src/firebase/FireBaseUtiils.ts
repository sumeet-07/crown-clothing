import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDjzc1z4yIyS8x-kBeUCJwWjW0c7naVVZo",
    authDomain: "crown-clothing-ca6ab.firebaseapp.com",
    projectId: "crown-clothing-ca6ab",
    storageBucket: "crown-clothing-ca6ab.appspot.com",
    messagingSenderId: "854829432264",
    appId: "1:854829432264:web:98c28259f35803284a94fd"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

export async function addUserToDatabase(authData:firebase.User|null, addtionalData:any){
  if(!authData) return;
  const userRef = firestore.doc(`users/${authData.uid}`);
  const userSnap = await userRef.get()
  // if(!userSnap.exists){
    const { email, displayName, phoneNumber} = authData
    const timestamp = new Date()
    userRef.set({
      email,
      displayName,
      phoneNumber,
      timestamp,
      ...addtionalData
    })
  // }
  console.log('authData :>> ', authData);
  console.log('userSnap :>> ', userSnap);

  return userRef;
}
