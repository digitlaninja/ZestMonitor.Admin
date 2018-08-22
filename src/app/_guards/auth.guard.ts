import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    private authService: AuthService;
    private router: Router;
    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.userIsLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('/login');
        alert('You shall not pass!!!');
    }
}
