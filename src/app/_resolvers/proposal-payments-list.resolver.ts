import { ProposalPayment } from '../_models/proposal-payment';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProposalPaymentsService } from '../_services/proposal-payments.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProposalPaymentsResolver implements Resolve<ProposalPayment[]> {
    pageNumber = 1;
    pageSize = 1;

    constructor(private proposalPaymentsService: ProposalPaymentsService, private router: Router, private toastr: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ProposalPayment[]> {
        return this.proposalPaymentsService.getPaged(this.pageNumber, this.pageSize).pipe(
            catchError((error) => {
                this.toastr.error('Problem retrieving data');
                this.router.navigate(['/proposal-payments']);
                return of(null); // creates fake response, as no real backend talk needed
            })
        );
    }
}
