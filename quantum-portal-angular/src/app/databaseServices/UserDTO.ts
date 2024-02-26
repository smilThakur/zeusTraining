import { EducationQualificationDTO } from "./EducationQualificationDTO";
import { ProfessionalQualificationDTO } from "./ProfessionalQualificationDTO";
import { UserAppliedJobDTO } from "./UserAppliedJobDTO";
import { UserPreferredJobDTO } from "./UserPreferredJobDTO";
import { UserZuesTestInfoDTO } from "./UserZuesInfoDTO";

export interface UserDTO {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    resume_url: string;
    portfolio_url: string | null;
    is_experienced: boolean;
    reff_emp_name: string | null;
    job_offers: boolean;
    display_img_url: string | null;
    Education_qualification:EducationQualificationDTO;
    professional_qualification:ProfessionalQualificationDTO;
    zuesTestInfo: UserZuesTestInfoDTO;
    preferredRoles: Array<UserPreferredJobDTO>;
    appliedJobs:Array<UserAppliedJobDTO> | null;

}
