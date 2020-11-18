import { List, Avatar, Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import { Spinner } from '../../../../component/Spinner'

const MessageList = () => {
  const messages = useSelector(
    ({ firebase }) => firebase.requested.messages && firebase.data.messages
  )
  if (!messages) {
    return <Spinner />
  }
  return (
    <List
      style={{ flex: '1', overflowY: 'auto' }}
      itemLayout="horizontal"
      dataSource={Object.values(messages)}
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
  )
}

export default MessageList
