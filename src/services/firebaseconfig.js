import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAnDjoEPmfDFp2JgG87FA3prSdhMFiyz50",
  authDomain: "el-mercadito-1c9f0.firebaseapp.com",
  projectId: "el-mercadito-1c9f0",
  storageBucket: "el-mercadito-1c9f0.appspot.com",
  messagingSenderId: "126698080557",
  appId: "1:126698080557:web:db2ccd6028834d0a7c6ba4"
};

const app = initializeApp(firebaseConfig);
export const DataBase =getFirestore(app)