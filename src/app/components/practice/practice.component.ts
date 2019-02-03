import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.less']
})
export class PracticeComponent implements OnInit, OnDestroy {
  
  subscription: Subscription;
  customSubscription: Subscription;

  constructor() { }
  
  ngOnInit() {
    const counter = interval(1000);
    this.subscription = counter.subscribe(
      (n: number) => {
        console.log(n);
      }
      // , (error: any) => {},
      // (complete) => {}
      );
    
    const customObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(
          () => {
            observer.next('first package');
          }, 3000);
        setTimeout(
          () => {
            observer.next('second package');
          }, 5000);
        // setTimeout(
        //   () => {
        //     observer.error('An error occured...');
        //   }, 6000);
        setTimeout(
          () => {
            observer.complete();
          }, 8000);
      });

    this.customSubscription = customObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed.'); }
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
