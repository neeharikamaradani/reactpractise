// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css'
import App from './App.jsx'
import Products from './pages/Products.jsx';
import Counter from './counter.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Products/>
  },
  {
    path: '/counter',
    element: <Counter/>
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router}><App /></RouterProvider>)


