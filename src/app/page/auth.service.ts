import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthData {
  name: string,
  email: string,
  pass: string,
  terms: boolean,
  token?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http
      .post<AuthData>(
        'http://localhost:4000/auth/register',
        {
          name: data.name,
          password: data.pass,
          email: data.email,
          terms: data.terms,
          role: "user",
        }
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  login(data) {
    return this.http
      .post<AuthData>(
        'http://localhost:4000/auth/login',
        {
          password: data.pass,
          email: data.email
        }
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error) {

    let errorMessage = '';
    errorMessage = error.error;
    return throwError(errorMessage);

  }
}
