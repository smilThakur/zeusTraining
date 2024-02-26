import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/services/User';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { UsersignupService } from 'src/app/services/usersignup.service';
import { DataService } from 'src/app/databaseServices/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PageDataService } from 'src/app/services/page-data.service';
@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  constructor(private router: Router, private userSignupService: UsersignupService, private currentUserService: CurrentUserService, private dataService: DataService, private sanitization: DomSanitizer, private pageData: PageDataService) { }



  resumeFileName: string = ""
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: string = "";
  resumeURL: string = ""
  portfolioURL: string = "";
  preferredJobRoles = [];
  referralEmpName = "";
  jobUpdate: boolean = false;
  optedForID = false;
  optedForSE = false;
  optedForSQE = false;
  optedForJobUpdates = false;
  displayPicture: SafeUrl | null = null;
  displayImageBlob: Blob | null = null;
  reumeFile: File | null = null;

  countryCode = ""
  number = ""

  cancel() {
    this.router.navigate([''])
    this.currentUserService.destoryUser()
    console.log("pressed")
  }

  setupRedirectedUserDetails() {
    const currentUser: User = this.currentUserService.getUser()
    this.firstName = currentUser.personalQualification.firstName
    this.lastName = currentUser.personalQualification.lastName
    this.email = currentUser.personalQualification.email
    this.resumeURL = currentUser.personalQualification.resumeURL
    this.resumeFileName = currentUser.personalQualification.resumeName
    if (currentUser.personalQualification.portfolioURL) {
      this.portfolioURL = currentUser.personalQualification.portfolioURL
    }
    this.optedForID = currentUser.personalQualification.preferredJobRoles[0]
    this.optedForSE = currentUser.personalQualification.preferredJobRoles[1]
    this.optedForSQE = currentUser.personalQualification.preferredJobRoles[2]
    if (currentUser.personalQualification.referralEmployeeName) {
      this.referralEmpName = currentUser.personalQualification.referralEmployeeName
    }
    this.optedForJobUpdates = currentUser.personalQualification.sendJobEmail
    if (this.currentUserService.userFile.displayImg) {
      this.displayPicture = this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(this.currentUserService.userFile.displayImg))
    }
    if (this.pageData.personalInfo.countryCode) {
      this.countryCode = this.pageData.personalInfo.countryCode
    }
    if (this.pageData.personalInfo.number) {
      this.number = this.pageData.personalInfo.number
    }
    if (this.pageData.personalInfo.phoneNumber) {
      this.phoneNumber = this.pageData.personalInfo.phoneNumber
    }
    console.log(this.countryCode, this.number, this.phoneNumber)
  }




  handleDisplayImg(event: any) {
    let img: File = event.target.files[0];
    this.currentUserService.setDisplayImg(img)
    this.displayPicture = this.sanitization.bypassSecurityTrustUrl(URL.createObjectURL(img))
    console.log(this.displayPicture)
  }


  async handleResumeURL(event: any) {
    let resume: File = event.target.files[0];
    console.log(resume)
    this.resumeFileName = resume.name;
    this.reumeFile = resume;
    this.currentUserService.setResume(this.reumeFile)
  }


  formSubmit(form: FormGroup) {

  }

  async nextBtnClicked() {
    let user: User = new User()
    console.log(this.countryCode, this.number);
    console.log(this.phoneNumber)
    user.personalQualification.firstName = this.firstName;
    user.personalQualification.lastName = this.lastName;
    user.personalQualification.phoneNumber = this.phoneNumber;
    user.personalQualification.email = this.email;
    user.personalQualification.portfolioURL = this.portfolioURL;
    user.personalQualification.preferredJobRoles = [this.optedForID, this.optedForSE, this.optedForSQE]
    user.personalQualification.referralEmployeeName = this.referralEmpName
    user.personalQualification.sendJobEmail = this.optedForJobUpdates
    user.personalQualification.resumeURL = this.resumeURL
    user.personalQualification.resumeName = this.resumeFileName
    this.pageData.personalInfo.countryCode = this.countryCode
    this.pageData.personalInfo.number = this.number
    this.pageData.personalInfo.phoneNumber = this.phoneNumber
    try {
      this.userSignupService.validatePersonalInfo(user, this.currentUserService.userFile)
      this.currentUserService.updateUser(user)
    }
    catch (error) {
      alert(error)
      return
    }

    if (this.email) {
      try {
        let uniqueEmail = await this.dataService.checkUniqueEmail(this.email)
        if (uniqueEmail === 1) {
          this.router.navigate(['signup', 'qualificationinfo'])
        }
        else {
          alert("Email already registered")
        }
      } catch (err) {
        alert("Internal server error check your internet connection")
      }
    }


  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
    return 'Your data will be lost!';
  }

  ngOnInit(): void {
    this.setupRedirectedUserDetails()
  }

}
