import { useLoaderData } from "react-router";
import { default as ProblemModel } from "../models/Problem";
import { default as ProblemsTable } from "../components/Problems";

const Problems = () => {
    const problems: ProblemModel[] = useLoaderData() as ProblemModel[];
    return (
        <>
            <h1>問題集</h1>
            <ProblemsTable problems={problems} />
        </>
    );
};

export default Problems;
