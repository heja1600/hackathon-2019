import { Translator } from "angular-translator";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class VoiceTranslationService {
    translateMsgChange: Subject<String> = new Subject<String>();
    constructor(private httpClient: HttpClient) {

    }
    exec() {
        // skriv kod här
        console.log('exec');
        const msg = 'Where are you';
        this.httpClient.post<{message: string}>('http://localhost:3000/post-message', {message: msg})
        .subscribe((responsData)=> {
            this.setMessage(responsData.message);
        })

    }
    translate(message: string) {
       
        // kod för översättning från voice input
    }

    switchLanguage(language: string) {
        
    }
    sendMessage(msg: string) {
        console.log('sendMessage');
        this.httpClient.post<{message: string}>('http://localhost:3000/post-message', {message: msg})
        .subscribe((responsData)=> {
            this.setMessage(responsData.message);
        })
    }
    setMessage(msg: string) {
        this.translateMsgChange.next(msg);
    }

}