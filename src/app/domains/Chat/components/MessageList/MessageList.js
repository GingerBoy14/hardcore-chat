import { List, Avatar } from 'antd'
import { useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'

const MessageList = () => {
  const chatId = useSelector(
    ({ firebase }) => firebase.requested.user && firebase.data.user.chats[0]
  )
  useFirebaseConnect([
    {
      path: `messages/${chatId}`,
      storeAs: 'messages'
    }
  ])
  const data = useSelector(
    ({ firebase }) => firebase.requested.messages && firebase.data.messages
  )
  console.log(data)
  return (
    <>
      {data && (
        <List
          itemLayout="horizontal"
          dataSource={Object.values(data)}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.sender}</a>}
                description={item.data}
              />
            </List.Item>
          )}
        />
      )}
    </>
  )
}

export default MessageList
