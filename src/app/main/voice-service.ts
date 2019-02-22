import { SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Injectable } from '@angular/core';


@Injectable()
export class VoiceService {
    message = '';
    constructor(public speachService: SpeechRecognitionService) {
        this.speachService.onstart = (e) => {
            console.log('onstart');
          };
          this.speachService.onresult = (e) => {
            this.message = e.results[0].item(0).transcript;
            console.log('MainComponent:onresult', this.message, e);
          };
    }
    start() {
        this.speachService.start();
    }
    stop() {
        this.speachService.stop();
    }
}