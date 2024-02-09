import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-btn',
  templateUrl: './header-btn.component.html',
  styleUrls: ['./header-btn.component.scss']
})
export class HeaderBtnComponent implements OnInit {

  private _title:string= '';
  private _isDisabled = false;

  @Input() get title(){
    return this._title
  }

  set title(val:string){
    this._title = val
  }

  @Input() get isDisabled(){
    return this._isDisabled
  }

  set isDisabled(val:boolean){
    this._isDisabled = val
  }

  constructor() { }

  ngOnInit(): void {
  }

}
