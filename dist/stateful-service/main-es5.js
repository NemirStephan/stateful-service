function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<lg-page>\n  <header lg-header [logo]=\"logo\" [logoAlt]=\"logoAlt\"></header>\n\n  <div lgContainer>\n    <div lgRow>\n      <div lgCol=\"12\" lgColMd=\"12\" lgColLg=\"12\">\n        <span><a [routerLink]=\"['../random-numbers']\">Random Numbers</a></span>\n        <span lgMarginLeft=\"xl\"\n          ><a [routerLink]=\"['../customers']\">Customers</a></span\n        >\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n  <div\n    lg-footer\n    [logo]=\"logo\"\n    [logoAlt]=\"logoAlt\"\n    [copyright]=\"copyright\"\n    [secondaryLinks]=\"secondaryLinks\"\n  ></div>\n</lg-page>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-contianer/customer-contianer.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-contianer/customer-contianer.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerContianerCustomerContianerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<lg-card>\n  a\n</lg-card>\n<lg-card>\n  b\n</lg-card>\n\n<!-- <lg-card>\n  <br />\n  <div style=\"display: grid; grid-template-columns: 50% 50%\">\n    <div>\n      <button lg-button\n        lgMarginLeft=\"xl\"\n        lgMarginBottom=\"xxs\"\n        variant=\"secondary\"\n        (click)=\"add()\"\n        >Add</button>\n      <ng-container *ngFor=\"let component of components\">\n        <app-customer\n          (removeComponent)=\"remove($event)\"\n          [componentId]=\"component.componentId\"\n          [customerId]=\"component.customerId\"\n        ></app-customer>\n      </ng-container>\n    </div>\n    <div>\n      <button lg-button lgMarginBottom=\"xxs\" variant=\"primary\" (click)=\"clear()\"\n        >Clear</ button\n      >\n      <ng-container *ngFor=\"let notification of notifications\">\n        <p>{{ notification }}</p>\n      </ng-container>\n    </div>\n  </div>\n</lg-card> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-contianer/customer/customer.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-contianer/customer/customer.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerContianerCustomerCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<lg-card>\n  <div>\n    <form [formGroup]=\"customerForm\">\n      <p>\n        <!-- <lg-button variant=\"primary\" (click)=\"remove()\">-</lg-button>\n        <lg-button\n          lgMarginLeft=\"xxs\"\n          variant=\"primary\"\n          (click)=\"refreshCustomer()\"\n          >Refresh</lg-button\n        >\n        <lg-button\n          lgMarginLeft=\"xxs\"\n          lgMarginRight=\"xxs\"\n          variant=\"primary\"\n          (click)=\"updateCustomer()\"\n          >Update</lg-button\n        > -->\n        <input lgInput formControlName=\"name\" />\n        <label lgMarginLeft=\"xxs\" controlName=\"lastRefreshed\"></label>\n\n      </p>\n    </form>\n  </div>\n</lg-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<lg-card>\n    <button lg-button lgMarginBottom=\"xxs\" variant=\"primary\" (click)=\"clear()\"\n      >Clear</ button\n    >\n    <ng-container *ngFor=\"let notification of notifications\">\n      <p>{{ notification }}</p>\n    </ng-container>\n</lg-card>>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/random-numbers-container/random-numbers-container.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/random-numbers-container/random-numbers-container.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRandomNumbersContainerRandomNumbersContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<lg-card>\n  <div style=\"display: grid; grid-template-columns: 50% 50%\">\n    <div lgMarginRight=\"xl\">\n      <button lg-button\n        lgMarginBottom=\"xxs\"\n        variant=\"primary\"\n        (click)=\"add()\"\n        >Add</button>\n      <ng-container *ngFor=\"let component of components\">\n        <app-random-numbers\n          (removeComponent)=\"remove($event)\"\n          [componentId]=\"component.componentId\"\n        ></app-random-numbers>\n      </ng-container>\n    </div>\n    <div>\n      <app-notifications></app-notifications>\n    </div>\n  </div>\n</lg-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/random-numbers-container/random-numbers/random-numbers.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/random-numbers-container/random-numbers/random-numbers.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRandomNumbersContainerRandomNumbersRandomNumbersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<lg-card>\n  <div>\n    <form [formGroup]=\"customerForm\">\n      <p>\n        <!-- <lg-button variant=\"primary\" (click)=\"remove()\">-</lg-button>\n        <lg-button\n          lgMarginLeft=\"xxs\"\n          variant=\"primary\"\n          (click)=\"refreshCustomer()\"\n          >Refresh</lg-button\n        >\n        <lg-button\n          lgMarginLeft=\"xxs\"\n          lgMarginRight=\"xxs\"\n          variant=\"primary\"\n          (click)=\"updateCustomer()\"\n          >Update</lg-button\n        > -->\n        <input lgInput formControlName=\"name\" />\n        <label lgMarginLeft=\"xxs\" controlName=\"lastRefreshed\"></label>\n\n      </p>\n    </form>\n  </div>\n</lg-card>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_customer_contianer_customer_contianer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/customer-contianer/customer-contianer.component */
    "./src/app/components/customer-contianer/customer-contianer.component.ts");
    /* harmony import */


    var _components_random_numbers_container_random_numbers_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/random-numbers-container/random-numbers-container.component */
    "./src/app/components/random-numbers-container/random-numbers-container.component.ts");

    var routes = [{
      path: 'random-numbers',
      component: _components_random_numbers_container_random_numbers_container_component__WEBPACK_IMPORTED_MODULE_4__["RandomNumbersContainerComponent"]
    }, {
      path: 'customers',
      component: _components_customer_contianer_customer_contianer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerContianerComponent"]
    }, {
      path: '',
      redirectTo: 'random-numbers',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'stateful-service'; // Header & footer props

      this.logo = '/assets/img/landg-logo.svg';
      this.logoHeight = '4.8rem';
      this.logoAlt = 'Legal and General';
      this.copyright = "\xA9 Legal & General Group plc ".concat(new Date().getFullYear());
      this.secondaryLinks = [{
        text: 'Accessibility',
        href: 'https://www.legalandgeneral.com/log-in/shared-pages/footer-links/accessibility.html'
      }, {
        text: 'Legal and regulatory information',
        href: 'https://www.legalandgeneral.com/log-in/shared-pages/footer-links/legal.html'
      }, {
        text: 'Cookie policy',
        href: 'https://www.legalandgeneral.com/log-in/shared-pages/footer-links/legal.html'
      }, {
        text: 'Privacy policy',
        href: 'https://www.legalandgeneral.com/privacy-policy'
      }, {
        text: 'Security information',
        href: 'https://www.legalandgeneral.com/log-in/shared-pages/footer-links/security.html'
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _canopy_collective_canopy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @canopy-collective/canopy */
    "./node_modules/@canopy-collective/canopy/fesm2015/canopy-collective-canopy.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_customer_contianer_customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/customer-contianer/customer/customer.component */
    "./src/app/components/customer-contianer/customer/customer.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_notification_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./interceptors/notification-interceptor */
    "./src/app/interceptors/notification-interceptor.ts");
    /* harmony import */


    var _directives_label_control_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./directives/label-control.directive */
    "./src/app/directives/label-control.directive.ts");
    /* harmony import */


    var _components_customer_contianer_customer_contianer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/customer-contianer/customer-contianer.component */
    "./src/app/components/customer-contianer/customer-contianer.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_random_numbers_container_random_numbers_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/random-numbers-container/random-numbers-container.component */
    "./src/app/components/random-numbers-container/random-numbers-container.component.ts");
    /* harmony import */


    var _components_random_numbers_container_random_numbers_random_numbers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/random-numbers-container/random-numbers/random-numbers.component */
    "./src/app/components/random-numbers-container/random-numbers/random-numbers.component.ts");
    /* harmony import */


    var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/notifications/notifications.component */
    "./src/app/components/notifications/notifications.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_customer_contianer_customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"], _directives_label_control_directive__WEBPACK_IMPORTED_MODULE_9__["LabelControlDirective"], _components_customer_contianer_customer_contianer_component__WEBPACK_IMPORTED_MODULE_10__["CustomerContianerComponent"], _components_random_numbers_container_random_numbers_container_component__WEBPACK_IMPORTED_MODULE_12__["RandomNumbersContainerComponent"], _components_random_numbers_container_random_numbers_random_numbers_component__WEBPACK_IMPORTED_MODULE_13__["RandomNumbersComponent"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsComponent"]],
      imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _canopy_collective_canopy__WEBPACK_IMPORTED_MODULE_4__["CanopyModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_notification_interceptor__WEBPACK_IMPORTED_MODULE_8__["NotificationInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/customer-contianer/customer-contianer.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/customer-contianer/customer-contianer.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerContianerCustomerContianerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGlhbmVyL2N1c3RvbWVyLWNvbnRpYW5lci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/customer-contianer/customer-contianer.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/customer-contianer/customer-contianer.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CustomerContianerComponent */

  /***/
  function srcAppComponentsCustomerContianerCustomerContianerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerContianerComponent", function () {
      return CustomerContianerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");

    var CustomerContianerComponent =
    /*#__PURE__*/
    function () {
      function CustomerContianerComponent(notificationService) {
        _classCallCheck(this, CustomerContianerComponent);

        this.notificationService = notificationService;
        this.nextId = 1;
        this.components = new Array();
        this.notifications = [];
        this.components.push({
          componentId: this.getNextId(),
          Id: 1
        });
        this.components.push({
          componentId: this.getNextId(),
          Id: 1
        });
        this.components.push({
          componentId: this.getNextId(),
          Id: 2
        });
      }

      _createClass(CustomerContianerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.notificationService.notifications.subscribe(function (res) {
            _this.notifications.push(res);
          });
        }
      }, {
        key: "add",
        value: function add() {
          this.components.push({
            componentId: this.getNextId(),
            Id: this.getRandomCustomerNumber()
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.notifications = [];
        }
      }, {
        key: "remove",
        value: function remove(componentId) {
          var index = this.components.findIndex(function (c) {
            return c.componentId === componentId;
          });

          if (index > -1) {
            this.components.splice(index, 1);
          }
        }
      }, {
        key: "getNextId",
        value: function getNextId() {
          var result = this.nextId;
          this.nextId++;
          return result;
        }
      }, {
        key: "getRandomCustomerNumber",
        value: function getRandomCustomerNumber() {
          return Math.floor(Math.random() * 3) + 1;
        }
      }]);

      return CustomerContianerComponent;
    }();

    CustomerContianerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
      }];
    };

    CustomerContianerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-contianer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-contianer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-contianer/customer-contianer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-contianer.component.css */
      "./src/app/components/customer-contianer/customer-contianer.component.css")).default]
    })], CustomerContianerComponent);
    /***/
  },

  /***/
  "./src/app/components/customer-contianer/customer/customer.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/customer-contianer/customer/customer.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerContianerCustomerCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGlhbmVyL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/customer-contianer/customer/customer.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/customer-contianer/customer/customer.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CustomerComponent */

  /***/
  function srcAppComponentsCustomerContianerCustomerCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
      return CustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/customer.service */
    "./src/app/services/customer.service.ts");

    var CustomerComponent =
    /*#__PURE__*/
    function () {
      function CustomerComponent(fb, customerService) {
        _classCallCheck(this, CustomerComponent);

        this.fb = fb;
        this.customerService = customerService;
        this.removeComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customerForm = this.fb.group({
          id: [''],
          name: [''],
          lastRefreshed: ['']
        });
      }

      _createClass(CustomerComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.refreshCustomer();
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer() {
          this.customerService.updateCustomer({
            id: this.customerForm.controls.id.value,
            name: this.customerForm.controls.name.value,
            lastRefreshed: this.customerForm.controls.lastRefreshed.value
          }).subscribe();
        }
      }, {
        key: "refreshCustomer",
        value: function refreshCustomer() {
          var _this2 = this;

          this.customerService.getCustomer(this.customerId).subscribe(function (customer) {
            _this2.customerForm.controls.id.setValue(customer.id);

            _this2.customerForm.controls.name.setValue(customer.name);

            _this2.customerForm.controls.lastRefreshed.setValue(customer.lastRefreshed);
          }); // this.customerService.getCustomer(this.customerId, true).subscribe();
        }
      }, {
        key: "remove",
        value: function remove() {
          this.removeComponent.emit(this.componentId);
        }
      }]);

      return CustomerComponent;
    }();

    CustomerComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CustomerComponent.prototype, "componentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CustomerComponent.prototype, "customerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CustomerComponent.prototype, "removeComponent", void 0);
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-contianer/customer/customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer.component.css */
      "./src/app/components/customer-contianer/customer/customer.component.css")).default]
    })], CustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/notifications/notifications.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/notifications/notifications.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");

    var NotificationsComponent =
    /*#__PURE__*/
    function () {
      function NotificationsComponent(notificationService) {
        _classCallCheck(this, NotificationsComponent);

        this.notificationService = notificationService;
        this.notifications = [];
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.notificationService.notifications.subscribe(function (res) {
            _this3.notifications.push(res);
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.notifications = [];
        }
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
      }];
    };

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.css */
      "./src/app/components/notifications/notifications.component.css")).default]
    })], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/components/random-numbers-container/random-numbers-container.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/random-numbers-container/random-numbers-container.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRandomNumbersContainerRandomNumbersContainerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFuZG9tLW51bWJlcnMtY29udGFpbmVyL3JhbmRvbS1udW1iZXJzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/random-numbers-container/random-numbers-container.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/random-numbers-container/random-numbers-container.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: RandomNumbersContainerComponent */

  /***/
  function srcAppComponentsRandomNumbersContainerRandomNumbersContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomNumbersContainerComponent", function () {
      return RandomNumbersContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");

    var RandomNumbersContainerComponent =
    /*#__PURE__*/
    function () {
      function RandomNumbersContainerComponent(notificationService) {
        _classCallCheck(this, RandomNumbersContainerComponent);

        this.notificationService = notificationService;
        this.nextId = 1;
        this.components = new Array();
        this.notifications = [];
        this.components.push({
          componentId: this.getNextId()
        });
        this.components.push({
          componentId: this.getNextId()
        });
        this.components.push({
          componentId: this.getNextId()
        });
      }

      _createClass(RandomNumbersContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.notificationService.notifications.subscribe(function (res) {
            _this4.notifications.push(res);
          });
        }
      }, {
        key: "add",
        value: function add() {
          this.components.push({
            componentId: this.getNextId()
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.notifications = [];
        }
      }, {
        key: "remove",
        value: function remove(componentId) {
          var index = this.components.findIndex(function (c) {
            return c.componentId === componentId;
          });

          if (index > -1) {
            this.components.splice(index, 1);
          }
        }
      }, {
        key: "getNextId",
        value: function getNextId() {
          var result = this.nextId;
          this.nextId++;
          return result;
        }
      }]);

      return RandomNumbersContainerComponent;
    }();

    RandomNumbersContainerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
      }];
    };

    RandomNumbersContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-random-numbers-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./random-numbers-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/random-numbers-container/random-numbers-container.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./random-numbers-container.component.css */
      "./src/app/components/random-numbers-container/random-numbers-container.component.css")).default]
    })], RandomNumbersContainerComponent);
    /***/
  },

  /***/
  "./src/app/components/random-numbers-container/random-numbers/random-numbers.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/random-numbers-container/random-numbers/random-numbers.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRandomNumbersContainerRandomNumbersRandomNumbersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFuZG9tLW51bWJlcnMtY29udGFpbmVyL3JhbmRvbS1udW1iZXJzL3JhbmRvbS1udW1iZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/random-numbers-container/random-numbers/random-numbers.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/random-numbers-container/random-numbers/random-numbers.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: RandomNumbersComponent */

  /***/
  function srcAppComponentsRandomNumbersContainerRandomNumbersRandomNumbersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomNumbersComponent", function () {
      return RandomNumbersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RandomNumbersComponent =
    /*#__PURE__*/
    function () {
      function RandomNumbersComponent() {
        _classCallCheck(this, RandomNumbersComponent);

        this.removeComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RandomNumbersComponent, [{
        key: "remove",
        value: function remove() {
          this.removeComponent.emit(this.componentId);
        }
      }]);

      return RandomNumbersComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RandomNumbersComponent.prototype, "componentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RandomNumbersComponent.prototype, "removeComponent", void 0);
    RandomNumbersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-random-numbers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./random-numbers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/random-numbers-container/random-numbers/random-numbers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./random-numbers.component.css */
      "./src/app/components/random-numbers-container/random-numbers/random-numbers.component.css")).default]
    })], RandomNumbersComponent);
    /***/
  },

  /***/
  "./src/app/directives/label-control.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/directives/label-control.directive.ts ***!
    \*******************************************************/

  /*! exports provided: LabelControlDirective */

  /***/
  function srcAppDirectivesLabelControlDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelControlDirective", function () {
      return LabelControlDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LabelControlDirective =
    /*#__PURE__*/
    function () {
      function LabelControlDirective(parent) {
        _classCallCheck(this, LabelControlDirective);

        this.parent = parent;
      }

      _createClass(LabelControlDirective, [{
        key: "controlValue",
        get: function get() {
          return this.parent ? this.parent.control.get(this.controlName).value : '';
        }
      }]);

      return LabelControlDirective;
    }();

    LabelControlDirective.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LabelControlDirective.prototype, "controlName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('textContent')], LabelControlDirective.prototype, "controlValue", null);
    LabelControlDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'label[controlName]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], LabelControlDirective);
    /***/
  },

  /***/
  "./src/app/interceptors/notification-interceptor.ts":
  /*!**********************************************************!*\
    !*** ./src/app/interceptors/notification-interceptor.ts ***!
    \**********************************************************/

  /*! exports provided: NotificationInterceptor */

  /***/
  function srcAppInterceptorsNotificationInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationInterceptor", function () {
      return NotificationInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");

    var NotificationInterceptor =
    /*#__PURE__*/
    function () {
      function NotificationInterceptor(notificationService) {
        _classCallCheck(this, NotificationInterceptor);

        this.notificationService = notificationService;
      }

      _createClass(NotificationInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this5 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            return _this5.notificationService.notify("".concat(req.method, ": ").concat(req.url));
          }));
        }
      }]);

      return NotificationInterceptor;
    }();

    NotificationInterceptor.ctorParameters = function () {
      return [{
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }];
    };

    NotificationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NotificationInterceptor);
    /***/
  },

  /***/
  "./src/app/services/base.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/base.service.ts ***!
    \******************************************/

  /*! exports provided: CacheOptions, BaseService */

  /***/
  function srcAppServicesBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CacheOptions", function () {
      return CacheOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseService", function () {
      return BaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CacheOptions = function CacheOptions(cacheOptions) {
      _classCallCheck(this, CacheOptions);

      this.key = cacheOptions.key;
      this.id = cacheOptions.id;
      this.refresh = cacheOptions.refresh;
      this.lifespan = cacheOptions.lifespan;
      this.autoRefresh = cacheOptions.autoRefresh;
    };

    var CacheEntry =
    /*#__PURE__*/
    function (_CacheOptions) {
      _inherits(CacheEntry, _CacheOptions);

      function CacheEntry(cacheEntry) {
        var _this6;

        _classCallCheck(this, CacheEntry);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(CacheEntry).call(this, cacheEntry));
        _this6.item = cacheEntry.item;
        _this6.obs = cacheEntry.obs;
        _this6.timeAdded = cacheEntry.timeAdded;
        return _this6;
      }

      _createClass(CacheEntry, [{
        key: "hasExpired",
        get: function get() {
          if (this.lifespan == null) {
            return false;
          }

          var now = new Date();
          var elapsed = (now.getTime() - this.timeAdded.getTime()) / 1000;
          return elapsed >= this.lifespan;
        }
      }]);

      return CacheEntry;
    }(CacheOptions);

    var BaseService =
    /*#__PURE__*/
    function () {
      function BaseService() {
        var _this7 = this;

        _classCallCheck(this, BaseService);

        this.cache = [];
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        this.timer.subscribe(function (res) {
          return _this7.autoRefreshCache();
        });
      }

      _createClass(BaseService, [{
        key: "autoRefreshCache",
        value: function autoRefreshCache() {
          this.cache.filter(function (c) {
            return c.autoRefresh === true && c.hasExpired;
          }).forEach(function (ci) {
            ci.obs.subscribe(function (x) {
              ci.timeAdded = new Date();
              ci.item.next(x);
            }, function (x) {
              return ci.item.error(x);
            });
          });
        } // Sets the value of a ReplaySubject in the cache

      }, {
        key: "updateCachedValue",
        value: function updateCachedValue(value, obs, key, id) {
          var options = new CacheOptions({
            key: key,
            id: id
          });
          var entry = this.getFromCache(options);

          if (entry == null) {
            entry = this.addToCache(new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1), obs, options);
          }

          var replay = entry.item;
          replay.next(value);
        }
      }, {
        key: "cacheable",
        value: function cacheable(obs, options) {
          var entry = this.getFromCache(options);
          var replay = null;
          var subscribeRequired = false;

          if (entry != null) {
            replay = entry.item;
          } else {
            replay = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
            entry = this.addToCache(replay, obs, options);
            subscribeRequired = true;
          }

          if (subscribeRequired || options.refresh || entry.hasExpired) {
            obs.subscribe(function (x) {
              entry.timeAdded = new Date();
              replay.next(x);
            }, function (x) {
              return replay.error(x);
            });
          }

          return replay.asObservable();
        }
      }, {
        key: "addToCache",
        value: function addToCache(replay, obs, options) {
          if (this.getFromCache(options)) {
            throw new Error("Cannot add to cache. An item already exists with key: ".concat(options.key, "; id: ").concat(options.id));
          } // The new cached entry we are going to add


          var entry = new CacheEntry({
            item: replay,
            obs: obs,
            timeAdded: new Date(),
            key: options.key,
            id: options.id,
            lifespan: options.lifespan,
            autoRefresh: options.autoRefresh
          });
          this.cache.push(entry);
          return entry;
        } // Returns an item from the cache. This is recursive as a cache item could itself be an array of
        // cache items.

      }, {
        key: "getFromCache",
        value: function getFromCache(options) {
          var result = this.cache.find(function (c) {
            return c.key === options.key && c.id === options.id;
          });
          return result;
        }
      }]);

      return BaseService;
    }();
    /***/

  },

  /***/
  "./src/app/services/customer.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/customer.service.ts ***!
    \**********************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppServicesCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/services/base.service.ts");

    var CustomerService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(CustomerService, _base_service__WEBPAC);

      function CustomerService(http) {
        var _this8;

        _classCallCheck(this, CustomerService);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerService).call(this));
        _this8.http = http;
        _this8.baseUrl = 'http://localhost:3000/customer/';
        return _this8;
      }
      /**
       * 1. Standard service: No state
       */
      // public getCustomer(
      //   customerId: number,
      // ): Observable<ICustomer> {
      //   const params = new HttpParams().set('customerId', customerId.toString());
      //   return this.http.get<ICustomer>(this.baseUrl, { params });
      // }
      // public updateCustomer(customer: ICustomer): Observable<ICustomer> {
      //   return this.http.post<ICustomer>(this.baseUrl, customer);
      // }

      /**
       * 2. Stateful service: Replay subjects
       */


      _createClass(CustomerService, [{
        key: "getCustomer",
        value: function getCustomer(customerId) {
          var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('customerId', customerId.toString());
          return this.cacheable(this.http.get(this.baseUrl, {
            params: params
          }), new _base_service__WEBPACK_IMPORTED_MODULE_4__["CacheOptions"]({
            key: 'customers',
            id: customerId
          }));
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(customer) {
          var _this9 = this;

          var obs = this.http.post(this.baseUrl, customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this9.updateCachedValue(res, obs, 'customers', customer.id);
          }));
          return obs;
        }
      }]);

      return CustomerService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]);

    CustomerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomerService);
    /***/
  },

  /***/
  "./src/app/services/notification.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NotificationService =
    /*#__PURE__*/
    function () {
      function NotificationService() {
        _classCallCheck(this, NotificationService);

        this.notifications = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(NotificationService, [{
        key: "notify",
        value: function notify(value) {
          this.notifications.next(value);
        }
      }]);

      return NotificationService;
    }();

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/nemirstephan/Projects/stateful-service/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map