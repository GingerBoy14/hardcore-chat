import { Col, Row } from 'antd'
import { Profile } from '../../domains/user/components/Profile'
import { Chat } from '../../domains/Chat/routes/Chat'
import { useFirebaseConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const Application = () => {
  const { uid } = useSelector((state) => state.firebase.auth)
  useFirebaseConnect([
    {
      path: `users/${uid}`,
      storeAs: 'user'
    }
  ])
  return (
    <Row style={{ height: '100%' }}>
      <Col xs={24} sm={4} md={2} lg={1} xl={1} xxl={1}>
        <Profile />
      </Col>
      <Col xs={24} sm={20} md={22} lg={23} xl={23} xxl={23}>
        <Chat uid={uid} />
      </Col>
    </Row>
  )
}

export default Application
