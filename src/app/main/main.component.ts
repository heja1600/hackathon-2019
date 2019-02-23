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
    {lang:'Svenska', code: 'sv-SE'},
    {lang:'Engelska', code: 'en-GB'},
    {lang:'Tyska', code: 'de-DE'},
    {lang:'Franska', code: 'fr-FR'},
    {lang:'Afrikaans', code: 'af-ZA'},
    {lang:'Spanska', code: 'es-ES'},
    {lang:'Italienska', code: 'it-IT'},
    {lang:'Ryska', code: 'ru-RU'},
    {lang:'Finska', code: 'fi-FI'},
    {lang:'Polska', code: 'pl-PL'},
    {lang:'Isländska', code: 'is-IS'},
  ];
  recording = false;
  anim = 'inactive';
  //Input message
  messageSub: Subscription;
  message: string = '';
  //Input message detected language
  detectedLanguage: string = '';
  detectedLanguageSub: Subscription;
  //Translated input message
  savedLang: Language;
  typeSub: Subscription;
  typeMsg: string = '';
  translateSub: Subscription;
  translateMsg: string = '';
  //Translated operator message
  translatedOperatorSub: Subscription;
  msgLog = '';
  translatedOperatorMsg: string = '';
  constructor(private vs: VoiceService, 
              private vts: VoiceTranslationService
              ) { }

  ngOnInit() {
    this.messageSub = this.vs.messageChange.subscribe((value) => {
      this.message = value;
      this.vts.sendMessage(this.message);

    });
    this.translateSub = this.vts.translateMsgChange.subscribe((value) => {
      this.translateMsg  =  value;
      this.msgLog +="\n" +value;
      
      //this.sayText(this.translateMsg);
    });
    this.typeSub = this.vts.typeChange.subscribe((value) => {
      this.typeMsg = value;
      console.log('typeSub', value);
    });
    this.detectedLanguageSub = this.vts.detectChange.subscribe((value)=> {
      this.detectedLanguage = value.toLocaleUpperCase();
      console.log(value);
      this.vts.setFromLanguage(value);
    })

  }
  test(event: any) {
    console.log('dwadaw', event);
  }
  sayText(event: any) {
    console.log('sayText');
    if(event.srcElement.value !== undefined &&
       event.srcElement.value !== null) {
         let msg = event.srcElement.value;
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
   
  }
 startListen(): void {
    this.recording = true;
    this.vs.start();
  }
  stopListen(): void {
    this.recording = false;
    this.vs.stop();
  }
  wordInputText(msg) {
    if(msg !== null && msg !== undefined ) {
      this.vts.execText(msg.srcElement.value);
    }
  }
  translateTo(event: any) {
    this.savedLang = event.value;
    this.vts.setLanguage(event.value);
  }
  translateFrom(lang: Language) {
    this.vs.setLanguage(lang);
  }
  //Pause
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("Pause for", ms, "ms"));
  }
}
