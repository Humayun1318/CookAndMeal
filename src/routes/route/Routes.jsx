import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main';
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
        ],
    }
])

export default router;