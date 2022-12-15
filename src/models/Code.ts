export default interface Code {
    id: string;
    userId: string;
    problemId: string;
    code: string;
    answer: string;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | undefined;
}