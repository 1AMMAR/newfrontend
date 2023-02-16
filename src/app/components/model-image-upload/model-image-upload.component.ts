import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-model-image-upload',
  templateUrl: './model-image-upload.component.html',
  styleUrls: ['./model-image-upload.component.css']
})

export class ModelImageUploadComponent implements OnInit {
  // uploadForm: FormGroup;
  fileName: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.hideInputElements();
    // this.uploadForm = this.formBuilder.group({
    //   profile: ['']
    // });
  }

  showFileNameOnChange(e: any): void {
    const file = e.target.files[0];
    const fileSize = file.size;
    if (fileSize > 10485760) {
      alert("file is too large, maximum size is 10MB");
      this.resetInputValue();
    } else {
      this.fileName = file.name;
      document.getElementById("deleteButton")!.hidden = false;
      document.getElementById("submitButton")!.hidden = false;
    }
  }

  resetInputValue(): void {
    document.getElementById("fileInput")!.innerHTML = "";
    this.fileName = "";
    this.hideInputElements();
  }

  hideInputElements(): void {
    document.getElementById("deleteButton")!.hidden = true;
    document.getElementById("submitButton")!.hidden = true;
    document.getElementById("uploadingGIF")!.hidden = true;
  }

  testing(): void {

  }

}
