export default interface Problem {
    id: string;
    text: string;
    title: string;
    createdAt: string;
    creatorId: string;
    creatorName: string;
    deletedAt: string | undefined;
    updatedAt: string;
    result: string;
    score: number;
    language: string;
}
