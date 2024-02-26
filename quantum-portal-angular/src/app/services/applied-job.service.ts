import { Injectable } from '@angular/core';
import { ApplyJobInfo } from './JobApplyData';

@Injectable({
  providedIn: 'root'
})
export class AppliedJobService {

  constructor() { }

  AppliedJobValidation(info: ApplyJobInfo) {
    if (!info.userid) {
      throw new Error("Please signin and try again")
    }
    else if (!info.startTime) {
      throw new Error("Select a time slot");
    }

    else if (!info.endTime) {
      throw new Error("Select a time slot");
    }

    else if (info.pref_job.length <= 0) {
      throw new Error("Atleast one Preferred job is required.");
    }

    return true;
  }

}
