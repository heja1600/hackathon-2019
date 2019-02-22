import { Component, OnInit } from '@angular/core';
import { VoiceService } from './voice-service';
import { VoiceTranslationService } from './voice-translation-service';
import {
  RxSpeechRecognitionService,
  resultList,
} from '@kamiazya/ngx-speech-recognition';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [VoiceService, VoiceTranslationService, RxSpeechRecognitionService]
})
export class MainComponent implements OnInit {
  recordning = false;
  constructor(private vs: VoiceService, 
              private vts: VoiceTranslationService
              ) { }

  ngOnInit() {

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
