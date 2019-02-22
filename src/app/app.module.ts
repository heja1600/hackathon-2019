import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatCardModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    MatCardModule,  
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
