import { Translator } from "angular-translator";
import { Injectable } from '@angular/core';

@Injectable()
export class VoiceTranslationService {
    
    constructor(private translator: Translator) {
        
    }
    exec() {
        // skriv kod här
        console.log('hej william');
    }
    translate(message: string) {
        console.log('translate function', message);
        // kod för översättning från voice input
        this.translator.translate(message).then(
            (translation) => console.log(translation)
          );
    }
}