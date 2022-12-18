import Problems from "../components/Problems";
import { useLoaderData } from "react-router";
import { LoaderFunctionReturns } from "../routes/user";

const Userpage = () => {
    const { name, user, problems } = useLoaderData() as LoaderFunctionReturns;
    return (
        <>
            <div className="flex my-5">
                <h1 className="flex-none">{name}&apos;s Profile</h1>
                <div className="flex-auto"></div>
                <h2 className="flex-initial">score: {user.score}</h2>
            </div>
            <p className="text-gray-400">{user.comment}</p>
            <Problems problems={problems} />
        </>
    );
};

export default Userpage;
