import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';
import { IAdmin } from 'src/app/interfaces/admin';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  @ViewChild('f') inputForm: NgForm;
  admins: IAdmin[] = [{id: 0, name: '', username: '', password: '', email: ''}];
  admin: IAdmin;
  user: string;
  pass: string;
  message: string = '';

  logoutSubscription: Subscription;

  constructor(private loginService: LoginService,
              private router: Router,
              private subjectService: SubjectService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.admins = this.loginService.getAdmins();
    this.logoutSubscription = this.route.queryParams.subscribe(
      (q) => {
        if(q['logout'] == 1){
          this.loginService.loggedIn = false;
          this.subjectService.userLogedin.next(this.loginService.loggedIn);
        }
      });
  }

  loginSubmit(){
    this.user = this.inputForm.value.username;
    this.pass = this.inputForm.value['password'];
    this.admin = this.loginService.getAdmin(this.user, this.pass);
    if (this.admin){
      this.loginService.loggedIn = true;
      this.subjectService.userLogedin.next(this.loginService.loggedIn);
      this.subjectService.userName.next(this.admin.name);
      this.router.navigate(['/users']);
    } else {
      this.loginService.loggedIn = false;
      this.subjectService.userLogedin.next(this.loginService.loggedIn);
      this.message = 'Username or password is wrong...';
    }
  }

  ngOnDestroy(): void {
    this.logoutSubscription.unsubscribe();
  }

}

