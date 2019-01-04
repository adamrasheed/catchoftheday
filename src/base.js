import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAq1IAJBe0Q4Rd4xKF03dElTiuvfokZQ6s",
  authDomain: "catch-of-the-day-adam-rasheed.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-adam-rasheed.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
