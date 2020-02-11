import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import FIREBASE_CONFIG from './firebase.config';

firebase.initializeApp(FIREBASE_CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const getAuthProvider = () => {
  return provider;
};

// AUTH UTILS
export const createUserProfile = async (userAuth, additionalData = {}) => {
  // get required data from the userAuth
  const { uid, displayName, photoURL, email } = userAuth;
  // create userRef object
  const userRef = firestore.doc(`users/${uid}`);
  const snapShot = await userRef.get();
  // if user already exists in db return
  if (snapShot.exists) return userRef;
  // else create user in db
  try {
    const createdAt = Date.now();
    userRef.set({ createdAt, displayName, photoURL, email, ...additionalData });
  } catch (error) {
    console.log(error.message);
  }
  return userRef;
};

export const checkUserSession = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// DATABASE UTILS
export const createCollections = async (key, data) => {
  const collectionsRef = firestore.collection(key);
  const snapShot = await collectionsRef.get();
  if (!snapShot.empty) return;
  const batch = firestore.batch();
  data.forEach(el => {
    const docRef = collectionsRef.doc();
    batch.set(docRef, el);
  });

  return batch.commit();
};

export const extractFromQuerySnapshot = async querySnapshot => {
  return Promise.all(
    querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  );
};

export const addItemsToCollectionsMap = async querySnapshot => {
  const collections = await Promise.all(
    querySnapshot.docs.map(async doc => {
      const itemRef = firestore
        .collection('items')
        .where('_collection', '==', doc.ref);
      const collection = doc.id;
      const itemsSnapShot = await itemRef.get();
      return {
        collection,
        ...doc.data(),
        id: doc.id,
        items: [...itemsSnapShot.docs.map(el => ({ ...el.data(), id: el.id }))]
      };
    })
  );

  let data = {};
  collections.forEach(col => (data[col.collection] = col));
  return data;
};

export const createCollectionsMap = async querySnapshot => {
  let collections = {};
  const docs = await Promise.all(
    querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, items: [] }))
  );

  docs.forEach(doc => (collections[doc.title.toLowerCase()] = doc));

  return collections;
};
