import { Layout } from 'antd'
import { Chat } from '../../domains/Chat/routes/Chat'
import { useFirebaseConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { Spinner } from '../Spinner'
import { Header } from '../Header'

const { Content } = Layout

const Application = () => {
  const { uid } = useSelector((state) => state.firebase.auth)
  const { user } = useSelector((state) => state.firebase.data)
  useFirebaseConnect([
    {
      path: `users/${uid}`,
      storeAs: 'user'
    }
  ])
  if (!user) {
    return <Spinner />
  }
  return (
    <Layout style={{ height: '100%' }}>
      <Header />
      <Layout>
        <Content>
          <Chat uid={uid} />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Application
