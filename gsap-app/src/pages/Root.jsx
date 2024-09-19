import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="min-h-screen bg-slate-950 text-gray-50 p-4">
            <div className="mx-auto my-0 w-full max-w-screen-md bg-amber-950 p-2">
                <h1 className="text-2xl">
                    <Link to="/">GSAP Animations</Link>
                </h1>

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
