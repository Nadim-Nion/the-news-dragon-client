import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
// import Home from "../pages/HomeFol/Home/Home";
import Category from ".././pages/HomeFol/Category/Category"
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/NewsFol/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/LoginFol/Login/Login";
import Register from "../pages/LoginFol/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ],
    },
    {
        path: "/category",
        element: <Main></Main>,
        children: [
            /* {
                path: '/',
                // element: <Home></Home>
                element: <Category></Category>,
                loader: () => fetch('http://localhost:5000/news')
            }, */
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ],
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;