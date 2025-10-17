// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ASEGÚRATE de que solo se importe index.css
import './index.css' 

// ELIMINA cualquier otra importación CSS como import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)