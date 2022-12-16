import { Link } from "react-router-dom";

function Hackson() {
    return (
        <Link to="/" className="px-4 hover:text-gray-900 hover:underline">
            はっくしょん
        </Link>
    );
}

function Problems() {
    return (
        <Link to="/problems" className="px-4 hover:text-gray-900 hover:underline">
            問題
        </Link>
    );
}

function Players() {
    return (
        <Link to="/ranking" className="px-4 hover:text-gray-900 hover:underline">
            プレイヤー
        </Link>
    );
}

function Home({ playerId }: { playerId: string }) {
    return (
        <Link to="/user" className="px-4 hover:text-gray-900 hover:underline">
            {playerId}
        </Link>
    );
}

export default function Header({ playerId }: { playerId: string }) {
    return (
        <div className="bg-slate-300 flex items-stretch p-5 justify-between text-gray-500 text-xl">
            <div className="items-start">
                <Hackson />
                <Problems />
            </div>
            <div className="items-end">
                <Players />
                <Home playerId={playerId} />
            </div>
        </div>
    );
}
