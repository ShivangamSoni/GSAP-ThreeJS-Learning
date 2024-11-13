import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Nav from "./pages/Nav";
import GsapTo from "./pages/GsapTo";
import GsapFrom from "./pages/GsapFrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapTimeline from "./pages/GsapTimeline";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                element: <Nav />,
                index: true,
            },
            {
                element: <GsapTo />,
                path: "/gsapTo",
            },
            {
                element: <GsapFrom />,
                path: "/gsapFrom",
            },
            {
                element: <GsapFromTo />,
                path: "/gsapFromTo",
            },
            {
                element: <GsapTimeline />,
                path: "/gsapTimeline",
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
