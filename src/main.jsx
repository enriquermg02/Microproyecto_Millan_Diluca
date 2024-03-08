import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './router.jsx'
import {RouterProvider} from 'react-router-dom';
import UserProvider from './providers/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>,
)
