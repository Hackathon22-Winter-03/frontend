export default interface ProblemAggregate {
    id: string;
    creatorId: string;
    creatorName: string;
    result: string;
    score: number;
    title: string;
    text: string;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | undefined;
}
