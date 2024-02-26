import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PersonInfoComponent } from './person-info/person-info.component';
import { QualificationInfoComponent } from './qualification-info/qualification-info.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePasswordPageComponent } from './create-password-page/create-password-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PersonInfoComponent,
    QualificationInfoComponent,
    ReviewPageComponent,
    ProgressbarComponent,
    CreatePasswordPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[HeaderComponent,PersonInfoComponent,QualificationInfoComponent,ReviewPageComponent,ProgressbarComponent,CreatePasswordPageComponent]
})
export class SignUpModule { }
