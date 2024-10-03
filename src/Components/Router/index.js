import { createBrowserRouter , RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/Home page";
import SingleFilm from "../../Pages/Single Film";
import Search from "../../Pages/Search";

export default function MyRouter() {
    const newRouter = createBrowserRouter( [ 
        {
            path: "/",
            element:<HomePage />,
        },
        {
            path: "/movies/:movieId",
            element:<SingleFilm />,
        },
        {
            path: "/search",
            element: <Search />,
        }
    ])
    return <RouterProvider router = { newRouter } />
}