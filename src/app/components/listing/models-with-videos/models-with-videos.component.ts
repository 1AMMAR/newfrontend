import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-models-with-videos',
  templateUrl: './models-with-videos.component.html',
  styleUrls: ['./models-with-videos.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModelsWithVideosComponent implements OnInit {
  isEmpty: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
