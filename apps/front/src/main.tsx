import * as ReactDOM from 'react-dom'
import { ReactNotifications } from 'react-notifications-component'

import { App } from './app/app'
import 'react-notifications-component/dist/theme.css'

ReactDOM.render(
  <div className="app-container">
    <ReactNotifications />
    <App />
  </div>,
  document.getElementById('root'),
)
