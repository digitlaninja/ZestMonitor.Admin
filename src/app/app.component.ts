import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
// import { FormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private router: Router, private authService: AuthService) {
        if (this.authService.userIsLoggedIn) {
            this.router.navigateByUrl('/proposal-payments');
        }
    }
}
