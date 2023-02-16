import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-streaming',
  templateUrl: './user-streaming.component.html',
  styleUrls: ['./user-streaming.component.css']
})
export class UserStreamingComponent implements OnInit {

  constructor(private route: Router){}

  ngOnInit(): void {
      
  }


}
