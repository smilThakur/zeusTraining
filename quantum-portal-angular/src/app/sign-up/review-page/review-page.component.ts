import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterUserService } from 'src/app/databaseServices/register-user.service';
import { User } from 'src/app/services/User';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { UsersignupService } from 'src/app/services/usersignup.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  constructor(private userSignupService: UsersignupService, private router: Router, private currentUserService: CurrentUserService, private registerUserService: RegisterUserService, private sanitization: DomSanitizer) { }

  firstName: string = ""
  displayImgURL: SafeUrl | null = null
  lastName: string = ""
  email: string = ""
  phoneNumber: string = ""
  resumeName: string = ""
  portfolioURL: string | null = ""
  preferredJobRoles: string[] = []
  referralEmpName: string | null = ""
  sendJobUpdate: boolean = false;
  aggrPercentage: string = ""
  yearOfpassing: string = ""
  qualifications: string = ""
  stream: string = ""
  collegeName: string = ""
  OtherCollegeName: string | null = ""
  collegeLocated: string = ""
  applicantType: string = ""
  yearsOfexp: string = ""
  currentCTC: string = ""
  expectedCTC: string = ""
  expertiseTech: string[] = []
  otherExpertiseTech: string[] | null = []
  fimiliarTech: string[] = []
  otherFimiliarTech: string[] | null = []
  onNoticePeriod: boolean = false;
  noticePeriodEndDate: string = ""
  noticePeriodTenure: string = ""
  appearedForZuesTest: boolean = false
  roleAppliedFor: string | null = ""

  roles = ["Instructional Designer", 'Software Engineer', 'Software Quality Engineer']
  technologies = ["Javascript", "Angular JS", "React", "Node JS", "Others"]


  setupDetails(currentUser: User) {
    this.firstName = currentUser.personalQualification.firstName
    this.lastName = currentUser.personalQualification.lastName
    this.email = currentUser.personalQualification.email
    this.phoneNumber = currentUser.personalQualification.phoneNumber
    this.resumeName = currentUser.personalQualification.resumeName
    this.portfolioURL = currentUser.personalQualification.portfolioURL
    if (this.currentUserService.userFile.displayImg) {
      let displayImage: File = this.currentUserService.userFile.displayImg;
      let blobUrl: string = URL.createObjectURL(displayImage);
      this.displayImgURL = this.sanitization.bypassSecurityTrustUrl(blobUrl);
      console.log("review page", this.displayImgURL);
    }
    currentUser.personalQualification.preferredJobRoles.forEach((role, idx) => {
      if (role === true) {
        this.preferredJobRoles.push(this.roles[idx])
      }
    })
    this.referralEmpName = currentUser.personalQualification.referralEmployeeName
    this.sendJobUpdate = currentUser.personalQualification.sendJobEmail

    this.aggrPercentage = currentUser.educationQualifications.agrrPercetage
    this.yearOfpassing = currentUser.educationQualifications.yearOfPassing
    this.qualifications = currentUser.educationQualifications.qualification
    this.stream = currentUser.educationQualifications.stream
    this.collegeName = currentUser.educationQualifications.college
    this.OtherCollegeName = currentUser.educationQualifications.otherCollegeName
    this.collegeLocated = currentUser.educationQualifications.collegeLocation
    this.appearedForZuesTest = currentUser.educationQualifications.appearForZeusTest
    this.roleAppliedFor = currentUser.educationQualifications.roleAppliedFor
    this.applicantType = currentUser.educationQualifications.experienced ? "Experienced" : "Fresher"
    if (this.applicantType === "Fresher") {
      this.setupFresherDetails(currentUser)
    }
    else {
      this.setupExpUserDetails(currentUser)
    }


  }


  setupFresherDetails(currentUser: User) {
    if (currentUser.educationQualifications.fresherDetails) {
      currentUser.educationQualifications.fresherDetails.fimiliarTechnologies.forEach((role, idx) => {
        if (role === true) {
          this.fimiliarTech.push(this.technologies[idx])
        }
      })
      if (this.fimiliarTech.includes("Others")) {
        this.otherFimiliarTech = currentUser.educationQualifications.fresherDetails.otherFimiliarTechs
      }
    }
  }

  setupExpUserDetails(currentUser: User) {
    if (currentUser.educationQualifications.experienceDetails) {
      this.yearsOfexp = currentUser.educationQualifications.experienceDetails.yearsOfExp
      this.currentCTC = currentUser.educationQualifications.experienceDetails.currentCTC
      this.expectedCTC = currentUser.educationQualifications.experienceDetails.expectedCTC
      currentUser.educationQualifications.experienceDetails.fimiliarTech.forEach((role, idx) => {
        if (role === true) {
          this.fimiliarTech.push(this.technologies[idx])
        }
      })
      if (this.fimiliarTech.includes("Others")) {
        this.otherFimiliarTech = currentUser.educationQualifications.experienceDetails.otherFimiliarTechs
      }

      currentUser.educationQualifications.experienceDetails.expertiseTech.forEach((role, idx) => {
        if (role === true) {
          this.expertiseTech.push(this.technologies[idx])
        }
      })
      if (this.expertiseTech.includes("Others")) {
        this.otherExpertiseTech = currentUser.educationQualifications.experienceDetails.otherExpertiseTechs
      }

      this.onNoticePeriod = currentUser.educationQualifications.experienceDetails.onNoticePeriod
      this.noticePeriodEndDate = currentUser.educationQualifications.experienceDetails.noticePeriodEndDate
      this.noticePeriodTenure = currentUser.educationQualifications.experienceDetails.tenureOfNotice
    }
  }




  goPrevious() {
    this.router.navigate(['signup', 'qualificationinfo'])
  }

  cancel() {
    this.router.navigate(['login'])
    this.currentUserService.destoryUser()
  }


  create() {
    this.router.navigate(['signup', 'createpassword'])
  }


  editPersonalInfo() {
    this.router.navigate(['signup', 'personalinfo'])
  }


  editQualificationInfo() {
    this.router.navigate(['signup', 'qualificationinfo'])
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
    return 'Your data will be lost!';
  }

  ngOnInit(): void {
    let currentUser = this.currentUserService.getUser()
    try {
      this.userSignupService.validateFullUser(currentUser, this.currentUserService.userFile)
      this.setupDetails(currentUser)
      setTimeout(() => {
        this.userSignupService.setCanCreate(true);
      });
    }
    catch (err) {
      this.router.navigate(['signup', 'personalinfo'])
      alert(err)
    }
  }

}
