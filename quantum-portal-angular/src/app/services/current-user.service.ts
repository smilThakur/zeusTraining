import { Injectable } from '@angular/core';
import { User, UserFiles } from './User';
import { DataService } from '../databaseServices/data.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user:User = new User()

  userFile:UserFiles = new UserFiles()

  setResume(resume:File | null){
    this.userFile.resume = resume
  }

  setDisplayImg(img:File | null){
    this.userFile.displayImg = img
  }


  getUser(){
    return JSON.parse(JSON.stringify(this.user));
  }

  destoryUser(){
    this.user = new User()
    this.userFile = new UserFiles()
  }



  updateUser(user:User){
    console.log(user)
    this.user = JSON.parse(JSON.stringify(user))
  }

  constructor(private dataService:DataService) { }
}
