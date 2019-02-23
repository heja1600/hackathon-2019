(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" style=\"padding: 20px;\">\r\n\r\n      <app-main> </app-main>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hackathon2019';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @kamiazya/ngx-speech-recognition */ "./node_modules/@kamiazya/ngx-speech-recognition/fesm5/kamiazya-ngx-speech-recognition.js");










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
            ],
            providers: [_kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_9__["SpeechRecognitionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.left-div {\r\n    float: left;\r\n    width: 45%;\r\n}\r\n\r\n.right-div {\r\n    float: right;\r\n    width: 45%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGVmdC1kaXYge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4ucmlnaHQtZGl2IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n<div class=\"left-div\">\r\n\r\n\r\n      <br>\r\n\r\n      <!-- Output To Language -->\r\n      <mat-card>\r\n            <mat-form-field>\r\n                  <mat-label> Översätt till</mat-label>\r\n                  <br>\r\n                  <mat-select style=\"width:100%;\" matNativeControl (selectionChange)=\"translateTo($event)\">\r\n                        <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.code\">{{lang.lang}}</mat-option>\r\n                  </mat-select>\r\n            </mat-form-field>\r\n      </mat-card>\r\n      <br>\r\n\r\n      <!-- Manual text field-->\r\n      <!--\r\n      <mat-form-field style=\"width: 100%\">\r\n            <input matInput placeholder=\"Skriv ord\" (click)=\"wordInput($event)\" #wordinput>\r\n      </mat-form-field>\r\n      -->\r\n\r\n      <br>\r\n\r\n      <!-- Buttons -->\r\n      <button style=\"padding:5px;width: 45%;\" mat-raised-button color=\"primary\" [disabled]=\"recording\" (click)=\"startListen()\">Get\r\n            Voice <mat-icon>phone</mat-icon></button>\r\n      <button style=\"padding:5px;width: 45%; float:right\" mat-raised-button color=\"warn\" [disabled]=\"!recording\" (click)=\"stopListen()\">Stop\r\n            Voice<mat-icon>phone_missed</mat-icon></button>\r\n      <!--\r\n      <button style=\"padding:20px\" mat-raised-button (click)=\"wordinput.click()\">Translate</button>\r\n                  -->\r\n      <br>\r\n      <br>\r\n\r\n      <!-- Input Voice-->\r\n      <!-- \r\n<p>Detected language: </p>\r\n      <p id=\"detectedLanguage\"></p>\r\n      -->\r\n      <table cellspacing=\"0\"><tr>\r\n            <td style=\"width: 100%\">\r\n                        <mat-form-field appearance=\"outline\" style=\"width: 100%\">\r\n                                    <mat-label>Voice Input</mat-label>\r\n                                    <input [disabled]=\"true\" [value]=\"message\" matInput>\r\n                              </mat-form-field>\r\n            </td>\r\n            <td style=\"width: 100%\">\r\n                        <mat-form-field appearance=\"outline\" style=\"width: 100%\">\r\n                                    \r\n                                    <input maxlength=\"5\"  [disabled]=\"true\" [value]=\"detectedLanguage\" matInput>\r\n                              </mat-form-field>\r\n            </td>\r\n      </tr></table>\r\n\r\n     \r\n      <br>\r\n\r\n      <!-- Input Voice Translated-->\r\n      <mat-form-field appearance=\"outline\" style=\"width: 100%\" class=\"temp\">\r\n            <mat-label>Translated Output</mat-label>\r\n            <textarea disabled [value]=\"translateMsg\" matInput></textarea>\r\n      </mat-form-field>\r\n</div>\r\n\r\n<div class=\"right-div\">\r\n\r\n      <p>Operator side</p>\r\n      <div class=\"input-group\" id=\"textareaOperator\">\r\n            <textarea id=\"textareaOperatorId\" class=\"form-control custom-control\" #inputWord (click)=\"wordInputText($event)\"rows=\"3\" value=\"\" style=\"resize:none\"></textarea>\r\n            <span class=\"input-group-addon btn btn-primary\" id=\"translateButton\" (click)=\"inputWord.click()\"><mat-icon>g_translate</mat-icon></span>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <p>Translated text</p>\r\n      <div class=\"input-group\" id=\"textareaTranslated\" >\r\n            <textarea [value]=\"typeMsg\" id=\"textareaTranslatedId\" class=\"form-control custom-control\" #say (click)=\"sayText($event)\" rows=\"3\" style=\"resize:none\"></textarea>\r\n            <span class=\"input-group-addon btn btn-primary\" id=\"synthesisSpeechButton\" (click)=\"say.click()\"><mat-icon>volume_up</mat-icon></span>\r\n            <textarea  disabled [value]=\"detectedLanguage\" style=\"width: 60px\"  class=\"form-control custom-control\" style=\"resize:none\" rows=\"3\"></textarea>\r\n            <span class=\"input-group-addon btn btn-primary\" ><mat-icon>language</mat-icon></span>\r\n           \r\n      </div>\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<!--\r\n          <div class=\"container\">\r\n                 \r\n            <h5> Voice Input</h5>\r\n            <textarea class=\"form-control custom-control input-group\" rows=\"3\" style=\"resize:none\">{{message}}</textarea>\r\n            <div [@answerAnim]=\"anim\">\r\n            <h5> Translated Voice</h5>\r\n            <textarea class=\"form-control custom-control input-group\" rows=\"3\" style=\"resize:none\">{{translateMsg}}</textarea>\r\n            </div>\r\n      </div>\r\n   <p>Raw speech-to-text</p>\r\n      <div class=\"input-group\" id=\"textareaTranslated\">\r\n            <textarea class=\"form-control custom-control\" rows=\"3\" style=\"resize:none\">{{message}}</textarea>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <p>Translated speech</p>\r\n      <div class=\"input-group\" id=\"textareaTranslated\">\r\n            <textarea class=\"form-control custom-control\" rows=\"3\" style=\"resize:none\">{{translateMsg}}</textarea>\r\n      </div>\r\n      <p>Select translated language</p>\r\n     \r\n\r\n</div>\r\n-->\r\n<!-- Input From Language -->\r\n<!--\r\n      <mat-card>\r\n            <mat-form-field>\r\n                  <mat-label> Översätt från</mat-label>\r\n                  <br>\r\n                  <mat-select style=\"width:100%;\" matNativeControl (selectionChange)=\"translateTo($event)\">\r\n                        <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.code\">{{lang.lang}}</mat-option>\r\n                  </mat-select>\r\n\r\n            </mat-form-field>\r\n      </mat-card>\r\n      -->\r\n<!--\r\n\r\n\r\n<div class=\"right-div\">\r\n\r\n      <p>Operator side</p>\r\n      <div class=\"input-group\" id=\"textareaOperator\">\r\n            <textarea class=\"form-control custom-control\" rows=\"3\" style=\"resize:none\">Placeholder</textarea>\r\n            <span class=\"input-group-addon btn btn-primary\" id=\"translateButton\" onclick=\"textTranslate()\">Translate</span>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <p>Translated text</p>\r\n      <div class=\"input-group\" id=\"textareaTranslated\">\r\n            <textarea class=\"form-control custom-control\" rows=\"3\" style=\"resize:none\"></textarea>\r\n            <span class=\"input-group-addon btn btn-primary\" id=\"synthesisSpeechButton\">Synthesis speech</span>\r\n      </div>\r\n\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _voice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voice-service */ "./src/app/main/voice-service.ts");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _voice_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voice-translation-service */ "./src/app/main/voice-translation-service.ts");
/* harmony import */ var _kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kamiazya/ngx-speech-recognition */ "./node_modules/@kamiazya/ngx-speech-recognition/fesm5/kamiazya-ngx-speech-recognition.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







var MainComponent = /** @class */ (function () {
    function MainComponent(vs, vts) {
        this.vs = vs;
        this.vts = vts;
        this.languages = [
            { lang: 'Svenska', code: 'sv-SE' },
            { lang: 'Engelska', code: 'en-GB' },
            { lang: 'Tyska', code: 'de-DE' },
            { lang: 'Franska', code: 'fr-FR' },
            { lang: 'Afrikaans', code: 'af-ZA' },
            { lang: 'Spanska', code: 'es-ES' },
            { lang: 'Italienska', code: 'it-IT' },
            { lang: 'Ryska', code: 'ru-RU' },
            { lang: 'Finska', code: 'fi-FI' },
            { lang: 'Polska', code: 'pl-PL' },
            { lang: 'Isländska', code: 'is-IS' },
        ];
        this.recording = false;
        this.anim = 'inactive';
        this.message = '';
        //Input message detected language
        this.detectedLanguage = '';
        this.typeMsg = '';
        this.translateMsg = '';
        this.translatedOperatorMsg = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.vs.messageChange.subscribe(function (value) {
            _this.message += value;
            _this.vts.sendMessage(_this.message);
        });
        this.translateSub = this.vts.translateMsgChange.subscribe(function (value) {
            _this.translateMsg = _this.translateMsg + " " + value;
            //this.sayText(this.translateMsg);
        });
        this.typeSub = this.vts.typeChange.subscribe(function (value) {
            _this.typeMsg = value;
            console.log('typeSub', value);
        });
        this.detectedLanguageSub = this.vts.detectChange.subscribe(function (value) {
            _this.detectedLanguage = value.toLocaleUpperCase();
            console.log(value);
            _this.vts.setLanguage(value);
        });
    };
    MainComponent.prototype.test = function (event) {
        console.log('dwadaw', event);
    };
    MainComponent.prototype.sayText = function (event) {
        console.log('sayText');
        if (event.srcElement.value !== undefined &&
            event.srcElement.value !== null) {
            var msg = event.srcElement.value;
            // här ska du läsa upp msg
            var speech = new speak_tts__WEBPACK_IMPORTED_MODULE_3___default.a();
            speech.speak({
                text: msg,
            }).then(function () {
                console.log("Success !");
            }).catch(function (e) {
                console.error("An error occurred :", e);
            });
        }
    };
    MainComponent.prototype.startListen = function () {
        this.recording = true;
        this.vs.start();
    };
    MainComponent.prototype.stopListen = function () {
        this.recording = false;
        this.vs.stop();
    };
    MainComponent.prototype.wordInput = function (event) {
        this.vts.exec(event.srcElement.value);
    };
    MainComponent.prototype.wordInputText = function (msg) {
        if (msg !== null && msg !== undefined) {
            this.vts.execText(msg.srcElement.value);
        }
    };
    MainComponent.prototype.translateTo = function (event) {
        this.vts.setLanguage(event.value);
    };
    MainComponent.prototype.translateFrom = function (lang) {
        this.vs.setLanguage(lang);
    };
    //Pause
    MainComponent.prototype.delay = function (ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("Pause for", ms, "ms"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            providers: [_voice_service__WEBPACK_IMPORTED_MODULE_2__["VoiceService"],
                _voice_translation_service__WEBPACK_IMPORTED_MODULE_4__["VoiceTranslationService"],
                _kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_5__["RxSpeechRecognitionService"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('answerAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('inactive <=> active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.2s')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_voice_service__WEBPACK_IMPORTED_MODULE_2__["VoiceService"],
            _voice_translation_service__WEBPACK_IMPORTED_MODULE_4__["VoiceTranslationService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/voice-service.ts":
/*!***************************************!*\
  !*** ./src/app/main/voice-service.ts ***!
  \***************************************/
/*! exports provided: VoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceService", function() { return VoiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kamiazya/ngx-speech-recognition */ "./node_modules/@kamiazya/ngx-speech-recognition/fesm5/kamiazya-ngx-speech-recognition.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var VoiceService = /** @class */ (function () {
    function VoiceService(ss) {
        var _this = this;
        this.ss = ss;
        this.message = '';
        this.isRecording = false;
        this.language = { lang: 'Svenska', code: 'sv-SE' };
        this.messageChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ss.onresult = function (e) {
            _this.message = e.results[0].item(0).transcript;
            _this.messageChange.next(_this.message);
        };
        this.ss.onaudiostart = function (e) {
            console.log('hej');
        };
        this.ss.onend = function (e) {
            if (_this.isRecording) {
                _this.start();
            }
        };
    }
    VoiceService.prototype.start = function () {
        console.log('start', this.language);
        this.isRecording = true;
        this.ss.lang = this.language.code;
        this.ss.start();
    };
    VoiceService.prototype.stop = function () {
        var _this = this;
        this.isRecording = false;
        if (this.message.length > 0) {
            this.ss.stop();
        }
        else {
            setTimeout(function () {
                _this.stop();
            }, 100);
        }
    };
    VoiceService.prototype.setLanguage = function (lang) {
        console.log(lang);
        this.language = lang;
    };
    VoiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_kamiazya_ngx_speech_recognition__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognitionService"]])
    ], VoiceService);
    return VoiceService;
}());



/***/ }),

/***/ "./src/app/main/voice-translation-service.ts":
/*!***************************************************!*\
  !*** ./src/app/main/voice-translation-service.ts ***!
  \***************************************************/
/*! exports provided: VoiceTranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceTranslationService", function() { return VoiceTranslationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var VoiceTranslationService = /** @class */ (function () {
    function VoiceTranslationService(httpClient) {
        this.httpClient = httpClient;
        this.detectChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.translateMsgChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.typeChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    VoiceTranslationService.prototype.exec = function (msg) {
        this.request(msg);
    };
    VoiceTranslationService.prototype.execText = function (msg) {
        this.requestText(msg);
    };
    VoiceTranslationService.prototype.translate = function (message) {
        // kod för översättning från voice input
    };
    VoiceTranslationService.prototype.setLanguage = function (code) {
        if (code.length < 3) {
            this.languageTo = code;
            return;
        }
        console.log(code);
        switch (code) {
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
    };
    VoiceTranslationService.prototype.sendMessage = function (msg) {
        console.log('sendMessage');
        this.request(msg);
    };
    VoiceTranslationService.prototype.sendMessageText = function (msg) {
        console.log('sendMessageText');
        this.requestText(msg);
    };
    VoiceTranslationService.prototype.request = function (msg) {
        var _this = this;
        console.log("request");
        console.log("msg: ", msg);
        this.httpClient.post('http://localhost:3000/post-message', { message: msg, to: this.languageTo })
            .subscribe(function (responsData) {
            _this.to = responsData.to;
            _this.from = responsData.from;
            console.log('Input message:', msg);
            console.log('Input languague:', _this.from);
            console.log('Output message', responsData.message);
            console.log('Output language:', _this.to);
            // document.getElementById('detectedLanguage').innerText = this.from;
            _this.setMessage(responsData.message);
            _this.detectChange.next(_this.from);
        });
    };
    //Translate swe text to user language
    VoiceTranslationService.prototype.requestText = function (msg) {
        var _this = this;
        console.log("requestText");
        console.log("msg:", msg);
        // this.from = 'sv';
        // this.languageTo = document.getElementById('detectedLanguage').innerText;
        this.httpClient.post('http://localhost:3000/post-message', { message: msg, to: this.languageTo })
            .subscribe(function (responsData) {
            _this.to = responsData.to;
            _this.from = responsData.from;
            console.log('Input message:', msg);
            console.log('Input languague:', _this.from);
            console.log('Output message', responsData.message);
            console.log('Output language:', _this.to);
            _this.typeChange.next(responsData.message);
            // document.getElementById('textareaTranslatedI d').innerText = responsData.message;
        });
    };
    VoiceTranslationService.prototype.setMessage = function (msg) {
        this.translateMsgChange.next(msg);
    };
    VoiceTranslationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VoiceTranslationService);
    return VoiceTranslationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\hackathon-2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map