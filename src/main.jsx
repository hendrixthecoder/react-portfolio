import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NotificationContextProvider } from './utils/NotificationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NotificationContextProvider>
        <App />
    </NotificationContextProvider>
)
