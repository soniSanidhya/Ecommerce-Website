import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Men from './Components/Sections/Men/Men.jsx'
import Beauty from './Components/Sections/Beauty/Beauty.jsx'
import Child from './Components/Sections/Child/Child.jsx'
import Women from './Components/Sections/Women/Women.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Wishlist from './Components/WishList/Wishlist.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Shop from './Components/Shop/Shop.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Hero/>
      },
      {
        path : "Shop",
        // element : <Shop/>,
        children :[
          {
            path : "Men",
            element : <Men/>
          },
          {
            path : "Women",
            element : <Women/>
          },
          {
            path : "Child",
            element : <Child/>
          },
          {
            path : "Beauty",
            element : <Beauty/>
          }
        ]
      },
      {
        path : "Profile",
        element : <Profile/>
      },
      {
        path : "Wishlist",
        element : <Wishlist/>
      },
      {
        path : "Cart",
        element : <Cart/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
