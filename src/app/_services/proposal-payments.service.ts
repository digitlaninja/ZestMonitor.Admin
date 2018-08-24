import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProposalPayment } from '../_models/proposal-payment';
import { Config } from '../config/config';
import { Observable } from 'rxjs/observable';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

@Injectable()
export class ProposalPaymentsService {
    private url = `${this.config.apiPath}/proposalpayments`;
    constructor(private http: HttpClient, private config: Config) {}

    public create(model: ProposalPayment): Observable<any> {
        return this.http.post<any>(this.url, model);
    }

    public getPaged(page?, itemsPerPage?): Observable<PaginatedResult<ProposalPayment[]>> {
        const paginatedResult: PaginatedResult<ProposalPayment[]> = new PaginatedResult<ProposalPayment[]>();
        const params = new HttpParams({ fromObject: { pageNumber: page, pageSize: itemsPerPage } });

        // observe: response -> observe full response
        return this.http.get<ProposalPayment[]>(this.url, { observe: 'response', params }).pipe(
            map((response) => {
                paginatedResult.result = response.body;
                if (response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                }

                return paginatedResult;
            })
        );
    }
}
