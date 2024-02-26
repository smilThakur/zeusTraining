import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExperienceDetails, User, UserFiles } from './User';
import { ValidationsService } from './validations.service';
import { DataService } from '../databaseServices/data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersignupService {


  constructor(private validationService: ValidationsService, private dataService: DataService) { }

  private _canCreateSubject = new BehaviorSubject<boolean>(false);

  canCreate = this._canCreateSubject.asObservable();




  validatePersonalInfo(user: User, userFiles: UserFiles) {
    console.log(!user.personalQualification.resumeURL)
    if (!user.personalQualification.firstName || !user.personalQualification.lastName || !user.personalQualification.email || !user.personalQualification.phoneNumber || user.personalQualification.preferredJobRoles.indexOf(true) < 0 || !userFiles.resume) {
      if (!user.personalQualification.firstName) {
        throw new Error('First name is required.');
      }

      else if (!user.personalQualification.lastName) {
        throw new Error('Last name is required.');
      }

      else if (!user.personalQualification.email) {
        throw new Error('Email is required.');
      }

      else if (!user.personalQualification.phoneNumber) {
        throw new Error('Phone number is required.');
      }

      else if (user.personalQualification.preferredJobRoles.indexOf(true) < 0) {
        throw new Error('At least one preferred job role must be selected.');
      }
      else if (!userFiles.resume) {
        throw new Error('Resume is required');
      }

    }
    else if (this.validationService.phoneNumberValidation(user.personalQualification.phoneNumber) === false) {
      throw new Error('Phone number is invalid.');
    }
    else if (this.validationService.validateEmail(user.personalQualification.email) === false) {
      throw new Error("Email is invalid")
    }

    //  let  uniqueEmail = await this.dataService.checkUniqueEmail(user.personalQualification.email)
    //  console.log(uniqueEmail)
    //  if(!uniqueEmail){
    //   throw new Error("Email already registered")
    //  }

  }


  validateQualificationInfo(user: User) {
    if (!user.educationQualifications.agrrPercetage) {
      throw new Error("Please provide Aggregated percentage")
    }
    else if (!user.educationQualifications.college) {
      throw new Error("Please select your college")
    }
    else if (!user.educationQualifications.collegeLocation) {
      throw new Error("Enter your college location")
    }
    else if (!user.educationQualifications.qualification) {
      throw new Error("please select a valid Qualification")
    }
    else if (!user.educationQualifications.stream) {
      throw new Error("Please select a valid Stream")
    }
    else if (!user.educationQualifications.yearOfPassing) {
      throw new Error("Please select your date of passing")
    }
  }

  validateFresherDetails(user: User) {
    if (!user.educationQualifications.fresherDetails) {
      throw new Error("please fill all the details")
    }
    else if (user.educationQualifications.appearForZeusTest === null) {
      throw new Error("please fill all the details")
    }
    else if (user.educationQualifications.appearForZeusTest === true && user.educationQualifications.roleAppliedFor === null) {
      throw new Error("Please enter the role applied for zeus learning job")
    }

    else if (user.educationQualifications.fresherDetails.fimiliarTechnologies.indexOf(true) < 0) {
      throw new Error("please select any one of the technoligies or other with you are fimiliar with")
    }


  }

  validateExperienceDetails(experienceDetails: ExperienceDetails) {
    if (!experienceDetails.yearsOfExp) {
      throw new Error("Enter years of experience")
    }
    else if (!experienceDetails.currentCTC) {
      throw new Error("Enter current CTC")
    }
    else if (!experienceDetails.expectedCTC) {
      throw new Error("Enter expected CTC")
    }
    else if (experienceDetails.fimiliarTech.indexOf(true) < 0) {
      throw new Error("Select atleast of the fimiliar technologies")
    }
    else if (experienceDetails.fimiliarTech[4] == true && !experienceDetails.otherFimiliarTechs) {
      throw new Error("please fill other fimiliar tech otherwise uncheck")
    }
    else if (experienceDetails.onNoticePeriod === true) {
      if (!experienceDetails.noticePeriodEndDate || !experienceDetails.tenureOfNotice) {
        throw new Error("fill notice period details")
      }
    }
  }


  validateFullUser(user: User, userFiles: UserFiles) {
    try {
      this.validatePersonalInfo(user, userFiles)
      console.log("p1")
      this.validateQualificationInfo(user)
      console.log("q1")
      if (user.educationQualifications.experienced === true) {
        this.validateExperienceDetails(user.educationQualifications.experienceDetails!)
        console.log("e1")
      }
      else {
        this.validateFresherDetails(user)
        console.log("f1")
      }
    } catch (err) {
      throw new Error("Invalid inputs in previous forms " + err)
    }
  }



  setCanCreate(value: boolean) {
    this._canCreateSubject.next(value)
  }
}

