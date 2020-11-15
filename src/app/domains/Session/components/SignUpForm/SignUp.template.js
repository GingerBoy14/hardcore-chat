import {
  Button,
  Form,
  Card,
  Typography,
  Input,
  Space,
  Divider,
  Col,
  Row
} from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useFirebase } from 'react-redux-firebase'
import { LoginWithGoogle } from '../LoginWithGoogle'
const { Title, Text } = Typography

const createNewUser = (firebase, { email, password }) => {
  return firebase.createUser({ email, password }, { email })
}
const SignUpForm = (props) => {
  const firebase = useFirebase()
  const onFinish = (values) => {
    //TODO catch error: "The email address is already in use by another account."
    createNewUser(firebase, values).then(({ user }) => {
      firebase.push('chats', user.uid).then((data) => {
        firebase.uniqueSet(`chats/${data.key}/members`, [user.uid])
      })
      firebase
        .uniqueSet(`users/${user.uid}`, { id: user.uid })
        .catch((err) => console.log(err))
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={24} sm={20} md={14} lg={10} xl={8} xxl={6} justify="center">
        <Card title={<Title level={2}>Sign Up</Title>}>
          <Form
            name="loginForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your Username!' }
              ]}>
              <Input size="large" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' }
              ]}>
              <Input.Password
                size="large"
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
            <Divider>OR</Divider>
            <Space
              align="center"
              direction="vertical"
              style={{ width: '100%' }}>
              <LoginWithGoogle />
            </Space>
          </Form>
        </Card>
        <Space
          align="center"
          style={{ width: '100%', paddingTop: '12px' }}
          direction="vertical"
          size="middle">
          <Text>
            Already have a account?
            <Link to="/">Login</Link>
          </Text>
        </Space>
      </Col>
    </Row>
  )
}

export default SignUpForm
