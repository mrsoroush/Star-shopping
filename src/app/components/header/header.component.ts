import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  logedIn = false;
  logedinUsername: string = '';
  loginSubscription: Subscription;
  logedinUsernameSubscription: Subscription;
  
  constructor(private subjectService: SubjectService) { }
  
  ngOnInit() {
    this.loginSubscription = this.subjectService.userLogedin.subscribe(
      (data) => {
        if(data){
          this.logedIn = true;
        } else {
          this.logedIn = false;
        }
      });
    
    this.logedinUsernameSubscription = this.subjectService.userName.subscribe(
      (data) => {
        this.logedinUsername = data.toString();
      });
    }
    
  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
    this.logedinUsernameSubscription.unsubscribe();
  }

  }
  