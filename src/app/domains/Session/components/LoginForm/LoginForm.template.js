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
import { Link } from 'react-router-dom'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { useFirebase } from 'react-redux-firebase'
import { PasswordReset } from '../PasswordReset'
import { LoginWithGoogle } from '../LoginWithGoogle'
const { Title, Text } = Typography

const LoginForm = (props) => {
  const firebase = useFirebase()
  const onFinish = (values) => {
    firebase.login(values).then((data) => console.log('logged in: ', data))
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={24} sm={20} md={14} lg={10} xl={8} xxl={6} justify="center">
        <Card title={<Title level={2}>Login</Title>}>
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
                Login
              </Button>
            </Form.Item>
            <Divider>OR</Divider>
            <Space
              align="center"
              direction="vertical"
              style={{ width: '100%' }}>
              <LoginWithGoogle />

              <PasswordReset />
            </Space>
          </Form>
        </Card>
        <Space
          align="center"
          style={{ width: '100%', paddingTop: '12px' }}
          direction="vertical"
          size="middle">
          <Text>
            Don't have a account?
            <Link to="/signup">Sign up</Link>
          </Text>
        </Space>
      </Col>
    </Row>
  )
}

export default LoginForm
