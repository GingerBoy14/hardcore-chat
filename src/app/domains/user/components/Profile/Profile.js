import { useFirebase } from 'react-redux-firebase'
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd'
import { useSelector } from 'react-redux'
const { Text } = Typography
const Profile = () => {
  const firebase = useFirebase()
  const { avatarUrl, displayName } = useSelector(
    (state) => state.firebase.profile
  )

  const menu = () => (
    <Menu>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item danger onClick={() => firebase.logout()}>
        Logout
      </Menu.Item>
    </Menu>
  )
  return (
    <Space>
      <Text style={{ color: '#f0f0f0' }} strong>
        {displayName}
      </Text>
      <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
        <Avatar size="large" src={avatarUrl} />
      </Dropdown>
    </Space>
  )
}
export default Profile
