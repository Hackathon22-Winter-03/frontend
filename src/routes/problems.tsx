import { default as ProblemsPage } from "../pages/Problems";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export async function loader() {
    // TODO: implement for React Router
    // this data is a sample
    return [
        {
            id: "0xabcdef",
            creatorId: "hackson",
            score: 10,
            title: "Hello, world",
            createdAt: 20221216,
            updatedAt: 20221216,
            deletedAt: undefined,
        },
        {
            id: "0x012345",
            creatorId: "hackson",
            score: 50,
            title: "hoge",
            createdAt: 20221216,
            updatedAt: 20221216,
            deletedAt: undefined,
        },
    ];
}

const Problems = () => {
    return <ProblemsPage />;
};

export default Problems;
