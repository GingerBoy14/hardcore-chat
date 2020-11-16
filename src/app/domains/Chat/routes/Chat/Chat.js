import { Typography, Space, Row, Col } from 'antd'
import { useFirebaseConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { ChatForm } from '../../components/ChatForm'
import { MessageList } from '../../components/MessageList'

const { Title } = Typography

const Chat = (props) => {
  const chatId = useSelector(
    ({ firebase }) => firebase.requested.user && firebase.data.user.chats[0]
  )
  useFirebaseConnect([`chats/${chatId}`])

  return (
    <Row>
      <Col span={24}>
        <Title level={3}>Chat</Title>
      </Col>
      <Col flex="auto">
        <MessageList />
      </Col>
      <Col span={24}>
        <ChatForm />
      </Col>
    </Row>
  )
}

export default Chat
