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
import Terms from "../pages/Shared/Terms/Terms";

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
            },
            {
                path: "/terms",
                element: <Terms></Terms>
            }
        ],
    },
    {
        path: "/category",
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-7mnrrhxk3-nadim-mahmud-nions-projects.vercel.app/categories/${params.id}`)
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
                loader: ({ params }) => fetch(`https://the-news-dragon-server-7mnrrhxk3-nadim-mahmud-nions-projects.vercel.app/${params.id}`)
            }
        ]
    }
]);

export default router;