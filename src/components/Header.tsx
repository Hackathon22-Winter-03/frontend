import { Link } from "react-router-dom";

export interface HeaderProp {
    userId: string;
}

const Header = ({ userId }: HeaderProp) => {
    // TODO: リダイレクトのリンクを指定
    return (
        <div className="bg-slate-300 flex items-stretch p-5 justify-between text-gray-500 text-xl">
            <div className="items-start">
                <Link to="/" className="px-4 hover:text-gray-900 hover:underline">
                    はっくしょん
                </Link>
                <Link to="/problems" className="px-4 hover:text-gray-900 hover:underline">
                    問題
                </Link>
            </div>
            <div className="items-end">
                <Link to="/ranking" className="px-4 hover:text-gray-900 hover:underline">
                    ランキング
                </Link>
                <Link to={`/user/${userId}`} className="px-4 hover:text-gray-900 hover:underline">
                    {userId}
                </Link>
            </div>
        </div>
    );
};

export default Header;
