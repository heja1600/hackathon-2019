import { SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class VoiceService {
    message = '';
    messageChange: Subject<string> = new Subject<string>();
    constructor(public speachService: SpeechRecognitionService) {
        this.speachService.onstart = (e) => {
            console.log('onstart');
          };
          this.speachService.onresult = (e) => {
            this.message = e.results[0].item(0).transcript;
            this.messageChange.next(this.message);
          };
    }
    start() {
        this.speachService.start();
    }
    stop() {
        this.speachService.stop();
    }
}