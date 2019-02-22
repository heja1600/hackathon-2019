import { Translator } from "angular-translator";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VoiceTranslationService {
    defaultLang = 'en';
    constructor(private httpClient: HttpClient) {
        
    }
    exec() {
        // skriv kod här
        const msg = 'Where are you';

        this.httpClient.post<{message: string}>('http://localhost:3000/post-message', {message: msg})
        .subscribe((responsData)=> {
            console.log(responsData.message);
        })

    }
    translate(message: string) {
       
        // kod för översättning från voice input
    }

    switchLanguage(language: string) {
        
    }
    sendMessage(msg: string) {
        this.httpClient.post<{message: string}>('http://localhost:3000/post-message', {message: msg})
        .subscribe((responsData)=> {
            console.log(responsData.message);
        })
    }
}