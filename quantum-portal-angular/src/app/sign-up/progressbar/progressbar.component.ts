import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  private _progress:number = 0;

  @Input() get progress(){
    return this._progress
  }

  set progress(val:number){
    this._progress = val
  }

  constructor() { }

  ngOnInit(): void {
  }

}
