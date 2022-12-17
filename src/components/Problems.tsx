import { Link } from "react-router-dom";
import { default as ProblemModel } from "../models/Problem";

export interface ProblemsProp {
    problems: ProblemModel[];
}

const Problems = ({ problems }: ProblemsProp) => (
    <div className="overflow-x-auto relative sm:rounded-lg">
        <table className="border-collapse bg-white my-8 min-w-full text-left rounded-lg">
            <thead className="border-b-2">
                <tr>
                    <th className="py-3 px-6">ID</th>
                    <th className="py-3 px-6">タイトル</th>
                    <th className="py-3 px-6">作成者</th>
                    <th className="py-3 px-6">スコア</th>
                </tr>
            </thead>
            <tbody>
                {problems.map(({ id, title, creatorId, score, result }, index) =>
                    result === "AC" ? (
                        <tr key={id} className="border-t bg-[#c3e6cb] border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="py-4 px-6 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {id}
                                </Link>
                            </td>
                            <th className="py-4 px-6 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {title}
                                </Link>
                            </th>
                            <td className="py-4 px-6 text-blue-500">
                                <Link to={`/user/${creatorId}`} className="hover:underline">
                                    {creatorId}
                                </Link>
                            </td>
                            <td className="py-4 px-6 text-gray-400">{score}</td>
                        </tr>
                    ) : result === "WA" ? (
                        <tr key={id} className="border-t bg-[#ffeeba] border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="py-4 px-6 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {id}
                                </Link>
                            </td>
                            <th className="py-4 px-6 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {title}
                                </Link>
                            </th>
                            <td className="py-4 px-6 text-blue-500">
                                <Link to={`/user/${creatorId}`} className="hover:underline">
                                    {creatorId}
                                </Link>
                            </td>
                            <td className="py-4 px-6 text-gray-400">{score}</td>
                        </tr>
                    ) : index % 2 === 0 ? (
                        <tr key={id} className="border-t bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="py-4 px-6 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {id}
                                </Link>
                            </td>
                            <th className="py-4 px-6 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {title}
                                </Link>
                            </th>
                            <td className="py-4 px-6 text-blue-500">
                                <Link to={`/user/${creatorId}`} className="hover:underline">
                                    {creatorId}
                                </Link>
                            </td>
                            <td className="py-4 px-6 text-gray-400">{score}</td>
                        </tr>
                    ) : (
                        <tr key={id} className="border-t bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {id}
                                </Link>
                            </td>
                            <th className="py-4 px-6 text-blue-500">
                                <Link to={`/problem/${id}`} className="hover:underline">
                                    {title}
                                </Link>
                            </th>
                            <td className="py-4 px-6 text-blue-500">
                                <Link to={`/user/${creatorId}`} className="hover:underline">
                                    {creatorId}
                                </Link>
                            </td>
                            <td className="py-4 px-6 text-gray-400">{score}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    </div>
);

export default Problems;
