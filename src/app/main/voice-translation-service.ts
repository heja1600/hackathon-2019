import { Translator } from "angular-translator";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Language } from '../shared/language';

@Injectable()
export class VoiceTranslationService {
    message: string;
    to: string;
    from: string;
    languageTo: string = 'fr';
    translateMsgChange: Subject<string> = new Subject<string>();
    constructor(private httpClient: HttpClient) {

    }
    exec() {
        // skriv kod här
        console.log('exec');
        this.request("hej mitt namn är herman");

    }
    translate(message: string) {
       
        // kod för översättning från voice input
    }

    setLanguage(language: Language) {
        switch(language.code) {
            case 'sv-SE':
                this.languageTo = 'se';
            break;
            case 'en-GB': 
                this.languageTo = 'en';
            break;
            case 'de-DE': 
                this.languageTo = 'de';
            break;
            case 'fr-FR': 
                this.languageTo = 'fr';
            break;
        }
    }
    sendMessage(msg: string) {
        console.log('sendMessage');
        this.request(msg);
        
    }
    request(msg: string) {
        this.httpClient.post<{message: string, to: string, from: string}>('http://localhost:3000/post-message', {message: msg, to:this.languageTo})
        .subscribe((responsData)=> {
            this.to = responsData.to;
            this.from = responsData.from;
            console.log('Input message:', msg);
            console.log('Input languague:', this.from);
            console.log('Output message', responsData.message);
            console.log('Output language:', this.to);
            
            this.setMessage(responsData.message);
        })
    }
    setMessage(msg: string) {
        this.translateMsgChange.next(msg);
    }


}