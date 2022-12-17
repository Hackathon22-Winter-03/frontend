import { Link } from "react-router-dom";

const Index = () => {
    return (
        <>
            <h1>拡張マルコフアルゴリズム</h1>
            <ol className="py-5">
                <li>
                    <Link to="/problems" className="text-blue-500 hover:underline py-1">
                        問題表
                    </Link>
                </li>
                <li>
                    <Link to="/ranking" className="text-blue-500 hover:underline py-1">
                        ランキング
                    </Link>
                </li>
            </ol>
        </>
    );
};

export default Index;
