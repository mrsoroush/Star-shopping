import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IAdmin } from 'src/app/interfaces/admin';
import { LoginService } from 'src/app/services/login.service';
import { CanComponentDeactivate } from 'src/app/services/can-deactivate-guard.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.less']
})
export class EditUsersComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  
  name;
  username;
  password;
  email;
  
  userSubscription: Subscription;
  querySubscription: Subscription;
  admin: IAdmin;
  allowEdit = false;
  saveChanges = false;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService) { }
    
    ngOnInit() {
      this.userSubscription = this.route.params.subscribe(
        (params: Params) => {
          this.admin = this.loginService.getAdminById(+params['id']);
        });
        
        this.querySubscription = this.route.queryParams.subscribe(
          (queryParams: Params) => {
            this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
          });
          
          this.name = this.admin.name;
          this.username = this.admin.username;
          this.password = this.admin.password;
          this.email = this.admin.email;
      }

    onSave(){
      this.admin.name = this.name;
      this.admin.username = this.username;
      this.admin.password = this.password;
      this.admin.email = this.email;
      this.loginService.updateUser(this.admin.name, this.admin);
      this.saveChanges = true;
      this.router.navigate(['../'], {relativeTo: this.route});
    }

    canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
      if(!this.allowEdit){
        return true;
      }
      if((this.name !== this.admin.name || this.username !== this.admin.username ||
        this.password !== this.admin.password || this.email !== this.admin.email) && !this.saveChanges){
          return confirm('Do you want leave this page without saving?');
      } else {
        return true;
      }
    };
        
    ngOnDestroy(): void {
      this.userSubscription.unsubscribe();
      this.querySubscription.unsubscribe();
      }
    }
      