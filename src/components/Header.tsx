import { Link } from "react-router-dom";

export interface HeaderProp {
    userId: string;
    userName: string;
}

const Header = ({ userId, userName }: HeaderProp) => {
    return (
        <div className="bg-white flex items-stretch p-5 justify-between text-gray-500 text-xl border-b border-gray-200">
            <div className="items-start">
                <Link to="/" className="px-6 text-gray-600 hover:text-gray-900 hover:underline">
                    Turing Qomplete
                </Link>
                <Link to="/problems" className="px-6 hover:text-gray-900 hover:underline">
                    問題
                </Link>
            </div>
            <div className="items-end">
                <Link to="/ranking" className="px-6 hover:text-gray-900 hover:underline">
                    ランキング
                </Link>
                <Link to={`/user/${userId}`} className="px-6 hover:text-gray-900 hover:underline">
                    {userName}
                </Link>
            </div>
        </div>
    );
};

export default Header;
