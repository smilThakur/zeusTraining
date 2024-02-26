import { Time } from "@angular/common";

export interface ApplyJobInfo {
    startTime: string | null,
    endTime: string | null,
    pref_job: Array<number>,
    job_id: number,
    resume: File | null,
    userid: number
}