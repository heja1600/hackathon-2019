import { SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Injectable } from '@angular/core';


@Injectable()
export class VoiceService {
    message = '';
    constructor(public speachService: SpeechRecognitionService) {
        
    }
    start() {
        
    }
    stop() {
        
    }
}