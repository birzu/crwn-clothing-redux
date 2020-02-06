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
