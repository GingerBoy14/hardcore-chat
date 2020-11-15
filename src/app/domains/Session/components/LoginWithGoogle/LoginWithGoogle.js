import { Button } from 'antd'
import { useFirebase } from 'react-redux-firebase'

const LoginWithGoogle = () => {
  const firebase = useFirebase()

  const loginWithGoogle = () => {
    //TODO rewrite: when sighup you need add user to RTDB, when login you don't need to do that
    firebase.login({ provider: 'google', type: 'popup' }).then(({ user }) => {
      firebase.push('chats', user.uid).then((data) => {
        firebase.uniqueSet(`chats/${data.key}/members`, [user.uid])
      })
      firebase
        .uniqueSet(`users/${user.uid}`, { id: user.uid })
        .catch((err) => console.log(err))
    })
  }
  return (
    <Button type="primary" onClick={loginWithGoogle}>
      Sign in with Google
    </Button>
  )
}

export default LoginWithGoogle
