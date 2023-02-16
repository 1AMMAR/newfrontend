import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AdminComponent implements OnInit {
  isChecked: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  printStatus(): void {

    console.log(this.isChecked);
  }

}
