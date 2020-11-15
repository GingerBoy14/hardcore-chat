import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5NQm0VPACeNVsQUs2-_YJzO2bCurXvWc',
  authDomain: 'hardcore-chat.firebaseapp.com',
  databaseURL: 'https://hardcore-chat.firebaseio.com',
  projectId: 'hardcore-chat',
  storageBucket: 'hardcore-chat.appspot.com',
  messagingSenderId: '565997706754',
  appId: '1:565997706754:web:b31d837b0c57e342ec511b',
  measurementId: 'G-HQ3LDTWWHD'
}

firebase.initializeApp(firebaseConfig)

export { firebaseConfig, firebase }
