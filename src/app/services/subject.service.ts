import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  userLogedin = new Subject();
  userName = new Subject();

  constructor() { }
}
