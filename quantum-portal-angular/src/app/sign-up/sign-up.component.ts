import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersignupService } from '../services/usersignup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private userSignUpService: UsersignupService) { }


  canCreate: boolean = false;



  ngOnInit(): void {

    localStorage.clear()
    this.userSignUpService.canCreate.subscribe(cc => {
      this.canCreate = cc;
    }
    )

  }

}
