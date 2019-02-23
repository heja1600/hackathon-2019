import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatCardModule, MatButtonModule, MatGridListModule, MatRadioGroup, MatRadioButton, MatRadioModule, MatExpansionModule, MatLabel, MatInputModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxSpeechRecognitionService, SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    MatInputModule,
    MatCardModule,  
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatRadioModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [SpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
