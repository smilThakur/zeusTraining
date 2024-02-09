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

  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>()


  selectOption(option:string){
    this.selected = option
    console.log(option)
    this.optionSelected.emit(this.selected)
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
