interface Problem {
    id: string;
    creatorId: string;
    score: number;
    title: string;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | undefined;
}
interface Code {
    id: string;
    userId: string;
    problemId: string;
    code: string;
    answer: string;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | undefined;
}
interface User {
    id: string;
    name: string;
    comment: string;
    score: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | undefined;
}
