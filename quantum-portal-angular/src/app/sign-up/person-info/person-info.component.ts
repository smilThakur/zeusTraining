import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  constructor(private router:Router) { }

  nextBtnClicked(){
    this.router.navigate(["signup","qualificationinfo"])
  }
  
  ngOnInit(): void {
  }

}
