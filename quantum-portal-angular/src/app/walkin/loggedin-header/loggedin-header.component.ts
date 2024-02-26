import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/databaseServices/data.service';
import { LoginService } from 'src/app/databaseServices/login.service';

@Component({
  selector: 'loggedin-header',
  templateUrl: './loggedin-header.component.html',
  styleUrls: ['./loggedin-header.component.scss']
})
export class LoggedinHeaderComponent implements OnInit {

  constructor(private dataService: DataService, private sanitizer: DomSanitizer, private loginService: LoginService) { }


  userid: number = this.loginService.getTokenUserDetails().id

  imgURL: SafeUrl | null = null
  imgFile: File | null = null
  ngOnInit(): void {
    this.dataService.getDisplayImg(this.userid).subscribe({
      next: (res) => {
        this.imgURL = res.dataUrl

      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
