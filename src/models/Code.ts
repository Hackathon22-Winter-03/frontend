export default interface Code {
    id: string;
    userId: string;
    problemId: string;
    code: string;
    result: string | undefined;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | undefined;
}
