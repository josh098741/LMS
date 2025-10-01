import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppContextProvider} from './context/AppContext'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
  
)
