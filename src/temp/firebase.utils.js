import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import FIREBASE_CONFIG from './firebase.config';

import { hats, mens, womens, sneakers, jackets } from './dev-data';

const devData = {
  hats,
  mens,
  womens,
  sneakers,
  jackets
};

const collectionIds = {
  hats: 'JhopKEcCY5ate92PPmoR',
  mens: '3seo8FfhlIY7mAnyrhqM',
  womens: 'YoXgOHxB8f4Azue5RyJe',
  sneakers: 'hBHPtBHAYIC6ywR7a7uz',
  jackets: 'UAzP3rErPNtsiJFLMf4B'
};

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

export const populate = async colls => {
  const batch = firestore.batch();
  const itemsRef = firestore.collection('items');
  colls.forEach(coll => {
    const category = devData[coll.title.toLowerCase()].map(el => ({
      ...el,
      _collection: firestore.doc(
        `/inventory/${collectionIds[coll.title.toLowerCase()]}`
      )
    }));
    category.forEach(item => batch.set(itemsRef.doc(), item));
  });
  return batch.commit();
};
