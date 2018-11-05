import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { UserLogin } from '../_models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private config: Config;
    private http: HttpClient;
    private router: Router;
    private jwtHelper = new JwtHelperService();

    constructor(httpClient: HttpClient, router: Router) {
        this.http = httpClient;
        this.router = router;
        this.config = new Config();
    }

    // Hit Login endpoint, perform login
    // Send response through pipe, and save token to local storage.
    login(model: UserLogin): Observable<void> {
        if (this.userIsLoggedIn) {
            this.router.navigateByUrl('/proposal-payments');
        }
        const url = `${this.config.apiPath}/auth/login`;
        return (
            this.http
                .post(url, model)
                // transform response through pipe
                .pipe(
                    map((response: any) => {
                        if (response) {
                            localStorage.setItem('token', response.token);
                            this.router.navigateByUrl('/proposal-payments');
                        }
                    })
                )
        );
    }

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }

    userIsLoggedIn(): boolean {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    createAuthHeader(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        });
    }
}
