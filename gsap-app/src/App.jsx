import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Nav from "./pages/Nav";
import GsapTo from "./pages/GsapTo";
import GsapFrom from "./pages/GsapFrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapTimeline from "./pages/GsapTimeline";
import GsapStagger from "./pages/GsapStagger";
import GsapScrollTrigger from "./pages/GsapScrollTrigger";
import GsapText from "./pages/GsapText";

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
            {
                element: <GsapStagger />,
                path: "/gsapStagger",
            },
            {
                element: <GsapScrollTrigger />,
                path: "/gsapScrollTrigger",
            },
            {
                element: <GsapText />,
                path: "/gsapText",
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
