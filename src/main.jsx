import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/style.scss"
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from '../Component/ScrollToTop.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter> <ScrollToTop/> <App /></BrowserRouter>
  
  </React.StrictMode>,
)
