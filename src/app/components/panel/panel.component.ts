import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IAdmin } from 'src/app/interfaces/admin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less']
})
export class PanelComponent implements OnInit {

  admins: IAdmin[] = [{id: 0, name: '', username: '', password: '', email: ''}];
  filterString = '';

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    this.admins = this.loginService.getAdmins();
  }

  addCustomer() {
    this.route.navigate(['/addCustomers']);
  }

}
