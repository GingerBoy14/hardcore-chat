import { Login, SignUp } from './domains/Session/routes'
import Chat from './domains/Chat'
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated
} from './domains/Session/hoc'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'

const App = (props) => {
  return (
    <Switch>
      <Route path="/chat" component={UserIsAuthenticated(Chat)} />
      <Route path="/signup" component={UserIsNotAuthenticated(SignUp)} />
      <Route path="/" component={UserIsNotAuthenticated(Login)} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
