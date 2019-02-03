import { Component, OnInit } from '@angular/core';
import { IAdmin } from 'src/app/interfaces/admin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less']
})
export class PanelComponent implements OnInit {

  admins: IAdmin[] = [{id: 0, name: '', username: '', password: '', email: ''}];

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.admins = this.loginService.getAdmins();
  }

}
