import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Header from "../components/Header";

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
            <Header playerId="hoge" />
            <Outlet />
        </>
    );
};

export default Root;
