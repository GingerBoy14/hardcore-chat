import { Button } from 'antd'
import { useFirebase } from 'react-redux-firebase'

const LoginWithGoogle = () => {
  const firebase = useFirebase()

  const loginWithGoogle = () => {
    //TODO rewrite: when sighup you need add user to RTDB, when login you don't need to do that
    firebase.login({ provider: 'google', type: 'popup' }).then(({ user }) => {
      let chatKey
      firebase
        .push('chats', user.uid)
        .then((data) => {
          chatKey = data.key
          firebase.uniqueSet(`chats/${chatKey}/members`, [user.uid])
        })
        .then(() => {
          firebase
            .uniqueSet(`users/${user.uid}`, { id: user.uid, chats: [chatKey] })
            .catch((err) => console.log(err))
        })
    })
  }
  return (
    <Button type="primary" onClick={loginWithGoogle}>
      Sign in with Google
    </Button>
  )
}

export default LoginWithGoogle
