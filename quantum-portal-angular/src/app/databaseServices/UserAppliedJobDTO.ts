export interface UserAppliedJobDTO {
    time_slot: string; // Assuming time_slot is represented as a string
    resume_URL: string;
    hall_ticket_URL: string;
    job_id: number;
    appliedJobPreference: string[];
}
