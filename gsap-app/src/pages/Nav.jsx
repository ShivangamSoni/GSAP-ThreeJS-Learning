import { Link } from "react-router-dom";

const links = [
    {
        label: "gsapTo",
        href: "/gsapTo",
    },
    {
        label: "gsapFrom",
        href: "/gsapFrom",
    },
    {
        label: "gsapFromTo",
        href: "/gsapFromTo",
    },
    {
        label: "gsapTimeline",
        href: "/gsapTimeline",
    },
    {
        label: "gsapStagger",
        href: "/gsapStagger",
    },
    {
        label: "gsapScrollTrigger",
        href: "/gsapScrollTrigger",
    },
    {
        label: "gsapText",
        href: "/gsapText",
    },
];

export default function Nav() {
    return (
        <ul>
            {links.map(({ label, href }) => (
                <li key={href}>
                    <Link
                        to={href}
                        className="block p-4 my-3 text-xl font-bold bg-blue-900 border-none outline-none hover:bg-blue-950 focus-visible:bg-blue-950"
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
