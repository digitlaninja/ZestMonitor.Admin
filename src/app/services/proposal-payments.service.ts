import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProposalPaymentModel } from '../_models/proposal-payment';
import { Config } from '../config/config';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ProposalPaymentsService {
    private url = `${this.config.apiPath}/proposalpayments`;
    constructor(private http: HttpClient, private config: Config) {}

    public create(model: ProposalPaymentModel): Observable<any> {
        return this.http.post<any>(this.url, model);
    }

    public getPaged(
        page: number = 1,
        limit: number = 10
    ): Observable<ProposalPaymentModel[]> {
        const params = new HttpParams()
            .set('page', page.toString())
            .set('limit', limit.toString());
        return this.http.get<ProposalPaymentModel[]>(this.url, { params });
    }
}
