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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ProposalPaymentsComponent } from '../../proposal-payments/proposal-payments.component';
import { ProposalPaymentsService } from '../../services/proposal-payments.service';
import { AgGridModule } from 'ag-grid-angular';
import { Config } from '../../config/config';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ChartsModule,
        NgbModule,
        ToastrModule.forRoot(),
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
    providers: [ProposalPaymentsService, Config]
})
export class AdminLayoutModule {}
