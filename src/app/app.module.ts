import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxSpeechRecognitionService, SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Translator, TranslatorModule } from 'angular-translator';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    MatCardModule,  
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TranslatorModule.forRoot({
      providedLanguages: ['de', 'en', 'ru'],
      defaultLanguage: 'de'
    })
  ],
  providers: [SpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
