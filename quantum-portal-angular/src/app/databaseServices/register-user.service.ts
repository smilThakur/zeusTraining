import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Subscription } from 'rxjs';
import { UserDTO } from './UserDTO';
import { User, UserFiles } from '../services/User';
import { UserPreferredJobDTO } from './UserPreferredJobDTO';
import { DataService } from './data.service';
import { TechDTO } from './TechDTO';
import { CurrentUserService } from '../services/current-user.service';
import { UserAuth } from './UserAuth';
@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient, private dataService: DataService) { }
  private subscription: Subscription | undefined;

  technologies = ["Javascript", "Angular JS", "React", "Node JS", "Others"]


  registerUserAuth(userAuth:UserAuth):Promise<any>{

    console.log(userAuth)
    let url = "https://localhost:7027/api/userAuthRegister";

    return new Promise((resolve,reject)=>{
      this.subscription = this.http.post(url,userAuth).subscribe({
        next:(data)=>{
          resolve("sucess")
        },
        error:(err) =>{
            reject("error from auth"+err)
        },
      })
    })

  }


  getFamiliarTech(user: User): TechDTO[] {
    let familiarTech: TechDTO[] = [];

    if (user.educationQualifications.experienced === false) {
      user.educationQualifications.fresherDetails?.fimiliarTechnologies.forEach((ft, idx) => {
        if (ft) {
          let techDTO: TechDTO = {
            id: idx + 1,
            tech: this.technologies[idx]
          }
          familiarTech.push(techDTO)
        }
      })
    }
    else {
      user.educationQualifications.experienceDetails?.fimiliarTech.forEach((ft, idx) => {
        if (ft) {
          let techDTO: TechDTO = {
            id: idx + 1,
            tech: this.technologies[idx]
          }
          familiarTech.push(techDTO)
        }
      })
    }

    return familiarTech;
  }

  getExpertiseTech(user: User): TechDTO[] {
    let expertiseTech: TechDTO[] = [];
    user.educationQualifications.experienceDetails?.expertiseTech.forEach((ft, idx) => {
      if (ft) {
        let techDTO: TechDTO = {
          id: idx + 1,
          tech: this.technologies[idx]
        }
        expertiseTech.push(techDTO)
      }
    })
    return expertiseTech;
  }

  getOtherFamiliarTech(user: User): string | null {
    if (user.educationQualifications.experienced == false) {
      if (user.educationQualifications.fresherDetails?.otherFimiliarTechs) {
        return user.educationQualifications.fresherDetails.otherFimiliarTechs.join(",")
      }
    }
    else {
      if (user.educationQualifications.experienceDetails?.otherFimiliarTechs) {
        return user.educationQualifications.experienceDetails.otherFimiliarTechs.join(",")
      }
    }

    return null;
  }

  getOtherExpertiseTech(user: User): string | null {
    if (user.educationQualifications.experienceDetails?.otherExpertiseTechs) {
      return user.educationQualifications.experienceDetails.otherExpertiseTechs.join(",")
    }
    return null
  }

  async getDisplayImgUrl(user: User, userFile: UserFiles): Promise<string | null> {
    if (userFile.displayImg) {
      return await this.dataService.uploadDisplayImg(userFile.displayImg)
    }
    return null;
  }

  async registerUserog(user: User, userFiles: UserFiles,userAuth:UserAuth) {

    try {
      let ResumeURL = await this.dataService.uploadResume(userFiles.resume!)
      let displayIMGURL = await this.getDisplayImgUrl(user, userFiles)



      console.log(ResumeURL)
      let userDTO: UserDTO = {
        first_name: user.personalQualification.firstName,
        last_name: user.personalQualification.lastName,
        email: user.personalQualification.email,
        phone_number: user.personalQualification.phoneNumber,
        resume_url: ResumeURL,
        portfolio_url: user.personalQualification.portfolioURL,
        is_experienced: user.educationQualifications.experienced,
        reff_emp_name: user.personalQualification.referralEmployeeName,
        job_offers: user.personalQualification.sendJobEmail,
        display_img_url: displayIMGURL,

        Education_qualification: {
          agrr_per: parseFloat(user.educationQualifications.agrrPercetage),
          year_passed: user.educationQualifications.yearOfPassing,
          qualification: user.educationQualifications.qualification,
          stream: user.educationQualifications.stream,
          college: user.educationQualifications.college==="Other"?user.educationQualifications.otherCollegeName!:user.educationQualifications.college,
          college_location: user.educationQualifications.collegeLocation,

        },
        professional_qualification: {
          isExperienced: user.educationQualifications.experienced,
          years_exp: user.educationQualifications.experienceDetails === null ? null : parseFloat(user.educationQualifications.experienceDetails.yearsOfExp),
          current_ctc: user.educationQualifications.experienceDetails === null ? null : parseInt(user.educationQualifications.experienceDetails.currentCTC),
          expected_ctc: user.educationQualifications.experienceDetails === null ? null : parseInt(user.educationQualifications.experienceDetails.expectedCTC),
          familiar_tech: this.getFamiliarTech(user),
          expertise_tech: this.getExpertiseTech(user),
          other_expertise_tech: this.getOtherExpertiseTech(user),
          other_familiar_tech: this.getOtherFamiliarTech(user),
          noticeInfo: {
            is_on_notice: user.educationQualifications.experienceDetails === null ? false : user.educationQualifications.experienceDetails.onNoticePeriod,
            notice_duration: user.educationQualifications.experienceDetails === null ? null : parseInt(user.educationQualifications.experienceDetails.tenureOfNotice),
            notice_end: user.educationQualifications.experienceDetails === null ? null : new Date(user.educationQualifications.experienceDetails.noticePeriodEndDate)
          }
        },
        zuesTestInfo: {
          appeared: user.educationQualifications.appearForZeusTest,
          role: user.educationQualifications.roleAppliedFor
        },
        preferredRoles: [
          user.personalQualification.preferredJobRoles[0] && {
            "roles_pref_id": 1,
            "role": "Instructional Designer"
          },
          user.personalQualification.preferredJobRoles[1] && {
            "roles_pref_id": 2,
            "role": "Software Engineer"
          },
          user.personalQualification.preferredJobRoles[2] && {
            "roles_pref_id": 3,
            "role": "Software Quality Engineer"
          }
        ].filter(Boolean) as UserPreferredJobDTO[],
        appliedJobs: null
      }
      new Promise((resolve, reject) => {

        this.subscription = this.http.post("https://localhost:7027/api/user", userDTO).subscribe({
          next: (data) => {
            console.log(data);
            console.log("done");
            resolve(data);
          },
          error: (error) => {
            console.log(error)
            reject(error)
          }
        })

      })

    await this.registerUserAuth(userAuth);

    }
    catch (err: any) {
      console.log(err)
      throw new Error("err from register side"+err)
    }
  }


}


