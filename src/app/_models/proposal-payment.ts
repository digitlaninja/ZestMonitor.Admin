export interface ProposalPayment {
    hash: string;
    shortDescription: string;
    amount?: number;
    expectedPayment?: number;
    dateCreated?: string;
}
