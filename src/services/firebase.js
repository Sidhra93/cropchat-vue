import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
var config = {
  apiKey: 'AIzaSyCdS-8UnqUYiY0Xkj48DLIkqrdccdo5Tys',
  authDomain: 'cropchat-26a4c.firebaseapp.com',
  databaseURL: 'https://cropchat-26a4c.firebaseio.com',
  projectId: 'cropchat-26a4c',
  storageBucket: 'cropchat-26a4c.appspot.com',
  messagingSenderId: '456438018811'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
