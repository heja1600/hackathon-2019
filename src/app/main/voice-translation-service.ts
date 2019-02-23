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
    languageFrom: string;
    languageTo: string;
    detectChange: Subject<string> = new Subject<string>();
    translateMsgChange: Subject<string> = new Subject<string>();
    typeChange: Subject<string> = new Subject<string>();
    constructor(private httpClient: HttpClient) {

    }
    execText(msg: string) {
        this.requestOperator(msg);
    }
    translate(message: string) {
       
        // kod för översättning från voice input
    }
    setLanguage(code: string) {
        if(code.length < 3) {
            this.languageTo = code;
            return;
        }
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
    setFromLanguage(code: string) {
        if(code.length < 3) {
            this.languageFrom = code;
            return;
        }
        console.log(code);
        switch(code) {
            case 'sv-SE':
                this.languageFrom = 'sv';
            break;
            case 'en-GB': 
                this.languageFrom = 'en';
            break;
            case 'de-DE': 
                this.languageFrom = 'de';
            break;
            case 'fr-FR': 
                this.languageFrom = 'fr';
            break;
            case 'af-ZA':
                this.languageFrom = 'af';
            break;
            case 'es-ES':
                this.languageFrom = 'es';
            break;
            case 'it-IT':
                this.languageFrom = 'it';
            break;
            case 'ru-RU':
                this.languageFrom = 'ru';
            break;
            case 'fi-FI':
                this.languageFrom = 'fi';
            break;
            case 'pl-PL':
                this.languageFrom = 'pl';
            break;
            case 'is-IS':
                this.languageFrom = 'is';
            break;
        }
    }
    sendMessage(msg: string) {
        console.log('sendMessage');
        this.requestClient(msg);
        
    }
    sendMessageText(msg: string) {
        console.log('sendMessageText');
        this.requestOperator(msg);
        
    }
    requestClient(msg: string) {
        console.log("request");
        console.log("msg: ", msg);
        this.httpClient.post<{message: string, to: string, from: string}>('http://localhost:3000/post-message', {message: msg, to:this.languageTo})
        .subscribe((responsData)=> {
            this.to = responsData.to;
            this.from = responsData.from;
            console.log('Input message:', msg);
            console.log('Input languague:', this.from);
            console.log('Output message', responsData.message);
            console.log('Output language:', this.to);
            // document.getElementById('detectedLanguage').innerText = this.from;
            this.setMessage(responsData.message);
            this.detectChange.next(this.from);
        })
    }
    //Translate swe text to user language
    requestOperator(msg: string) {
        console.log("requestText");
        console.log("msg:", msg);
        // this.from = 'sv';
        // this.languageTo = document.getElementById('detectedLanguage').innerText;
        this.httpClient.post<{message: string, to: string, from: string}>('http://localhost:3000/post-message', {message: msg, to:this.languageFrom})
        .subscribe((responsData)=> {
            this.to = responsData.to;
            this.from = responsData.from;
            console.log('Input message:', msg);
            console.log('Input languague:', this.from);
            console.log('Output message', responsData.message);
            console.log('Output language:', this.to);
            
            this.typeChange.next(responsData.message);
            // document.getElementById('textareaTranslatedI d').innerText = responsData.message;
        })
    }
    setMessage(msg: string) {
        this.translateMsgChange.next(msg);
    }


}