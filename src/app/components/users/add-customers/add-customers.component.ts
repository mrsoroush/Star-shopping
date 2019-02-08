import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.less']
})
export class AddCustomersComponent implements OnInit {

  inputForm: FormGroup;
  bannedEmails = ['mr.soroush1988@gmail.com'];

  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required, this.bannedFirstname),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email, this.bannedEmailsCheck.bind(this)]),
      'mobile': new FormControl(null, [Validators.required, Validators.pattern('09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}')]),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required)
    });
  }

  onSubmit() { console.log(this.inputForm); }

  bannedEmailsCheck(control: FormControl): {[e: string]: boolean} {
    if(this.bannedEmails.indexOf(control.value) !== -1){
      return {'isBannedEmail': true};
    }
    return null;
  }

  bannedFirstname(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if(control.value === 'mina') {
              resolve({'isFirstnameBanned': true});
            } else {
              resolve(null);
            }
          }, 2000);
      });
    return promise;
  }

}
