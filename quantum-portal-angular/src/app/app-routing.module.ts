import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonInfoComponent } from './sign-up/person-info/person-info.component';
import { QualificationInfoComponent } from './sign-up/qualification-info/qualification-info.component';
import { ReviewPageComponent } from './sign-up/review-page/review-page.component';
import { WalkinComponent } from './walkin/walkin.component';
import { WalkinDetailPageComponent } from './walkin/walkin-detail-page/walkin-detail-page.component';
import { HallticketPageComponent } from './walkin/hallticket-page/hallticket-page.component';
import { AllWalkinPageComponent } from './walkin/all-walkin-page/all-walkin-page.component';
import { CreatePasswordPageComponent } from './sign-up/create-password-page/create-password-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "signup", component: SignUpComponent,
    children:
      [
        { path: "personalinfo", component: PersonInfoComponent },
        { path: "qualificationinfo", component: QualificationInfoComponent },
        { path: "review", component: ReviewPageComponent },
        { path: "createpassword", component: CreatePasswordPageComponent }
      ]
  },
  {
    path: "walkin", component: WalkinComponent,
    children:
      [
        { path: "multiplejob", component: WalkinDetailPageComponent },
        { path: "hallticket", component: HallticketPageComponent },
        { path: "all", component: AllWalkinPageComponent }

      ], canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
