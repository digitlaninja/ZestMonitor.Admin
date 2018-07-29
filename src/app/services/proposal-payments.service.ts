import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProposalPaymentsModel } from '../models/ProposalPayments';

@Injectable()
export class ProposalPaymentsService {
    baseUrl: string = 'http://localhost:5000/api';

    constructor(private http: HttpClient) {}

    create(model: ProposalPaymentsModel) {
        return this.http.post<any>('http://localhost:5000/api/proposalpayments', model);
    }
}
