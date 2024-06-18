import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import LoginScreen from './feature_login/LoginScreen.tsx'
import Navigation from './navigation.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
)
