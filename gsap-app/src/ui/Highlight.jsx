export default function Highlight({ children, external }) {
    return (
        <span className={`${external ? "text-blue-400" : "text-orange-300"}`}>
            {children}
        </span>
    );
}
