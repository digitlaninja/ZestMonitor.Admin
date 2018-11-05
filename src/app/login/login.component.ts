import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../_models/login';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public model: UserLogin;
    private authService: AuthService;
    private router: Router;
    public errors: string;

    constructor(authService: AuthService, router: Router) {
        this.model = new UserLogin();
        this.authService = authService;
        this.router = router;
    }

    ngOnInit() {}

    login() {
        // console.log(this.model);
        this.authService.login(this.model).subscribe(
            (response: any) => {},
            (errors) => {
                if (errors instanceof HttpErrorResponse) {
                    if (errors.status === 401) {
                        this.errors = 'Sorry, we could not log you in.';
                    } else if (errors.status == 400) {
                        this.errors = 'Please enter valid login details.';
                    }
                }
            }
        );
    }

    logout() {
        this.authService.logout();
    }
}
