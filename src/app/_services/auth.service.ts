import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { UserLogin } from '../_models/login';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private config: Config;
    private http: HttpClient;
    private router: Router;

    constructor(httpClient: HttpClient, router: Router) {
        this.http = httpClient;
        this.router = router;
        this.config = new Config();
    }

    // Hit Login endpoint, perform login
    // Send response through pipe, and save token to local storage.
    login(model: UserLogin): Observable<void> {
        const url = `${this.config.apiPath}/auth/login`;

        return (
            this.http
                .post(url, model)
                // transform response through pipe
                .pipe(
                    map((response: any) => {
                        if (response) {
                            localStorage.setItem('token', response.token);
                        }
                    })
                )
        );
    }

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }

    loggedIn() {
        const isLoggedIn = !!localStorage.getItem('token');
        return isLoggedIn;
    }
}
