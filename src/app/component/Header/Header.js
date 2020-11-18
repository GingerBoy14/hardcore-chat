import { Col, Layout, Row, Space, Button } from 'antd'
import { Profile } from '../../domains/user/components/Profile'
import Text from 'antd/es/typography/Text'

const Header = () => {
  //TODO get data of your chat friend and show avatar with name and status
  return (
    <Layout.Header>
      <Row justify="end">
        <Col span={4}>
          <Button type="primary" size="small">
            New Chat
          </Button>
        </Col>
        <Col flex="auto">
          <Space align="center" direction="vertical" style={{ width: '100%' }}>
            <Text style={{ color: '#f0f0f0' }}>Dima Okrushco</Text>
          </Space>
        </Col>
        <Col span={4}>
          <Profile />
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
