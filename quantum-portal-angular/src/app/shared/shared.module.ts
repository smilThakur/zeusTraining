import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeaderBtnComponent } from './header-btn/header-btn.component';
import { SignupInputComponent } from './signup-input/signup-input.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { RadioBtnComponent } from './radio-btn/radio-btn.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropdownComponent,
    HeaderBtnComponent,
    SignupInputComponent,
    PhoneInputComponent,
    CheckboxInputComponent,
    RadioBtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DropdownComponent,HeaderBtnComponent,SignupInputComponent,PhoneInputComponent,CheckboxInputComponent,RadioBtnComponent]
})
export class SharedModule { }
