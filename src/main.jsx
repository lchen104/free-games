import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

// import App from './components/GameDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>,
)
