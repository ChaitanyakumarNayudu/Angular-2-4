import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MessageComponent } from './message/message.component';
import { MessageListnerComponent } from './message-listner/message-listner.component';

import { routing } from './app.route'; 


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MessageComponent,
    MessageListnerComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
