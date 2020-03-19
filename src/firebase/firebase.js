import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.db = app.firestore();
  }
  // for to login
  login = async provider =>
    this.auth.signInWithPopup(this[`${provider}Provider`]);
  // for to logout
  logout = async () => this.auth.signOut();
}

const firebase = new Firebase();
export default firebase;
