import { Translator } from "angular-translator";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class VoiceTranslationService {
    message: string;
    to: string;
    from: string;
    languageTo: string = 'en';
    translateMsgChange: Subject<String> = new Subject<String>();
    constructor(private httpClient: HttpClient) {

    }
    exec() {
        // skriv kod här
        console.log('exec');
        const msg = 'Where are you';
        this.request(msg);

    }
    translate(message: string) {
       
        // kod för översättning från voice input
    }

    switchLanguage(language: string) {
        
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
            console.log('msg:', msg);
            console.log('from:', this.from);
            console.log('msg', responsData.message);
            console.log('to:', this.to);
            
            
            this.setMessage(responsData.message);
        })
    }
    setMessage(msg: string) {
        this.translateMsgChange.next(msg);
    }

}