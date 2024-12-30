import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import MediaandEvent from "./pages/MediaandEvent"
import Projects from "./pages/Projects"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AshapurnaEvents from "./pages/Ashapurna.Events"
import Residentia from "./SliderFolder/Residentia"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "blog",
    element: <Blogs />,
  },
  {
    path: "contacr-us",
    element: <Contact />,
  },
  {
    path: "Project",
    element: <Projects />,
  },
  {
    path: "Media-and-Event",
    element: <MediaandEvent />,
  },
  {
    path: "Media-and-Event/:id",
    element: <AshapurnaEvents />,
  },
  {
    path: "residentia/:id",
    element: <Residentia />,
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
