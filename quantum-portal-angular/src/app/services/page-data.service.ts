import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  personalInfo: personalInfo = {
    countryCode: null,
    number: null,
    phoneNumber: null
  };

  qualificationInfoData: qualificationInfo = {
    agrrPercentage: '',
    yearofPassing: '',
    qualification: '',
    stream: '',
    college: '',
    otherCollege: '',
    collegeLocation: '',
    appearedForZeusTest: false,
    zuesRoleAppliedFor: '',
    yearOfExperience: '',
    currentCTC: '',
    expectedCTC: '',
    onNoticepERIOD: null,
    noticePeriodEnd: '',
    noticePertiodTenure: '',
    otherFimiliarTechString: '',
    otherExpertiseTechString: '',
    selectedFimiliarTechsFresher: [],
    selectedFimiliarTechsExperienced: [],
    selectedExpertiseTechsExperieced: [],
    selectedDiv: ''
  }


  constructor() { }
}


export interface personalInfo {
  countryCode: string | null,
  number: string | null,
  phoneNumber: string | null
}

export interface qualificationInfo {
  agrrPercentage: string,
  yearofPassing: string,
  qualification: string,
  stream: string,
  college: string,
  otherCollege: string,
  collegeLocation: string,
  appearedForZeusTest: boolean,
  zuesRoleAppliedFor: string,
  yearOfExperience: string,
  currentCTC: string,
  expectedCTC: string,
  onNoticepERIOD: boolean | null,
  noticePeriodEnd: string,
  noticePertiodTenure: string,
  otherFimiliarTechString: string
  otherExpertiseTechString: string
  selectedFimiliarTechsFresher: boolean[],
  selectedFimiliarTechsExperienced: boolean[],
  selectedExpertiseTechsExperieced: boolean[]
  selectedDiv: string
}