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

module.exports = "\r\n<div class=\"container\" style=\"padding: 20px;\">\r\n  <app-main> </app-main>\r\n</div>\r\n\r\n\r\n"

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
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
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

module.exports = "\r\n.left-div , .right-div {\r\n    padding:50px;\r\n    display: inline-block;\r\n}\r\n\r\nmat-radio-group {\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGVmdC1kaXYgLCAucmlnaHQtZGl2IHtcclxuICAgIHBhZGRpbmc6NTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxubWF0LXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-div\">\r\n      <mat-card>\r\n                  <mat-radio-group>\r\n                              <mat-label> Översätt från</mat-label>\r\n                              <br>\r\n                              <mat-radio-button  *ngFor=\"let lang of languages\" [value]=\"lang.code\" (click)=\"translateFrom(lang)\">{{lang.lang}}</mat-radio-button>\r\n                        </mat-radio-group>\r\n      </mat-card>\r\n      \r\n      <br>\r\n      <mat-card>\r\n                  <mat-radio-group>\r\n                              <mat-label> Översätt till</mat-label>\r\n                              <br>\r\n                              <mat-radio-button  *ngFor=\"let lang of languages\" [value]=\"lang.code\" (click)=\"translateTo(lang)\">{{lang.lang}}</mat-radio-button>\r\n                        </mat-radio-group>\r\n      </mat-card>  \r\n      <br>\r\n      <mat-form-field style=\"width: 100%\">\r\n                  <input  matInput placeholder=\"Skriv ord\" (click)=\"wordInput($event)\" #wordinput >\r\n      </mat-form-field >\r\n\r\n<br>\r\n      <button style=\"padding:20px\" mat-raised-button color=\"primary\" [disabled]=\"recording\" (click)=\"startListen()\">Get Voice</button>\r\n      <button style=\"padding:20px\" mat-raised-button color=\"warn\"[disabled]=\"!recording\" (click)=\"stopListen()\">Stop Voice</button>\r\n      <button style=\"padding:20px\" mat-raised-button (click)=\"wordinput.click()\">Translate</button>\r\n<br>\r\n<br>\r\n      <mat-form-field appearance=\"outline\" style=\"width: 100%\">\r\n                  <mat-label>Voice Input</mat-label>\r\n                  <input [value]=\"message\" matInput placeholder=\"Placeholder\">\r\n                </mat-form-field>\r\n                <br>\r\n      <mat-form-field appearance=\"outline\" style=\"width: 100%\">\r\n                        <mat-label>Translated Output</mat-label>\r\n                        <input [value]=\"translateMsg\"matInput placeholder=\"Placeholder\">\r\n                      </mat-form-field>\r\n  \r\n<!--\r\n          <div class=\"container\">\r\n                 \r\n            <h5> Voice Input</h5>\r\n            <textarea class=\"form-control custom-control input-group\" rows=\"3\" style=\"resize:none\">{{message}}</textarea>\r\n            <div [@answerAnim]=\"anim\">\r\n            <h5> Translated Voice</h5>\r\n            <textarea class=\"form-control custom-control input-group\" rows=\"3\" style=\"resize:none\">{{translateMsg}}</textarea>\r\n            </div>\r\n      </div>\r\n   <p>Raw speech-to-text</p>\r\n      <div class=\"input-group\" id=\"textareaTranslated\">\r\n            <textarea class=\"form-control custom-control\" rows=\"3\" style=\"resize:none\">{{message}}</textarea>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <p>Translated speech</p>\r\n      <div class=\"input-group\" id=\"textareaTranslated\">\r\n            <textarea class=\"form-control custom-control\" rows=\"3\" style=\"resize:none\">{{translateMsg}}</textarea>\r\n      </div>\r\n      <p>Select translated language</p>\r\n     \r\n\r\n</div>\r\n\r\n<div class=\"right-div\">\r\n\r\n      <p>Operator side</p>\r\n      <div class=\"input-group\" id=\"textareaOperator\">\r\n            <textarea class=\"form-control custom-control\" rows=\"3\" style=\"resize:none\">Placeholder</textarea>\r\n            <span class=\"input-group-addon btn btn-primary\" id=\"translateButton\" onclick=\"textTranslate()\">Translate</span>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <p>Translated text</p>\r\n      <div class=\"input-group\" id=\"textareaTranslated\">\r\n            <textarea class=\"form-control custom-control\" rows=\"3\" style=\"resize:none\"></textarea>\r\n            <span class=\"input-group-addon btn btn-primary\" id=\"synthesisSpeechButton\">Synthesis speech</span>\r\n      </div>\r\n\r\n</div>\r\n-->\r\n   "

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
        ];
        this.recording = false;
        this.anim = 'inactive';
        this.message = '';
        this.translateMsg = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.vs.messageChange.subscribe(function (value) {
            _this.message = value;
            _this.vts.sendMessage(_this.message);
        });
        this.translateSub = this.vts.translateMsgChange.subscribe(function (value) {
            _this.translateMsg = value;
            _this.sayText(_this.translateMsg);
        });
    };
    MainComponent.prototype.sayText = function (msg) {
        // här ska du läsa upp msg
        var speech = new speak_tts__WEBPACK_IMPORTED_MODULE_3___default.a();
        speech.speak({
            text: msg,
        }).then(function () {
            console.log("Success !");
        }).catch(function (e) {
            console.error("An error occurred :", e);
        });
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
    MainComponent.prototype.translateTo = function (lang) {
        this.vts.setLanguage(lang);
    };
    MainComponent.prototype.translateFrom = function (lang) {
        this.vs.setLanguage(lang);
    };
    //Pause
    MainComponent.prototype.delay = function (ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("Pause for 3000ms"); })];
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
        this.language = { lang: 'Svenska', code: 'sv-SE' };
        this.messageChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ss.onresult = function (e) {
            _this.message = e.results[0].item(0).transcript;
            _this.messageChange.next(_this.message);
        };
        this.ss.onaudiostart = function (e) {
            console.log('hej');
        };
    }
    VoiceService.prototype.start = function () {
        console.log('start', this.language);
        this.ss.lang = this.language.code;
        this.ss.start();
    };
    VoiceService.prototype.stop = function () {
        this.ss.stop();
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
        this.languageTo = 'fr';
        this.translateMsgChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    VoiceTranslationService.prototype.exec = function (msg) {
        this.request(msg);
    };
    VoiceTranslationService.prototype.translate = function (message) {
        // kod för översättning från voice input
    };
    VoiceTranslationService.prototype.setLanguage = function (language) {
        switch (language.code) {
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
        }
    };
    VoiceTranslationService.prototype.sendMessage = function (msg) {
        console.log('sendMessage');
        this.request(msg);
    };
    VoiceTranslationService.prototype.request = function (msg) {
        var _this = this;
        this.httpClient.post('http://localhost:3000/post-message', { message: msg, to: this.languageTo })
            .subscribe(function (responsData) {
            _this.to = responsData.to;
            _this.from = responsData.from;
            console.log('Input message:', msg);
            console.log('Input languague:', _this.from);
            console.log('Output message', responsData.message);
            console.log('Output language:', _this.to);
            _this.setMessage(responsData.message);
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