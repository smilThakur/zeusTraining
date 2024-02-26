import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalkinGlance } from 'src/app/databaseServices/WalkinGlanceDTO';
import { LoginService } from 'src/app/databaseServices/login.service';
import { WalkinService } from 'src/app/databaseServices/walkin.service';

@Component({
  selector: 'app-all-walkin-page',
  templateUrl: './all-walkin-page.component.html',
  styleUrls: ['./all-walkin-page.component.scss']
})
export class AllWalkinPageComponent implements OnInit {

  constructor(private walkinService: WalkinService, private loginServie: LoginService, private router: Router) { }
  isloading: boolean = true;

  walkins: WalkinGlance[] = [];



  getWalkin() {

    this.walkinService.getWalkins().subscribe({
      next: (res) => {
        console.log(res as WalkinGlance[])
        this.walkins = res as WalkinGlance[]
        this.isloading = false
      },
      error: (err) => {
        alert("Not able to fetch walkins try again")
      }
    })

  }

  ngOnInit(): void {
    this.getWalkin()
  }

}
