export default interface Problem {
    id: string;
    creatorId: string;
    score: number;
    title: string;
    result: string;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | undefined;
}
