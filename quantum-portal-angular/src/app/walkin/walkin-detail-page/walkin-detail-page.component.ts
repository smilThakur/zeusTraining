import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WalkinDTO } from 'src/app/databaseServices/WalkinDTO';
import { DataService } from 'src/app/databaseServices/data.service';
import { LoginService } from 'src/app/databaseServices/login.service';
import { ApplyJobInfo } from 'src/app/services/JobApplyData';
import { EnumsService } from 'src/app/services/enums.service';
import { TimeOnly } from './Time';
import { AppliedJobService } from 'src/app/services/applied-job.service';
import { WalkinService } from 'src/app/databaseServices/walkin.service';

@Component({
  selector: 'app-walkin-detail-page',
  templateUrl: './walkin-detail-page.component.html',
  styleUrls: ['./walkin-detail-page.component.scss']
})
export class WalkinDetailPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService, private enumService: EnumsService, private loginService: LoginService, private applyJobService: AppliedJobService, private walkinService: WalkinService) { }


  applyForJob() {

    try {
      let select_pref_role_id: number[] = []
      this.pref_jobs.forEach((pj, idx) => {
        if (pj) {
          select_pref_role_id.push(this.walkinDetails?.roles[idx]!)
        }
      })
      let applyInfo: ApplyJobInfo = {
        startTime: this.startTime,
        endTime: this.endTime,
        pref_job: select_pref_role_id,
        job_id: 1,
        resume: this.resumeFile,
        userid: this.loginService.getCurrentUserId()
      }
      this.applyJobService.AppliedJobValidation(applyInfo)
      console.log(applyInfo)
      if (this.resumeFile) {
        this.dataService.updateResume(this.resumeFile, this.loginService.getCurrentUserId()).subscribe({
          next: (res) => {
            console.log(res)
          },
          error: (err) => {
            alert("Not able to update your resume")
            return
          }
        })
        this.walkinService.applyJob(applyInfo).subscribe({
          next: (res) => {
            console.log("here")
            this.router.navigate(['walking', 'hallticket'])
          },
          error: (err) => {
            alert("Not able to apply for this job")
            return
          }
        })
      } else {
        this.walkinService.applyJob(applyInfo).subscribe({
          next: (res) => {
            console.log("here")
            this.router.navigate(['walkin', 'hallticket'])
          },
          error: (err) => {
            alert("Not able to apply for this job")
            return
          }
        })
      }
    } catch (err) {
      alert(err)
      return
    }
  }

  handleSelectTimeSlot(event: string) {

    this.startTime = event.substring(0, 8)
    this.endTime = (event.substring(12))
    console.log()

  }

  resumeFileName: string | null = null
  isloading: boolean = true;
  resumeFile: File | null = null
  job_id: number = 0
  startTime: string | null = null;
  endTime: string | null = null;
  walkinDetails: WalkinDTO | null = null

  pref_jobs: boolean[] = Array<boolean>()



  collapse_app_process_con() {

    const container = document.getElementById("application_process_container") as HTMLElement;
    const currentMaxHeight = container.style.maxHeight || window.getComputedStyle(container).maxHeight;
    console.log(currentMaxHeight)
    if (currentMaxHeight != "0px") {
      container.style.maxHeight = "0px";
    } else {
      container.style.maxHeight = "fit-content";
    }
  }

  getRole(id: number) {
    return this.enumService.getRoleName(id)
  }

  getDesc(walkinDesc: string | undefined) {
    if (walkinDesc) {
      return walkinDesc.split("\n")
    } else {
      return [];
    }
  }

  getRequirements(walkinReq: string | undefined) {
    if (walkinReq) {
      return walkinReq.split("\n")
    }
    else {
      return []
    }
  }

  getStringToArray(value: string | undefined) {
    if (value) {
      return value.split("\n")
    }
    else {
      return []
    }
  }




  collapse_con(id: string) {

    console.log(id)
    const container = document.getElementById(id) as HTMLElement;
    console.log(container)
    const currentMaxHeight = container.style.maxHeight || window.getComputedStyle(container).maxHeight;
    console.log(currentMaxHeight)
    if (currentMaxHeight != "0px") {
      container.style.maxHeight = "0px";
    } else {
      container.style.maxHeight = "fit-content";
    }
  }


  getDetails(id: number) {
    this.dataService.getWalkinDetails(id).subscribe({
      next: (res) => {
        this.walkinDetails = res;
        console.log(this.walkinDetails)
        this.isloading = false
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  updateResume(event: any) {
    let resume: File = event.target.files[0];
    this.resumeFileName = resume.name
    this.dataService.updateResume(resume, this.loginService.getCurrentUserId()).subscribe({
      next: (res) => {
        console.log(res)
      }
      , error: (err) => {
        console.log(err)
      }
    })
  }

  checkForApplied() {
    this.walkinService.checkApplied(this.loginService.getCurrentUserId(), this.job_id).subscribe({
      next: (res) => {
        console.log("response of checkis.......", res)
        if (res.message == "applied") {
          alert("you have already applied for this job")
          this.router.navigate(['walkin', 'all'])
        }
      },
      error: (err) => [
        console.log(err)
      ]
    })
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.getDetails(params['id'])
        this.job_id = params['id']
      }
      );
    this.checkForApplied()
  }

}
