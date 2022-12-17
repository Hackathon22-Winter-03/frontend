import { LoaderFunctionArgs } from "react-router";
import { default as ProblemPage } from "../pages/Problem";
import { default as ProblemModel } from "../models/Problem";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export async function loader({ params }: LoaderFunctionArgs): Promise<ProblemModel> {
    // TODO: implement for React Router
    const id = params.id ?? "hoge";
    // this data is sample
    return {
        id: id,
        creatorId: "hackson",
        score: 10,
        title: "Hello, world",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
        deletedAt: undefined,
        text: "sample",
        creatorName: "anko",
        language: "markov",
        result: "",
    };
}

const Problem = () => {
    return <ProblemPage />;
};

export default Problem;
