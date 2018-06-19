import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
declare var $;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
 
})
export class EditComponent implements OnInit {

  editorCode: string = "";
  editorCodeView: string= "";
  code:boolean=false;

  @Output() editorEvent = new EventEmitter<any>();
  @Input('props') property:any;
  @Input('data') data:any;
  constructor() {
  }
  ngOnInit() {
    $("#contentedit").html(this.data);
  }
  onBold() {
    document.execCommand('bold',false,null);
    this.editorCode=$("#contentedit").html();
    this.editorEvent.emit(this.editorCode);
  }
  onItalics() {
    document.execCommand('italic',false,null);
    this.editorCode=$("#contentedit").html();
    this.editorEvent.emit(this.editorCode);
  }
  onUnderline() {
    document.execCommand('underline',false,null);
    this.editorCode=$("#contentedit").html();
    this.editorEvent.emit(this.editorCode);
  }
  onFont(fosize) {
    document.execCommand('fontSize',false,fosize);
    this.editorCode=$("#contentedit").html();
    this.editorEvent.emit(this.editorCode);
  }
  onColor(col) {
    if(col=="normal")
    {
      // document.execCommand('foreColor',false,'transparent');
      this.editorCode=$("#contentedit").html();
      // this.editorEvent.emit(this.editorCode);
      if (this.editorCode.search(/(<font color="#[a-z]+[0-9]+">|<\/font>)/gm) >= 0)
      {
        this.editorCode = this.editorCode.replace(/(<font color="#[a-z]+[0-9]+">|<\/font>)/gm, '');
        // var $this = $("#contentedit");
        // this.editorCode=$this[0].innerHTML;
        this.editorEvent.emit(this.editorCode);
      }
    }
    else
    {
      document.execCommand('foreColor',false,col);
      this.editorCode=$("#contentedit").html();
      this.editorEvent.emit(this.editorCode);
    }
  }
  onInsert(url, text) {
    document.execCommand('insertHTML',false,'<a href="http://' + url + '" target="_blank">' + text + '</a>');
    this.editorCode=$("#contentedit").html();
    this.editorEvent.emit(this.editorCode);
  }
  onCodeview() {
    this.editorCodeView=$("#contentedit").html();
    this.code= !this.code;
  }
}