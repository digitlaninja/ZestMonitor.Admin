import { Routes } from '@angular/router';

import { ProposalPaymentsComponent } from '../../proposal-payments/proposal-payments.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', component: ProposalPaymentsComponent },
    { path: 'proposal-payments', component: ProposalPaymentsComponent }
];
