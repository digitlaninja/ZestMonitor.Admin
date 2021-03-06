import { Component, OnInit } from '@angular/core';
import { ProposalPayment } from '../_models/proposal-payment';
import { ProposalPaymentsService } from '../_services/proposal-payments.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-proposal-payments',
    templateUrl: './proposal-payments.component.html',
    styleUrls: ['./proposal-payments.component.scss'],
    providers: [ProposalPaymentsService]
})
export class ProposalPaymentsComponent implements OnInit {
    public model: ProposalPayment = {
        shortDescription: '',
        hash: ''
    };

    public pagination: Pagination;
    public proposalPayments: ProposalPayment[];
    private proposalPaymentsService: ProposalPaymentsService;
    public proposalPaymentsParams: any = {};

    public page: number;
    public limit: number;
    public count: number;

    constructor(proposalPaymentsService: ProposalPaymentsService, private toastr: ToastrService, private route: ActivatedRoute) {
        this.proposalPaymentsService = proposalPaymentsService;
    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.proposalPayments = data['proposalPayments'].result;
            // bind pagination data from pagination key in header
            this.pagination = data['proposalPayments'].pagination;
        });
    }

    pageChanged(event: any): void {
        this.pagination.currentPage = event.page;
        this.loadProposalPayments();
        console.log(this.pagination.currentPage);
    }

    loadProposalPayments(): void {
        this.proposalPaymentsService
            .getPaged(this.pagination.currentPage, this.pagination.itemsPerPage)
            .subscribe((res: PaginatedResult<ProposalPayment[]>) => {
                this.proposalPayments = res.result;
                this.pagination = res.pagination;
            });
    }

    onSubmit() {
        this.proposalPaymentsService.create(this.model).subscribe(
            (data) => {
                this.toastr.success('Success!', 'Proposal Payment Added!');
                this.loadProposalPayments();
            },
            (errors) => {
                if (errors instanceof HttpErrorResponse) {
                    if (errors.status === 401 || errors.status === 400) {
                        this.toastr.error('Could not create payment, try login again.', 'Sorry');
                    }
                }
            }
        );
    }

    onDelete(id: number) {
        const deleteConfirmed = confirm('Are you sure?');
        if (!deleteConfirmed) return;
        this.proposalPaymentsService.delete(id).subscribe(
            (data) => {
                // window.location.reload();
                this.toastr.success('Success!', 'Proposal Payment Deleted.');
                this.loadProposalPayments();
            },
            (errors) => {
                if (errors instanceof HttpErrorResponse) {
                    if (errors.status === 401 || errors.status === 400) {
                        this.toastr.error('Could not delete payment, try login again.', 'Sorry');
                    }
                }
            }
        );
    }
}
