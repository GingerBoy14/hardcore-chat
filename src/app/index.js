import { Login, SignUp } from './domains/Session/routes'
import { Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

const App = (props) => {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={Login} />
    </Switch>
  )
}

export default App
