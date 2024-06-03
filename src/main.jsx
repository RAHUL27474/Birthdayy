import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Envelop from './component/Envelop/Envelop.jsx'
import Start from './component/Start/Start.jsx'
import Wperson from './component/Wperson/Wperson.jsx'
import Wish from './component/Wish/Wish.jsx'
const router = createBrowserRouter(
   [{
    path:"/",
    element:<App/>,
    children:[
      {
        path:"start",
        element:<Start/>
      },
      {
        path:"envelope",
        element:<Envelop/>
      },
      {
        path:"",
        element:<Home/>
      },{
        path:"wrongperson",
        element:<Wperson/>
      },{
        path:"wish",
        element:<Wish/>
      }
    ]
   }]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
