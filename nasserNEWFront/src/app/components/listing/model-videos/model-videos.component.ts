import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-videos',
  templateUrl: './model-videos.component.html',
  styleUrls: ['./model-videos.component.css']
})
export class ModelVideosComponent implements OnInit {
  modelName: string = 'test';
  constructor() { }

  ngOnInit(): void {
  }

}
