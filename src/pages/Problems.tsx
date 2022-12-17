import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { default as ProblemModel } from "../models/Problem";

const Problems = () => {
    const problems: ProblemModel[] = useLoaderData() as ProblemModel[];
    return (
        <>
            <h1 className="text-4xl font-bold">問題集</h1>
            <table className="border-collapse my-8 min-w-full text-black">
                <thead className="border-b-2">
                    <tr className="text-left">
                        <th className="p-1">ID</th>
                        <th className="p-1">タイトル</th>
                        <th className="p-1">作成者</th>
                        <th className="p-1">スコア</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map(({ id, title, creatorId, score }) => (
                        <tr key={id} className="border-t">
                            <td className="p-1 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {id}
                                </Link>
                            </td>
                            <td className="p-1 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {title}
                                </Link>
                            </td>
                            <td className="p-1 text-blue-500">
                                <Link to={`/user/${creatorId}`} className="hover:underline">
                                    {creatorId}
                                </Link>
                            </td>
                            <td className="p-1 text-gray-400">{score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Problems;
