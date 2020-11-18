import { Row, Col } from 'antd'
import { useFirebaseConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { ChatForm } from '../../components/ChatForm'
import { MessageList } from '../../components/MessageList'

const Chat = (props) => {
  const chatId = useSelector(
    ({ firebase }) => firebase.requested.user && firebase.data.user.chats[0]
  )
  useFirebaseConnect([
    {
      path: `messages/${chatId}`,
      storeAs: 'messages'
    }
  ])
  useFirebaseConnect([`chats/${chatId}`])

  return (
    <Row style={{ height: '100%' }}>
      <Col
        flex="auto"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <MessageList />
        <ChatForm />
      </Col>
    </Row>
  )
}

export default Chat
