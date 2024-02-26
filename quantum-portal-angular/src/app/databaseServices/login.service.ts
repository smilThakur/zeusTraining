import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { UserAuth } from './UserAuth';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router,) { }

  subscription: Subscription | null = null;

  tempToken: string | null = null;

  loginUser(userAuth: UserAuth): Observable<any> {
    console.log(userAuth)
    let url = "https://localhost:7027/api/login"
    return this.http.post<any>(url, userAuth)
  }

  isLoggedIn() {
    return localStorage.getItem("access_token") != null
  }

  getToken() {
    return localStorage.getItem("access_token") || this.tempToken
  }

  setTempToken(token: string | null) {
    this.tempToken = token;
  }

  getTempToken(): string | null {
    return this.tempToken;
  }

  getTokenUserDetails() {
    let jwtHelp = new JwtHelperService()
    return jwtHelp.decodeToken(this.getToken() || "")

  }

  getCurrentUserId() {
    let jwtHelp = new JwtHelperService()
    return jwtHelp.decodeToken(this.getToken() || "").id
  }

  logOut() {
    alert("Your session expired")
    localStorage.clear()
    this.tempToken = null
    this.router.navigate(['login'])
  }
}

