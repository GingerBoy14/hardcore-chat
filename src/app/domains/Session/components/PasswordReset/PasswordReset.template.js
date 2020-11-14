import { useState } from 'react'
import { Modal, Button, Form, Input } from 'antd'
import { useFirebase } from 'react-redux-firebase'

const PasswordReset = () => {
  const [visible, setVisible] = useState(false)
  const firebase = useFirebase()

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setVisible(false)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }
  const onFinish = (values) => {
    const { email } = values
    //TODO catch error: "The email address is already in use by another account."
    firebase.resetPassword(email)
    setVisible(false)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Button type="link" onClick={showModal}>
        Forgot password?
      </Button>
      <Modal
        title="Restore password"
        visible={visible}
        onOk={handleOk}
        destroyOnClose
        keyboard
        centered
        maskClosable
        onCancel={handleCancel}
        footer={null}>
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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send password
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default PasswordReset
