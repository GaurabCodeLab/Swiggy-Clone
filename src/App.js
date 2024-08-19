import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Grocery from "./components/Grocery";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import Restaurant from "./components/Restaurant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const About = lazy(()=>import("./components/About"));
const Grocery = lazy(()=>import("./components/Grocery"));

const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path : "/",
    element : <AppContainer />,
    children : [
      {
        path : "/",
        element : <Body />
      },
     {
      path : "/about",
      element : <Suspense fallback={<h1>loading about component...</h1>}><About /></Suspense>
     },
     {
      path : "/contact",
      element : <Contact />
     },
     {
      path : "/cart",
      element : <Cart />
     },
     {
      path : "/restaurant/:id",
      element : <Restaurant />
     },
     {
      path: "/grocery",
      element: <Suspense fallback={<h1>Loading Grocery Component...</h1>}><Grocery /></Suspense>
     }
    ],
    errorElement : <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}><AppContainer /></RouterProvider>);
