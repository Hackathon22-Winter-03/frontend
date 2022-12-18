import { useLoaderData } from "react-router";
import { default as ProblemModel } from "../models/Problem";
import { default as ProblemsTable } from "../components/Problems";

const Problems = () => {
    const problems: ProblemModel[] = useLoaderData() as ProblemModel[];
    return (
        <>
            <h2 className="font-mono my-5">CHALLENGES</h2>
            <div></div>
            <p className="font-body">さまざまな計算モデルを用いて問題を解いていき、チューリング完全を示そう！</p>
            <ProblemsTable problems={problems} />
        </>
    );
};

export default Problems;
