import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="min-h-screen bg-gray-900">
                <h1 className="text-emerald-700 underline text-3xl font-bold uppercase">
                    App
                </h1>
            </div>
        ),
    },
    {
        path: "/test",
        element: (
            <div className="min-h-screen bg-gray-900">
                <h1 className="text-amber-500 underline text-3xl font-bold uppercase">
                    Test
                </h1>
            </div>
        ),
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
