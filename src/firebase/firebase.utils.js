import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import FIREBASE_CONFIG from './firebase.config';

firebase.initializeApp(FIREBASE_CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

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
