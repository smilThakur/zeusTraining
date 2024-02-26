import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'signup-input',
  templateUrl: './signup-input.component.html',
  styleUrls: ['./signup-input.component.scss']
})
export class SignupInputComponent implements OnInit {

  constructor() { }

  private _title:string = "";
  private _placeholder:string = "";
  private _type:string ="text";
  private _required:boolean = true;

  @Input() value:string = "";
  @Output() valueChange = new EventEmitter<string>();

  @Input() fcn:string = "";
  @Input() fg!:FormGroup;
  
  onchange(){
    this.valueChange.emit(this.value);
  }

 

  @Input() get title(){
    return this._title
  }
  set title(val:string){
    this._title = val
  }

  @Input() get placeholder(){
    return this._placeholder
  }
  set placeholder(val:string){
    this._placeholder = val
  }

  @Input() get type(){
    return this._type
  }
  set type(val:string){
    this._type = val
  }

  @Input() get required(){
    return this._required
  }
  set required(val:boolean){
    this._required = val
  }





  ngOnInit(): void {
  }

}
