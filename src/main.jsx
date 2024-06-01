import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Birth from './component/Birth/Birth.jsx'
import Year from './component/Year/Year.jsx'
import Envelop from './component/Envelop/Envelop.jsx'
import Start from './component/Start/Start.jsx'
const router = createBrowserRouter(
   [{
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Start/>
      },
      {
        path:"year",
        element:<Year/>
      },
      {
        path:"birth",
        element:<Birth/>
      },
      {
        path:"envelope",
        element:<Envelop/>
      },
      {
        path:"home",
        element:<Home/>
      }
    ]
   }]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
