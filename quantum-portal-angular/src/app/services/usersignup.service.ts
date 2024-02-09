import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersignupService {

  private _canCreateSubject = new BehaviorSubject<boolean>(false);

  canCreate = this._canCreateSubject.asObservable();

  constructor() { }

  setCanCreate(value:boolean){
    this._canCreateSubject.next(value)
  }
}
