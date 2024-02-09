import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'signup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  @Input() canCreate:boolean = false;
  

  ngOnInit(): void {
  }

}
