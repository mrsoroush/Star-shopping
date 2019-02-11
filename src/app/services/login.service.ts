import { Injectable } from '@angular/core';
import { IAdmin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  admins: IAdmin[] = [
    {id: 1, name: 'soroush', username: 'mr.soroush', password: '1234', email: 'soroush.shokuee@yahoo.com'},
    {id: 2, name: 'behnam', username: 'behnam12', password: '5678', email: 'khaksari.behnam@gmail.com'},
    {id: 3, name: 'farnoush', username: 'test', password: '9012', email: 'test@test.com'},
    {id: 4, name: 'sima', username: 'sima12', password: '0214', email: 'sima@gmail.com'}
  ];
  loggedIn = false;

  constructor() { }

  getAdmins(){
    return this.admins;
  }

  getAdmin(username: string, password: string){
    const admin = this.admins.find(
      (a) => {
        return a.username === username && a.password === password;
      });
    return admin;
  }

  getAdminById(id: number){
    const admin = this.admins.find(
      (a) => {
        return a.id === id;
      });
    return admin;
  }

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            resolve(this.loggedIn);
          }, 1000)
      });
    return promise;
  }

  updateUser(name: string, user: IAdmin){
    let adminName = this.admins.find(
      (u) => {
        return u.name === name;
      });
    adminName = user;
  }

}
