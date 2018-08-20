import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthService } from './_services/auth.service';
import { ProposalPaymentsService } from './services/proposal-payments.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,

        NgbModule.forRoot()
    ],
    declarations: [AppComponent, AdminLayoutComponent, LoginComponent],
    providers: [AuthService, ProposalPaymentsService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
