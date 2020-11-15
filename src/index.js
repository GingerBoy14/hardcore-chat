import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { firebase } from './app/constants/firebase'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore
import { BrowserRouter as Router } from 'react-router-dom'

import store from './app/redux/store'
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

// Setup react-redux so that connect HOC can be used
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById('root')
)
