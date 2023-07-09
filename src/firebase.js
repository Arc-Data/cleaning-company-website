import { initializeApp } from "firebase/app";
import { getFireStore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAVqxXFeklPle8Hjg_v4N8DNk8zN1JOjeI",
  authDomain: "cleaningcompany-a6926.firebaseapp.com",
  projectId: "cleaningcompany-a6926",
  storageBucket: "cleaningcompany-a6926.appspot.com",
  messagingSenderId: "222193913436",
  appId: "1:222193913436:web:61a1be7419097b92e0e099"
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

const servicesCollection = collection(db, "services");