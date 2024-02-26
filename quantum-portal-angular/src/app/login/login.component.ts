import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { RegisterUserService } from '../databaseServices/register-user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validate } from 'uuid';
import { LoginService } from '../databaseServices/login.service';
import { UserAuth } from '../databaseServices/UserAuth';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private registerUserService: RegisterUserService, private loginServie: LoginService, private router: Router) { }


  getSelected(val: string) {
    console.log("got the value", val)
  }



  showPass() {
    let pass: HTMLInputElement = document.getElementById("pass") as HTMLInputElement
    pass.type = pass.type == "text" ? "password" : "text"
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false, Validators.required)
  })

  setToken(token: string) {
    localStorage.setItem("access_token", token)
    this.loadCurrentUser()
  }

  jwtHelperService = new JwtHelperService();

  loadCurrentUser() {
    const token = localStorage.getItem("access_token")
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null
    console.log(userInfo)
  }

  submitForm() {
    console.warn(this.loginForm.value);
    if (this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password) {
      let userAuth: UserAuth = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      }
      this.loginServie.loginUser(userAuth).subscribe({
        next: (data) => {

          if (this.loginForm.value.rememberMe) {
            this.setToken(data.token)
            console.log("remembered")
          }
          else {
            this.loginServie.setTempToken(data.token)
            console.log("here")
          }
          this.router.navigate(['walkin', 'all'])

        },
        error: (err) => {
          console.log(err)
          alert(err.error.error)
        }
      })

    }
  }



  ngOnInit(): void {
    console.log(this.loginServie.isLoggedIn())
    if (this.loginServie.isLoggedIn()) {
      this.router.navigate(['walkin', 'all'])
    }
    else {
      this.loginServie.setTempToken(null)
      localStorage.clear()
    }
  }

}
