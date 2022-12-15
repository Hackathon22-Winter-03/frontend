import { Link } from "react-router-dom";
function Hackson() {
    return (
        <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900 text-3xl">
            はっくしょん
        </Link>
    );
}
function Problems() {
    return (
        <Link to="/problems" className="text-base font-medium text-gray-500 hover:text-gray-900  text-3xl">
            問題
        </Link>
    );
}
function Players() {
    return (
        <Link to="/ranking" className="text-base font-medium text-gray-500 hover:text-gray-900 text-3xl">
            プレイヤー
        </Link>
    );
}
function Home({ playerId }: { playerId: string }) {
    return (
        <Link to="/user" className="text-base font-medium text-gray-500 hover:text-gray-900 text-3xl">
            {playerId}
        </Link>
    );
}

export default function Header({ playerId }: { playerId: string }) {
    return (
        <div className="bg-slate-300   flex justify-between items-center text-white text-5xl">
            <div className="px-4">
                <Hackson />
            </div>
            <div className="px-8">
                <Problems />
            </div>
            <div className="px-16">
                <Players />
            </div>

            <div className="px-20">
                <Home playerId={playerId} />
            </div>
        </div>
    );
}
