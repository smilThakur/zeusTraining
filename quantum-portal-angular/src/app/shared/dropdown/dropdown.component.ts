import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  private _title:string = ''

  selected:string | null = null

  private _options:string[] = []

  @Input() option:string = ""
  @Output() optionChange: EventEmitter<string> = new EventEmitter<string>()


  selectOption(optionSelected:string){
    this.selected = optionSelected
    this.option = optionSelected;
    this.optionChange.emit(this.option)
  }

  @Input() get title(){
    return this._title;
  }

  set title(val:string){
    this._title = val;
  }

  @Input() get options(){
    return this._options
  }

  set options(value:string[]){
    this._options = value
  }



  ngOnInit(): void {
  }

}
