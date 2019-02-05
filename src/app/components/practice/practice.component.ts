import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, Observer, of, from, timer, fromEvent, Subject, forkJoin } from 'rxjs';
import { map, filter, finalize, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.less']
})
export class PracticeComponent implements OnInit, OnDestroy {

  coordinate: string = '';
  timeOfClick: string = '';
  
  subscription: Subscription;
  customSubscription: Subscription;

  searchTerm = new Subject<string>();

  constructor() { }
  
  ngOnInit() {
    // *******************Interval************************
    const counter = interval(1000);
    this.subscription = counter.subscribe(
      (n: number) => {
        console.log(n);
      }
      // , (error: any) => {},
      // (complete) => {}
      );
    // *******************Custom Observable************************
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
    // *******************Of************************
    const source = of('abc', 'dgd', 'htn', 'rej');
    source.subscribe(
      (xyz) => {
        console.log(xyz);
    });
    // *******************from************************
    const source1 = from([1,3,6,4,8,10,3,6,12,8]);
    source1.subscribe(
      (n) => {
        console.log(n);
      });
    // *******************from,filter************************
    const source2 = from([1,3,6,4,8,10,3,6,12,8]).pipe(filter(x => x%2 === 0), map(x => x*2));
    source2.subscribe(
      (n) => {
        console.log(n);
      });
    // *******************timer,finalize************************
    const source3 = timer(1000);
    const example = source3.pipe(finalize(() => console.log('done')));
    example.subscribe();
    // *******************fromEvent************************
    const source4 = fromEvent(document, 'click');
    source4.subscribe(
      (e) => {
        this.coordinate = 'Your Coordinate: (' + e['pageX'] + ', ' + e['pageY'] + ')';
      });
    const example1 = source4.pipe(map(event => `Event time: ${event.timeStamp}`));
    const subscribe = example1.subscribe(
      (e) => {
        this.timeOfClick = 'You clicked after ' + e + ' ms after the page loaded.';
      });
    // *******************debounceTime************************
    const source5 = this.searchTerm.pipe(debounceTime(2000));
    source5.subscribe(
      (str) => {
        console.log(str);
      });
    // *******************debounceTime************************
    const obs1 = of('abg', 'shg', 'jhb', 'klj');
    const obs2 = of('123', '589', '456');
    const summary = forkJoin(obs1, obs2);
    summary.subscribe((x) => { console.log(x); });  

  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
