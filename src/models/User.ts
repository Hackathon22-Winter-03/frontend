export default interface User {
    id: string;
    name: string;
    comment: string;
    score: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | undefined;
}
