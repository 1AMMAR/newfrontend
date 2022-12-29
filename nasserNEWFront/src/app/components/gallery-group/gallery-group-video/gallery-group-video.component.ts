import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-gallery-group-video',
  templateUrl: './gallery-group-video.component.html',
  styleUrls: ['./gallery-group-video.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GalleryGroupVideoComponent implements OnInit {
  color: string;
  constructor() {
    this.color = 'red';
  }

  ngOnInit(): void {
  }

}
