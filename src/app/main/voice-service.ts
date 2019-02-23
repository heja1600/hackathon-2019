import { SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Language } from '../shared/language';




@Injectable()
export class VoiceService {
    message = '';
    language: Language = {lang: 'Svenska', code: 'sv-SE'};
    messageChange: Subject<string> = new Subject<string>();
    constructor(public ss: SpeechRecognitionService) {
          this.ss.onresult = (e) => {
            this.message = e.results[0].item(0).transcript;
            this.messageChange.next(this.message);
          };
          this.ss.onaudiostart = (e) => {
              console.log('hej');
          }
          this.ss.onend = (e) => {
            this.start();
        }
    }
    start() {
        console.log('start', this.language);
        this.ss.lang = this.language.code;
        this.ss.start();
    }
    stop() {
        this.ss.stop();
    }
    setLanguage(lang: Language) {
        console.log(lang);
        this.language = lang;
    }
}