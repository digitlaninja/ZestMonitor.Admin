import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../_models/login';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public model: UserLogin;
    private authService: AuthService;
    private router: Router;

    constructor(authService: AuthService, router: Router) {
        this.model = new UserLogin();
        this.authService = authService;
        this.router = router;
    }

    ngOnInit() {}

    login() {
        console.log(this.model);
        this.authService.login(this.model).subscribe(
            (next) => {
                console.log('Logged in successfully');
                this.router.navigateByUrl('/proposal-payments');
            },
            (error) => {
                console.log('Logged in failed');
            }
        );
    }

    logout(event: MouseEvent) {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }
}
