import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modeldetails',
  templateUrl: './modeldetails.component.html',
  styleUrls: ['./modeldetails.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModeldetailsComponent implements OnInit{
  num: number;
  constructor(private route:Router) {
    this.num = 5;
  }

  getNum(): number {
    return this.num;
  }

  updateNum(x: any): void {
    console.log(this.num);
  }

  ngOnInit(): void {
  }
  


}
