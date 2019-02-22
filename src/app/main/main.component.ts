import { Component, OnInit } from '@angular/core';
import { VoiceService } from './voice-service';
import Speech from 'speak-tts';
import { VoiceTranslationService } from './voice-translation-service';
import {
  RxSpeechRecognitionService
} from '@kamiazya/ngx-speech-recognition';
import { Subscription } from 'rxjs';
import { Translator } from 'angular-translator';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [VoiceService,
     VoiceTranslationService,
      RxSpeechRecognitionService]
})
export class MainComponent implements OnInit {
  recordning = false;
  messageSub: Subscription;
  message: string;
  translateSub: Subscription;
  translateMsg = '';
  constructor(private vs: VoiceService, 
              private vts: VoiceTranslationService
              ) { }

  ngOnInit() {
    this.messageSub = this.vs.messageChange.subscribe((value) => {
      this.message = value;
      this.vts.sendMessage(this.message);
    })

    this.translateSub = this.vts.translateMsgChange.subscribe((value) => {
      this.translateMsg = this.translateMsg + value;
      this.sayText(this.translateMsg);
      
    })
  }
  private sayText(msg: string) {
    // här ska du läsa upp msg
    const speech = new Speech();
    speech.speak({
      text: msg,
      }).then(() => {
      console.log("Success !")
      }).catch(e => {
      console.error("An error occurred :", e)
      })
  }
 startListen(): void {
    this.recordning = true;
    this.vs.start();
  }
  stopListen(): void {
    this.recordning = false;
    this.vs.stop();
  }
  translate(): void {
    this.vts.exec();
  }
}
