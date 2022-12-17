import { LoaderFunctionArgs } from "react-router";
import { default as UserPage } from "../pages/User";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export interface LoaderFunctionReturns {
    id: string;
}

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderFunctionReturns> {
    // TODO: implement for React Router
    const id = params.id ?? "hoge";
    return { id };
}

const User = () => {
    return <UserPage />;
};

export default User;
