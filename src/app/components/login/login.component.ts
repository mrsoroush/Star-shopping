import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { IAdmin } from 'src/app/interfaces/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  admins: IAdmin[] = [{id: 0, name: '', username: '', password: '', email: ''}];
  admin: IAdmin;
  user: string;
  pass: string;
  message: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.admins = this.loginService.getAdmins();
  }

  loginSubmit(){
    this.user = this.username.nativeElement.value;
    this.pass = this.password.nativeElement.value;
    this.admin = this.loginService.getAdmin(this.user, this.pass);
    if (this.admin){
      this.loginService.loggedIn = true;
      this.router.navigate(['/users']);
    } else {
      this.loginService.loggedIn = false;
      this.message = 'Username or password is wrong...';
    }
  }

}
