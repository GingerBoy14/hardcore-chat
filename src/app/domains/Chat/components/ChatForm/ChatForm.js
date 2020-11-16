import { Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
const { Search } = Input

const ChatForm = () => {
  const firebase = useFirebase()
  const chatId = useSelector(
    ({ firebase }) => firebase.requested.user && firebase.data.user.chats[0]
  )
  const userId = useSelector(
    ({ firebase }) => firebase.requested.user && firebase.data.user.id
  )
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff'
      }}
    />
  )
  const onSearch = (value) =>
    firebase.push(`messages/${chatId}`, { sender: userId, data: value })

  return (
    <Search
      placeholder="Input message here"
      enterButton="Send"
      size="middle"
      suffix={suffix}
      allowClear
      onSearch={onSearch}
    />
  )
}

export default ChatForm
