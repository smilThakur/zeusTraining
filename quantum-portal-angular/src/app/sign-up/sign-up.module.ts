import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PersonInfoComponent } from './person-info/person-info.component';
import { QualificationInfoComponent } from './qualification-info/qualification-info.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PersonInfoComponent,
    QualificationInfoComponent,
    ReviewPageComponent,
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HeaderComponent,PersonInfoComponent,QualificationInfoComponent,ReviewPageComponent,ProgressbarComponent]
})
export class SignUpModule { }
