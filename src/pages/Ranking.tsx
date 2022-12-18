import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { default as UserModel } from "../models/User";

const Ranking = () => {
    const users = useLoaderData() as UserModel[];
    return (
        <>
            <h2 className="font-mono my-5">RANKING</h2>
            <div className="overflow-x-auto relative sm:rounded-lg">
                <table className="border-collapse bg-white my-8 min-w-full text-left rounded-lg">
                    <thead className="border-b-2">
                        <tr>
                            <th className="py-3 px-6">順位</th>
                            <th className="py-3 px-6">名前</th>
                            <th className="py-3 px-6">スコア</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: UserModel, index: number) =>
                            index % 2 === 0 ? (
                                <tr
                                    key={user.id}
                                    className="border-t bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                >
                                    <td className="py-4 px-6">{index + 1}</td>
                                    <td className="py-4 px-6 text-blue-500">
                                        <Link to={`/user/${user.id}`} className="hover:underline">
                                            {user.name}
                                        </Link>
                                    </td>
                                    <th className="py-4 px-6">{user.score}</th>
                                </tr>
                            ) : (
                                <tr
                                    key={user.id}
                                    className="border-t bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="py-4 px-6">{index + 1}</td>
                                    <td className="py-4 px-6 text-blue-500">
                                        <Link to={`/user/${user.id}`} className="hover:underline">
                                            {user.name}
                                        </Link>
                                    </td>
                                    <th className="py-4 px-6">{user.score}</th>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Ranking;
