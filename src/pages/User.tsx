import Problems from "../components/Problems";
import { useLoaderData } from "react-router";
import { LoaderFunctionReturns } from "../routes/user";

const Userpage = () => {
    const { name, user, problems } = useLoaderData() as LoaderFunctionReturns;
    return (
        <>
            <div className="flex">
                <h1 className="relative top-0 left-0 ">{name}</h1>
                <h2 className="absolute top-13 right-10">score: {user.score}</h2>
            </div>
            <p className="text-gray-400">{user.comment}</p>
            <Problems
                problems={problems.filter((problems) => {
                    return problems.result === "AC";
                })}
            />
        </>
    );
};

export default Userpage;
