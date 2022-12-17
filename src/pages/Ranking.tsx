import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { default as UserModel } from "../models/User";

const Ranking = () => {
    const users = useLoaderData() as UserModel[];
    return (
        <>
            <h1>ランキング</h1>
            <table className="border-collapse my-8 min-w-full text-black">
                <thead className="border-b-2">
                    <tr className="text-left">
                        <th className="p-1">順位</th>
                        <th className="p-1">名前</th>
                        <th className="p-1">スコア</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: UserModel, i: number) => (
                        <tr key={user.id} className="border-t">
                            <td className="p-1">{i + 1}</td>
                            <td className="p-1 text-blue-500">
                                <Link to={`/user/${user.name}`} className="hover:underline">
                                    {user.name}
                                </Link>
                            </td>
                            <td className="p-1">{user.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Ranking;
