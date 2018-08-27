import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthGuard implements CanActivate {
    private authService: AuthService;
    private router: Router;
    private toastr: ToastrService;

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.userIsLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('/login');
    }
}
