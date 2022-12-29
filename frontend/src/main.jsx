import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './firebase/config'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001/api"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
