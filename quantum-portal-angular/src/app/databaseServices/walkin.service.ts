import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyJobInfo } from '../services/JobApplyData';

@Injectable({
  providedIn: 'root'
})
export class WalkinService {

  constructor(private http: HttpClient) { }


  getWalkins(): Observable<any> {

    let url = "https://localhost:7027/api/Walkin/all"
    return this.http.get<any>(url)
  }

  applyJob(info: ApplyJobInfo): Observable<any> {
    console.log(info)
    let url = "https://localhost:7027/api/Walkin/applyJob"
    return this.http.post(url, { startTime: info.startTime, endTime: info.endTime, PrefJob: info.pref_job, jobId: info.job_id, userid: info.userid })
  }

  checkApplied(userId: number, jobId: number): Observable<any> {
    const url = "https://localhost:7027/api/Walkin/checkapplied";
    const body = { userid: userId, jobid: jobId };
    console.log(body)
    return this.http.post(url, body);
  }

}
