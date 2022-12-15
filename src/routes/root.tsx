import { Outlet } from "react-router";
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
            <div className="m-8">
                <Outlet />
            </div>
        </>
    );
};

export default Root;
