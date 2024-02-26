export class User {
    

    personalQualification: {
        displayImg: string |null; //done
        firstName: string; //done
        lastName: string; //done
        email: string ; //done
        resumeURL:string; //done
        resumeName:string; //done
        phoneNumber: string; //done
        portfolioURL: string | null; //done
        preferredJobRoles: boolean[];  //done but needs to be posted in {role_pref_id, user_id} format
        referralEmployeeName: string | null; //done
        sendJobEmail: boolean; //done
    }={
        displayImg:null,
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        resumeURL:"",
        resumeName:"",
        portfolioURL:"",
        preferredJobRoles:new Array<boolean>(3).fill(false),
        referralEmployeeName:"",
        sendJobEmail:false,
    }

    educationQualifications:{
        agrrPercetage:string,
        yearOfPassing:string,
        qualification:string,
        stream:string,
        college:string,
        otherCollegeName:string|null
        collegeLocation:string,
        experienced:boolean,
        appearForZeusTest:boolean,
        roleAppliedFor:string | null
        fresherDetails:FresherDetails | null,
        experienceDetails:ExperienceDetails | null
    }={
        agrrPercetage:"",
        yearOfPassing:"",
        qualification:"",
        stream:"",
        college:"",
        collegeLocation:"",
        experienced:false,
        appearForZeusTest:false,
        roleAppliedFor:null,
        fresherDetails:null,
        experienceDetails:null,
        otherCollegeName:null
    }


}


export interface FresherDetails {
    fimiliarTechnologies:boolean[]
    otherFimiliarTechs:string[] | null
    
}

export interface ExperienceDetails{
    yearsOfExp:string,
    currentCTC:string,
    expectedCTC:string,
    fimiliarTech:boolean[],
    expertiseTech:boolean[],
    onNoticePeriod:boolean,
    noticePeriodEndDate:string,
    tenureOfNotice:string,
    otherFimiliarTechs:string[] | null,
    otherExpertiseTechs:string[] | null
}

export class UserFiles{
    resume:File | null  = null;
    displayImg:File | null = null;
}