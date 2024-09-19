import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Nav from "./pages/Nav";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                element: <Nav />,
                index: true,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
