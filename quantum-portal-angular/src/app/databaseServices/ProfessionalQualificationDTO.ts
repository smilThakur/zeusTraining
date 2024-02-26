import { UserNoticeInfoDTO } from "./NoticeInfoDTO";
import { TechDTO } from "./TechDTO";

export interface ProfessionalQualificationDTO {
    isExperienced: boolean;
    years_exp: number | null;
    current_ctc: number | null;
    expected_ctc: number | null;
    expertise_tech?: TechDTO[] | null;
    familiar_tech?: TechDTO[];
    other_familiar_tech?: string | null;
    other_expertise_tech?: string | null;
    noticeInfo: UserNoticeInfoDTO;
}
