import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.scss']
})
export class RadioBtnComponent implements OnInit {

  constructor() { }


  @Output() value:EventEmitter<string> = new EventEmitter<string>();


  @Input() name:string = ""
  @Input() id:string = ""
  @Input() label:string = ""
  @Input() checked:boolean | null = false

  emitvalue(label:string){
    this.value.emit(label)
  }


  ngOnInit(): void {
  }

}
