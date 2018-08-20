import { Component, OnInit } from '@angular/core';
import { ProposalPaymentsModel } from '../models/ProposalPayments';
import { ProposalPaymentsService } from '../services/proposal-payments.service';

@Component({
    selector: 'app-proposal-payments',
    templateUrl: './proposal-payments.component.html',
    styleUrls: ['./proposal-payments.component.scss'],
    providers: [ProposalPaymentsService]
})
export class ProposalPaymentsComponent implements OnInit {
    public model: ProposalPaymentsModel;
    private proposalPaymentsService: ProposalPaymentsService;

    constructor(proposalPaymentsServiec: ProposalPaymentsService) {
        this.proposalPaymentsService = this.proposalPaymentsService;
        this.model = new ProposalPaymentsModel();
    }

    ngOnInit() {}

    onSubmit() {
        console.log(this.model);
        this.proposalPaymentsService.create(this.model).subscribe((data) => {
            console.log(data);
        });
    }
}
