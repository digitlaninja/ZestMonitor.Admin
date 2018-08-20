// import { Injectable } from '@angular/core';
// import {
//     HttpInterceptor,
//     HttpEvent,
//     HttpHandler,
//     HttpErrorResponse
// } from '@angular/common/http';
// import { HttpRequest } from 'selenium-webdriver/http';
// import { Observable } from 'rxjs/observable';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs/internal/observable/throwError';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(request).pipe(
//             catchError((error) => {
//                 if (error instanceof HttpErrorResponse) {
//                     if (error.status === 401) {
//                         return throwError(error.status);
//                     }
//                 }
//             })
//         );
//     }
// }
