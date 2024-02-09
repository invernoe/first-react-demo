import "./App.css";
import Layout from "./Layout";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Navigate to="/about" /> },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
