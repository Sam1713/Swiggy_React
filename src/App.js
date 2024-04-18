import React,{lazy,Suspense, useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
// import RestaurantMenu from "./components/restaurantMenu";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocerry from "./components/Grocerry";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const Grocerry=lazy(()=>import("./components/Grocerry"))
const About=lazy(()=>import("./components/About"))


const AppLayout = () => {
  const [userName,setUserName]=useState('')
  useEffect(()=>{
    const data={
      name:"Sam Saju"
    }
    setUserName(data.name)
    },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName,userName}}>
    <div id="container">
      <AppHeader />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        
        path: '/about',
        element:<Suspense fallback={<h1>...loading</h1>}><About/></Suspense>,
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/resMenu/:resId',
        element:<RestaurantMenu/>
      },
      {
      path:'grocerry', 
      element:<Suspense fallback={<h1>...Loading</h1>}><Grocerry/></Suspense>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    ]
  },
  
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
