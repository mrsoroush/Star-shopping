import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.less']
})
export class AddCustomersComponent implements OnInit {

  inputForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'mobile': new FormControl(null, [Validators.required, Validators.pattern('09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}')]),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

  }

}
