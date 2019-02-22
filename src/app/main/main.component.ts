import { Component, OnInit } from '@angular/core';
import { VoiceService } from './voice-service';
import Speech from 'speak-tts';
import { VoiceTranslationService } from './voice-translation-service';
import {
  RxSpeechRecognitionService
} from '@kamiazya/ngx-speech-recognition';
import { Subscription } from 'rxjs';
import { Translator } from 'angular-translator';
import { Language } from '../shared/language';
import { trigger, style, state, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [VoiceService,
     VoiceTranslationService,
      RxSpeechRecognitionService],
  animations: [
    trigger('answerAnim', [
      state('active', style({

      })),
      state('inactive', style({

      })),
      transition('inactive <=> active', [
        animate('0.2s')
      ])
    ])
  ]
})


export class MainComponent implements OnInit {
  languages: Language[] = [
    {lang:'Svenska', code: 'sv'},
    {lang:'Engelska', code: 'en-GB'},
    {lang:'Tyska', code: 'de-DE'},
    {lang:'Franska', code: 'fr-FR'},
  ];
  recording = false;
  anim = 'inactive';
  messageSub: Subscription;
  message: string;
  translateSub: Subscription;
  translateMsg: string;
  constructor(private vs: VoiceService, 
              private vts: VoiceTranslationService
              ) { }

  ngOnInit() {
    this.messageSub = this.vs.messageChange.subscribe((value) => {
      this.message = value;
      this.vts.sendMessage(this.message);
    })
    this.translateSub = this.vts.translateMsgChange.subscribe((value) => {
      this.translateMsg = value;
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
    this.recording = true;
    this.vs.start();
  }
  stopListen(): void {
    this.recording = false;
    this.delay(1100).then(any=>{
      this.vs.stop();
 });

  }
  translate(): void {
    this.vts.exec();
  }
  translateTo(lang: Language) {
    this.vs.setLanguage(lang);
  }
  translateFrom(lang: Language) {
    this.vs.setLanguage(lang);
  }
  //Pause
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("Pause for 3000ms"));
  }
}
