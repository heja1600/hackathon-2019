import { RxSpeechRecognitionService, resultList } from '@kamiazya/ngx-speech-recognition';
import { Injectable } from '@angular/core';


@Injectable()
export class VoiceService {
    message = '';
    constructor(public rxSpeech: RxSpeechRecognitionService) {
        
    }
    start() {
        this.rxSpeech
        .listen()
        .pipe(resultList)
        .subscribe((list: SpeechRecognitionResultList) => {
            this.message = list.item(0).item(0).transcript;
            console.log(this.message);
        })
    }
    stop() {
        
    }
}