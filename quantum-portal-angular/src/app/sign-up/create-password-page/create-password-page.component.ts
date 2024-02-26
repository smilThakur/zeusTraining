import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth } from 'src/app/databaseServices/UserAuth';
import { RegisterUserService } from 'src/app/databaseServices/register-user.service';
import { User, UserFiles } from 'src/app/services/User';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { UsersignupService } from 'src/app/services/usersignup.service';

@Component({
  selector: 'app-create-password-page',
  templateUrl: './create-password-page.component.html',
  styleUrls: ['./create-password-page.component.scss']
})
export class CreatePasswordPageComponent implements OnInit {

  constructor(private router: Router, private currentUserService: CurrentUserService, private userSignService: UsersignupService, private registerUserService: RegisterUserService) { }

  email: string = ""

  password: string = ""
  confirmPassword: string = ""

  isDiff: boolean = true
  isEmpty: boolean = true
  isWeak: boolean = true;
  isloading: boolean = false;

  userAuth: UserAuth = {
    email: this.currentUserService.user.personalQualification.email,
    password: this.password
  }

  checkForValidation(user: User, userFile: UserFiles) {
    try {
      this.userSignService.validateFullUser(user, userFile)
    }
    catch (err) {
      alert(err)
      this.router.navigate(['signup', 'personalinfo'])
    }
  }

  onChange(value: any) {
    this.isDiff = this.password !== this.confirmPassword;

    this.isEmpty = this.password.trim() === '' || this.confirmPassword.trim() === '';

    this.isWeak = this.password.length < 8;
  }


  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
    return 'You will need to fill all forms again!';
  }


  async createUser() {
    console.log(this.userAuth)
    this.userAuth.password = this.password
    this.userAuth.email = this.currentUserService.user.personalQualification.email
    if (this.userAuth.email && this.userAuth.password) {
      if (this.password && this.confirmPassword) {
        if (this.password === this.confirmPassword) {
          try {
            this.isloading = true
            await this.registerUserService.registerUserog(this.currentUserService.getUser(), this.currentUserService.userFile, this.userAuth)
            alert("user successfully created")
            this.router.navigate(['login'])
          } catch (err) {
            alert("err in review"+err)
            return
          }
        } else {
          alert("passwords not matching")
          return
        }
      }else {
        alert("please fill password")
        return
      }
    } else{
      alert("try again")
    }

   

  }

  ngOnInit(): void {
    let user: User = this.currentUserService.getUser()
    let userFiles: UserFiles = this.currentUserService.userFile;
    this.checkForValidation(user, userFiles)
    this.email = user.personalQualification.email
  }

}
