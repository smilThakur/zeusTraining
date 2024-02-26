import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/databaseServices/data.service';

@Component({
  selector: 'login-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
