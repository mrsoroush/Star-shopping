import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.less']
})
export class CalculationComponent implements OnInit {

  @ViewChild('inputNUmber') inpurVar: ElementRef;
  @ViewChild('barbari') barVar: ElementRef;
  fiat: number;
  barbar: number;
  sud: number;
  result: number;
  re: number;
  bar: number;
  show = false;

  constructor() { }

  ngOnInit() {
  }

  calculate(){
    this.fiat = this.inpurVar.nativeElement.value;
    this.barbar = this.barVar.nativeElement.value;
    this.result = ((this.fiat * 2340));
    this.sud = this.result * 0.25;
    this.bar = this.barbar * 1;
    this.show = true;
    return this.re = this.result + this.sud + this.bar;
  }

}
