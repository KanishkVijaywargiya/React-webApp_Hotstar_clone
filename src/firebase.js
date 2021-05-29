const firebaseConfig = {
  apiKey: "AIzaSyBppFQlGit6UKMljYAqTKvo5eilEyrYQgY",
  authDomain: "disneyplushotstar-f78fd.firebaseapp.com",
  projectId: "disneyplushotstar-f78fd",
  storageBucket: "disneyplushotstar-f78fd.appspot.com",
  messagingSenderId: "195065927600",
  appId: "1:195065927600:web:f6152f0b311bb025a4e875",
  measurementId: "G-L5J9WK61GE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
