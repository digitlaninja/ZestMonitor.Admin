import { Component, OnInit } from '@angular/core';
import { ProposalPaymentModel } from '../_models/proposal-payment';
import { ProposalPaymentsService } from '../services/proposal-payments.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-proposal-payments',
    templateUrl: './proposal-payments.component.html',
    styleUrls: ['./proposal-payments.component.scss'],
    providers: [ProposalPaymentsService]
})
export class ProposalPaymentsComponent implements OnInit {
    public model: ProposalPaymentModel = {
        shortDescription: '',
        hash: ''
    };
    public proposalPayments: ProposalPaymentModel[];
    private proposalPaymentsService: ProposalPaymentsService;
    // public rows: ProposalPaymentModel[];
    // public columns = [
    //     { prop: 'hash' },
    //     { name: 'shortDescription' },
    //     { name: 'amount' },
    //     { name: 'expectedPayment' }
    // ];
    public page: number;
    public limit: number;
    public count: number;

    constructor(
        proposalPaymentsService: ProposalPaymentsService,
        private toastr: ToastrService
    ) {
        this.proposalPaymentsService = proposalPaymentsService;
    }

    ngOnInit() {
        this.loadProposalPayments(1, 2);
    }

    loadProposalPayments(page: number, limit: number) {
        this.proposalPaymentsService
            .getPaged(page, limit)
            .subscribe((proposalPayments: ProposalPaymentModel[]) => {
                console.log(proposalPayments);
                // this.rowData = proposalPayments;
                this.proposalPayments = proposalPayments;
            });
    }

    onSubmit() {
        console.log(this.model);
        this.proposalPaymentsService.create(this.model).subscribe((data) => {
            window.location.reload();
            this.toastr.success('Success!', 'Proposal Payment Added!');
        });
    }
}
