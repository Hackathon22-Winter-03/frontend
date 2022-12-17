import { useLoaderData } from "react-router";
import { LoaderFunctionReturns } from "../routes/user";

const User = () => {
    const { id } = useLoaderData() as LoaderFunctionReturns;
    return <h1>This is the user {id} page.</h1>;
};

export default User;
