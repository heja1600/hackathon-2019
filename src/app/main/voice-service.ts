import { SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class VoiceService {
    message = '';
    messageChange: Subject<string> = new Subject<string>();
    constructor(public speachService: SpeechRecognitionService) {
        this.speachService.onstart = (e) => {
          };
          this.speachService.onresult = (e) => {
            this.message = e.results[0].item(0).transcript;
          };
    }
    start() {
        this.speachService.start();
    }
    stop() {
        this.speachService.stop();
        this.messageChange.next(this.message);
    }
    
}