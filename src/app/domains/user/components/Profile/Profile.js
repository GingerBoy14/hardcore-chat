import { useFirebase } from 'react-redux-firebase'
import { Avatar, Dropdown, Menu } from 'antd'
import { useSelector } from 'react-redux'

const Profile = () => {
  const firebase = useFirebase()
  const { avatarUrl } = useSelector((state) => state.firebase.profile)

  const menu = () => (
    <Menu>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item danger onClick={() => firebase.logout()}>
        Logout
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
      <Avatar size="large" src={avatarUrl} />
    </Dropdown>
  )
}
export default Profile
