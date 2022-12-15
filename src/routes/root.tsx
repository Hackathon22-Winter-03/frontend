import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export async function loader() {
    // TODO: implement for React Router
    return null;
}

const Root = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">index</Link>
                </li>
                <li>
                    <Link to="problem">problem</Link>
                </li>
                <li>
                    <Link to="problems">problems</Link>
                </li>
                <li>
                    <Link to="ranking">ranking</Link>
                </li>
                <li>
                    <Link to="user">user</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default Root;
