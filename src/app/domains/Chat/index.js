import { useFirebase } from 'react-redux-firebase'
import { Button } from 'antd'
const Chat = () => {
  const firebase = useFirebase()
  return (
    <Button type="primary" onClick={() => firebase.logout()}>
      Log out
    </Button>
  )
}

export default Chat
