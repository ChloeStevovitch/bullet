(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chloe\Documents\colortracker\colorTracker\src\main.ts */"zUnb");


/***/ }),

/***/ "4nh1":
/*!******************************************!*\
  !*** ./src/app/local-service.service.ts ***!
  \******************************************/
/*! exports provided: LocalServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalServiceService", function() { return LocalServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




class LocalServiceService {
    constructor() {
        this.currentId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    getTrackersData() {
        if (localStorage.getItem('trackers'))
            return lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](JSON.parse(localStorage.getItem('trackers')));
        else {
            return null;
        }
    }
    delete(id) {
        let trackersData = this.getTrackersData();
        delete trackersData[id];
        localStorage.setItem('trackers', JSON.stringify(trackersData));
        this.initCurrentId(trackersData);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    initCurrentId(trackersData) {
        this.currentId.next(this.getFirstTrackerId(trackersData));
    }
    getFirstTrackerId(trackersData) {
        for (const [key, value] of Object.entries(trackersData)) {
            return key;
        }
    }
    getTrackerData(id) {
        let trackers = this.getTrackersData();
        return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](trackers, id);
    }
    getTrackerVariable(id, name) {
        let globalData = this.getTrackerData(id);
        return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](globalData, name, null);
    }
    setTrackerData(id, tracker) {
        let trackersData = this.getTrackersData();
        lodash__WEBPACK_IMPORTED_MODULE_1__["set"](trackersData, id, tracker);
        localStorage.setItem('trackers', JSON.stringify(trackersData));
    }
    setTrackerVariable(id, name, value) {
        let trackerData = this.getTrackerData(id);
        lodash__WEBPACK_IMPORTED_MODULE_1__["set"](trackerData, name, value);
        this.setTrackerData(id, trackerData);
    }
    setTrackersData(trackers) {
        localStorage.setItem('trackers', JSON.stringify(trackers));
    }
}
LocalServiceService.ɵfac = function LocalServiceService_Factory(t) { return new (t || LocalServiceService)(); };
LocalServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalServiceService, factory: LocalServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["text"];
const _c1 = ["text1"];
const _c2 = ["text2"];
const _c3 = ["text3"];
class AboutComponent {
    constructor(router) {
        this.router = router;
        this.showText = (target, message, index, interval, delay) => {
            setTimeout(() => {
                if (index < message.length) {
                    target.append(message[index++]);
                    setTimeout(() => {
                        this.showText(target, message, index, interval);
                    }, interval);
                }
            }, delay ? delay : 0);
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.showText(this.textElement.nativeElement, 'Hello', 0, 20);
        this.showText(this.textElement1.nativeElement, 'My name is Chloe, 30 y.o web developer based in Montreal (Canada).', 0, 15, 600);
        this.showText(this.textElement2.nativeElement, 'I had fun developing this little app on my own during the last Christmas holidays.', 0, 15, 2500);
        this.showText(this.textElement3.nativeElement, 'If you want to help me maintain this project, you can find the repository on github, or you can contribute with paypal :).', 0, 10, 5000);
    }
    goTo(name) {
        this.router.navigate([name]);
    }
    goToUrl(url) {
        window.open(url, "_blank");
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], viewQuery: function AboutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textElement1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textElement2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textElement3 = _t.first);
    } }, decls: 22, vars: 2, consts: [[1, "bg-dark", "d-flex", "align-items-center", "justify-content-center", "w-100", "h-100"], [1, "card", "fat-border-black", "fat-border", "card-border", "d-flex", "align-items-center", "justify-content-between"], [1, "w-100", "p-5"], ["text", ""], ["text1", ""], ["text2", ""], [1, "my-3"], ["text3", ""], [1, "donate", "align-items-center", "d-flex", "flex-nowrap"], [1, "btn", "fat-border", "fat-border-black", "btn-dark", "mx-3", "my-3", "cursor-pointer", 3, "click"], ["action", "https://www.paypal.com/donate", "method", "post", "target", "_top"], ["type", "hidden", "name", "cmd", "value", "_donations"], ["type", "hidden", "name", "business", "value", "AK4KMBBBCV74Y"], ["type", "hidden", "name", "currency_code", "value", "CAD"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif", "border", "0", "name", "submit", "title", "PayPal - The safer, easier way to pay online!", "alt", "Donate with PayPal button", 1, "cursor-pointer"], ["alt", "", "border", "0", "src", "https://www.paypal.com/en_CA/i/scr/pixel.gif", "width", "1", "height", "1"], [1, "btn", "fat-border-black", "fat-border", "mx-3", "my-3", "cursor-pointer", 3, "click"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_div_click_12_listener() { return ctx.goTo(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " <- Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_div_click_20_listener() { return ctx.goToUrl("https://github.com/ChloeStevovitch/colorTracker"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Go to repo -> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 39, "px");
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.card-border[_ngcontent-%COMP%] {\n  border-width: 10px;\n  border-radius: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  width: 800px;\n  min-height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRXBCOztBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7QUFHckIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJkLWJvcmRlcntcclxuICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { textElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text', { static: false }]
        }], textElement1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text1', { static: false }]
        }], textElement2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text2', { static: false }]
        }], textElement3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text3', { static: false }]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "OiEv":
/*!**********************************************************!*\
  !*** ./src/app/color-tracker/color-tracker.component.ts ***!
  \**********************************************************/
/*! exports provided: View, ColorTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTrackerComponent", function() { return ColorTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-service.service */ "4nh1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-picker/color-picker.component */ "WUWi");







function ColorTrackerComponent_app_color_picker_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-color-picker", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorTrackerComponent_app_color_picker_15_Template_app_color_picker_colorPickerChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const h_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateColor($event, "colorScale", "retrievedColorScale", h_r6); })("legendUpdate", function ColorTrackerComponent_app_color_picker_15_Template_app_color_picker_legendUpdate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setLegend($event); })("deleteEvent", function ColorTrackerComponent_app_color_picker_15_Template_app_color_picker_deleteEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.handleDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r5 = ctx.$implicit;
    const h_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", h_r6)("color", el_r5.color)("retrievedCount", ctx_r0._.countBy(ctx_r0.retrievedData))("legend", el_r5.legend ? el_r5.legend : "Level " + h_r6);
} }
function ColorTrackerComponent_textarea_31_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorTrackerComponent_textarea_31_Template_textarea_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.handleNewData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.JSON.stringify(ctx_r1.retrievedTracker));
} }
function ColorTrackerComponent_div_36_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r18, " ");
} }
function ColorTrackerComponent_div_36_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r20 + 1, " ");
} }
function ColorTrackerComponent_div_36_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_36_div_14_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const j_r25 = ctx.index; const month_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.handleClick(ctx_r26.year + ctx_r26.yearModifier, month_r21, j_r25); })("contextmenu", function ColorTrackerComponent_div_36_div_14_div_1_Template_div_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const j_r25 = ctx.index; const month_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.handleRightClick(ctx_r29.year + ctx_r29.yearModifier, month_r21, j_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r25 = ctx.index;
    const month_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r23.getColor(ctx_r23.year + ctx_r23.yearModifier, month_r21, j_r25))("border-color", ctx_r23.retrievedBorderColor);
} }
function ColorTrackerComponent_div_36_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorTrackerComponent_div_36_div_14_div_1_Template, 2, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.initTable(ctx_r15.getMonthLength(ctx_r15.yearModifier, i_r22)));
} }
function ColorTrackerComponent_div_36_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r33 + 1, " ");
} }
function ColorTrackerComponent_div_36_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r34, " ");
} }
function ColorTrackerComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_36_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.setModifier("yearModifier", -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_36_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.setModifier("yearModifier", +1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorTrackerComponent_div_36_div_10_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorTrackerComponent_div_36_div_13_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ColorTrackerComponent_div_36_div_14_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ColorTrackerComponent_div_36_div_16_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ColorTrackerComponent_div_36_div_19_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.year + ctx_r2.yearModifier, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.monthsName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.initTable(31));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.monthsName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.initTable(31));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.monthsName);
} }
function ColorTrackerComponent_div_37_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r40 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.getDayName(day_r40));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.getDayNumber(day_r40));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.getMonth(day_r40));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r38.getYear(day_r40), "");
} }
function ColorTrackerComponent_div_37_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ColorTrackerComponent_div_37_div_10_Template_div_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const day_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.handleRightClick(ctx_r42.getYear(day_r41), ctx_r42.getMonth(day_r41), ctx_r42.getDayNumber(day_r41) - 1); })("click", function ColorTrackerComponent_div_37_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const day_r41 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.handleClick(ctx_r44.getYear(day_r41), ctx_r44.getMonth(day_r41), ctx_r44.getDayNumber(day_r41) - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r41 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx_r39.retrievedBorderColor)("background-color", ctx_r39.getColor(ctx_r39.getYear(day_r41), ctx_r39.getMonth(day_r41), ctx_r39.getDayNumber(day_r41) - 1));
} }
function ColorTrackerComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_37_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.setModifier("weekModifier", -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_37_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.setModifier("weekModifier", +1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorTrackerComponent_div_37_div_8_Template, 10, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorTrackerComponent_div_37_div_10_Template, 2, 4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getWeekDetails(ctx_r3.weekModifier));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getWeekDetails(ctx_r3.weekModifier));
} }
function ColorTrackerComponent_div_38_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r50 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.getDayName(day_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.getDayNumber(day_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.getMonth(day_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r48.getYear(day_r50), "");
} }
function ColorTrackerComponent_div_38_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ColorTrackerComponent_div_38_div_10_Template_div_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const day_r51 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.handleRightClick(ctx_r52.getYear(day_r51), ctx_r52.getMonth(day_r51), ctx_r52.getDayNumber(day_r51) - 1); })("click", function ColorTrackerComponent_div_38_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const day_r51 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.handleClick(ctx_r54.getYear(day_r51), ctx_r54.getMonth(day_r51), ctx_r54.getDayNumber(day_r51) - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r51 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx_r49.retrievedBorderColor)("background-color", ctx_r49.getColor(ctx_r49.getYear(day_r51), ctx_r49.getMonth(day_r51), ctx_r49.getDayNumber(day_r51) - 1));
} }
function ColorTrackerComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_38_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.setModifier("monthModifier", -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_38_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.setModifier("monthModifier", +1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorTrackerComponent_div_38_div_8_Template, 10, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorTrackerComponent_div_38_div_10_Template, 2, 4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getMonthDetails(ctx_r4.monthModifier));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getMonthDetails(ctx_r4.monthModifier));
} }
var View;
(function (View) {
    View[View["Year"] = 0] = "Year";
    View[View["Month"] = 1] = "Month";
    View[View["Week"] = 2] = "Week";
})(View || (View = {}));
class ColorTrackerComponent {
    constructor(s) {
        this.s = s;
        this.monthsLength = [];
        this.monthsName = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        this.activeView = View.Year;
        this.View = View;
        this.JSON = JSON;
        this.editionMode = false;
        this.monthModifier = 0;
        this.weekModifier = 0;
        this.yearModifier = 0;
        this._ = lodash__WEBPACK_IMPORTED_MODULE_1__;
        this.s.currentId.subscribe((res) => {
            this.inputId = this.s.currentId.value;
            if (!this.s.getTrackerVariable(this.inputId, 'title')) {
                this.s.setTrackerVariable(this.inputId, 'title', null);
            }
            if (!this.s.getTrackerVariable(this.inputId, 'savedData')) {
                this.s.setTrackerVariable(this.inputId, 'savedData', {});
            }
            if (!this.s.getTrackerVariable(this.inputId, 'colorScale')) {
                if (this.s.currentId.value ===
                    this.s.getFirstTrackerId(this.s.getTrackersData())) {
                    this.s.setTrackerVariable(this.inputId, 'colorScale', [
                        { color: 'transparent', legend: null },
                        { color: '#8ae685', legend: null },
                        { color: '#ffee24', legend: null },
                        { color: '#ff4747', legend: null },
                    ]);
                }
                else {
                    this.s.setTrackerVariable(this.inputId, 'colorScale', [
                        { color: 'transparent', legend: null },
                        { color: this.getRandomColor(), legend: null },
                        { color: this.getRandomColor(), legend: null },
                        { color: this.getRandomColor(), legend: null },
                    ]);
                }
            }
            if (!this.s.getTrackerVariable(this.inputId, 'backgroundColor')) {
                this.s.setTrackerVariable(this.inputId, 'backgroundColor', '#ffffff');
            }
            if (!this.s.getTrackerVariable(this.inputId, 'textColor')) {
                this.s.setTrackerVariable(this.inputId, 'textColor', 'rgb(26, 25, 25)');
            }
            if (!this.s.getTrackerVariable(this.inputId, 'borderColor')) {
                this.s.setTrackerVariable(this.inputId, 'borderColor', 'rgb(26, 25, 25)');
            }
            this.retrievedBorderColor = this.s.getTrackerVariable(this.inputId, 'borderColor');
            this.retrievedBackgroundColor = this.s.getTrackerVariable(this.inputId, 'backgroundColor');
            this.retrievedData = this.s.getTrackerVariable(this.inputId, 'savedData');
            this.retrievedColorScale = this.s.getTrackerVariable(this.inputId, 'colorScale');
            this.retrievedTextColor = this.s.getTrackerVariable(this.inputId, 'textColor');
            this.retrievedTitle = this.s.getTrackerVariable(this.inputId, 'title');
            this.retrievedTracker = this.s.getTrackerData(this.inputId);
        });
        this.year = Number(moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY'));
    }
    getLevelCount() {
        lodash__WEBPACK_IMPORTED_MODULE_1__["countBy"](this.retrievedData);
    }
    getMonthIndex(monthName) {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](this.monthsName, monthName) + 1;
    }
    getMonthDetails(monthModifier) {
        let currentDate = moment__WEBPACK_IMPORTED_MODULE_2__();
        currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().add(monthModifier, 'M');
        let month = currentDate.format('MMM');
        let year = currentDate.format('YYYY');
        let monthStart = moment__WEBPACK_IMPORTED_MODULE_2__(year + '-' + month + '-' + '01', 'YYYY-MMM-D');
        var days = [];
        for (var i = 0; i < this.getMonthLength(0, month); i++) {
            days.push(moment__WEBPACK_IMPORTED_MODULE_2__(monthStart).add(i, 'days').format('YYYY,MMM,D,dddd'));
        }
        return days;
    }
    getMonthLength(yearModifier, index) {
        let year = this.year + yearModifier;
        let indexString;
        if (index + 1 < 10) {
            indexString = '0' + (index + 1);
        }
        else {
            indexString = index + 1 + '';
        }
        return moment__WEBPACK_IMPORTED_MODULE_2__(year + '-' + indexString, 'YYYY-MM').daysInMonth();
    }
    setModifier(modifierName, increment) {
        let savedModifier = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this, modifierName) + increment;
        lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this, modifierName, savedModifier);
        console.log(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this, modifierName));
    }
    getYear(value) {
        return Number(lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](lodash__WEBPACK_IMPORTED_MODULE_1__["split"](value, ','), 0));
    }
    getDayName(value) {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](lodash__WEBPACK_IMPORTED_MODULE_1__["split"](value, ','), 3);
    }
    getMonth(value) {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](lodash__WEBPACK_IMPORTED_MODULE_1__["split"](value, ','), 1);
    }
    getDayNumber(value) {
        return Number(lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](lodash__WEBPACK_IMPORTED_MODULE_1__["split"](value, ','), 2));
    }
    getWeekDetails(weekmodifier) {
        let currentDate = moment__WEBPACK_IMPORTED_MODULE_2__();
        currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().add(weekmodifier, 'w');
        const weekStart = currentDate.clone().startOf('isoWeek');
        var days = [];
        for (var i = 0; i <= 6; i++) {
            days.push(moment__WEBPACK_IMPORTED_MODULE_2__(weekStart).add(i, 'days').format('YYYY,MMM,D,dddd'));
        }
        return days;
    }
    initTable(length) {
        return new Array(length);
    }
    handleChangeView(view) {
        this.monthModifier = 0;
        this.weekModifier = 0;
        this.yearModifier = 0;
        // this.retrievedTracker = this.s.getTrackerData(this.inputId)
        this.activeView = view;
    }
    reset() {
        if (confirm('Are you sure you want to delete all your data ? ')) {
            this.s.setTrackerVariable(this.inputId, 'savedData', {});
            this.s.currentId.next(this.inputId);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }
    toggleEdition() {
        this.editionMode = !this.editionMode;
    }
    isJson(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    handleTrackerDelete() {
        if (confirm('Are you sure you want to delete this tracker ? ')) {
            this.s.delete(this.inputId);
        }
    }
    handleNewData(event) {
        if (!this.isJson(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event.target, 'value'))) {
            return;
        }
        this.s.setTrackerData(this.inputId, JSON.parse(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event.target, 'value')));
        this.s.currentId.next(this.inputId);
    }
    updateColor(event, savedDataName, retrievedDataName, index) {
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](event)) {
            return;
        }
        const newColor = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'color');
        if (index || index === 0) {
            const index = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'index');
            const actualColor = lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](this.retrievedColorScale, index);
            if (!actualColor || !newColor) {
                return;
            }
            lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this.retrievedColorScale[index], 'color', newColor);
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this, retrievedDataName, newColor);
        }
        this.s.setTrackerVariable(this.inputId, savedDataName, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this, retrievedDataName));
        this.s.currentId.next(this.inputId);
    }
    setLegend(event) {
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](event)) {
            return;
        }
        const index = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'index');
        const legend = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'legend', null);
        lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this.retrievedColorScale[index], 'legend', legend);
        this.s.setTrackerVariable(this.inputId, 'colorScale', this.retrievedColorScale);
    }
    handleDelete(event) {
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](event)) {
            return;
        }
        if (confirm('Are you sure you want to delete this color ? this will affect the grinputId ')) {
            const index = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'index');
            for (const [key, value] of Object.entries(this.retrievedData)) {
                if (value > index) {
                    let newValue = this.retrievedData[key] - 1;
                    this.retrievedData[key] = newValue;
                }
                else if (value === index) {
                    delete this.retrievedData[key];
                }
            }
            this.s.setTrackerVariable(this.inputId, 'savedData', this.retrievedData);
            this.retrievedColorScale.splice(index, 1);
            this.s.setTrackerVariable(this.inputId, 'colorScale', this.retrievedColorScale);
        }
    }
    addColor() {
        this.retrievedColorScale.push({
            color: this.getRandomColor(),
            legend: null,
        });
        this.s.setTrackerVariable(this.inputId, 'colorScale', this.retrievedColorScale);
    }
    getRandomColor() {
        let randomRed = Math.ceil(Math.random() * 255);
        let randomGreen = Math.ceil(Math.random() * 255);
        let randomBlue = Math.ceil(Math.random() * 255);
        return 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')';
    }
    getColor(year, month, day) {
        let date = this.convertDateToString(year, month, day);
        let value = this.findValue(date);
        return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.retrievedColorScale[value], 'color');
    }
    convertDateToString(year, months, days) {
        let string = lodash__WEBPACK_IMPORTED_MODULE_1__["join"]([year, months, days + 1], '_');
        return string;
    }
    findValue(date) {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.retrievedData, date, 0);
    }
    findData(date) {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.retrievedData, date, null);
    }
    handleClick(year, month, day) {
        let date = this.convertDateToString(year, month, day);
        let value = this.findValue(date);
        if (value === this.retrievedColorScale.length - 1) {
            value = 0;
        }
        else {
            value++;
        }
        lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this.retrievedData, date, value);
        this.s.setTrackerVariable(this.inputId, 'savedData', this.retrievedData);
        if (this.editionMode) {
            this.retrievedTracker = this.s.getTrackerData(this.inputId);
        }
    }
    handleRightClick(year, month, day) {
        let date = this.convertDateToString(year, month, day);
        let value = this.findValue(date);
        if (value === 0) {
            value = this.retrievedColorScale.length - 1;
        }
        else {
            value--;
        }
        lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this.retrievedData, date, value);
        this.s.setTrackerVariable(this.inputId, 'savedData', this.retrievedData);
        return false;
    }
}
ColorTrackerComponent.ɵfac = function ColorTrackerComponent_Factory(t) { return new (t || ColorTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"])); };
ColorTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorTrackerComponent, selectors: [["app-color-tracker"]], decls: 39, vars: 35, consts: [[1, "grid-content"], [1, "left"], [1, "right", "my-5"], [1, "d-flex", "flex-column"], [1, "h3", "mx-3", "days-height"], [1, "d-flex", "mb-3"], [1, "btn", "fixed-width-small", "fat-border", "fat-border-black", "mx-3", 3, "click"], ["class", "mb-2 mx-3", 3, "index", "color", "retrievedCount", "legend", "colorPickerChange", "legendUpdate", "deleteEvent", 4, "ngFor", "ngForOf"], [1, "btn", "cursor-pointer", "btn-light", "fat-border", "fat-border-black", "fixed-width", "mt-4", "mx-3", 3, "click"], [1, "h3", "my-3", "mx-3", "days-height"], [1, "mb-2", "mx-3", 3, "color", "colorPickerChange"], [1, "mb-2", "mx-3", 3, "color", "textLight", "colorPickerChange"], [1, "btn", "btn-light", "cursor-pointer", "fat-border", "fat-border-black", "fixed-width", "mb-3", "mx-3", 3, "click"], ["class", "formControl mx-3 mb-3 fixed-width-edition", 3, "value", "blur", 4, "ngIf"], [1, "btn", "fat-border", "fat-border-black", "fixed-width", "mb-3", "mx-3", "cursor-pointer", 3, "click"], [1, "btn", "fixed-width", "fat-border", "fat-border-black", "mx-3", "cursor-pointer", 3, "click"], ["class", "my-5 middle d-flex flex-column", 4, "ngIf"], ["class", "my-5 d-flex flex-column", 4, "ngIf"], ["class", "my-5 d-flex flex-column flex-nowrap", 4, "ngIf"], [1, "mb-2", "mx-3", 3, "index", "color", "retrievedCount", "legend", "colorPickerChange", "legendUpdate", "deleteEvent"], [1, "formControl", "mx-3", "mb-3", "fixed-width-edition", 3, "value", "blur"], [1, "my-5", "middle", "d-flex", "flex-column"], [1, "d-flex", "flex-nowrap", "mx-auto", "align-items-center"], [1, "mx-2"], [1, "d-flex", "flex-nowrap"], [1, "days-numbers"], ["class", "month days", 4, "ngFor", "ngForOf"], ["class", "days-numbers", 4, "ngFor", "ngForOf"], ["class", "d-flex flex-column month", 4, "ngFor", "ngForOf"], [1, "month", "days"], [1, "d-flex", "flex-column", "month"], ["class", "days", 4, "ngFor", "ngForOf"], [1, "days"], [1, "cursor-pointer", "h-100", "w-100", "fat-border", 3, "click", "contextmenu"], [1, "my-5", "d-flex", "flex-column"], [1, "d-flex", "flex-nowrap", "mx-auto"], [1, "d-flex", "mx-auto", "my-2"], ["class", "daysNames", 4, "ngFor", "ngForOf"], ["class", "days mx-3", 4, "ngFor", "ngForOf"], [1, "daysNames"], [1, "ml-2", "text-uppercase"], [1, "my-2"], [1, "days", "mx-3"], [1, "cursor-pointer", "h-100", "w-100", "fat-border", 3, "contextmenu", "click"], [1, "my-5", "d-flex", "flex-column", "flex-nowrap"]], template: function ColorTrackerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_7_listener() { return ctx.handleChangeView(ctx.View.Year); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_9_listener() { return ctx.handleChangeView(ctx.View.Month); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_11_listener() { return ctx.handleChangeView(ctx.View.Week); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ColorTrackerComponent_app_color_picker_15_Template, 1, 4, "app-color-picker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_16_listener() { return ctx.addColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " add a color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-color-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorTrackerComponent_Template_app_color_picker_colorPickerChange_20_listener($event) { return ctx.updateColor($event, "backgroundColor", "retrievedBackgroundColor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-color-picker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorTrackerComponent_Template_app_color_picker_colorPickerChange_23_listener($event) { return ctx.updateColor($event, "textColor", "retrievedTextColor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-color-picker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorTrackerComponent_Template_app_color_picker_colorPickerChange_26_listener($event) { return ctx.updateColor($event, "borderColor", "retrievedBorderColor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_29_listener() { return ctx.toggleEdition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ColorTrackerComponent_textarea_31_Template, 1, 1, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_32_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " /!\\ reset data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_34_listener() { return ctx.handleTrackerDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " /!\\ delete tracker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ColorTrackerComponent_div_36_Template, 20, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ColorTrackerComponent_div_37_Template, 11, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ColorTrackerComponent_div_38_Template, 11, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.activeView === ctx.View.Year)("bg-dark", ctx.activeView === ctx.View.Year)("text-light", ctx.activeView === ctx.View.Year)("cursor-pointer", ctx.activeView !== ctx.View.Year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.activeView === ctx.View.Month)("bg-dark", ctx.activeView === ctx.View.Month)("text-light", ctx.activeView === ctx.View.Month)("cursor-pointer", ctx.activeView !== ctx.View.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cursor-pointer", ctx.activeView !== ctx.View.Week)("bg-dark", ctx.activeView === ctx.View.Week)("text-light", ctx.activeView === ctx.View.Week)("disabled", ctx.activeView === ctx.View.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.retrievedColorScale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.retrievedBackgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.retrievedTextColor)("textLight", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.retrievedBorderColor)("textLight", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.editionMode ? "show data" : "hide data", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editionMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeView === ctx.View.Year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeView === ctx.View.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeView === ctx.View.Month);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_5__["ColorPickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci10cmFja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorTrackerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-tracker',
                templateUrl: './color-tracker.component.html',
                styleUrls: ['./color-tracker.component.scss'],
            }]
    }], function () { return [{ type: _local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WUWi":
/*!********************************************************!*\
  !*** ./src/app/color-picker/color-picker.component.ts ***!
  \********************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");






function ColorPickerComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorPickerComponent_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLegendUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.legend);
} }
function ColorPickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u221E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ColorPickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.retrievedCount[ctx_r2.index] ? ctx_r2.retrievedCount[ctx_r2.index] : 0, " ");
} }
class ColorPickerComponent {
    constructor() {
        this.legendUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.colorPickerChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.deleteEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.index = null;
        this.legend = null;
        this.textLight = false;
    }
    onColorPicked(event) {
        event.preventDefault;
        this.colorPickerChange.next({ index: this.index, color: event });
    }
    onLegendUpdate(event) {
        this.legendUpdate.next({
            index: this.index,
            legend: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](event.target, 'value'),
        });
    }
    handleDelete() {
        this.deleteEvent.next({ index: this.index });
    }
}
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(); };
ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPickerComponent, selectors: [["app-color-picker"]], inputs: { color: "color", retrievedCount: "retrievedCount", index: "index", legend: "legend", textLight: "textLight" }, outputs: { legendUpdate: "legendUpdate", colorPickerChange: "colorPickerChange", deleteEvent: "deleteEvent" }, decls: 8, vars: 11, consts: [[1, "d-flex", "mb-3", "align-items-center", "w-100", "flex-wrap"], ["type", "text", "class", "form-control mr-3 fixed-width-legend", 3, "value", "blur", 4, "ngIf"], [1, "d-flex", "flex-nowrap"], ["readonly", "", "cpPosition", "bottom", 1, "btn", "fat-border", "fat-border-black", "cursor-pointer", "fixed-width", 3, "colorPicker", "value", "colorPickerChange", "colorPickerClose"], [1, "btn", 3, "click"], ["class", "text-center count mx-2 d-flex flex-nowrap", 4, "ngIf"], ["class", "small text-center count mx-2 d-flex flex-nowrap", 4, "ngIf"], ["type", "text", 1, "form-control", "mr-3", "fixed-width-legend", 3, "value", "blur"], [1, "text-center", "count", "mx-2", "d-flex", "flex-nowrap"], [1, "big"], [1, "small", "text-center", "count", "mx-2", "d-flex", "flex-nowrap"]], template: function ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_input_1_Template, 1, 1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorPickerComponent_Template_input_colorPickerChange_3_listener($event) { return ctx.color = $event; })("colorPickerClose", function ColorPickerComponent_Template_input_colorPickerClose_3_listener($event) { return ctx.onColorPicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_4_listener() { return ctx.index <= 1 ? "" : ctx.handleDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColorPickerComponent_div_6_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPickerComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index || ctx.legend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-light", ctx.textLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx.color)("value", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.index <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerDirective"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .count[_ngcontent-%COMP%] {\n  border: 2px dashed black;\n  min-width: 2.3rem;\n  height: 2rem;\n  line-height: 2rem;\n  padding-left: 3px;\n  padding-right: 3px;\n  text-align: center;\n  background-color: #00000029;\n}\n\n[_nghost-%COMP%]   .big[_ngcontent-%COMP%] {\n  line-height: 1rem;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZjs7QUFGQTtFQUdRLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFHbkM7O0FBYkE7RUFhUSxpQkFBaUI7RUFDakIsZUFBZTtBQUl2QiIsImZpbGUiOiJjb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5jb3VudCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xyXG4gICAgICAgIG1pbi13aWR0aDogMi4zcmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAyOTtcclxuICAgIH1cclxuICAgIC5iaWcge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-picker',
                templateUrl: './color-picker.component.html',
                styleUrls: ['./color-picker.component.scss'],
            }]
    }], null, { legendUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], colorPickerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], retrievedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], legend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textLight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-picker/color-picker.component */ "WUWi");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-tracker/color-tracker.component */ "OiEv");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color-tracker-container/color-tracker-container.component */ "xIh+");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__["ColorPickerComponent"],
        _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_6__["ColorTrackerComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_8__["ColorTrackerContainerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]], exports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__["ColorPickerComponent"],
                    _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_6__["ColorTrackerComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_8__["ColorTrackerContainerComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]],
                exports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-tracker-container/color-tracker-container.component */ "xIh+");







const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [
            { path: '', component: _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_4__["ColorTrackerContainerComponent"] },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
        ]
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xIh+":
/*!******************************************************************************!*\
  !*** ./src/app/color-tracker-container/color-tracker-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: ColorTrackerContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTrackerContainerComponent", function() { return ColorTrackerContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-service.service */ "4nh1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-tracker/color-tracker.component */ "OiEv");







function ColorTrackerContainerComponent_li_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorTrackerContainerComponent_li_5_div_1_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onTitleUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const el_r3 = ctx_r9.$implicit;
    const index_r4 = ctx_r9.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r5._.get(el_r3, "color"))("width", ctx_r5.getATitle(ctx_r5._.get(el_r3, "title"), index_r4).length + 5, "ch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.getATitle(ctx_r5._.get(el_r3, "title"), index_r4));
} }
function ColorTrackerContainerComponent_li_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerContainerComponent_li_5_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const el_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.switchTracker(ctx_r10._.get(el_r3, "id")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const el_r3 = ctx_r13.$implicit;
    const index_r4 = ctx_r13.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r6._.get(el_r3, "color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getATitle(ctx_r6._.get(el_r3, "title"), index_r4));
} }
function ColorTrackerContainerComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorTrackerContainerComponent_li_5_div_1_Template, 2, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorTrackerContainerComponent_li_5_div_2_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.s.currentId.value === ctx_r0._.get(el_r3, "id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.s.currentId.value !== el_r3.id);
} }
function ColorTrackerContainerComponent_app_color_tracker_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-color-tracker", 18);
} }
function ColorTrackerContainerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerContainerComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.handleResetAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " /!\\ Delete all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ColorTrackerContainerComponent {
    constructor(router, s) {
        this.router = router;
        this.s = s;
        this._ = lodash__WEBPACK_IMPORTED_MODULE_1__;
        this.retrievedTrackersArray = [];
    }
    ngOnInit() {
        if (!this.s.getTrackersData()) {
            localStorage.clear();
            this.s.setTrackersData({});
            this.handleNewTracker();
        }
        if (!this.s.currentId.value) {
            this.s.initCurrentId(this.s.getTrackersData());
        }
        this.s.currentId.subscribe(() => {
            this.retrievedTextColor = this.s.getTrackerVariable(this.s.currentId.value, 'textColor');
            this.retrievedBorderColor = this.s.getTrackerVariable(this.s.currentId.value, 'borderColor');
            this.retrievedBackgroundColor = this.s.getTrackerVariable(this.s.currentId.value, 'backgroundColor');
            this.retrievedTrackers = this.s.getTrackersData();
            this.retrievedTrackersArray = this.getTrackersArray();
        });
    }
    getTrackersArray() {
        let array = [];
        for (const [key, value] of Object.entries(this.retrievedTrackers)) {
            array.push({
                title: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](value, 'title'),
                id: key,
                color: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](value, 'textColor'),
            });
        }
        return array;
    }
    getRetrievedTrackersArray() {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this, 'retrievedTrackersArray', []);
    }
    handleResetAll() {
        if (confirm('Are you sure you want to delete all your trackers ? ')) {
            if (confirm('Really really sure ? ')) {
                localStorage.clear();
                this.s.setTrackersData({});
                this.s.currentId.next(null);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }
    }
    getATitle(title, index) {
        let array = [
            'Smoking',
            'Mood',
            'Sport',
            'Climbing',
            'Alcohol',
            'House Cleaning',
            'Balanced diet',
            'Stretch',
            'Reading',
            'Writing',
            'Call to Grandparents',
            'Plant watering',
            'Studying',
            'Full night sleep',
            'Showers',
            'Raclette',
            '10000 Steps',
            'Jogging',
            'Vegetarian days',
            'No screens',
            'Cheat meals',
            'Yoga',
            'Work',
            'Music Practice',
            'Social Dancing',
            'Drawing',
            'Learn language',
        ];
        let i = Math.floor(Math.random() * array.length);
        return title ? title : array[i];
    }
    switchTracker(id) {
        this.s.currentId.next(id);
    }
    handleNewTracker() {
        let length = this.getRetrievedTrackersArray().length;
        let newId = 'tracker' + Math.ceil(Math.random() * 1000000000);
        if (!this.s.getTrackerData(newId)) {
            this.s.setTrackerData(newId, {
                title: this.getATitle(null, length),
            });
        }
        this.switchTracker(newId);
    }
    onTitleUpdate(event) {
        this.s.setTrackerVariable(this.s.currentId.value, 'title', lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event.target, 'value'));
        this.switchTracker(this.s.currentId.value);
    }
    goTo(name) {
        this.router.navigate(['about']);
    }
}
ColorTrackerContainerComponent.ɵfac = function ColorTrackerContainerComponent_Factory(t) { return new (t || ColorTrackerContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"])); };
ColorTrackerContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorTrackerContainerComponent, selectors: [["app-color-tracker-container"]], decls: 15, vars: 9, consts: [[1, "d-flex", "grid", "flex-column", "w-100"], [1, "head", "d-flex", "align-items-center", "flex-column", "justify-content-center"], [1, "h1", "my-5"], [1, "nav"], ["class", "nav-item cursor-pointer mb-2", 4, "ngFor", "ngForOf"], [1, "nav-item", "cursor-pointer"], [1, "btn", "btn-light", "mx-3", "fat-border", "fat-border-black", 3, "click"], ["class", "content", 4, "ngIf"], [1, "d-flex", "foot"], ["class", "btn fat-border fat-border-black mx-5  my-3 cursor-pointer", 3, "click", 4, "ngIf"], [1, "btn", "fat-border", "fat-border-black", "mx-5", "my-3", "cursor-pointer", 3, "click"], [1, "nav-item", "cursor-pointer", "mb-2"], ["class", "active", 4, "ngIf"], [4, "ngIf"], [1, "active"], ["type", "text", 1, "form-control", 3, "value", "blur"], [1, "btn", 3, "click"], [1, "pb-1", "underlined"], [1, "content"]], template: function ColorTrackerContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Color tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorTrackerContainerComponent_li_5_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerContainerComponent_Template_div_click_7_listener() { return ctx.handleNewTracker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+ new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ColorTrackerContainerComponent_app_color_tracker_9_Template, 1, 0, "app-color-tracker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ColorTrackerContainerComponent_div_11_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerContainerComponent_Template_div_click_13_listener() { return ctx.goTo("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " ? about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.retrievedBackgroundColor)("color", ctx.retrievedTextColor)("border-color", ctx.retrievedBorderColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getRetrievedTrackersArray());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.currentId.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getRetrievedTrackersArray().length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_5__["ColorTrackerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci10cmFja2VyLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorTrackerContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-tracker-container',
                templateUrl: './color-tracker-container.component.html',
                styleUrls: ['./color-tracker-container.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map