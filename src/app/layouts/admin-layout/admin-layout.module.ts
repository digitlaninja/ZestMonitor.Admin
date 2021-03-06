import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ProposalPaymentsComponent } from '../../proposal-payments/proposal-payments.component';
import { ProposalPaymentsService } from '../../_services/proposal-payments.service';
import { AgGridModule } from 'ag-grid-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap';
import { ProposalPaymentsResolver } from '../../_resolvers/proposal-payments-list.resolver';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ChartsModule,
        NgbModule,
        ToastrModule.forRoot(),
        PaginationModule,
        ButtonsModule.forRoot(),
        AgGridModule.withComponents([]),
        NgxDatatableModule
    ],
    declarations: [
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        ProposalPaymentsComponent
    ],
    providers: [ProposalPaymentsService, ProposalPaymentsResolver, PaginationConfig]
})
export class AdminLayoutModule {}
