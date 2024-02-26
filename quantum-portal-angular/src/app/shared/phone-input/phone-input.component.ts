import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent implements OnInit {

  constructor() { }


  @Input() phoneNumber = ""
  @Input() countryCode =""
  @Input() number = ""
  @Output() countryCodeChange = new EventEmitter<string>();
  @Output() phoneNumberChange = new EventEmitter<string>();
  @Output() numberChange = new EventEmitter<string>();
  onChange(){
    this.phoneNumberChange.emit('+'+this.countryCode+this.number)
    this.countryCodeChange.emit(this.countryCode)
    this.numberChange.emit(this.number)
  }

 

  ngOnInit(): void {
  }

}
