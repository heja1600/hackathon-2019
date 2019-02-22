import { Translator } from "angular-translator";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class VoiceTranslationService {
    defaultLang = 'en';
    constructor() {
        
    }
    exec() {
        // skriv kod här
        const message = "Where are you";

    }
    translate(message: string) {
        
        // kod för översättning från voice input
    }

    switchLanguage(language: string) {
        
    }
}