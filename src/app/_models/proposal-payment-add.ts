export interface ProposalPaymentAdd {
    hash: string;
    shortDescription: string;
    amount?: number;
    expectedPayment?: number;
    createdAt?: string;
}
