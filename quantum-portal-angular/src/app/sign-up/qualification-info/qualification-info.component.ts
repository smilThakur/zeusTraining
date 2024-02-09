import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualification-info',
  templateUrl: './qualification-info.component.html',
  styleUrls: ['./qualification-info.component.scss']
})
export class QualificationInfoComponent implements OnInit {

  constructor(private router:Router) { }

  selectedDiv: string = ""; 




  handleselect(val:string){
    this.selectedDiv = val
  }

  
  



  
 

  collapse_drop_edu(){
    (document.getElementById("edu_inputs") as HTMLElement).style.maxHeight = (document.getElementById("edu_inputs")as HTMLElement).style.maxHeight==="0px"?"500px":"0px";
    (document.getElementById("edu_inputs") as HTMLElement).style.padding = (document.getElementById("edu_inputs")as HTMLElement).style.padding==="0px"?"25px":"0px";

  }


  collapse_drop_prof(){
   (document.getElementById("prof_inputs") as HTMLElement).style.maxHeight = (document.getElementById("prof_inputs") as HTMLElement).style.maxHeight==="0px"?"200px":"0px";
   (document.getElementById("prof_inputs") as HTMLElement).style.padding = (document.getElementById("prof_inputs") as HTMLElement).style.padding==="0px"?"25px":"0px";
   (document.getElementById("sub_prof_inputs") as HTMLElement).style.maxHeight = (document.getElementById("sub_prof_inputs") as HTMLElement).style.maxHeight==="0px"?"1500px":"0px";
  }

  navigate(){
    this.router.navigate(['signup','review'])
  }

  ngOnInit(): void {
  }

}
