import { Injectable } from '@angular/core';
import { RoleDTO } from './RoleDTO';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {

  constructor() { }


  roles: RoleDTO[] = [
    {
      pref_id: 1,
      role: "Instructional Designer"
    },
    {
      pref_id: 2,
      role: "Software Engineer"
    },
    {
      pref_id: 3,
      role: "Software Quality Engineer"
    }
  ];


  getRoleName(id: number) {
    return this.roles.filter(r => r.pref_id === id)[0].role;
  }

}
