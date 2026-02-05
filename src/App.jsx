import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import TOS from "./pages/TOS";
import NotFound from "./pages/NotFound";
import BlogArticle from "./components/Blog/BlogArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/blog/:slug",
    element: <BlogArticle />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <TOS />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;