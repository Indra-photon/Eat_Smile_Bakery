import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HoursLocationPage from './pages/HoursLocationPage.jsx'
import Home from './pages/Home.jsx'
import OnlineCakeOrder from './pages/OnlineCakeOrder.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
          path: "/",
          element: <Home />,
      },
      {
        path : "/location",
        element : <HoursLocationPage />
      },
      {
        path : "/orders",
        element : <OnlineCakeOrder />
      }
  ],
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
