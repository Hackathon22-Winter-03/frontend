import { default as ProblemPage } from "../pages/Problem";
import { default as ProblemModel } from "../models/Problem";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export async function loader(): Promise<ProblemModel> {
    // TODO: implement for React Router
    // this data is sample
    return {
        id: "0xabcdef",
        creatorId: "hackson",
        score: 10,
        title: "Hello, world",
        createdAt: 20221216,
        updatedAt: 20221216,
        deletedAt: undefined,
    };
}

const Problem = () => {
    return <ProblemPage />;
};

export default Problem;
