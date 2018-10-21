import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ConfigService } from '../config.service';

export const TOKEN_NAME = 'access_token';

@Injectable()
export class AuthService {


  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private cfs: ConfigService) {
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    // Check whether the token is expired and return
    // true or false
    let valid = false;

    try {
      valid = !this.jwtHelper.isTokenExpired(token);
    } catch (e) {
      valid = false;
    }

    return valid;
  }

  // login(user): Promise<string> {
  //   return this.http
  //     .post(`${this.url}/login`, JSON.stringify(user))
  //     .toPromise()
  //     .then(res => res.text());
  // }

  login(data): Observable<any> {
    return this.http.post<any>(this.cfs.getUrl(this.cfs.api.auth.login), data);
  }

  logout(): void {
    localStorage.setItem(TOKEN_NAME, null);
  }

  forgot(data): Observable<any> {
    return this.http.post<any>(this.cfs.getUrl(this.cfs.api.auth.forgot), data);
  }

  reset(data): Observable<any> {
    return this.http.post<any>(this.cfs.getUrl(this.cfs.api.auth.reset), data);
  }

}
