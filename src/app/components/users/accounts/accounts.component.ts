import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IAdmin } from 'src/app/interfaces/admin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less']
})
export class AccountsComponent implements OnInit, OnDestroy {
  
  admin: IAdmin;
  adminSubscription: Subscription;
  
  constructor(private route: ActivatedRoute, private loginService: LoginService,
             private router: Router) { }
  
  ngOnInit() {
    this.adminSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.admin = this.loginService.getAdminById(+params['id']);
      });
    }

  editUser(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
    
  ngOnDestroy(): void {
      this.adminSubscription.unsubscribe;
    }

  }
  