import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ProposalPaymentsComponent } from '../../proposal-payments/proposal-payments.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'proposal-payments', component: ProposalPaymentsComponent }
];
