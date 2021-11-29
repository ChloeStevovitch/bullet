(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\chloe\Documents\colortracker\colorTracker\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4nh1":
    /*!******************************************!*\
      !*** ./src/app/local-service.service.ts ***!
      \******************************************/

    /*! exports provided: LocalServiceService */

    /***/
    function nh1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalServiceService", function () {
        return LocalServiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var LocalServiceService = /*#__PURE__*/function () {
        function LocalServiceService() {
          _classCallCheck(this, LocalServiceService);

          this.currentId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(LocalServiceService, [{
          key: "getTrackersData",
          value: function getTrackersData() {
            if (localStorage.getItem('trackers')) return lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](JSON.parse(localStorage.getItem('trackers')));else {
              return null;
            }
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var trackersData = this.getTrackersData();
            delete trackersData[id];
            localStorage.setItem('trackers', JSON.stringify(trackersData));
            this.initCurrentId(trackersData);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          }
        }, {
          key: "initCurrentId",
          value: function initCurrentId(trackersData) {
            this.currentId.next(this.getFirstTrackerId(trackersData));
          }
        }, {
          key: "getFirstTrackerId",
          value: function getFirstTrackerId(trackersData) {
            for (var _i = 0, _Object$entries = Object.entries(trackersData); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              return key;
            }
          }
        }, {
          key: "getTrackerData",
          value: function getTrackerData(id) {
            var trackers = this.getTrackersData();
            return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](trackers, id);
          }
        }, {
          key: "getTrackerVariable",
          value: function getTrackerVariable(id, name) {
            var globalData = this.getTrackerData(id);
            return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](globalData, name, null);
          }
        }, {
          key: "setTrackerData",
          value: function setTrackerData(id, tracker) {
            var trackersData = this.getTrackersData();
            lodash__WEBPACK_IMPORTED_MODULE_1__["set"](trackersData, id, tracker);
            localStorage.setItem('trackers', JSON.stringify(trackersData));
          }
        }, {
          key: "setTrackerVariable",
          value: function setTrackerVariable(id, name, value) {
            var trackerData = this.getTrackerData(id);
            lodash__WEBPACK_IMPORTED_MODULE_1__["set"](trackerData, name, value);
            this.setTrackerData(id, trackerData);
          }
        }, {
          key: "setTrackersData",
          value: function setTrackersData(trackers) {
            localStorage.setItem('trackers', JSON.stringify(trackers));
          }
        }]);

        return LocalServiceService;
      }();

      LocalServiceService.ɵfac = function LocalServiceService_Factory(t) {
        return new (t || LocalServiceService)();
      };

      LocalServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalServiceService,
        factory: LocalServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["text"];
      var _c1 = ["text1"];
      var _c2 = ["text2"];
      var _c3 = ["text3"];

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(router) {
          var _this = this;

          _classCallCheck(this, AboutComponent);

          this.router = router;

          this.showText = function (target, message, index, interval, delay) {
            setTimeout(function () {
              if (index < message.length) {
                target.append(message[index++]);
                setTimeout(function () {
                  _this.showText(target, message, index, interval);
                }, interval);
              }
            }, delay ? delay : 0);
          };
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.showText(this.textElement.nativeElement, 'Hello', 0, 20);
            this.showText(this.textElement1.nativeElement, 'My name is Chloe, ' + moment__WEBPACK_IMPORTED_MODULE_1__().diff('1990-07-04', 'years') + ' y.o web developer based in Montreal (Canada).', 0, 15, 600);
            this.showText(this.textElement2.nativeElement, 'I had fun developing this little angular app on my own during the last Christmas holidays.', 0, 15, 2500);
            this.showText(this.textElement3.nativeElement, 'If you want to help me maintain this project, you can find the repository on github, or you can contribute with paypal :).', 0, 10, 5000);
          }
        }, {
          key: "goTo",
          value: function goTo(name) {
            this.router.navigate([name]);
          }
        }, {
          key: "goToUrl",
          value: function goToUrl(url) {
            window.open(url, '_blank');
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        viewQuery: function AboutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textElement1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textElement2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textElement3 = _t.first);
          }
        },
        decls: 22,
        vars: 2,
        consts: [[1, "bg-dark", "d-flex", "align-items-center", "justify-content-center", "w-100", "h-100"], [1, "card", "fat-border-black", "fat-border", "card-border", "d-flex", "align-items-center", "justify-content-between"], [1, "w-100", "p-5"], ["text", ""], ["text1", ""], ["text2", ""], [1, "my-3"], ["text3", ""], [1, "donate", "align-items-center", "d-flex", "flex-nowrap"], [1, "btn", "fat-border", "fat-border-black", "btn-dark", "mx-3", "my-3", "cursor-pointer", 3, "click"], ["action", "https://www.paypal.com/donate", "method", "post", "target", "_top"], ["type", "hidden", "name", "cmd", "value", "_donations"], ["type", "hidden", "name", "business", "value", "AK4KMBBBCV74Y"], ["type", "hidden", "name", "currency_code", "value", "CAD"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif", "border", "0", "name", "submit", "title", "PayPal - The safer, easier way to pay online!", "alt", "Donate with PayPal button", 1, "cursor-pointer"], ["alt", "", "border", "0", "src", "https://www.paypal.com/en_CA/i/scr/pixel.gif", "width", "1", "height", "1"], [1, "btn", "fat-border-black", "fat-border", "mx-3", "my-3", "cursor-pointer", 3, "click"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_div_click_12_listener() {
              return ctx.goTo("");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_div_click_20_listener() {
              return ctx.goToUrl("https://github.com/ChloeStevovitch/colorTracker");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Go to repo -> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 39, "px");
          }
        },
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.card-border[_ngcontent-%COMP%] {\n  border-width: 10px;\n  border-radius: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  width: 800px;\n  min-height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRXBCOztBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7QUFHckIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJkLWJvcmRlcntcclxuICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          textElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text', {
              "static": false
            }]
          }],
          textElement1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text1', {
              "static": false
            }]
          }],
          textElement2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text2', {
              "static": false
            }]
          }],
          textElement3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text3', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "OiEv":
    /*!**********************************************************!*\
      !*** ./src/app/color-tracker/color-tracker.component.ts ***!
      \**********************************************************/

    /*! exports provided: View, ColorTrackerComponent */

    /***/
    function OiEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View", function () {
        return View;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorTrackerComponent", function () {
        return ColorTrackerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../local-service.service */
      "4nh1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../color-picker/color-picker.component */
      "WUWi");

      function ColorTrackerComponent_app_color_picker_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-color-picker", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorTrackerComponent_app_color_picker_15_Template_app_color_picker_colorPickerChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var h_r6 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.updateColor($event, "colorScale", "retrievedColorScale", h_r6);
          })("legendUpdate", function ColorTrackerComponent_app_color_picker_15_Template_app_color_picker_legendUpdate_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.setLegend($event);
          })("deleteEvent", function ColorTrackerComponent_app_color_picker_15_Template_app_color_picker_deleteEvent_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.handleDelete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r5 = ctx.$implicit;
          var h_r6 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", h_r6)("color", el_r5.color)("retrievedCount", ctx_r0._.countBy(ctx_r0.retrievedData))("legend", el_r5.legend ? el_r5.legend : "Level " + h_r6);
        }
      }

      function ColorTrackerComponent_div_20_textarea_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorTrackerComponent_div_20_textarea_15_Template_textarea_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.handleNewData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r11.JSON.stringify(ctx_r11.retrievedTracker));
        }
      }

      function ColorTrackerComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Background");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-color-picker", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorTrackerComponent_div_20_Template_app_color_picker_colorPickerChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.updateColor($event, "backgroundColor", "retrievedBackgroundColor");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-color-picker", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorTrackerComponent_div_20_Template_app_color_picker_colorPickerChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.updateColor($event, "textColor", "retrievedTextColor");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-color-picker", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorTrackerComponent_div_20_Template_app_color_picker_colorPickerChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.updateColor($event, "borderColor", "retrievedBorderColor");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_20_Template_div_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.toggleEdition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ColorTrackerComponent_div_20_textarea_15_Template, 1, 1, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_20_Template_div_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " /!\\ reset data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_20_Template_div_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.handleTrackerDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " /!\\ delete tracker ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.retrievedBackgroundColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.retrievedTextColor)("textLight", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.retrievedBorderColor)("textLight", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx_r1.editionMode ? "show data" : "hide data", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editionMode);
        }
      }

      function ColorTrackerComponent_div_21_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var month_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r26, " ");
        }
      }

      function ColorTrackerComponent_div_21_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var l_r28 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r28 + 1, " ");
        }
      }

      function ColorTrackerComponent_div_21_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_21_div_14_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var j_r33 = ctx.index;

            var month_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.handleClick(ctx_r34.year + ctx_r34.yearModifier, month_r29, j_r33);
          })("contextmenu", function ColorTrackerComponent_div_21_div_14_div_1_Template_div_contextmenu_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var j_r33 = ctx.index;

            var month_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.handleRightClick(ctx_r37.year + ctx_r37.yearModifier, month_r29, j_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var j_r33 = ctx.index;

          var month_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r31.getColor(ctx_r31.year + ctx_r31.yearModifier, month_r29, j_r33))("border-color", ctx_r31.retrievedBorderColor);
        }
      }

      function ColorTrackerComponent_div_21_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorTrackerComponent_div_21_div_14_div_1_Template, 2, 4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r30 = ctx.index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.initTable(ctx_r23.getMonthLength(ctx_r23.yearModifier, i_r30)));
        }
      }

      function ColorTrackerComponent_div_21_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var l_r41 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r41 + 1, " ");
        }
      }

      function ColorTrackerComponent_div_21_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var month_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r42, " ");
        }
      }

      function ColorTrackerComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_21_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.setModifier("yearModifier", -1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " < ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_21_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.setModifier("yearModifier", +1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorTrackerComponent_div_21_div_10_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorTrackerComponent_div_21_div_13_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ColorTrackerComponent_div_21_div_14_Template, 2, 1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ColorTrackerComponent_div_21_div_16_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ColorTrackerComponent_div_21_div_19_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
        }
      }

      function ColorTrackerComponent_div_22_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r48 = ctx.$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.getDayName(day_r48));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.getDayNumber(day_r48));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.getMonth(day_r48));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.getYear(day_r48), "");
        }
      }

      function ColorTrackerComponent_div_22_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ColorTrackerComponent_div_22_div_10_Template_div_contextmenu_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var day_r49 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.handleRightClick(ctx_r50.getYear(day_r49), ctx_r50.getMonth(day_r49), ctx_r50.getDayNumber(day_r49) - 1);
          })("click", function ColorTrackerComponent_div_22_div_10_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var day_r49 = ctx.$implicit;

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.handleClick(ctx_r52.getYear(day_r49), ctx_r52.getMonth(day_r49), ctx_r52.getDayNumber(day_r49) - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r49 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx_r47.retrievedBorderColor)("background-color", ctx_r47.getColor(ctx_r47.getYear(day_r49), ctx_r47.getMonth(day_r49), ctx_r47.getDayNumber(day_r49) - 1));
        }
      }

      function ColorTrackerComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_22_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.setModifier("weekModifier", -1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " < ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_22_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.setModifier("weekModifier", +1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorTrackerComponent_div_22_div_8_Template, 10, 4, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorTrackerComponent_div_22_div_10_Template, 2, 4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getWeekDetails(ctx_r3.weekModifier));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getWeekDetails(ctx_r3.weekModifier));
        }
      }

      function ColorTrackerComponent_div_23_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r58 = ctx.$implicit;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.getDayName(day_r58));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.getDayNumber(day_r58));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.getMonth(day_r58));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r56.getYear(day_r58), "");
        }
      }

      function ColorTrackerComponent_div_23_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ColorTrackerComponent_div_23_div_10_Template_div_contextmenu_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var day_r59 = ctx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.handleRightClick(ctx_r60.getYear(day_r59), ctx_r60.getMonth(day_r59), ctx_r60.getDayNumber(day_r59) - 1);
          })("click", function ColorTrackerComponent_div_23_div_10_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var day_r59 = ctx.$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.handleClick(ctx_r62.getYear(day_r59), ctx_r62.getMonth(day_r59), ctx_r62.getDayNumber(day_r59) - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r59 = ctx.$implicit;

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx_r57.retrievedBorderColor)("background-color", ctx_r57.getColor(ctx_r57.getYear(day_r59), ctx_r57.getMonth(day_r59), ctx_r57.getDayNumber(day_r59) - 1));
        }
      }

      function ColorTrackerComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_23_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.setModifier("monthModifier", -1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " < ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_div_23_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.setModifier("monthModifier", +1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorTrackerComponent_div_23_div_8_Template, 10, 4, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorTrackerComponent_div_23_div_10_Template, 2, 4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getMonthDetails(ctx_r4.monthModifier));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getMonthDetails(ctx_r4.monthModifier));
        }
      }

      var View;

      (function (View) {
        View[View["Year"] = 0] = "Year";
        View[View["Month"] = 1] = "Month";
        View[View["Week"] = 2] = "Week";
      })(View || (View = {}));

      var ColorTrackerComponent = /*#__PURE__*/function () {
        function ColorTrackerComponent(s) {
          var _this2 = this;

          _classCallCheck(this, ColorTrackerComponent);

          this.s = s;
          this.monthsLength = [];
          this.monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          this.activeView = View.Year;
          this.View = View;
          this.JSON = JSON;
          this.editionMode = false;
          this.monthModifier = 0;
          this.weekModifier = 0;
          this.yearModifier = 0;
          this.options = false;
          this._ = lodash__WEBPACK_IMPORTED_MODULE_1__;
          this.s.currentId.subscribe(function (res) {
            _this2.inputId = _this2.s.currentId.value;

            if (!_this2.s.getTrackerVariable(_this2.inputId, 'title')) {
              _this2.s.setTrackerVariable(_this2.inputId, 'title', null);
            }

            if (!_this2.s.getTrackerVariable(_this2.inputId, 'savedData')) {
              _this2.s.setTrackerVariable(_this2.inputId, 'savedData', {});
            }

            if (!_this2.s.getTrackerVariable(_this2.inputId, 'colorScale')) {
              if (_this2.s.currentId.value === _this2.s.getFirstTrackerId(_this2.s.getTrackersData())) {
                _this2.s.setTrackerVariable(_this2.inputId, 'colorScale', [{
                  color: 'transparent',
                  legend: null
                }, {
                  color: '#8ae685',
                  legend: null
                }, {
                  color: '#ffee24',
                  legend: null
                }, {
                  color: '#ff4747',
                  legend: null
                }]);
              } else {
                _this2.s.setTrackerVariable(_this2.inputId, 'colorScale', [{
                  color: 'transparent',
                  legend: null
                }, {
                  color: _this2.getRandomColor(),
                  legend: null
                }, {
                  color: _this2.getRandomColor(),
                  legend: null
                }, {
                  color: _this2.getRandomColor(),
                  legend: null
                }]);
              }
            }

            if (!_this2.s.getTrackerVariable(_this2.inputId, 'backgroundColor')) {
              _this2.s.setTrackerVariable(_this2.inputId, 'backgroundColor', '#ffffff');
            }

            if (!_this2.s.getTrackerVariable(_this2.inputId, 'textColor')) {
              _this2.s.setTrackerVariable(_this2.inputId, 'textColor', 'rgb(26, 25, 25)');
            }

            if (!_this2.s.getTrackerVariable(_this2.inputId, 'borderColor')) {
              _this2.s.setTrackerVariable(_this2.inputId, 'borderColor', 'rgb(26, 25, 25)');
            }

            _this2.retrievedBorderColor = _this2.s.getTrackerVariable(_this2.inputId, 'borderColor');
            _this2.retrievedBackgroundColor = _this2.s.getTrackerVariable(_this2.inputId, 'backgroundColor');
            _this2.retrievedData = _this2.s.getTrackerVariable(_this2.inputId, 'savedData');
            _this2.retrievedColorScale = _this2.s.getTrackerVariable(_this2.inputId, 'colorScale');
            _this2.retrievedTextColor = _this2.s.getTrackerVariable(_this2.inputId, 'textColor');
            _this2.retrievedTitle = _this2.s.getTrackerVariable(_this2.inputId, 'title');
            _this2.retrievedTracker = _this2.s.getTrackerData(_this2.inputId);
          });
          this.year = Number(moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY'));
        }

        _createClass(ColorTrackerComponent, [{
          key: "toggleOptions",
          value: function toggleOptions() {
            this.options = !this.options;
          }
        }, {
          key: "getLevelCount",
          value: function getLevelCount() {
            lodash__WEBPACK_IMPORTED_MODULE_1__["countBy"](this.retrievedData);
          }
        }, {
          key: "getMonthIndex",
          value: function getMonthIndex(monthName) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](this.monthsName, monthName) + 1;
          }
        }, {
          key: "getMonthDetails",
          value: function getMonthDetails(monthModifier) {
            var currentDate = moment__WEBPACK_IMPORTED_MODULE_2__();
            currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().add(monthModifier, 'M');
            var month = currentDate.format('MMM');
            var year = currentDate.format('YYYY');
            var monthStart = moment__WEBPACK_IMPORTED_MODULE_2__(year + '-' + month + '-' + '01', 'YYYY-MMM-D');
            var days = [];

            for (var i = 0; i < this.getMonthLength(0, month); i++) {
              days.push(moment__WEBPACK_IMPORTED_MODULE_2__(monthStart).add(i, 'days').format('YYYY,MMM,D,dddd'));
            }

            return days;
          }
        }, {
          key: "getMonthLength",
          value: function getMonthLength(yearModifier, index) {
            var year = this.year + yearModifier;
            var indexString;

            if (index + 1 < 10) {
              indexString = '0' + (index + 1);
            } else {
              indexString = index + 1 + '';
            }

            return moment__WEBPACK_IMPORTED_MODULE_2__(year + '-' + indexString, 'YYYY-MM').daysInMonth();
          }
        }, {
          key: "setModifier",
          value: function setModifier(modifierName, increment) {
            var savedModifier = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this, modifierName) + increment;
            lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this, modifierName, savedModifier);
            console.log(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this, modifierName));
          }
        }, {
          key: "getYear",
          value: function getYear(value) {
            return Number(lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](lodash__WEBPACK_IMPORTED_MODULE_1__["split"](value, ','), 0));
          }
        }, {
          key: "getDayName",
          value: function getDayName(value) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](lodash__WEBPACK_IMPORTED_MODULE_1__["split"](value, ','), 3);
          }
        }, {
          key: "getMonth",
          value: function getMonth(value) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](lodash__WEBPACK_IMPORTED_MODULE_1__["split"](value, ','), 1);
          }
        }, {
          key: "getDayNumber",
          value: function getDayNumber(value) {
            return Number(lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](lodash__WEBPACK_IMPORTED_MODULE_1__["split"](value, ','), 2));
          }
        }, {
          key: "getWeekDetails",
          value: function getWeekDetails(weekmodifier) {
            var currentDate = moment__WEBPACK_IMPORTED_MODULE_2__();
            currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().add(weekmodifier, 'w');
            var weekStart = currentDate.clone().startOf('isoWeek');
            var days = [];

            for (var i = 0; i <= 6; i++) {
              days.push(moment__WEBPACK_IMPORTED_MODULE_2__(weekStart).add(i, 'days').format('YYYY,MMM,D,dddd'));
            }

            return days;
          }
        }, {
          key: "initTable",
          value: function initTable(length) {
            return new Array(length);
          }
        }, {
          key: "handleChangeView",
          value: function handleChangeView(view) {
            this.monthModifier = 0;
            this.weekModifier = 0;
            this.yearModifier = 0; // this.retrievedTracker = this.s.getTrackerData(this.inputId)

            this.activeView = view;
          }
        }, {
          key: "reset",
          value: function reset() {
            if (confirm('Are you sure you want to delete all your data ? ')) {
              this.s.setTrackerVariable(this.inputId, 'savedData', {});
              this.s.currentId.next(this.inputId);
              document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
          }
        }, {
          key: "toggleEdition",
          value: function toggleEdition() {
            this.editionMode = !this.editionMode;
          }
        }, {
          key: "isJson",
          value: function isJson(str) {
            try {
              JSON.parse(str);
            } catch (e) {
              return false;
            }

            return true;
          }
        }, {
          key: "handleTrackerDelete",
          value: function handleTrackerDelete() {
            if (confirm('Are you sure you want to delete this tracker ? ')) {
              this.s["delete"](this.inputId);
            }
          }
        }, {
          key: "handleNewData",
          value: function handleNewData(event) {
            if (!this.isJson(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event.target, 'value'))) {
              return;
            }

            this.s.setTrackerData(this.inputId, JSON.parse(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event.target, 'value')));
            this.s.currentId.next(this.inputId);
          }
        }, {
          key: "updateColor",
          value: function updateColor(event, savedDataName, retrievedDataName, index) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](event)) {
              return;
            }

            var newColor = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'color');

            if (index || index === 0) {
              var _index = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'index');

              var actualColor = lodash__WEBPACK_IMPORTED_MODULE_1__["nth"](this.retrievedColorScale, _index);

              if (!actualColor || !newColor) {
                return;
              }

              lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this.retrievedColorScale[_index], 'color', newColor);
            } else {
              lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this, retrievedDataName, newColor);
            }

            this.s.setTrackerVariable(this.inputId, savedDataName, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this, retrievedDataName));
            this.s.currentId.next(this.inputId);
          }
        }, {
          key: "setLegend",
          value: function setLegend(event) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](event)) {
              return;
            }

            var index = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'index');
            var legend = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'legend', null);
            lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this.retrievedColorScale[index], 'legend', legend);
            this.s.setTrackerVariable(this.inputId, 'colorScale', this.retrievedColorScale);
          }
        }, {
          key: "handleDelete",
          value: function handleDelete(event) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](event)) {
              return;
            }

            if (confirm('Are you sure you want to delete this color ? this will affect the grid ')) {
              var index = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'index');

              for (var _i2 = 0, _Object$entries2 = Object.entries(this.retrievedData); _i2 < _Object$entries2.length; _i2++) {
                var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                    key = _Object$entries2$_i[0],
                    value = _Object$entries2$_i[1];

                if (value > index) {
                  var newValue = this.retrievedData[key] - 1;
                  this.retrievedData[key] = newValue;
                } else if (value === index) {
                  delete this.retrievedData[key];
                }
              }

              this.s.setTrackerVariable(this.inputId, 'savedData', this.retrievedData);
              this.retrievedColorScale.splice(index, 1);
              this.s.setTrackerVariable(this.inputId, 'colorScale', this.retrievedColorScale);
            }
          }
        }, {
          key: "addColor",
          value: function addColor() {
            this.retrievedColorScale.push({
              color: this.getRandomColor(),
              legend: null
            });
            this.s.setTrackerVariable(this.inputId, 'colorScale', this.retrievedColorScale);
          }
        }, {
          key: "getRandomColor",
          value: function getRandomColor() {
            var randomRed = Math.ceil(Math.random() * 255);
            var randomGreen = Math.ceil(Math.random() * 255);
            var randomBlue = Math.ceil(Math.random() * 255);
            return 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')';
          }
        }, {
          key: "getColor",
          value: function getColor(year, month, day) {
            var date = this.convertDateToString(year, month, day);
            var value = this.findValue(date);
            return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.retrievedColorScale[value], 'color');
          }
        }, {
          key: "convertDateToString",
          value: function convertDateToString(year, months, days) {
            var string = lodash__WEBPACK_IMPORTED_MODULE_1__["join"]([year, months, days + 1], '_');
            return string;
          }
        }, {
          key: "findValue",
          value: function findValue(date) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.retrievedData, date, 0);
          }
        }, {
          key: "findData",
          value: function findData(date) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.retrievedData, date, null);
          }
        }, {
          key: "handleClick",
          value: function handleClick(year, month, day) {
            var date = this.convertDateToString(year, month, day);
            var value = this.findValue(date);

            if (value === this.retrievedColorScale.length - 1) {
              value = 0;
            } else {
              value++;
            }

            lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this.retrievedData, date, value);
            this.s.setTrackerVariable(this.inputId, 'savedData', this.retrievedData);

            if (this.editionMode) {
              this.retrievedTracker = this.s.getTrackerData(this.inputId);
            }
          }
        }, {
          key: "handleRightClick",
          value: function handleRightClick(year, month, day) {
            var date = this.convertDateToString(year, month, day);
            var value = this.findValue(date);

            if (value === 0) {
              value = this.retrievedColorScale.length - 1;
            } else {
              value--;
            }

            lodash__WEBPACK_IMPORTED_MODULE_1__["set"](this.retrievedData, date, value);
            this.s.setTrackerVariable(this.inputId, 'savedData', this.retrievedData);
            return false;
          }
        }]);

        return ColorTrackerComponent;
      }();

      ColorTrackerComponent.ɵfac = function ColorTrackerComponent_Factory(t) {
        return new (t || ColorTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"]));
      };

      ColorTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColorTrackerComponent,
        selectors: [["app-color-tracker"]],
        decls: 24,
        vars: 30,
        consts: [[1, "grid-content"], [1, "left"], [1, "right", "my-5"], [1, "d-flex", "flex-column"], [1, "h3", "mx-3", "days-height"], [1, "d-flex", "mb-3"], [1, "btn", "fixed-width-small", "fat-border", "fat-border-black", "mx-3", 3, "click"], ["class", "mb-2 mx-3", 3, "index", "color", "retrievedCount", "legend", "colorPickerChange", "legendUpdate", "deleteEvent", 4, "ngFor", "ngForOf"], [1, "btn", "cursor-pointer", "btn-light", "fat-border", "fat-border-black", "fixed-width", "mt-4", "mx-3", 3, "click"], [1, "btn", "my-5", "cursor-pointer", "btn-light", "fat-border", "fat-border-black", "fixed-width", "mx-3", 3, "click"], [4, "ngIf"], ["class", "my-5 middle d-flex flex-column", 4, "ngIf"], ["class", "my-5 d-flex flex-column", 4, "ngIf"], ["class", "my-5 d-flex flex-column flex-nowrap", 4, "ngIf"], [1, "mb-2", "mx-3", 3, "index", "color", "retrievedCount", "legend", "colorPickerChange", "legendUpdate", "deleteEvent"], [1, "h3", "my-3", "mx-3", "days-height"], [1, "mb-2", "mx-3", 3, "color", "colorPickerChange"], [1, "mb-2", "mx-3", 3, "color", "textLight", "colorPickerChange"], [1, "btn", "btn-light", "cursor-pointer", "fat-border", "fat-border-black", "fixed-width", "mb-3", "mx-3", 3, "click"], ["class", "formControl mx-3 mb-3 fixed-width-edition", 3, "value", "blur", 4, "ngIf"], [1, "btn", "fat-border", "fat-border-black", "fixed-width", "mb-3", "mx-3", "cursor-pointer", 3, "click"], [1, "btn", "fixed-width", "fat-border", "fat-border-black", "mx-3", "cursor-pointer", 3, "click"], [1, "formControl", "mx-3", "mb-3", "fixed-width-edition", 3, "value", "blur"], [1, "my-5", "middle", "d-flex", "flex-column"], [1, "historic", "d-flex", "flex-nowrap", "mx-auto", "align-items-center"], [1, "mx-2"], [1, "d-flex", "flex-nowrap", "monthsNameContainer"], [1, "days-numbers"], ["class", "month days monthNames", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-nowrap"], ["class", "days-numbers", 4, "ngFor", "ngForOf"], ["class", "d-flex flex-column month", 4, "ngFor", "ngForOf"], [1, "month", "days", "monthNames"], [1, "d-flex", "flex-column", "month"], ["class", "days", 4, "ngFor", "ngForOf"], [1, "days"], [1, "cursor-pointer", "h-100", "w-100", "fat-border", 3, "click", "contextmenu"], [1, "my-5", "d-flex", "flex-column"], [1, "historic", "d-flex", "flex-nowrap", "mx-auto"], [1, "d-flex", "mx-auto", "my-2"], ["class", "daysNames", 4, "ngFor", "ngForOf"], ["class", "days mx-3", 4, "ngFor", "ngForOf"], [1, "daysNames"], [1, "ml-2", "text-uppercase"], [1, "my-2"], [1, "days", "mx-3"], [1, "cursor-pointer", "h-100", "w-100", "fat-border", 3, "contextmenu", "click"], [1, "my-5", "d-flex", "flex-column", "flex-nowrap"]],
        template: function ColorTrackerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Period");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_7_listener() {
              return ctx.handleChangeView(ctx.View.Year);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Year ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_9_listener() {
              return ctx.handleChangeView(ctx.View.Month);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Month ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_11_listener() {
              return ctx.handleChangeView(ctx.View.Week);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ColorTrackerComponent_app_color_picker_15_Template, 1, 4, "app-color-picker", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_16_listener() {
              return ctx.addColor();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " add a color ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerComponent_Template_div_click_18_listener() {
              return ctx.toggleOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ColorTrackerComponent_div_20_Template, 20, 7, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ColorTrackerComponent_div_21_Template, 20, 6, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ColorTrackerComponent_div_22_Template, 11, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ColorTrackerComponent_div_23_Template, 11, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.activeView === ctx.View.Year)("bg-dark", ctx.activeView === ctx.View.Year)("text-light", ctx.activeView === ctx.View.Year)("cursor-pointer", ctx.activeView !== ctx.View.Year);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.activeView === ctx.View.Month)("bg-dark", ctx.activeView === ctx.View.Month)("text-light", ctx.activeView === ctx.View.Month)("cursor-pointer", ctx.activeView !== ctx.View.Month);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cursor-pointer", ctx.activeView !== ctx.View.Week)("bg-dark", ctx.activeView === ctx.View.Week)("text-light", ctx.activeView === ctx.View.Week)("disabled", ctx.activeView === ctx.View.Week);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.retrievedColorScale);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options ? "Less options \u25B2" : "Advanced options \u25BC", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeView === ctx.View.Year);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeView === ctx.View.Week);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeView === ctx.View.Month);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_5__["ColorPickerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci10cmFja2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorTrackerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-color-tracker',
            templateUrl: './color-tracker.component.html',
            styleUrls: ['./color-tracker.component.scss']
          }]
        }], function () {
          return [{
            type: _local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
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
        if (!__webpack_require__.o(map, req)) {
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
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "WUWi":
    /*!********************************************************!*\
      !*** ./src/app/color-picker/color-picker.component.ts ***!
      \********************************************************/

    /*! exports provided: ColorPickerComponent */

    /***/
    function WUWi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function () {
        return ColorPickerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-color-picker */
      "R9Cn");

      function ColorPickerComponent_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorPickerComponent_input_1_Template_input_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onLegendUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.legend);
        }
      }

      function ColorPickerComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u221E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColorPickerComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.retrievedCount[ctx_r2.index] ? ctx_r2.retrievedCount[ctx_r2.index] : 0, " ");
        }
      }

      var ColorPickerComponent = /*#__PURE__*/function () {
        function ColorPickerComponent() {
          _classCallCheck(this, ColorPickerComponent);

          this.legendUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.colorPickerChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.deleteEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.index = null;
          this.legend = null;
          this.textLight = false;
        }

        _createClass(ColorPickerComponent, [{
          key: "onColorPicked",
          value: function onColorPicked(event) {
            event.preventDefault;
            this.colorPickerChange.next({
              index: this.index,
              color: event
            });
          }
        }, {
          key: "onLegendUpdate",
          value: function onLegendUpdate(event) {
            this.legendUpdate.next({
              index: this.index,
              legend: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](event.target, 'value')
            });
          }
        }, {
          key: "handleDelete",
          value: function handleDelete() {
            this.deleteEvent.next({
              index: this.index
            });
          }
        }]);

        return ColorPickerComponent;
      }();

      ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) {
        return new (t || ColorPickerComponent)();
      };

      ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColorPickerComponent,
        selectors: [["app-color-picker"]],
        inputs: {
          color: "color",
          retrievedCount: "retrievedCount",
          index: "index",
          legend: "legend",
          textLight: "textLight"
        },
        outputs: {
          legendUpdate: "legendUpdate",
          colorPickerChange: "colorPickerChange",
          deleteEvent: "deleteEvent"
        },
        decls: 9,
        vars: 11,
        consts: [[1, "d-flex", "mb-3", "align-items-center", "w-100", "flex-wrap"], ["type", "text", "class", "form-control mr-3 fixed-width-legend", 3, "value", "blur", 4, "ngIf"], [1, "d-flex", "flex-nowrap"], ["readonly", "", "cpPosition", "bottom", 1, "btn", "fat-border", "my-2", "fat-border-black", "cursor-pointer", "fixed-width", 3, "colorPicker", "value", "colorPickerChange", "colorPickerClose"], [1, "btn", "d-flex", "align-items-center", 3, "click"], ["class", "text-center count mx-2 d-flex flex-nowrap", 4, "ngIf"], ["class", "small text-center count mx-2 d-flex flex-nowrap", 4, "ngIf"], ["type", "text", 1, "form-control", "mr-3", "fixed-width-legend", 3, "value", "blur"], [1, "text-center", "count", "mx-2", "d-flex", "flex-nowrap"], [1, "big"], [1, "small", "text-center", "count", "mx-2", "d-flex", "flex-nowrap"]],
        template: function ColorPickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_input_1_Template, 1, 1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function ColorPickerComponent_Template_input_colorPickerChange_3_listener($event) {
              return ctx.color = $event;
            })("colorPickerClose", function ColorPickerComponent_Template_input_colorPickerClose_3_listener($event) {
              return ctx.onColorPicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_4_listener() {
              return ctx.index <= 1 ? "" : ctx.handleDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPickerComponent_div_7_Template, 3, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorPickerComponent_div_8_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index || ctx.legend);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-light", ctx.textLight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx.color)("value", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.index <= 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerDirective"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .count[_ngcontent-%COMP%] {\n  border: 2px dashed black;\n  min-width: 2.3rem;\n  height: 2rem;\n  line-height: 2rem;\n  padding-left: 3px;\n  padding-right: 3px;\n  text-align: center;\n  background-color: #00000029;\n}\n\n[_nghost-%COMP%]   .big[_ngcontent-%COMP%] {\n  line-height: 1rem;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZjs7QUFGQTtFQUdRLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFHbkM7O0FBYkE7RUFhUSxpQkFBaUI7RUFDakIsZUFBZTtBQUl2QiIsImZpbGUiOiJjb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5jb3VudCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xyXG4gICAgICAgIG1pbi13aWR0aDogMi4zcmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAyOTtcclxuICAgIH1cclxuICAgIC5iaWcge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-color-picker',
            templateUrl: './color-picker.component.html',
            styleUrls: ['./color-picker.component.scss']
          }]
        }], null, {
          legendUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          retrievedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          legend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          textLight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./color-picker/color-picker.component */
      "WUWi");
      /* harmony import */


      var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-color-picker */
      "R9Cn");
      /* harmony import */


      var _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./color-tracker/color-tracker.component */
      "OiEv");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./color-tracker-container/color-tracker-container.component */
      "xIh+");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__["ColorPickerComponent"], _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_6__["ColorTrackerComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_8__["ColorTrackerContainerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]],
          exports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__["ColorPickerComponent"], _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_6__["ColorTrackerComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_8__["ColorTrackerContainerComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]],
            exports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./color-tracker-container/color-tracker-container.component */
      "xIh+");

      var routes = [{
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [{
          path: '',
          component: _color_tracker_container_color_tracker_container_component__WEBPACK_IMPORTED_MODULE_4__["ColorTrackerContainerComponent"]
        }, {
          path: 'about',
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
        }]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xIh+":
    /*!******************************************************************************!*\
      !*** ./src/app/color-tracker-container/color-tracker-container.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ColorTrackerContainerComponent */

    /***/
    function xIh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorTrackerContainerComponent", function () {
        return ColorTrackerContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../local-service.service */
      "4nh1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../color-tracker/color-tracker.component */
      "OiEv");

      function ColorTrackerContainerComponent_li_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorTrackerContainerComponent_li_5_div_1_Template_input_blur_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.onTitleUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var el_r3 = ctx_r9.$implicit;
          var index_r4 = ctx_r9.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r5._.get(el_r3, "color"))("width", ctx_r5.getATitle(ctx_r5._.get(el_r3, "title"), index_r4).length + 5, "ch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.getATitle(ctx_r5._.get(el_r3, "title"), index_r4));
        }
      }

      function ColorTrackerContainerComponent_li_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerContainerComponent_li_5_div_2_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var el_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.switchTracker(ctx_r10._.get(el_r3, "id"));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var el_r3 = ctx_r13.$implicit;
          var index_r4 = ctx_r13.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r6._.get(el_r3, "color"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getATitle(ctx_r6._.get(el_r3, "title"), index_r4));
        }
      }

      function ColorTrackerContainerComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorTrackerContainerComponent_li_5_div_1_Template, 2, 5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorTrackerContainerComponent_li_5_div_2_Template, 4, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var el_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.s.currentId.value === ctx_r0._.get(el_r3, "id"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.s.currentId.value !== el_r3.id);
        }
      }

      function ColorTrackerContainerComponent_app_color_tracker_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-color-tracker", 18);
        }
      }

      function ColorTrackerContainerComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerContainerComponent_div_11_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.handleResetAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " /!\\ Delete all ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ColorTrackerContainerComponent = /*#__PURE__*/function () {
        function ColorTrackerContainerComponent(router, s) {
          _classCallCheck(this, ColorTrackerContainerComponent);

          this.router = router;
          this.s = s;
          this._ = lodash__WEBPACK_IMPORTED_MODULE_1__;
          this.retrievedTrackersArray = [];
        }

        _createClass(ColorTrackerContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (!this.s.getTrackersData()) {
              localStorage.clear();
              this.s.setTrackersData({});
              this.handleNewTracker();
            }

            if (!this.s.currentId.value) {
              this.s.initCurrentId(this.s.getTrackersData());
            }

            this.s.currentId.subscribe(function () {
              _this3.retrievedTextColor = _this3.s.getTrackerVariable(_this3.s.currentId.value, 'textColor');
              _this3.retrievedBorderColor = _this3.s.getTrackerVariable(_this3.s.currentId.value, 'borderColor');
              _this3.retrievedBackgroundColor = _this3.s.getTrackerVariable(_this3.s.currentId.value, 'backgroundColor');
              _this3.retrievedTrackers = _this3.s.getTrackersData();
              _this3.retrievedTrackersArray = _this3.getTrackersArray();
            });
          }
        }, {
          key: "getTrackersArray",
          value: function getTrackersArray() {
            var array = [];

            for (var _i3 = 0, _Object$entries3 = Object.entries(this.retrievedTrackers); _i3 < _Object$entries3.length; _i3++) {
              var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
                  key = _Object$entries3$_i[0],
                  value = _Object$entries3$_i[1];

              array.push({
                title: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](value, 'title'),
                id: key,
                color: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](value, 'textColor')
              });
            }

            return array;
          }
        }, {
          key: "getRetrievedTrackersArray",
          value: function getRetrievedTrackersArray() {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this, 'retrievedTrackersArray', []);
          }
        }, {
          key: "handleResetAll",
          value: function handleResetAll() {
            if (confirm('Are you sure you want to delete all your trackers ? ')) {
              if (confirm('Really really sure ? ')) {
                localStorage.clear();
                this.s.setTrackersData({});
                this.s.currentId.next(null);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
              }
            }
          }
        }, {
          key: "getATitle",
          value: function getATitle(title, index) {
            var array = ['Smoking', 'Mood', 'Sport', 'Climbing', 'Alcohol', 'House Cleaning', 'Balanced diet', 'Stretch', 'Reading', 'Writing', 'Call to Grandparents', 'Plant watering', 'Studying', 'Full night sleep', 'Showers', 'Raclette', '10000 Steps', 'Jogging', 'Vegetarian days', 'No screens', 'Cheat meals', 'Yoga', 'Work', 'Music Practice', 'Social Dancing', 'Drawing', 'Learn language'];
            var i = Math.floor(Math.random() * array.length);
            return title ? title : array[i];
          }
        }, {
          key: "switchTracker",
          value: function switchTracker(id) {
            this.s.currentId.next(id);
          }
        }, {
          key: "handleNewTracker",
          value: function handleNewTracker() {
            var length = this.getRetrievedTrackersArray().length;
            var newId = 'tracker' + Math.ceil(Math.random() * 1000000000);

            if (!this.s.getTrackerData(newId)) {
              this.s.setTrackerData(newId, {
                title: this.getATitle(null, length)
              });
            }

            this.switchTracker(newId);
          }
        }, {
          key: "onTitleUpdate",
          value: function onTitleUpdate(event) {
            this.s.setTrackerVariable(this.s.currentId.value, 'title', lodash__WEBPACK_IMPORTED_MODULE_1__["get"](event.target, 'value'));
            this.switchTracker(this.s.currentId.value);
          }
        }, {
          key: "goTo",
          value: function goTo(name) {
            this.router.navigate(['about']);
          }
        }]);

        return ColorTrackerContainerComponent;
      }();

      ColorTrackerContainerComponent.ɵfac = function ColorTrackerContainerComponent_Factory(t) {
        return new (t || ColorTrackerContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"]));
      };

      ColorTrackerContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColorTrackerContainerComponent,
        selectors: [["app-color-tracker-container"]],
        decls: 15,
        vars: 9,
        consts: [[1, "d-flex", "grid", "flex-column", "w-100"], [1, "head", "d-flex", "align-items-center", "flex-column", "justify-content-center"], [1, "h1", "my-5"], [1, "nav"], ["class", "nav-item cursor-pointer mb-2", 4, "ngFor", "ngForOf"], [1, "nav-item", "cursor-pointer"], [1, "btn", "btn-light", "mx-3", "fat-border", "fat-border-black", 3, "click"], ["class", "content", 4, "ngIf"], [1, "d-flex", "foot"], ["class", "btn fat-border fat-border-black mx-3 my-3 cursor-pointer", 3, "click", 4, "ngIf"], [1, "btn", "fat-border", "fat-border-black", "mx-3", "my-3", "cursor-pointer", 3, "click"], [1, "nav-item", "cursor-pointer", "mb-2"], ["class", "active", 4, "ngIf"], [4, "ngIf"], [1, "active"], ["type", "text", 1, "form-control", 3, "value", "blur"], [1, "btn", 3, "click"], [1, "pb-1", "underlined"], [1, "content"]],
        template: function ColorTrackerContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Color tracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorTrackerContainerComponent_li_5_Template, 3, 2, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerContainerComponent_Template_div_click_7_listener() {
              return ctx.handleNewTracker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " + new ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ColorTrackerContainerComponent_app_color_tracker_9_Template, 1, 0, "app-color-tracker", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ColorTrackerContainerComponent_div_11_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorTrackerContainerComponent_Template_div_click_13_listener() {
              return ctx.goTo("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " ? about ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.retrievedBackgroundColor)("color", ctx.retrievedTextColor)("border-color", ctx.retrievedBorderColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getRetrievedTrackersArray());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.currentId.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getRetrievedTrackersArray().length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _color_tracker_color_tracker_component__WEBPACK_IMPORTED_MODULE_5__["ColorTrackerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci10cmFja2VyLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorTrackerContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-color-tracker-container',
            templateUrl: './color-tracker-container.component.html',
            styleUrls: ['./color-tracker-container.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map