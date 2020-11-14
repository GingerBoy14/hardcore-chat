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
import { useFirebase } from 'react-redux-firebase'
const { Title, Link } = Typography

const SignUpForm = (props) => {
  const firebase = useFirebase()
  const onFinish = (values) => {
    const { email, password } = values
    //TODO catch error: "The email address is already in use by another account."
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
                Login
              </Button>
            </Form.Item>
            <Divider>OR</Divider>
            <Space
              align="center"
              direction="vertical"
              style={{ width: '100%' }}>
              <Button type="primary">Sign in with Google</Button>
              <Link href="/pw-reset">Forgot password?</Link>
            </Space>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUpForm