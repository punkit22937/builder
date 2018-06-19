import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';




import { AppComponent } from './app.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { EditComponent } from './editor-page/edit/edit.component';

const rt:Routes = [
  {path:'editor-page',component: EditorPageComponent },
  {path:'',redirectTo: '/editor-page',pathMatch:'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    EditorPageComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rt)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
