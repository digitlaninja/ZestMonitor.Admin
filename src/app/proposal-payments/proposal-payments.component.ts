import { Component, OnInit } from '@angular/core';
import { ProposalPaymentsModel } from '../models/ProposalPayments';

@Component({
    selector: 'app-proposal-payments',
    templateUrl: './proposal-payments.component.html',
    styleUrls: ['./proposal-payments.component.scss']
})
export class ProposalPaymentsComponent implements OnInit {
    model = new ProposalPaymentsModel();

    constructor() {}

    ngOnInit() {}

    onSubmit() {
        console.log(this.model);
    }
}
