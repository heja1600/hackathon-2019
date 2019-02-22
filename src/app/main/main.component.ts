import { Component, OnInit } from '@angular/core';
import { VoiceService } from './voice-service';
import { VoiceTranslationService } from './voice-translation-service';
import {
  RxSpeechRecognitionService
} from '@kamiazya/ngx-speech-recognition';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [VoiceService, VoiceTranslationService, RxSpeechRecognitionService]
})
export class MainComponent implements OnInit {
  recordning = false;
  messageSub: Subscription;
  message: string;
  constructor(private vs: VoiceService, 
              private vts: VoiceTranslationService
              ) { }

  ngOnInit() {
    this.messageSub = this.vs.messageChange.subscribe((value) => {
      this.message = value;
      this.vts.translate(this.message);
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
