
import './App.css';
 import Background from './components/background/Background';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {  createBrowserRouter, Outlet, RouterProvider  } from "react-router-dom";
import Contact from './components/navigation/Contact';
import ProductList from './components/product/ProductList';

import Blogs from './components/navigation/Blogs';
import Shop from './components/navigation/Shop';
import Features from './components/navigation/Features';
import ProductDetail from './components/product/ProductDetails';
import Category from './components/category/Category';
import Search from './components/search/Search';
import About from './components/about/About';




function App() {
  const Layout = () =>{
  return (
    
    <div className="App">
      
       <Navbar/>
       <Background/>
       
       <Outlet/>
       </div>
       )
       }
       const router = createBrowserRouter([
      {
        path: "/",
        element:<Layout/>,
        children:[
          {
          path:"/",
          element: <Home/>
        },
    
   
    ]
    
      },
    
    
    
     {
      path:"/product/:Id",
      element: <ProductDetail/>
    }, 
    {
      path:"/product",
      element: <ProductList/>
    },
    {
      path: '/contact',
      element: <Contact/>
    }, 
    {
      path: '/category',
      element: <Category/>
    }, 
    {
      path: '*',
      element: '404 not found'
    }, 
    {
      path:"/seach",
      element: <Search/>
    },
   
    {
      path:"/blog",
      element: <Blogs/>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/shop",
      element: <Shop/>
    },
    {
      path:"/features",
      element: <Features/>
    },
    {
      path:"/background",
      element: <Background/>
    },
   
   
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
      
       
    </div>
  );
}

export default App;
