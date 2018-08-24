import { Component, OnInit } from '@angular/core';
import { ProposalPayment } from '../_models/proposal-payment';
import { ProposalPaymentsService } from '../_services/proposal-payments.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
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
    public proposalPayments: ProposalPayment[];
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

    constructor(proposalPaymentsService: ProposalPaymentsService, private toastr: ToastrService, private route: ActivatedRoute) {
        this.proposalPaymentsService = proposalPaymentsService;
    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.proposalPayments = data['proposalPayments'].result;
        });
        // this.loadProposalPayments(1, 2);
    }

    // loadProposalPayments(page: number, limit: number) {
    //     this.proposalPaymentsService.getPaged(page, limit).subscribe((proposalPayments: ProposalPayment[]) => {
    //         console.log(proposalPayments);
    //         // this.rowData = proposalPayments;
    //         this.proposalPayments = proposalPayments;
    //     });
    // }

    onSubmit() {
        console.log(this.model);
        this.proposalPaymentsService.create(this.model).subscribe((data) => {
            window.location.reload();
            this.toastr.success('Success!', 'Proposal Payment Added!');
        });
    }
}
