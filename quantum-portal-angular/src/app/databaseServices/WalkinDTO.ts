export interface WalkinDTO {
    job_id: number;
    title: string;
    start_date: Date;
    end_date: Date;
    location: string;
    venue: string;
    roles: number[];
    timeslots: TimeOnly[][];
    lpas: number[];
    role_descs: string[];
    requirements: string[];
    general_ins: string,
    instructions: string,
    sys_req: string,
    process: string,
}

export interface TimeOnly {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
}
