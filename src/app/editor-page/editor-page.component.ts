import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {
  //  coloritems = ['red','blue','yellow','green']

  constructor() { }

  ngOnInit() {
  }
  editedValue: string = "<p>hello world</p>";

  valueUpdate(event: string) {
    this.editedValue = event;
  }
}
