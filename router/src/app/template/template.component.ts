import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  formGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      muxin: new FormControl(),
      shijie: new FormControl()
    });
  }

}
