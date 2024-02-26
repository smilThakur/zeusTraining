import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }


  @Input() canCreate: boolean = false;
  @Input() create: () => void = () => { };
  @Input() cancel: () => void = () => { };
  @Input() back: () => void = () => { };
  ngOnInit(): void {
  }

}
