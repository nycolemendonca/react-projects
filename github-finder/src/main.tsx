import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Home from './routes/Home.tsx';

// createBrowserRouter() is used to create a router object passing a list of route objects
// Creating the route to the main page
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider>: All data objects are passed to this component to render your app and enable rest of the data APIs  */}
    <RouterProvider router={router}/>
  </React.StrictMode>
)
