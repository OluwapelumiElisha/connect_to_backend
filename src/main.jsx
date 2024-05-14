import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/ui/toaster.jsx'
import { RouterProvider } from 'react-router-dom'
import { route } from './Route/index.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      {/* <App /> */}
      <RouterProvider router={route}/>
      <Toaster/>
      <Provider store={store}>
      <RouterProvider router={route}/>
      <Toaster/>
      </Provider>
    </div>
    
  </React.StrictMode>,
)
