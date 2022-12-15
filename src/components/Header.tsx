import { Link } from "react-router-dom";
function Hackson() {
    return (
        <div>
            <Link to="/problems" className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">Hackson</Link>
        </div>
    );
}
export default function Header() {
    return (
        <div>
            <Hackson />
        </div>
    );
}
