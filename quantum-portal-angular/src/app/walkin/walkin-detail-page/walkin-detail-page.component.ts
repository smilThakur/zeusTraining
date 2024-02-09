import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walkin-detail-page',
  templateUrl: './walkin-detail-page.component.html',
  styleUrls: ['./walkin-detail-page.component.scss']
})
export class WalkinDetailPageComponent implements OnInit {

  constructor(private router:Router) { }

  dummyNavigate(){
    this.router.navigate(['walkin','hallticket'])
  }


  collapse_app_process_con() {

    const container = document.getElementById("application_process_container") as HTMLElement;
    const currentMaxHeight = container.style.maxHeight || window.getComputedStyle(container).maxHeight;
    console.log(currentMaxHeight)
    if (currentMaxHeight != "0px") {
      container.style.maxHeight = "0px";
    } else {
      container.style.maxHeight = "fit-content";
    }
  }

  collapse_con(id:string) {

    console.log(id)
    const container = document.getElementById(id) as HTMLElement;
    const currentMaxHeight = container.style.maxHeight || window.getComputedStyle(container).maxHeight;
    console.log(currentMaxHeight)
    if (currentMaxHeight != "0px") {
      container.style.maxHeight = "0px";
    } else {
      container.style.maxHeight = "fit-content";
    }
  }

  ngOnInit(): void {
  }

}
