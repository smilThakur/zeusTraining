import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/databaseServices/data.service';
import { User, FresherDetails, ExperienceDetails } from 'src/app/services/User';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { PageDataService } from 'src/app/services/page-data.service';
import { UsersignupService } from 'src/app/services/usersignup.service';

@Component({
  selector: 'app-qualification-info',
  templateUrl: './qualification-info.component.html',
  styleUrls: ['./qualification-info.component.scss']
})
export class QualificationInfoComponent implements OnInit {

  constructor(private router: Router, private userSignupServices: UsersignupService, private currentUserService: CurrentUserService, private dataService: DataService, private pageData: PageDataService) { }

  technologies = ["Javascript", "Angular JS", "React", "Node JS", "Others"]
  colleges: string[] = []
  qualifications: string[] = []
  streams: string[] = []

  isloading = true;

  async getData() {
    try {
      this.isloading = true; // Set isLoading to true before fetching data
      this.colleges = await this.dataService.getCollegeNames();
      this.qualifications = await this.dataService.getQualifications();
      this.streams = await this.dataService.getStreams()
    } catch (error) {
      console.error('Error occurred while fetching colleges:', error);
      // Optionally handle the error
    } finally {
      this.isloading = false; // Set isLoading to false after fetching data
    }
  }

  back() {
    this.router.navigate(['signup', 'personalinfo'])
  }

  cancel() {
    this.router.navigate(['login'])
    this.currentUserService.destoryUser()
  }

  selectedFimiliarTechsFresher: boolean[] = new Array<boolean>(this.technologies.length).fill(false)
  selectedFimiliarTechsExperienced: boolean[] = new Array<boolean>(this.technologies.length).fill(false)
  selectedExpertiseTechsExperieced: boolean[] = new Array<boolean>(this.technologies.length).fill(false)
  selectedDiv: string = "";

  agrrPercetage = ""
  yearOfPassing = ""
  qualification = ""
  stream = ""
  college = ""
  otherCollege = ""
  collegeLocation = ""
  appearedForZeusTest: boolean = false
  zeusRoleAppliedFor = ""
  yearsOfExperience = ""
  currentCTC = ""
  expectedCTC = ""
  onNoticePeriod: boolean | null = null
  noticePeriodEnd = ""
  noticePeriodTenure = ""
  otherFimiliarTechString = ""
  otherExpertiseTechString = ""


  checkForPersonalInfoDetails() {
    let currentUser = this.currentUserService.getUser()
    try {
      this.userSignupServices.validatePersonalInfo(currentUser, this.currentUserService.userFile)
    }
    catch (err) {
      this.router.navigate(['signup', 'personalinfo'])
      alert(err)
    }
  }

  setupRedirectedUserDetails() {
    this.agrrPercetage = this.pageData.qualificationInfoData.agrrPercentage
    this.yearOfPassing = this.pageData.qualificationInfoData.yearofPassing
    this.qualification = this.pageData.qualificationInfoData.qualification
    this.stream = this.pageData.qualificationInfoData.stream
    this.college = this.pageData.qualificationInfoData.college
    this.otherCollege = this.pageData.qualificationInfoData.otherCollege
    this.collegeLocation = this.pageData.qualificationInfoData.collegeLocation
    this.appearedForZeusTest = this.pageData.qualificationInfoData.appearedForZeusTest
    this.zeusRoleAppliedFor = this.pageData.qualificationInfoData.zuesRoleAppliedFor
    this.yearsOfExperience = this.pageData.qualificationInfoData.yearOfExperience
    this.currentCTC = this.pageData.qualificationInfoData.currentCTC
    this.expectedCTC = this.pageData.qualificationInfoData.expectedCTC
    this.onNoticePeriod = this.pageData.qualificationInfoData.onNoticepERIOD
    this.noticePeriodEnd = this.pageData.qualificationInfoData.noticePeriodEnd
    this.noticePeriodTenure = this.pageData.qualificationInfoData.noticePertiodTenure
    this.otherExpertiseTechString = this.pageData.qualificationInfoData.otherExpertiseTechString
    this.otherFimiliarTechString = this.pageData.qualificationInfoData.otherFimiliarTechString
    this.selectedFimiliarTechsFresher = this.pageData.qualificationInfoData.selectedFimiliarTechsFresher
    this.selectedFimiliarTechsExperienced = this.pageData.qualificationInfoData.selectedFimiliarTechsExperienced
    this.selectedExpertiseTechsExperieced = this.pageData.qualificationInfoData.selectedExpertiseTechsExperieced
    this.selectedDiv = this.pageData.qualificationInfoData.selectedDiv
  }

  saveQualificationInfo() {
    this.pageData.qualificationInfoData.selectedDiv = this.selectedDiv;
    this.pageData.qualificationInfoData.selectedExpertiseTechsExperieced = this.selectedExpertiseTechsExperieced;
    this.pageData.qualificationInfoData.selectedFimiliarTechsExperienced = this.selectedFimiliarTechsExperienced;
    this.pageData.qualificationInfoData.selectedFimiliarTechsFresher = this.selectedFimiliarTechsFresher;
    this.pageData.qualificationInfoData.otherFimiliarTechString = this.otherFimiliarTechString;
    this.pageData.qualificationInfoData.otherExpertiseTechString = this.otherExpertiseTechString;
    this.pageData.qualificationInfoData.noticePertiodTenure = this.noticePeriodTenure;
    this.pageData.qualificationInfoData.noticePeriodEnd = this.noticePeriodEnd;
    this.pageData.qualificationInfoData.onNoticepERIOD = this.onNoticePeriod;
    this.pageData.qualificationInfoData.expectedCTC = this.expectedCTC;
    this.pageData.qualificationInfoData.currentCTC = this.currentCTC;
    this.pageData.qualificationInfoData.yearOfExperience = this.yearsOfExperience;
    this.pageData.qualificationInfoData.zuesRoleAppliedFor = this.zeusRoleAppliedFor;
    this.pageData.qualificationInfoData.appearedForZeusTest = this.appearedForZeusTest;
    this.pageData.qualificationInfoData.collegeLocation = this.collegeLocation;
    this.pageData.qualificationInfoData.otherCollege = this.otherCollege;
    this.pageData.qualificationInfoData.college = this.college;
    this.pageData.qualificationInfoData.stream = this.stream;
    this.pageData.qualificationInfoData.qualification = this.qualification;
    this.pageData.qualificationInfoData.yearofPassing = this.yearOfPassing;
    this.pageData.qualificationInfoData.agrrPercentage = this.agrrPercetage;

  }


  setNoticePeriod(value: string) {
    if (value === "Yes") {
      this.onNoticePeriod = true;
    }
    else {
      this.onNoticePeriod = false;
    }
  }

  setAppearedForZeusTest(value: string) {
    this.appearedForZeusTest = value === "Yes" ? true : false;
  }



  handleselect(val: string) {
    this.selectedDiv = val
    this.zeusRoleAppliedFor = ""
    this.appearedForZeusTest = false
  }

  handleFresherOrExperienceSubmit() {
    let tempUser: User = new User()
    if (this.appearedForZeusTest === null) {
      alert("Fill all details")
      return
    }
    else if (this.appearedForZeusTest === false) {

      tempUser.educationQualifications.appearForZeusTest = false
      tempUser.educationQualifications.roleAppliedFor = null
    }
    else if (this.appearedForZeusTest === true && this.zeusRoleAppliedFor !== "") {
      console.log("here")
      tempUser.educationQualifications.appearForZeusTest = true
      tempUser.educationQualifications.roleAppliedFor = this.zeusRoleAppliedFor
    }
    else {
      alert("fill the role you applied for")
      return
    }
    if (this.selectedDiv === "Fresher") {
      tempUser.educationQualifications.experienced = false
      let fresherDetails: FresherDetails = {
        fimiliarTechnologies: this.selectedFimiliarTechsFresher,
        otherFimiliarTechs: null

      }
      if (this.selectedFimiliarTechsFresher[this.technologies.length - 1] === true) {
        if (this.otherFimiliarTechString) {
          try {
            fresherDetails.otherFimiliarTechs = this.otherFimiliarTechString.split(",")
          }
          catch (err) {
            alert("Other fimiliar tech is invalid")
            return
          }
        }
        else {
          alert("Fill the other fimiliar technologies or uncheck")
          return
        }
      }

      tempUser.educationQualifications.fresherDetails = fresherDetails;
      tempUser.educationQualifications.experienceDetails = null;
      try {
        this.userSignupServices.validateFresherDetails(tempUser);
        let currentUser: User = this.currentUserService.getUser()
        currentUser.educationQualifications.appearForZeusTest = tempUser.educationQualifications.appearForZeusTest
        currentUser.educationQualifications.roleAppliedFor = tempUser.educationQualifications.roleAppliedFor
        currentUser.educationQualifications.fresherDetails = tempUser.educationQualifications.fresherDetails
        currentUser.educationQualifications.experienceDetails = null
        this.currentUserService.updateUser(currentUser);
      }
      catch (err: any) {
        alert(err)
        return
      }

    }
    else if (this.selectedDiv === "Experienced") {

      if (this.onNoticePeriod !== null) {
        try {
          let experiencedDetails: ExperienceDetails = {
            yearsOfExp: this.yearsOfExperience,
            currentCTC: this.currentCTC,
            expectedCTC: this.expectedCTC,
            fimiliarTech: this.selectedFimiliarTechsExperienced,
            expertiseTech: this.selectedExpertiseTechsExperieced,
            onNoticePeriod: this.onNoticePeriod,
            noticePeriodEndDate: this.noticePeriodEnd,
            tenureOfNotice: this.noticePeriodTenure,
            otherFimiliarTechs: this.otherFimiliarTechString.split(","),
            otherExpertiseTechs: this.otherExpertiseTechString.split(",")
          }
          this.userSignupServices.validateExperienceDetails(experiencedDetails)
          let currentUser: User = this.currentUserService.getUser()
          currentUser.educationQualifications.experienced = true
          currentUser.educationQualifications.appearForZeusTest = tempUser.educationQualifications.appearForZeusTest
          currentUser.educationQualifications.roleAppliedFor = tempUser.educationQualifications.roleAppliedFor
          currentUser.educationQualifications.experienceDetails = experiencedDetails
          currentUser.educationQualifications.fresherDetails = null
          this.currentUserService.updateUser(currentUser)
        }
        catch (err) {
          alert(err)
          return
        }
      }
      else {
        alert("Fill all the details")
        return;
      }


    }
    else {
      alert("Choose fresher or experienced to complete the form")
      return;
    }
  }

  collapse_drop_edu() {
    (document.getElementById("edu_inputs") as HTMLElement).style.maxHeight = (document.getElementById("edu_inputs") as HTMLElement).style.maxHeight === "0px" ? "500px" : "0px";
    (document.getElementById("edu_inputs") as HTMLElement).style.padding = (document.getElementById("edu_inputs") as HTMLElement).style.padding === "0px" ? "25px" : "0px";

  }


  collapse_drop_prof() {
    (document.getElementById("prof_inputs") as HTMLElement).style.maxHeight = (document.getElementById("prof_inputs") as HTMLElement).style.maxHeight === "0px" ? "200px" : "0px";
    (document.getElementById("prof_inputs") as HTMLElement).style.padding = (document.getElementById("prof_inputs") as HTMLElement).style.padding === "0px" ? "25px" : "0px";
    (document.getElementById("sub_prof_inputs") as HTMLElement).style.maxHeight = (document.getElementById("sub_prof_inputs") as HTMLElement).style.maxHeight === "0px" ? "1500px" : "0px";
  }


  checkForOtherCollege(other: string, college: string, user: User): boolean {
    if (college === "Other") {
      if (other === "") {
        alert("Please mention your college name or select from the list")
        return false;
      }
      else {
        user.educationQualifications.otherCollegeName = other
        return true;
      }
    }
    else {
      user.educationQualifications.otherCollegeName = null;
    }
    return true;
  }



  exitFuntion() {
    console.log(this.agrrPercetage)
    console.log(this.yearOfPassing)
    console.log(this.qualification)
    console.log(this.stream)
    console.log(this.college)
    console.log(this.otherCollege)
    console.log(this.collegeLocation)
    let user: User = this.currentUserService.getUser()
    if (this.checkForOtherCollege(this.otherCollege
      , this.college, user)) {
      user.educationQualifications.agrrPercetage = this.agrrPercetage
      user.educationQualifications.yearOfPassing = this.yearOfPassing.substring(0, 4)
      console.log(this.yearOfPassing.substring(0, 4))
      user.educationQualifications.college = this.college
      user.educationQualifications.collegeLocation = this.collegeLocation
      user.educationQualifications.stream = this.stream
      user.educationQualifications.qualification = this.qualification
      try {
        this.userSignupServices.validateQualificationInfo(user)
        this.currentUserService.updateUser(user)
        this.handleFresherOrExperienceSubmit()
        this.router.navigate(['signup', 'review'])
      }
      catch (err) {
        alert(err)
        return;
      }
    }

  }


  navigate() {
    this.saveQualificationInfo()
    this.exitFuntion()

  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
    return 'Your data will be lost!';
  }

  ngOnInit(): void {
    this.checkForPersonalInfoDetails()
    this.setupRedirectedUserDetails()
    this.getData()
  }

}
