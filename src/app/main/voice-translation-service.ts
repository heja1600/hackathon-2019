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
    exec(msg: string) {
        this.request(msg);
    }
    translate(message: string) {
       
        // kod för översättning från voice input
    }

    setLanguage(code: string) {
        console.log(code);
        switch(code) {
            case 'sv-SE':
                this.languageTo = 'sv';
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
            case 'af-ZA':
                this.languageTo = 'af';
            break;
            case 'es-ES':
                this.languageTo = 'es';
            break;
            case 'it-IT':
                this.languageTo = 'it';
            break;
            case 'ru-RU':
                this.languageTo = 'ru';
            break;
            case 'fi-FI':
                this.languageTo = 'fi';
            break;
            case 'pl-PL':
                this.languageTo = 'pl';
            break;
            case 'is-IS':
                this.languageTo = 'is';
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