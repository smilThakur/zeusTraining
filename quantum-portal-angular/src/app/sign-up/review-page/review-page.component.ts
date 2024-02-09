import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersignupService } from 'src/app/services/usersignup.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  constructor(private userSignupService:UsersignupService, private router:Router,private activatedRoute:ActivatedRoute) { }

  goPrevious(){
    this.router.navigate(["signup/qualificationinfo"])
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.userSignupService.setCanCreate(true);
    });   
  }

}
