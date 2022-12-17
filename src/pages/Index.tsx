import { Link } from "react-router-dom";

const Index = () => {
    return (
        <>
            <h1 className="font-mono">Turing Qomplete</h1>
            <ol className="py-5">
                <li>
                    <Link to="/problems" className="text-blue-500 hover:underline py-1">
                        CHALLENGES
                    </Link>
                </li>
                <li>
                    <Link to="/ranking" className="text-blue-500 hover:underline py-1">
                        RANKING
                    </Link>
                </li>
            </ol>
        </>
    );
};

export default Index;
