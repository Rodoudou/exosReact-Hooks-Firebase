import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }
  // for to login
  login = async provider => {
    await this.auth.signInWithPopup(this[`${provider}Provider`]);
  };

  // for to logout
  logout = async provider => {
    this.auth.signOut();
  };
}

const firebase = new Firebase();
export default firebase;
