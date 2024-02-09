import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {

  constructor() { }

  private _label:string = ""
  private _value:any;

  @Input() get label(){
    return this._label
  }

  set label(val:string){
    this._label = val
  }

  @Input() get value(){
    return this._value
  }
 
  set value(val:any){
    this._value = val
  }

  ngOnInit(): void {
  }

}
