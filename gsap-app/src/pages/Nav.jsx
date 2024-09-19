import { Link } from "react-router-dom";

const links = [
    {
        label: "gsapTo",
        href: "/gsapTo",
    },
];

export default function Nav() {
    return (
        <ul>
            {links.map(({ label, href }) => (
                <li key={href}>
                    <Link to={href}>{label}</Link>
                </li>
            ))}
        </ul>
    );
}
