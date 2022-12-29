import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit {
  num: number;
  constructor() {
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
