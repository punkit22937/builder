import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public editedValue: any = "<h1>hello world</h1>";

  valueUpdate(event: object) {
    this.editedValue = event;
  }
}
