import { Routes } from '@angular/router';

import { ProposalPaymentsComponent } from '../../proposal-payments/proposal-payments.component';
import { ProposalPaymentsResolver } from '../../_resolvers/proposal-payments-list.resolver';

export const AdminLayoutRoutes: Routes = [
    { path: '', component: ProposalPaymentsComponent },
    { path: '/', component: ProposalPaymentsComponent },
    { path: 'proposal-payments', component: ProposalPaymentsComponent, resolve: { proposalPayments: ProposalPaymentsResolver } }
];
