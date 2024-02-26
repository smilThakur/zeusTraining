import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {


  @Input() label = "";
  @Input() value:any;
  @Input() checked:boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();


  onChange(){
    this.checked = !this.checked
    this.checkedChange.emit(this.checked);
  }

  id = uuid()

  constructor() { }


  
  ngOnInit(): void {
  }

}
