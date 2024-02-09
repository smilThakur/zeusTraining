import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalkinComponent } from './walkin.component';
import { LoggedinHeaderComponent } from './loggedin-header/loggedin-header.component';
import { WalkinDetailPageComponent } from './walkin-detail-page/walkin-detail-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HallticketPageComponent } from './hallticket-page/hallticket-page.component';
import { AllWalkinPageComponent } from './all-walkin-page/all-walkin-page.component';
import { WalkinCardComponent } from './walkin-card/walkin-card.component';



@NgModule({
  declarations: [
    WalkinComponent,
    LoggedinHeaderComponent,
    WalkinDetailPageComponent,
    HallticketPageComponent,
    AllWalkinPageComponent,
    WalkinCardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  exports:[LoggedinHeaderComponent,WalkinDetailPageComponent,HallticketPageComponent,AllWalkinPageComponent,WalkinCardComponent]
})
export class WalkinModule { }
