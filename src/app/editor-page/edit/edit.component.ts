import { Component, OnInit, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],

})
export class EditComponent implements OnInit, AfterViewInit {
   isClassVisible =  false;
  editorCode: string = "";
  editorCodeView: string = "";
  Viewcode: boolean = false;
  check:boolean = false;
  
  coloritems :string[]=['red','blue','yellow','green'];


  @Output() editorEvent = new EventEmitter<any>();
  @Input('props') property: any;
  @Input('data') data: any;
  @Input('colors') color:any;
  a
  constructor() {
  }
  ngOnInit() {
    $("#contentedit").html(this.data);
  }
  ngAfterViewInit() {
    $('body').on('keyup', '[contenteditable]', (event) => {
      event.stopPropagation();
      event.preventDefault();
      this.editorCode = $("#contentedit").html();
      this.editorEvent.emit(this.editorCode);
    });
    
  //   $(document).ready(function(){
  //     $("smallFont").click(function(){
  //         $("contentedit").addClass("small");
  //     });
  // });
  }
  onBold() {
    console.log(this.coloritems[0]);
    document.execCommand('bold', false, null);
    this.editorCode = $("#contentedit").html();
    this.editorEvent.emit(this.editorCode);
  }
  onItalics() {
    document.execCommand('italic', false, null);
    this.editorCode = $("#contentedit").html();
    this.editorEvent.emit(this.editorCode);
  }
  onUnderline() {
    document.execCommand('underline', false, null);
    this.editorCode = $("#contentedit").html();
    this.editorEvent.emit(this.editorCode);
  }
  onFont(fosize) {
    var sel, range;
    if (window.getSelection) {
        
        sel = window.getSelection();
        var selectedText = sel.toString();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            var span = document.createElement("span");
            span.classList.add(fosize);
            //el.style.fontSize=fosize;
            span.innerHTML = selectedText;
            var element = document.getElementsByTagName("P");
            element[0].appendChild(span);
            //element.appendChild(el);
            var frag = document.createDocumentFragment(), node, lastNode;
            console.log(span.lastChild, element[0].lastChild);
            while ( (node = element[0].lastChild) ) {
              console.log('in while', node)
                //element[0].appendChild(el);
                //node = el.appendChild(selectedText);
                
                lastNode = frag.appendChild(node);
                console.log(lastNode);
             }
            //el.appendChild(lastNode)

            console.log('frag', frag);
            range.insertNode(frag);
            
            // Preserve the selection
            // if (lastNode) {
            //     range = range.cloneRange();
            //     console.log(range);
            //     range.setStartAfter(lastNode);
            //     range.collapse(true);
            //     sel.removeAllRanges();
            //     sel.addRange(range);
            // }
        }
    // } else if (document.selection && document.selection.type != "Control") {
    //     // IE < 9
    //     document.selection.createRange().pasteHTML(html);
    // }
  }
}
  // onFont(fosize) {
  //   // var selection = window.getSelection().getRangeAt(0).cloneContents();
  //   // var span = document.createElement('span');
  //   // span.appendChild(selection);
  //   // var wrappedselection = '<span class="font-size=20px">'+span.innerHTML+'</span>';
  //   // document.execCommand('insertHTML', false, wrappedselection);
  //   // this.editorCode = $("#contentedit").html();
  //   // this.editorEvent.emit(this.editorCode);
  //   // document.execCommand('formatblock', false, 'div');
  //   // document.execCommand('fontSize', false, fosize);
  //   // // var listId = window.getSelection();
  //   // // $(listId).addClass(fosize);
  //   // this.editorCode = $("#contentedit").html();
  //   // this.editorEvent.emit(this.editorCode);
  //   if(fosize=='large')
  //   {
  //     var x = document.getElementById("font");   
  //     if (x.className === "font_size") { 
  //       x.style.fontSize = "30px";
  //     }
  //     this.editorCode = $("#contentedit").html();
  //     this.editorEvent.emit(this.editorCode);
  //   //   this.a=window.getSelection().toString();
  //   //   var e = document.createElement("span");
  //   //   e.classList.add("large");
  //   //   var node = document.createTextNode(this.a);
  //   //   e.style.fontSize='large';
  //   //   e.appendChild(node);
      
  //   //   var element = document.getElementById("contentedit");
  //   //   element.appendChild(e);
  //   //   //element.replaceChild(node,element.childNodes[0]);
      
  //   //   this.editorCode = $("#contentedit").html();
  //   //   this.editorEvent.emit(this.editorCode);
  //   // }
  //   //  if (fosize == "default") {
  //   //     document.execCommand("removeFormat", false, "fontSize");
  //   //     this.editorCode = $("#contentedit").html();
  //   //     this.editorEvent.emit(this.editorCode);
  //   //   }
  //   //   else
  //   //   {
  //   // document.execCommand('fontSize', false, fosize);
  //   // this.editorCode = $("#contentedit").html();
  //   // this.editorEvent.emit(this.editorCode);
  //   //   }
  //   }}
  onColor(color) {
      if (color == "default") {
        document.execCommand("removeFormat", false, "foreColor");
        this.editorCode = $("#contentedit").html();
        this.editorEvent.emit(this.editorCode);
      }
    else 
    {
      document.execCommand('foreColor', false, color);
      this.editorCode = $("#contentedit").html();
      this.editorEvent.emit(this.editorCode);
    }
  }
  // getCaretPosition(editableDiv) {
  //   var caretPos = 0,
  //     sel, range;
  //   if (window.getSelection) {
  //     sel = window.getSelection();
  //     if (sel.rangeCount) {
  //       range = sel.getRangeAt(0);
  //       if (range.commonAncestorContainer.parentNode == editableDiv) {
  //         caretPos = range.endOffset;
  //       }
  //     }
  //   } else if (document.getSelection && document.getSelection().createRange) {
  //     range = document.selection.createRange();
  //     if (range.parentElement() == editableDiv) {
  //       var tempEl = document.createElement("span");
  //       editableDiv.insertBefore(tempEl, editableDiv.firstChild);
  //       var tempRange = range.duplicate();
  //       tempRange.moveToElementText(tempEl);
  //       tempRange.setEndPoint("EndToEnd", range);
  //       caretPos = tempRange.text.length;
  //     }
  //   }
  //   return caretPos;
  // }
  edittarget(){
    this.check = !this.check;
  }
 onInsert(url,text) 
 {
   var sel,range;
    if (window.getSelection) 
    {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) 
      {
        range = sel.getRangeAt(0);
        var el = document.createElement("div");
        if(this.check)
        {
          el.innerHTML = '<a href="http://' + url + '" target="_blank">' + text + '</a>';
        }
        else
        {
          el.innerHTML = text.link(url);
        }
        var frag = document.createDocumentFragment(), node, lastNode;
        while ( (node = el.firstChild) ) {
          lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);
        if (lastNode) 
        {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    }
}
  onCodeview() {
    this.editorCodeView = $("#contentedit").html();
    this.Viewcode = !this.Viewcode;
  }
}
