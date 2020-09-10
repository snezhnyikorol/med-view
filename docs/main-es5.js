function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/components/login/login.component */
    "./src/app/core/components/login/login.component.ts");
    /* harmony import */


    var _core_test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/test/test.component */
    "./src/app/core/test/test.component.ts");
    /* harmony import */


    var _core_components_authorized_container_authorized_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/components/authorized-container/authorized-container.component */
    "./src/app/core/components/authorized-container/authorized-container.component.ts");
    /* harmony import */


    var _core_components_patients_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/components/patients/patients.component */
    "./src/app/core/components/patients/patients.component.ts");
    /* harmony import */


    var _core_components_employees_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/components/employees/employees.component */
    "./src/app/core/components/employees/employees.component.ts");
    /* harmony import */


    var _core_components_patient_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/components/patient/patient.component */
    "./src/app/core/components/patient/patient.component.ts");
    /* harmony import */


    var _core_components_stock_stock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/components/stock/stock.component */
    "./src/app/core/components/stock/stock.component.ts");
    /* harmony import */


    var _core_components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core/components/employee/employee.component */
    "./src/app/core/components/employee/employee.component.ts");
    /* harmony import */


    var _core_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./core/calendar/calendar.component */
    "./src/app/core/calendar/calendar.component.ts");

    var routes = [{
      path: 'login',
      component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'test',
      component: _core_test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]
    }, {
      path: 'app',
      // canActivate: [AuthGuard],
      component: _core_components_authorized_container_authorized_container_component__WEBPACK_IMPORTED_MODULE_4__["AuthorizedContainerComponent"],
      children: [{
        path: 'calendar',
        component: _core_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"]
      }, {
        path: 'patients',
        component: _core_components_patients_patients_component__WEBPACK_IMPORTED_MODULE_5__["PatientsComponent"]
      }, {
        path: 'employees',
        component: _core_components_employees_employees_component__WEBPACK_IMPORTED_MODULE_6__["EmployeesComponent"]
      }, {
        path: 'patient/:id',
        component: _core_components_patient_patient_component__WEBPACK_IMPORTED_MODULE_7__["PatientComponent"]
      }, {
        path: 'employee/:id',
        component: _core_components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"]
      }, {
        path: 'stock',
        component: _core_components_stock_stock_component__WEBPACK_IMPORTED_MODULE_8__["StockComponent"]
      }]
    }, {
      path: '',
      redirectTo: 'app/stock',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'login'
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_forms_user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @models/forms/user-profile */
    "./src/app/core/models/forms/user-profile.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'med-view';
      this.controls = _models_forms_user_profile__WEBPACK_IMPORTED_MODULE_1__["userProfileMetadata"];
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
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
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
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-permissions */
    "./node_modules/ngx-permissions/__ivy_ngcc__/fesm2015/ngx-permissions.js");
    /* harmony import */


    var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/components/components.module */
    "./src/app/shared/components/components.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsModule"].forRoot(), _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsModule"].forRoot(), _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/auth/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/auth/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppCoreAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_forms_user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/forms/user-profile */
    "./src/app/core/models/forms/user-profile.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-permissions */
    "./node_modules/ngx-permissions/__ivy_ngcc__/fesm2015/ngx-permissions.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router, permissionsService) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.permissionsService = permissionsService;
        this.cachedRequests = [];
        this.permissions = [];
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(credentials) {
          var _this = this;

          console.log('cred:', credentials);
          this.http.post('/dev/sign-in', credentials).subscribe(function (res) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('expires', res.data.expires.toString());

            _this.http.get('/dev/me').subscribe(function (resp) {
              localStorage.setItem('user', JSON.stringify(resp.data));

              _this.currentUserSubject.next(resp.data);

              _this.permissions = [resp.data.role];

              _this.permissionsService.loadPermissions(_this.permissions);

              _this.router.navigate(['/app/user/add', {
                controls: JSON.stringify(_models_forms_user_profile__WEBPACK_IMPORTED_MODULE_1__["userProfileMetadata"])
              }]);
            });
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          localStorage.removeItem('expires');
          localStorage.removeItem('user');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "tokenExpired",
        value: function tokenExpired() {
          var expires = localStorage.getItem('expires');
          return Math.floor(new Date().getTime() / 1000) >= Number(expires);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = this.getToken();
          return token != null && !this.tokenExpired();
        }
        /*public refreshToken() {
          return this.http.post<any>(`${config.apiUrl}/refresh`, {
            'refreshToken': this.getRefreshToken()
          }).pipe(tap((tokens: Tokens) => {
            this.storeJwtToken(tokens.jwt);
          }));
        }*/

      }, {
        key: "collectFailedRequests",
        value: function collectFailedRequests(request) {
          this.cachedRequests.push(request);
        }
      }, {
        key: "retryFailedRequests",
        value: function retryFailedRequests() {// retry the requests. this method can
          // be called after the token is refreshed
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/auth/token.interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/core/auth/token.interceptor.ts ***!
    \************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppCoreAuthTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/core/auth/auth.service.ts");

    var TokenInterceptor =
    /*#__PURE__*/
    function () {
      function TokenInterceptor(auth) {
        _classCallCheck(this, TokenInterceptor);

        this.auth = auth;
      }
      /**
       * При перехвате запроса надо проверять существует ли токен, если существует, то
       * добавить его в заголовки и отправить как клонированный, иначе отправить исходный
       * запрос без изменений (будет ошибка если запросить токен а localstorage пуст)
       */


      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var token = this.auth.getToken();

          if (token) {
            var cloned = request.clone({
              setHeaders: {
                Authentication: this.auth.getToken()
              }
            });
            return next.handle(cloned);
          } else {
            return next.handle(request);
          }
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/calendar/calendar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/calendar/calendar.component.ts ***!
    \*****************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppCoreCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fullcalendar/angular */
    "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");

    var CalendarComponent =
    /*#__PURE__*/
    function () {
      function CalendarComponent() {
        _classCallCheck(this, CalendarComponent);

        this.calendarOptions = {
          initialView: 'dayGridWeek',
          themeSystem: 'bootstrap',
          headerToolbar: {
            start: '',
            center: 'title',
            end: 'dayGridMonth,dayGridWeek today prev,next'
          }
        };
      }

      _createClass(CalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)();
    };

    CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["app-calendar"]],
      decls: 3,
      vars: 1,
      consts: [[1, "content-wrapper"], [1, "card"], [3, "options"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "full-calendar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.calendarOptions);
        }
      },
      directives: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_1__["FullCalendarComponent"]],
      styles: [".card[_ngcontent-%COMP%] {\n  background: var(--white);\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jYWxlbmRhci9DOlxcVXNlcnNcXHJha2V0XFxXZWJzdG9ybVByb2plY3RzXFxtZWQtdmlldy9zcmNcXGFwcFxcY29yZVxcY2FsZW5kYXJcXGNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSw0Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbn1cclxuIiwiLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calendar',
          templateUrl: './calendar.component.html',
          styleUrls: ['./calendar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/admin-dashboard/admin-dashboard.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/core/components/admin-dashboard/admin-dashboard.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppCoreComponentsAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminDashboardComponent =
    /*#__PURE__*/
    function () {
      function AdminDashboardComponent() {
        _classCallCheck(this, AdminDashboardComponent);
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)();
    };

    AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      decls: 2,
      vars: 0,
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-dashboard works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-dashboard',
          templateUrl: './admin-dashboard.component.html',
          styleUrls: ['./admin-dashboard.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/authorized-container/authorized-container.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/core/components/authorized-container/authorized-container.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AuthorizedContainerComponent */

  /***/
  function srcAppCoreComponentsAuthorizedContainerAuthorizedContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizedContainerComponent", function () {
      return AuthorizedContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthorizedContainerComponent =
    /*#__PURE__*/
    function () {
      function AuthorizedContainerComponent() {
        _classCallCheck(this, AuthorizedContainerComponent);
      }

      _createClass(AuthorizedContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthorizedContainerComponent;
    }();

    AuthorizedContainerComponent.ɵfac = function AuthorizedContainerComponent_Factory(t) {
      return new (t || AuthorizedContainerComponent)();
    };

    AuthorizedContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthorizedContainerComponent,
      selectors: [["app-authorized-container"]],
      decls: 4,
      vars: 0,
      consts: [[1, "page"]],
      template: function AuthorizedContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  background-color: #F5F6F8;\n  display: flex;\n  font-size: 14px;\n}\n\napp-sidebar[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\napp-header[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2F1dGhvcml6ZWQtY29udGFpbmVyL0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxhdXRob3JpemVkLWNvbnRhaW5lclxcYXV0aG9yaXplZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hdXRob3JpemVkLWNvbnRhaW5lci9hdXRob3JpemVkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hdXRob3JpemVkLWNvbnRhaW5lci9hdXRob3JpemVkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNkY4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy9jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmFwcC1zaWRlYmFyIHtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuYXBwLWhlYWRlciB7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNkY4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmFwcC1zaWRlYmFyIHtcbiAgei1pbmRleDogMjA7XG59XG5cbmFwcC1oZWFkZXIge1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizedContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-authorized-container',
          templateUrl: './authorized-container.component.html',
          styleUrls: ['./authorized-container.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/employee/employee.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/components/employee/employee.component.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeComponent */

  /***/
  function srcAppCoreComponentsEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fullcalendar/angular */
    "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");

    function EmployeeComponent_ng_template_64_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 22/07/2020\u0433. 15:35 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 13 \u043A\u0430\u0431. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name Surname ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeComponent_ng_template_64_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 22/07/2020\u0433. 15:35 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 13 \u043A\u0430\u0431. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name Surname ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeComponent_ng_template_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "44");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0417\u0430\u043F\u0438\u0441\u0438 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EmployeeComponent_ng_template_64_div_21_Template, 10, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0412\u0447\u0435\u0440\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EmployeeComponent_ng_template_64_div_25_Template, 10, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "General Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041F\u043E\u043B\u043D\u043E\u0435 \u0418\u043C\u044F:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u041F\u043E\u043B:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0421\u0435\u043C\u0435\u0439\u043D\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B: ????");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u041A\u0443\u0440\u0447\u0438\u043A \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Passport Data:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u041F\u0440\u043E\u043F\u0438\u0441\u043A\u0430:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u0433. \u041C\u0438\u043D\u0441\u043A, \u043F\u0440-\u0442 \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0438\u0439, 54");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0433. \u041C\u0438\u043D\u0441\u043A, \u043F\u0440-\u0442 \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0438\u0439, 54");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u041D\u043E\u043C\u0435\u0440:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u041C\u0421 2397798");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u0418\u043D\u0434. \u041D\u043E\u043C\u0435\u0440:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "3040697\u0412008\u0420\u04120");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u0412\u044B\u0434\u0430\u043D:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u041C\u0438\u043D\u043A\u0438\u043C \u0420\u0423\u0412\u0414 \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0439\u043E\u043D\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.count1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.count2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.user.lastName + " " + ctx_r39.user.firstName + " " + ctx_r39.user.middleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.user.birthday);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.user.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.user.maritalStatus);
      }
    }

    function EmployeeComponent_ng_template_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "full-calendar", 57);
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r40.calendarOptions);
      }
    }

    var EmployeeComponent =
    /*#__PURE__*/
    function () {
      function EmployeeComponent(route) {
        _classCallCheck(this, EmployeeComponent);

        this.route = route;
        this.active = 'details';
        this.calendarOptions = {
          initialView: 'dayGridWeek',
          themeSystem: 'bootstrap',
          headerToolbar: {
            start: '',
            center: 'title',
            end: 'dayGridMonth,dayGridWeek today prev,next'
          }
        };
        this.count1 = Array(2);
        this.count2 = Array(3);
      }

      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          this.user = {
            id: 1,
            photo: '//style.anu.edu.au/_anu/4/images/placeholders/person.png',
            firstName: 'Name',
            middleName: 'Middle Name?',
            lastName: 'Surname',
            birthday: '00-00-0000',
            gender: 'Male',
            tags: [],
            maritalStatus: 'Single',
            contact: {
              phone: ['11111'],
              email: ['test@email.com'],
              messengerList: [],
              mobile: [{
                isMainPhone: true,
                phone: '',
                note: ''
              }]
            },
            address: {
              registration: {
                houseNumber: '',
                apartmentNumber: '',
                locality: '',
                country: '',
                postIndex: '',
                region: '',
                street: ''
              },
              actual: {
                houseNumber: '',
                apartmentNumber: '',
                locality: '',
                country: '',
                postIndex: '',
                region: '',
                street: ''
              }
            }
          };
        }
      }]);

      return EmployeeComponent;
    }();

    EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) {
      return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeComponent,
      selectors: [["app-employee"]],
      decls: 70,
      vars: 10,
      consts: [[1, "content-wrapper"], [1, "content", "profile-content"], [1, "profile__sidebar"], [1, "profile__sidebar-header"], [1, "profile__avatar-wrapper"], ["alt", "", 1, "profile__avatar", 3, "src"], [1, "profile__name"], [1, "profile__location"], [1, "profile__sidebar-body"], [1, "profile__label"], [1, "profile__info"], [1, "profile__info-item"], ["data-feather", "globe"], ["href", ""], ["data-feather", "github"], ["data-feather", "twitter"], ["data-feather", "instagram"], ["data-feather", "facebook"], [1, "profile__sidebar-footer"], ["data-feather", "briefcase"], ["data-feather", "home"], ["data-feather", "smartphone"], ["data-feather", "phone"], ["data-feather", "mail"], [1, "profile__body"], ["ngbNav", "", "orientation", "horizontal", 1, "px-4", "profile__nav", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [1, "mt-1", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "stat"], [1, "stat__col"], [1, "stat__card"], [1, "stat__count"], [1, "stat__title"], [1, "page__body", "d-flex", "mt-5"], [1, "records__body", "mr-5"], [1, "details__title"], [1, "records__list", "d-flex", "flex-column"], [1, "records__separator"], ["class", "record__container", 4, "ngFor", "ngForOf"], [1, "details__body"], [1, "details__body-container", "row"], [1, "details__section", "col"], [1, "details__section-title"], [1, "details__item"], [1, "details__label"], [1, "details__text"], ["href", "#", 1, "details__text", "details__link"], [1, "record__container"], ["src", "//style.anu.edu.au/_anu/4/images/placeholders/person.png", "alt", ""], [1, "record__info"], [1, "record__title"], [1, "record__date"], [1, "record__room"], [1, "record__name"], [3, "options"]],
      template: function EmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0410\u0434\u0440\u0435\u0441? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0421\u0421\u042B\u041B\u041A\u0418: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "http://resume.kurchik/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "@kurchik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "@kurchik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "@kurchik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "@kurchik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u041D\u0410\u042F \u0418\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0418\u042F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041C\u0438\u043D\u0441\u043A, \u0413\u0443\u0440\u0441\u043A\u043E\u0433\u043E 44/2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u041C\u0438\u043D\u0441\u043A, \u0416\u0443\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E 10/2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "+375 (29) 133 80 75");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "+375 (29) xxx xx xx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "kurchik.sasha@mail.ru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function EmployeeComponent_Template_ul_activeIdChange_59_listener($event) {
            return ctx.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, EmployeeComponent_ng_template_64_Template, 91, 6, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, EmployeeComponent_ng_template_68_Template, 1, 1, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.firstName + " " + ctx.user.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-4", ctx.active != "calendar")("content-calendar", ctx.active == "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r38);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__["FullCalendarComponent"]],
      styles: [".profile-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.profile__sidebar[_ngcontent-%COMP%] {\n  min-width: 250px;\n  background: var(--white);\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n  border-radius: 4px;\n}\n\n.profile__body[_ngcontent-%COMP%] {\n  background: var(--white);\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n  border-radius: 4px;\n  flex-grow: 1;\n  margin-left: 15px;\n  height: 100%;\n}\n\n.profile__sidebar-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\n.profile__sidebar-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.profile__sidebar-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid #EBEFF2;\n}\n\n.profile__avatar[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 104px;\n  border-radius: 100%;\n}\n\n.profile__name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  color: var(--black);\n  margin-top: 15px;\n}\n\n.profile__position[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--gray);\n  margin-top: 7px;\n}\n\n.profile__location[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 16px;\n  color: var(--gray);\n  opacity: 0.7;\n  margin-top: 7px;\n}\n\n.profile__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 16px;\n  margin-bottom: 10px;\n  color: var(--gray);\n}\n\n.profile__info[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.profile__info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n}\n\n.profile__info-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: var(--dark-blue);\n  margin-right: 10px;\n}\n\n.profile__info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--dark-blue);\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.profile__info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--dark-blue);\n  font-size: 14px;\n}\n\n.profile__sidebar-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.profile__subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-bottom: 15px;\n  margin-top: 30px;\n}\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 -5px;\n}\n\n.stat__col[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  flex-grow: 1;\n}\n\n.stat__card[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);\n}\n\n.stat__count[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.profile__patient-list[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.profile__patient[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  border-top: 1px solid #EBEFF2;\n  display: flex;\n}\n\n.profile__patient-img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.profile__patient-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n}\n\n.profile__patient-text[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.profile__patient-text[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 5px;\n  color: var(--table-gray);\n}\n\n.profile__patient-text[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n\n\n\n\n\n\n.details__section[_ngcontent-%COMP%] {\n  min-width: 300px;\n  max-width: 400px;\n}\n\n.details__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 30px;\n  line-height: 45px;\n  color: var(--gray);\n}\n\n.details__section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: var(--accent-blue);\n  margin-bottom: 5px;\n}\n\n.details__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 2px 0;\n}\n\n.details__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4C5862;\n  opacity: 0.5;\n  width: 125px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  min-width: 125px;\n  max-width: 125px;\n}\n\n.details__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4C5862;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  max-width: 250px;\n}\n\n.details__link[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n  padding-right: 25px;\n  position: relative;\n  text-decoration: none;\n}\n\n.details__link[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.modal__container[_ngcontent-%COMP%] {\n  position: fixed;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  z-index: 1000;\n}\n\n.modal__backdrop[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #000000;\n  opacity: 0.3;\n  z-index: 0;\n}\n\n.modal__window[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  margin: 100px auto;\n  width: 700px;\n  background: var(--white);\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n  border-radius: 4px;\n}\n\n.modal__header[_ngcontent-%COMP%] {\n  padding: 20px 20px 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal__body[_ngcontent-%COMP%] {\n  \n}\n\n.modal__close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.accordion__header[_ngcontent-%COMP%] {\n  display: flex;\n  \n  align-items: center;\n  cursor: pointer;\n}\n\n.accordion__icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-bottom: -5px;\n  transition: all 200ms;\n}\n\n.accordion__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.accordion__container[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  display: none;\n}\n\n.tile[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: calc(100% - 60px);\n  padding: 35px;\n}\n\n.profile__nav[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    + .nav-item[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  display: block;\n  padding: 20px 0;\n  color: var(--dark-blue);\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--black);\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  background-color: var(--accent-blue);\n  height: 1px;\n}\n\n\n\n.report[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 4px;\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.report-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  color: var(--dark-blue);\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n\n.report__header-text[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n\n.report__body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--table-gray);\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.report__body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n\n.report__body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n\n.report__user[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.report__avatar[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  border-radius: 100%;\n}\n\n.report__name[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  font-weight: 500;\n  font-size: 15px;\n  color: var(--table-black);\n}\n\n.records__body[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.records__separator[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.records__separator[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.record__container[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px 0;\n  border-top: 1px solid #EBEFF2;\n}\n\n.record__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  border-radius: 100%;\n  margin-right: 15px;\n}\n\n.record__container[_ngcontent-%COMP%]   .record__info[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.record__container[_ngcontent-%COMP%]   .record__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.record__container[_ngcontent-%COMP%]   .record__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--black);\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2VtcGxveWVlL0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxlbXBsb3llZVxcZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSw0Q0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHVCQUFBO0tBQUEsb0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBLGFBQUE7O0FBQ0EscUJBQUE7O0FBQ0EsSUFBQTs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QUQ0QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDekJGOztBRDRCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDekJGOztBRDRCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN6QkY7O0FENEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDekJGOztBRDRCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDekJGOztBRDRCQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDekJGOztBRDRCQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUMxQkY7O0FEMkxBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3hMRjs7QUQyTEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDeExGOztBRDJMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQ3hMRjs7QUQyTEE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDeExGOztBRDJMQTtFQUNFLDJCQUFBO0FDeExGOztBRDJMQTtFQUNFLGVBQUE7QUN4TEY7O0FEMkxBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDeExGOztBRDJMQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ3hMRjs7QUQyTEE7RUFDRSxZQUFBO0FDeExGOztBRDJMQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtBQ3hMRjs7QUQyTEE7RUFDRSxlQUFBO0FDeExGOztBRDJMQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDeExGOztBRDJMQTtFQUNFLGdDQUFBO0FDeExGOztBRDBMRTtFQUNFLGlCQUFBO0FDeExKOztBRDJMRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDekxKOztBRDRMRTtFQUNFLG1CQUFBO0FDMUxKOztBRDZMRTtFQUNFLHlCQUFBO0FDM0xKOztBRDhMRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQzVMSjs7QURpTUEsZUFBQTs7QUFFQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUMvTEY7O0FEa01BO0VBQ0UsZ0JBQUE7RUFDQSw0Q0FBQTtBQy9MRjs7QURrTUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQy9MRjs7QURrTUE7RUFDRSxrQkFBQTtBQy9MRjs7QURrTUE7RUFDRSxZQUFBO0FDL0xGOztBRGtNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUMvTEY7O0FEa01BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUMvTEY7O0FEa01BO0VBQ0UsbUJBQUE7QUMvTEY7O0FEa01BO0VBQ0UsZUFBQTtBQy9MRjs7QURrTUE7RUFDRSwwQ0FBQTtBQy9MRjs7QURrTUE7RUFDRSxrQkFBQTtBQy9MRjs7QURrTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDL0xGOztBRGtNQTtFQUNFLGFBQUE7QUMvTEY7O0FEa01BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQy9MRjs7QURrTUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDL0xGOztBRGtNQTtFQUNFLGdCQUFBO0FDL0xGOztBRGtNQTtFQUNFLHlCQUFBO0FDL0xGOztBRGlNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQy9MSjs7QURtTUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDaE1GOztBRGtNRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDaE1KOztBRG1NRTtFQUNFLFlBQUE7QUNqTUo7O0FEb01FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbE1KOztBRHFNRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDbk1KIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXIge1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX2JvZHkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXItaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXItYm9keSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXItZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFRkYyO1xyXG59XHJcblxyXG4ucHJvZmlsZV9fYXZhdGFyIHtcclxuICB3aWR0aDogMTA0cHg7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZV9fbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9fcG9zaXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9fbG9jYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX2xhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbn1cclxuXHJcblxyXG5cclxuLnByb2ZpbGVfX2luZm8ge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9maWxlX19pbmZvLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4ucHJvZmlsZV9faW5mby1pdGVtIHN2ZyB7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX2luZm8taXRlbSBhIHtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9faW5mby1pdGVtIHNwYW4ge1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXItaGVhZGVyIC5idG4ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX19zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc3RhdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgLTVweDtcclxufVxyXG5cclxuLnN0YXRfX2NvbCB7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uc3RhdF9fY2FyZCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxufVxyXG5cclxuLnN0YXRfX2NvdW50IHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX19wYXRpZW50LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9maWxlX19wYXRpZW50IHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVGRjI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3BhdGllbnQtaW1nIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX19wYXRpZW50LWltZyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xyXG59XHJcblxyXG4ucHJvZmlsZV9fcGF0aWVudC10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3BhdGllbnQtdGV4dCAudGltZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtZ3JheSk7XHJcbn1cclxuXHJcbi5wcm9maWxlX19wYXRpZW50LXRleHQgLm5vdGUge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi8qI2RldGFpbHMgeyovXHJcbi8qICAgIHBhZGRpbmc6IDIwcHg7Ki9cclxuLyp9Ki9cclxuXHJcbi5kZXRhaWxzX19ib2R5IHtcclxuICAvL21hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzX19ib2R5LWNvbnRhaW5lciB7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gIC8vZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZGV0YWlsc19fc2VjdGlvbiB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4vLy5kZXRhaWxzX19zZWN0aW9uIHtcclxuLy8gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbi8vfVxyXG4vL1xyXG4vLy5kZXRhaWxzX19zZWN0aW9uOm50aC1jaGlsZChvZGQpIHtcclxuLy8gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbi8vICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUJFRkYyO1xyXG4vLyAgbWluLXdpZHRoOiAzMjFweDtcclxuLy99XHJcbi8vXHJcbi8vLmRldGFpbHNfX3NlY3Rpb246bnRoLWNoaWxkKGV2ZW4pIHtcclxuLy8gIHBhZGRpbmctbGVmdDogMzBweDtcclxuLy99XHJcblxyXG4uZGV0YWlsc19fdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxufVxyXG5cclxuLmRldGFpbHNfX3NlY3Rpb24tdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzX19pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHBhZGRpbmc6IDJweCAwO1xyXG59XHJcblxyXG4uZGV0YWlsc19fbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzRDNTg2MjtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgbWluLXdpZHRoOiAxMjVweDtcclxuICBtYXgtd2lkdGg6IDEyNXB4O1xyXG59XHJcblxyXG4uZGV0YWlsc19fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjNEM1ODYyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmRldGFpbHNfX2xpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZGV0YWlsc19fbGluazphZnRlciB7XHJcbiAgLy9jb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbnMvY2hhaW4uc3ZnXCIpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLy9cclxuLy8ucmVjb3Jkc19faGVhZGVyIHtcclxuLy8gIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy99XHJcbi8vXHJcbi8vLnJlY29yZHNfX3NlYXJjaCB7XHJcbi8vICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgcGFkZGluZzogMTJweCAxOHB4O1xyXG4vLyAgYmFja2dyb3VuZDogI0Y1RjhGQTtcclxuLy8gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gIHdpZHRoOiA0NSU7XHJcbi8vICBtaW4td2lkdGg6IDIwMHB4O1xyXG4vL31cclxuLy9cclxuLy8ucmVjb3Jkc19fc2VhcmNoLWlucHV0IHtcclxuLy8gIHBhZGRpbmctbGVmdDogMTVweDtcclxuLy8gIGJvcmRlcjogbm9uZTtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMCk7XHJcbi8vfVxyXG4vL1xyXG4vLy5yZWNvcmRzX19zZWFyY2gtaW5wdXQ6Zm9jdXMge1xyXG4vLyAgb3V0bGluZTogbm9uZTtcclxuLy99XHJcbi8vXHJcbi8vLnJlY29yZHNfX3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4vLyAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4vL31cclxuLy9cclxuLy8ucmVjb3Jkc19fdmlldyB7XHJcbi8vICBjb2xvcjogI0MyQ0ZFMDtcclxuLy99XHJcbi8vXHJcbi8vLnRpbGVzIC5yZWNvcmRzX192aWV3IHtcclxuLy8gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XHJcbi8vfVxyXG4vL1xyXG4vLy5yZWNvcmRzX19jb250YWluZXIgLnJlcG9ydC13cmFwcGVyIHtcclxuLy8gIGRpc3BsYXk6IGJsb2NrO1xyXG4vL31cclxuLy9cclxuLy8ucmVjb3Jkc19fY29udGFpbmVyLnRpbGVzIC5yZXBvcnQtd3JhcHBlciB7XHJcbi8vICBkaXNwbGF5OiBub25lO1xyXG4vL31cclxuLy9cclxuLy8ucmVjb3Jkc19fY29udGFpbmVyIC50aWxlcy13cmFwcGVyIHtcclxuLy8gIGRpc3BsYXk6IG5vbmU7XHJcbi8vfVxyXG4vL1xyXG4vLy5yZWNvcmRzX19jb250YWluZXIudGlsZXMgLnRpbGVzLXdyYXBwZXIge1xyXG4vLyAgZGlzcGxheTogYmxvY2s7XHJcbi8vfVxyXG4vL1xyXG4vLy5yZWNvcmRzX19ib2R5IHtcclxuLy8gIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vfVxyXG4vL1xyXG4vLy50aWxlIHtcclxuLy8gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuLy8gIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4vLyAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgbWFyZ2luOiAyMHB4IDA7XHJcbi8vICBwYWRkaW5nOiAxNnB4O1xyXG4vL31cclxuLy9cclxuLy8udGlsZV9faGVhZGVyIHtcclxuLy8gIGRpc3BsYXk6IGZsZXg7XHJcbi8vICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vfVxyXG4vL1xyXG4vLy50aWxlX190aXRsZSB7XHJcbi8vICBmb250LXNpemU6IDE1cHg7XHJcbi8vICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4vLyAgY29sb3I6IHZhcigtLXRhYmxlLWJsYWNrKTtcclxuLy99XHJcbi8vXHJcbi8vLnRpbGVfX2NhbGwge1xyXG4vLyAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuLy8gIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuLy99XHJcbi8vXHJcbi8vLnRpbGVfX2JvZHkge1xyXG4vLyAgZGlzcGxheTogZmxleDtcclxuLy8gIG1hcmdpbi10b3A6IDVweDtcclxuLy99XHJcbi8vXHJcbi8vLnRpbGVfX2xhYmVsIHtcclxuLy8gIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbi8vICBjb2xvcjogIzRDNTg2MjtcclxuLy8gIG9wYWNpdHk6IDAuNTtcclxuLy8gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4vL31cclxuLy9cclxuLy8udGlsZV9fdGV4dCB7XHJcbi8vICBmb250LXNpemU6IDEzcHg7XHJcbi8vICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4vLyAgY29sb3I6ICM0QzU4NjI7XHJcbi8vfVxyXG4vL1xyXG4vLy50aWxlX19mb290ZXIge1xyXG4vLyAgZGlzcGxheTogZmxleDtcclxuLy8gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gIG1hcmdpbi10b3A6IDE3cHg7XHJcbi8vfVxyXG4vL1xyXG4vLy50aWxlX191c2VyIHtcclxuLy8gIGRpc3BsYXk6IGZsZXg7XHJcbi8vICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vL31cclxuLy9cclxuLy8udGlsZV9faW1nLXdyYXBwZXIge1xyXG4vLyAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgd2lkdGg6IDI1cHg7XHJcbi8vICBoZWlnaHQ6IDI1cHg7XHJcbi8vfVxyXG4vL1xyXG4vLy50aWxlX19pbWctd3JhcHBlciBpbWcge1xyXG4vLyAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuLy8gIHdpZHRoOiAxMDAlO1xyXG4vL31cclxuLy9cclxuLy8udGlsZV9fbmFtZSB7XHJcbi8vICBmb250LXNpemU6IDEzcHg7XHJcbi8vICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuLy8gIGNvbG9yOiB2YXIoLS10YWJsZS1ncmF5KTtcclxuLy99XHJcbi8vXHJcbi8vLnRpbGVfX2FjdGlvbnMge1xyXG4vLyAgZGlzcGxheTogZmxleDtcclxuLy8gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vfVxyXG4vL1xyXG4vLy50aWxlX19lZGl0LCAudGlsZV9fZGVsZXRlIHtcclxuLy8gIGhlaWdodDogMTVweDtcclxuLy8gIGNvbG9yOiAjQzJDRkUwO1xyXG4vL31cclxuLy9cclxuLy8udGlsZV9fZWRpdCBzdmcsIC50aWxlX19kZWxldGUgc3ZnIHtcclxuLy8gIGhlaWdodDogMTAwJTtcclxuLy99XHJcbi8vXHJcbi8vLnRpbGVfX3N0YXR1cyB7XHJcbi8vICBiYWNrZ3JvdW5kOiAjRjdDQjVCO1xyXG4vLyAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4vLyAgcGFkZGluZzogNXB4IDA7XHJcbi8vICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICB3aWR0aDogODRweDtcclxuLy8gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vL31cclxuXHJcbi5tb2RhbF9fY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5tb2RhbF9fYmFja2Ryb3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLm1vZGFsX193aW5kb3cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5tb2RhbF9faGVhZGVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWxfX2JvZHkge1xyXG4gIC8qcGFkZGluZzogMTBweCAyMHB4IDIwcHg7Ki9cclxufVxyXG5cclxuLm1vZGFsX19jbG9zZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uX19oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjY29yZGlvbl9faWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbn1cclxuXHJcbi5hY2NvcmRpb25fX2ljb24gc3ZnIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb25fX2NvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRpbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIHBhZGRpbmc6IDM1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX19uYXYge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xyXG5cclxuICAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rLmFjdGl2ZTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qLS0tUkVQT1JULS0tKi9cclxuXHJcbi5yZXBvcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnJlcG9ydC13cmFwcGVyIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG59XHJcblxyXG4ucmVwb3J0X19oZWFkZXIgdGgge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIHBhZGRpbmc6IDE0cHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xyXG59XHJcblxyXG4ucmVwb3J0X19oZWFkZXIgdGg6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyLXRleHQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyIHRoOmxhc3QtY2hpbGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2JvZHkgdGQge1xyXG4gIHBhZGRpbmc6IDIwcHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ncmF5KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcclxufVxyXG5cclxuLnJlcG9ydF9fYm9keSB0cjpsYXN0LWNoaWxkIHRkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ucmVwb3J0X19ib2R5IHRyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2JvZHkgdHI6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnJlcG9ydF9fYm9keSB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4ucmVwb3J0X19ib2R5IHRkOmxhc3QtY2hpbGQgIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ucmVwb3J0X191c2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucmVwb3J0X19hdmF0YXIge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4ucmVwb3J0X19uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xyXG59XHJcblxyXG4ucmVjb3Jkc19fYm9keSB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnJlY29yZHNfX3NlcGFyYXRvciB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbi5yZWNvcmRfX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVGRjI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnJlY29yZF9faW5mbyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG5cclxuICAucmVjb3JkX190aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLnJlY29yZF9fbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbn1cclxuIiwiLnByb2ZpbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9maWxlX19zaWRlYmFyIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucHJvZmlsZV9fYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvZmlsZV9fc2lkZWJhci1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5wcm9maWxlX19zaWRlYmFyLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHJvZmlsZV9fc2lkZWJhci1mb290ZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VCRUZGMjtcbn1cblxuLnByb2ZpbGVfX2F2YXRhciB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLnByb2ZpbGVfX25hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wcm9maWxlX19wb3NpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ucHJvZmlsZV9fbG9jYXRpb24ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ucHJvZmlsZV9fbGFiZWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG59XG5cbi5wcm9maWxlX19pbmZvIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnByb2ZpbGVfX2luZm8taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5wcm9maWxlX19pbmZvLWl0ZW0gc3ZnIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnByb2ZpbGVfX2luZm8taXRlbSBhIHtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJvZmlsZV9faW5mby1pdGVtIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJvZmlsZV9fc2lkZWJhci1oZWFkZXIgLmJ0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wcm9maWxlX19zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuXG4uc3RhdF9fY29sIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnN0YXRfX2NhcmQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLnN0YXRfX2NvdW50IHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ucHJvZmlsZV9fcGF0aWVudC1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnByb2ZpbGVfX3BhdGllbnQge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFRkYyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvZmlsZV9fcGF0aWVudC1pbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ucHJvZmlsZV9fcGF0aWVudC1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xufVxuXG4ucHJvZmlsZV9fcGF0aWVudC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5wcm9maWxlX19wYXRpZW50LXRleHQgLnRpbWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IHZhcigtLXRhYmxlLWdyYXkpO1xufVxuXG4ucHJvZmlsZV9fcGF0aWVudC10ZXh0IC5ub3RlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLyojZGV0YWlscyB7Ki9cbi8qICAgIHBhZGRpbmc6IDIwcHg7Ki9cbi8qfSovXG4uZGV0YWlsc19fc2VjdGlvbiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5kZXRhaWxzX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbn1cblxuLmRldGFpbHNfX3NlY3Rpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5kZXRhaWxzX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuXG4uZGV0YWlsc19fbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNEM1ODYyO1xuICBvcGFjaXR5OiAwLjU7XG4gIHdpZHRoOiAxMjVweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIG1pbi13aWR0aDogMTI1cHg7XG4gIG1heC13aWR0aDogMTI1cHg7XG59XG5cbi5kZXRhaWxzX190ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzRDNTg2MjtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi5kZXRhaWxzX19saW5rIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kZXRhaWxzX19saW5rOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubW9kYWxfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLm1vZGFsX19iYWNrZHJvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjM7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5tb2RhbF9fd2luZG93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICB3aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm1vZGFsX19oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWxfX2JvZHkge1xuICAvKnBhZGRpbmc6IDEwcHggMjBweCAyMHB4OyovXG59XG5cbi5tb2RhbF9fY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY2NvcmRpb25fX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjY29yZGlvbl9faWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG59XG5cbi5hY2NvcmRpb25fX2ljb24gc3ZnIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYWNjb3JkaW9uX19jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRpbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4ucHJvZmlsZV9fbmF2IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XG59XG4ucHJvZmlsZV9fbmF2IC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuLnByb2ZpbGVfX25hdiAubmF2LWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG4ucHJvZmlsZV9fbmF2IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG4ucHJvZmlsZV9fbmF2IC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xufVxuLnByb2ZpbGVfX25hdiAubmF2LWxpbmsuYWN0aXZlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XG4gIGhlaWdodDogMXB4O1xufVxuXG4vKi0tLVJFUE9SVC0tLSovXG4ucmVwb3J0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4ucmVwb3J0LXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLnJlcG9ydF9faGVhZGVyIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgcGFkZGluZzogMTRweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcbn1cblxuLnJlcG9ydF9faGVhZGVyIHRoOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4ucmVwb3J0X19oZWFkZXItdGV4dCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnJlcG9ydF9faGVhZGVyIHRoOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuLnJlcG9ydF9fYm9keSB0ZCB7XG4gIHBhZGRpbmc6IDIwcHggMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGFibGUtZ3JheSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xufVxuXG4ucmVwb3J0X19ib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ucmVwb3J0X19ib2R5IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVwb3J0X19ib2R5IHRyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ucmVwb3J0X19ib2R5IHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4ucmVwb3J0X19ib2R5IHRkOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuLnJlcG9ydF9fdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yZXBvcnRfX2F2YXRhciB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5yZXBvcnRfX25hbWUge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xufVxuXG4ucmVjb3Jkc19fYm9keSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5yZWNvcmRzX19zZXBhcmF0b3Ige1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xufVxuLnJlY29yZHNfX3NlcGFyYXRvciBoMyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlY29yZF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VCRUZGMjtcbn1cbi5yZWNvcmRfX2NvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5yZWNvcmRfX2NvbnRhaW5lciAucmVjb3JkX19pbmZvIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnJlY29yZF9fY29udGFpbmVyIC5yZWNvcmRfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5yZWNvcmRfX2NvbnRhaW5lciAucmVjb3JkX19uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee',
          templateUrl: './employee.component.html',
          styleUrls: ['./employee.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/employees/add-employee/add-employee.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/core/components/employees/add-employee/add-employee.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AddEmployeeComponent */

  /***/
  function srcAppCoreComponentsEmployeesAddEmployeeAddEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function () {
      return AddEmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_forms_add_employee_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @models/forms/add-employee-form */
    "./src/app/core/models/forms/add-employee-form.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_form_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/form-control.service */
    "./src/app/core/services/form-control.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_controls_control_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/components/controls/control/control.component */
    "./src/app/shared/components/controls/control/control.component.ts");

    function AddEmployeeComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.formModel.groups["generalInfo"].title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r13.formModel.groups["generalInfo"].controls["firstName"])("form", ctx_r13.form.controls[ctx_r13.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r13.formModel.groups["generalInfo"].controls["lastName"])("form", ctx_r13.form.controls[ctx_r13.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r13.formModel.groups["generalInfo"].controls["middleName"])("form", ctx_r13.form.controls[ctx_r13.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r13.formModel.groups["generalInfo"].controls["birthday"])("form", ctx_r13.form.controls[ctx_r13.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r13.formModel.groups["generalInfo"].controls["gender"])("form", ctx_r13.form.controls[ctx_r13.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r13.formModel.groups["generalInfo"].controls["maritalStatus"])("form", ctx_r13.form.controls[ctx_r13.formModel.groups["generalInfo"].name]);
      }
    }

    function AddEmployeeComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.formModel.groups["jobData"].title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r14.formModel.groups["jobData"].controls["position"])("form", ctx_r14.form.controls[ctx_r14.formModel.groups["jobData"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r14.formModel.groups["jobData"].controls["academicDegree"])("form", ctx_r14.form.controls[ctx_r14.formModel.groups["jobData"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r14.formModel.groups["jobData"].controls["category"])("form", ctx_r14.form.controls[ctx_r14.formModel.groups["jobData"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r14.formModel.groups["jobData"].controls["degree"])("form", ctx_r14.form.controls[ctx_r14.formModel.groups["jobData"].name]);
      }
    }

    function AddEmployeeComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.formModel.groups["contactInfo"].title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r15.formModel.groups["contactInfo"].controls["country"])("form", ctx_r15.form.controls[ctx_r15.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r15.formModel.groups["contactInfo"].controls["city"])("form", ctx_r15.form.controls[ctx_r15.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r15.formModel.groups["contactInfo"].controls["address"])("form", ctx_r15.form.controls[ctx_r15.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r15.formModel.groups["contactInfo"].controls["addPhone"])("form", ctx_r15.form.controls[ctx_r15.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r15.formModel.groups["contactInfo"].controls["skype"])("form", ctx_r15.form.controls[ctx_r15.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r15.formModel.groups["contactInfo"].controls["passportData"])("form", ctx_r15.form.controls[ctx_r15.formModel.groups["contactInfo"].name]);
      }
    }

    function AddEmployeeComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.formModel.groups["photo"].title, " ");
      }
    }

    function AddEmployeeComponent_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.formModel.groups["userPermissions"].title, " ");
      }
    }

    var AddEmployeeComponent =
    /*#__PURE__*/
    function () {
      function AddEmployeeComponent(activeModal, fcs) {
        _classCallCheck(this, AddEmployeeComponent);

        this.activeModal = activeModal;
        this.fcs = fcs;
        this.active = 'top';
      }

      _createClass(AddEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formModel = _models_forms_add_employee_form__WEBPACK_IMPORTED_MODULE_1__["addEmployeeFormMetadata"];
          this.form = this.fcs.toMainFormObj(this.formModel);
          console.log(this.form);
          this.active = _models_forms_add_employee_form__WEBPACK_IMPORTED_MODULE_1__["addEmployeeFormMetadata"].groups['generalInfo'].name;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var res = this.form.getRawValue();
          console.log(res); // res.role = 'client';
          // this.payload = JSON.stringify(res);
          // console.log(this.payload);
          // this.http.addUser(res).subscribe(resp => console.log(resp));
        }
      }]);

      return AddEmployeeComponent;
    }();

    AddEmployeeComponent.ɵfac = function AddEmployeeComponent_Factory(t) {
      return new (t || AddEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_control_service__WEBPACK_IMPORTED_MODULE_3__["FormControlService"]));
    };

    AddEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddEmployeeComponent,
      selectors: [["app-add-employee"]],
      inputs: {
        name: "name"
      },
      decls: 35,
      vars: 18,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "d-flex"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 2, "min-width", "200px", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [1, "mt-1", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", "", 3, "formGroupName"], [1, "ml-4", 3, "ngbNavOutlet"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "row"], [1, "col-6", "mt-3", 3, "control", "form"]],
      template: function AddEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddEmployeeComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function AddEmployeeComponent_Template_ul_activeIdChange_9_listener($event) {
            return ctx.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddEmployeeComponent_ng_template_14_Template, 8, 13, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddEmployeeComponent_ng_template_18_Template, 6, 9, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddEmployeeComponent_ng_template_22_Template, 8, 13, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddEmployeeComponent_ng_template_26_Template, 2, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddEmployeeComponent_ng_template_30_Template, 2, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_button_click_33_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["generalInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["generalInfo"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["generalInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["jobData"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["jobData"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["jobData"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["contactInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["contactInfo"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["contactInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["photo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["photo"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["photo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["userPermissions"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["userPermissions"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["userPermissions"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r12);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _shared_components_controls_control_control_component__WEBPACK_IMPORTED_MODULE_5__["ControlComponent"]],
      styles: [".nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--table-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2VtcGxveWVlcy9hZGQtZW1wbG95ZWUvQzpcXFVzZXJzXFxyYWtldFxcV2Vic3Rvcm1Qcm9qZWN0c1xcbWVkLXZpZXcvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGVtcGxveWVlc1xcYWRkLWVtcGxveWVlXFxhZGQtZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9lbXBsb3llZXMvYWRkLWVtcGxveWVlL2FkZC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9lbXBsb3llZXMvYWRkLWVtcGxveWVlL2FkZC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ibGFjayk7XHJcbn1cclxuIiwiLm5hdi1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-employee',
          templateUrl: './add-employee.component.html',
          styleUrls: ['./add-employee.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _services_form_control_service__WEBPACK_IMPORTED_MODULE_3__["FormControlService"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/components/employees/employee-row/employee-row.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/core/components/employees/employee-row/employee-row.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: EmployeeRowComponent */

  /***/
  function srcAppCoreComponentsEmployeesEmployeeRowEmployeeRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRowComponent", function () {
      return EmployeeRowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["app-employee-row", ""];

    var EmployeeRowComponent =
    /*#__PURE__*/
    function () {
      function EmployeeRowComponent() {
        _classCallCheck(this, EmployeeRowComponent);
      }

      _createClass(EmployeeRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log(this.http.getUsers());
        }
      }, {
        key: "getFullName",
        value: function getFullName(firstName, middleName, lastName) {
          var fullName = firstName;

          if (middleName) {
            fullName += ' ';
            fullName += middleName;
          }

          fullName += ' ';
          fullName += lastName;
          return fullName;
        }
      }]);

      return EmployeeRowComponent;
    }();

    EmployeeRowComponent.ɵfac = function EmployeeRowComponent_Factory(t) {
      return new (t || EmployeeRowComponent)();
    };

    EmployeeRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeRowComponent,
      selectors: [["", "app-employee-row", ""]],
      inputs: {
        user: "user"
      },
      attrs: _c0,
      decls: 17,
      vars: 8,
      consts: [[1, "custom-checkbox"], ["type", "checkbox", 1, "custom-checkbox__input", 3, "id"], [1, "custom-checkbox__label", 3, "for"], [1, "report__user"], ["alt", "", 1, "report__avatar", 3, "src"], [1, "report__name", 3, "routerLink"]],
      template: function EmployeeRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5 Minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "../employee/" + ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getFullName(ctx.user.firstName, ctx.user.middleName, ctx.user.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.contact.email[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.contact.phone[0]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".report__user[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.report__avatar[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  border-radius: 100%;\n}\n\n.report__name[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  font-weight: 500;\n  font-size: 15px;\n  color: var(--table-black);\n  text-decoration: none;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--table-gray);\n  border-bottom: 1px solid #EBEFF2;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2VtcGxveWVlcy9lbXBsb3llZS1yb3cvQzpcXFVzZXJzXFxyYWtldFxcV2Vic3Rvcm1Qcm9qZWN0c1xcbWVkLXZpZXcvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGVtcGxveWVlc1xcZW1wbG95ZWUtcm93XFxlbXBsb3llZS1yb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9lbXBsb3llZXMvZW1wbG95ZWUtcm93L2VtcGxveWVlLXJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlLXJvdy9lbXBsb3llZS1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0X191c2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucmVwb3J0X19hdmF0YXIge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4ucmVwb3J0X19uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxudGQge1xyXG4gIHBhZGRpbmc6IDIwcHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ncmF5KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcclxufVxyXG5cclxudGQ6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxufVxyXG5cclxudGQ6bGFzdC1jaGlsZCAge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbn1cclxuIiwiLnJlcG9ydF9fdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yZXBvcnRfX2F2YXRhciB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5yZXBvcnRfX25hbWUge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMjBweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ncmF5KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XG59XG5cbnRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG50ZDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: '[app-employee-row]',
          templateUrl: './employee-row.component.html',
          styleUrls: ['./employee-row.component.scss']
        }]
      }], function () {
        return [];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/components/employees/employees.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/components/employees/employees.component.ts ***!
    \******************************************************************/

  /*! exports provided: EmployeesComponent */

  /***/
  function srcAppCoreComponentsEmployeesEmployeesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function () {
      return EmployeesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./add-employee/add-employee.component */
    "./src/app/core/components/employees/add-employee/add-employee.component.ts");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _employee_row_employee_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./employee-row/employee-row.component */
    "./src/app/core/components/employees/employee-row/employee-row.component.ts");

    function EmployeesComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
      }

      if (rf & 2) {
        var user_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r19);
      }
    }

    var EmployeesComponent =
    /*#__PURE__*/
    function () {
      function EmployeesComponent(http, modalService) {
        _classCallCheck(this, EmployeesComponent);

        this.http = http;
        this.modalService = modalService;
        this.users = Array(0); // Must be defined as Input parameter or fetched on init

        this.closeResult = '';
      }

      _createClass(EmployeesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = {
            id: 1,
            photo: '//style.anu.edu.au/_anu/4/images/placeholders/person.png',
            firstName: 'Name',
            middleName: '',
            lastName: 'Surname',
            birthday: '',
            gender: 'Male',
            tags: [],
            maritalStatus: 'Single',
            contact: {
              phone: ['11111'],
              email: ['test@email.com'],
              messengerList: [],
              mobile: [{
                isMainPhone: true,
                phone: '',
                note: ''
              }]
            },
            address: {
              registration: {
                houseNumber: '',
                apartmentNumber: '',
                locality: '',
                country: '',
                postIndex: '',
                region: '',
                street: ''
              },
              actual: {
                houseNumber: '',
                apartmentNumber: '',
                locality: '',
                country: '',
                postIndex: '',
                region: '',
                street: ''
              }
            }
          };

          for (var i = 0; i < 15; i++) {
            this.users.push(user);
            this.users[i].id = i;
          } // this.http.getUsers().subscribe((res) => console.log(res));

        }
      }, {
        key: "open",
        value: function open() {
          var modalRef = this.modalService.open(_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_1__["AddEmployeeComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.name = 'World';
        }
      }]);

      return EmployeesComponent;
    }();

    EmployeesComponent.ɵfac = function EmployeesComponent_Factory(t) {
      return new (t || EmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]));
    };

    EmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeesComponent,
      selectors: [["app-employees"]],
      decls: 29,
      vars: 1,
      consts: [[1, "content-wrapper"], [1, "d-flex", "justify-content-end", "mb-3"], [1, "btn", "btn-primary", "px-5", "py-2", 3, "click"], [1, "report-wrapper"], [1, "report"], [1, "report__header"], [1, "custom-checkbox"], ["type", "checkbox", "id", "0", 1, "custom-checkbox__input"], ["for", "0", 1, "custom-checkbox__label"], [1, "report__header-text"], [1, "report__body"], ["app-employee-row", "", 3, "user", 4, "ngFor", "ngForOf"], ["app-employee-row", "", 3, "user"]],
      template: function EmployeesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesComponent_Template_button_click_2_listener() {
            return ctx.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Recent activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EmployeesComponent_tr_28_Template, 1, 1, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _employee_row_employee_row_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeRowComponent"]],
      styles: [".report[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 4px;\n  width: 100%;\n  border-collapse: collapse;\n}\n.report-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n}\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  color: var(--dark-blue);\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid #EBEFF2;\n}\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n.report__header-text[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: calc(100%);\n  padding: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2VtcGxveWVlcy9DOlxcVXNlcnNcXHJha2V0XFxXZWJzdG9ybVByb2plY3RzXFxtZWQtdmlldy9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcZW1wbG95ZWVzXFxlbXBsb3llZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFFQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSw0Q0FBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREdBO0VBQ0UsbUJBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtBQ0FGO0FER0E7RUFDRSwwQ0FBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLVJFUE9SVC0tLSovXHJcblxyXG4ucmVwb3J0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5yZXBvcnQtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyIHRoIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICBwYWRkaW5nOiAxNHB4IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyIHRoOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2hlYWRlci10ZXh0IHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2hlYWRlciB0aDpsYXN0LWNoaWxkIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ucmVwb3J0X19ib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2JvZHkgdHIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJlcG9ydF9fYm9keSB0cjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC8vaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSk7XHJcbiAgcGFkZGluZzogMzVweDtcclxufVxyXG4iLCIvKi0tLVJFUE9SVC0tLSovXG4ucmVwb3J0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4ucmVwb3J0LXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLnJlcG9ydF9faGVhZGVyIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgcGFkZGluZzogMTRweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcbn1cblxuLnJlcG9ydF9faGVhZGVyIHRoOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4ucmVwb3J0X19oZWFkZXItdGV4dCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnJlcG9ydF9faGVhZGVyIHRoOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuLnJlcG9ydF9fYm9keSB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnJlcG9ydF9fYm9keSB0ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlcG9ydF9fYm9keSB0cjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDAlKTtcbiAgcGFkZGluZzogMzVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employees',
          templateUrl: './employees.component.html',
          styleUrls: ['./employees.component.scss']
        }]
      }], function () {
        return [{
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/login/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/components/login/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppCoreComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @models/controls/control-input-model */
    "./src/app/core/models/controls/control-input-model.ts");
    /* harmony import */


    var _services_form_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/form-control.service */
    "./src/app/core/services/form-control.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/core/auth/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_controls_control_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/controls/control/control.component */
    "./src/app/shared/components/controls/control/control.component.ts");

    function LoginComponent_app_control_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-control", 10);
      }

      if (rf & 2) {
        var control_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", control_r1)("form", ctx_r0.form);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fcs, auth) {
        _classCallCheck(this, LoginComponent);

        this.fcs = fcs;
        this.auth = auth;
        this.controls = [new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_1__["ControlInputModel"]({
          key: 'username',
          required: true,
          placeholder: 'email/phone'
        }), new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_1__["ControlInputModel"]({
          key: 'password',
          required: true,
          type: 'password',
          placeholder: 'password'
        })];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fcs.toFormGroup(this.controls);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // this.http.auth(this.form.getRawValue()).subscribe((data: any) => {
          //   console.log(data);
          //   localStorage.setItem('token', data.data.token);
          //   localStorage.setItem('expires', data.data.expires);
          //   // this.router.navigate(['user/add', {controls: JSON.stringify(userProfileMetadata)}]);
          //   // this.http.getUsers(1).subscribe(data => console.log(data));
          // }, err => console.log(err));
          this.auth.login(this.form.getRawValue());
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_control_service__WEBPACK_IMPORTED_MODULE_2__["FormControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 14,
      vars: 3,
      consts: [[1, "login__body"], [1, "login__header"], [1, "login__header-title"], [1, "login__main"], [1, "title"], [1, "form", 3, "formGroup", "ngSubmit"], [3, "control", "form", 4, "ngFor", "ngForOf"], ["href", "", 1, "forgot-link"], ["src", "./assets/icons/sidebar/toggle.svg", "alt", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "control", "form"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dental CRM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Login Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_app_control_8_Template, 1, 2, "app-control", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Forgot password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_components_controls_control_control_component__WEBPACK_IMPORTED_MODULE_6__["ControlComponent"]],
      styles: [".login__header[_ngcontent-%COMP%] {\n  height: 60px;\n  background-color: var(--white);\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.login__header-title[_ngcontent-%COMP%] {\n  font-family: Open Sans, serif;\n  font-weight: 600;\n  font-size: 24px;\n  color: var(--accent-blue);\n  margin: 15px 0 0 24px;\n}\n.login__main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n}\n.login__header[_ngcontent-%COMP%] {\n  height: 60px;\n  background-color: var(--white);\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.login__header-title[_ngcontent-%COMP%] {\n  font-family: Open Sans, serif;\n  font-weight: 600;\n  font-size: 24px;\n  color: var(--accent-blue);\n  margin: 15px 0 0 24px;\n}\n.login__main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 48px;\n  margin-bottom: 63px;\n}\n.form[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid #F0F0F0;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 400px;\n  padding: 10px 52px 33px;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  color: var(--gray);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 36px 0;\n}\n.forgot-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 14px;\n}\n.form[_ngcontent-%COMP%]   app-control[_ngcontent-%COMP%] {\n  margin-top: 42px;\n}\n.form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.login__body[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #F5F6F8;\n  display: flex;\n  color: var(--dark-blue);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ2luL0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBR0U7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0RKO0FERUk7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNBTjtBREdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDREo7QURRQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDTEY7QURVQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ1BGO0FEVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNQRjtBRFVBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNQRjtBRFVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEVUE7RUFDRSxrQkFBQTtBQ1BGO0FEVUE7RUFDRSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLUxPR0lOLS0tKi9cclxuXHJcbi5sb2dpbiB7XHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgICYtdGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xyXG4gICAgICBtYXJnaW46IDE1cHggMCAwIDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX21haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubG9naW5fX2hlYWRlciB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ2luX19oZWFkZXItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XHJcbiAgbWFyZ2luOiAxNXB4IDAgMCAyNHB4O1xyXG59XHJcblxyXG4ubG9naW5fX21haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjNweDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNTJweCAzM3B4O1xyXG59XHJcblxyXG4uZm9yZ290LWxpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOiAzNnB4IDA7XHJcbn1cclxuXHJcbi5mb3Jnb3QtbGluayBpbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxufVxyXG5cclxuLmZvcm0gYXBwLWNvbnRyb2wge1xyXG4gIG1hcmdpbi10b3A6IDQycHg7XHJcbn1cclxuXHJcbi5mb3JtIC5idG4ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5sb2dpbl9fYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY2Rjg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIiwiLyotLS1MT0dJTi0tLSovXG4ubG9naW5fX2hlYWRlciB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ubG9naW5fX2hlYWRlci10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XG4gIG1hcmdpbjogMTVweCAwIDAgMjRweDtcbn1cbi5sb2dpbl9fbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luX19oZWFkZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ubG9naW5fX2hlYWRlci10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XG4gIG1hcmdpbjogMTVweCAwIDAgMjRweDtcbn1cblxuLmxvZ2luX19tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDYzcHg7XG59XG5cbi5mb3JtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEYwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHggNTJweCAzM3B4O1xufVxuXG4uZm9yZ290LWxpbmsge1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDM2cHggMDtcbn1cblxuLmZvcmdvdC1saW5rIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cblxuLmZvcm0gYXBwLWNvbnRyb2wge1xuICBtYXJnaW4tdG9wOiA0MnB4O1xufVxuXG4uZm9ybSAuYnRuIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubG9naW5fX2JvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY2Rjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_form_control_service__WEBPACK_IMPORTED_MODULE_2__["FormControlService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/patient/patient.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/components/patient/patient.component.ts ***!
    \**************************************************************/

  /*! exports provided: PatientComponent */

  /***/
  function srcAppCoreComponentsPatientPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientComponent", function () {
      return PatientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fullcalendar/angular */
    "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");

    function PatientComponent_ng_template_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "44");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "General Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041F\u043E\u043B\u043D\u043E\u0435 \u0418\u043C\u044F:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041F\u043E\u043B:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0421\u0435\u043C\u0435\u0439\u043D\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B: ????");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u041A\u0443\u0440\u0447\u0438\u043A \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Passport Data:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u041F\u0440\u043E\u043F\u0438\u0441\u043A\u0430:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0433. \u041C\u0438\u043D\u0441\u043A, \u043F\u0440-\u0442 \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0438\u0439, 54");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0433. \u041C\u0438\u043D\u0441\u043A, \u043F\u0440-\u0442 \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0438\u0439, 54");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u041D\u043E\u043C\u0435\u0440:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u041C\u0421 2397798");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u0418\u043D\u0434. \u041D\u043E\u043C\u0435\u0440:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "3040697\u0412008\u0420\u04120");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0412\u044B\u0434\u0430\u043D:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u041C\u0438\u043D\u043A\u0438\u043C \u0420\u0423\u0412\u0414 \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0439\u043E\u043D\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Medical data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u0425\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0410\u0441\u0442\u043C\u0430, \u0413\u0430\u0441\u0442\u0440\u0438\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u0410\u043B\u043B\u0435\u0440\u0433\u0438\u044F \u043D\u0430 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0430:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "???");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u0415\u0449\u0435 \u0447\u0442\u043E-\u0442\u043E:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "???");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.user.lastName + " " + ctx_r21.user.firstName + " " + ctx_r21.user.middleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.user.birthday);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.user.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.user.maritalStatus);
      }
    }

    function PatientComponent_ng_template_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "label", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Doctor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Payment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Diagnosis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "label", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "label", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "label", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "label", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "label", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "label", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "label", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "input", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "label", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "input", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "input", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "label", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "input", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "label", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Lindsey Stroud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "CDV04062020 - Titile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Awaiting confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Lorem ipsum dolor m.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "h3", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "DCV040620 - \u043F\u043E\u0434\u043E\u0437\u0440\u0435\u043D\u0438\u0435 \u043D\u0430 \u0444\u043B\u044E\u0437");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "December 23, 2018");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "img", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "h5", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Dr. Alexandra Kurchik");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "i", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "i", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h3", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "DCV040620 - \u043F\u043E\u0434\u043E\u0437\u0440\u0435\u043D\u0438\u0435 \u043D\u0430 \u0444\u043B\u044E\u0437");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "December 23, 2018");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "img", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h5", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Dr. Alexandra Kurchik");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "i", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "i", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "h3", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "DCV040620 - \u043F\u043E\u0434\u043E\u0437\u0440\u0435\u043D\u0438\u0435 \u043D\u0430 \u0444\u043B\u044E\u0437");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "December 23, 2018");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "img", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "h5", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Dr. Alexandra Kurchik");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "i", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "i", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientComponent_ng_template_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "full-calendar", 111);
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r23.calendarOptions);
      }
    }

    var PatientComponent =
    /*#__PURE__*/
    function () {
      function PatientComponent(route) {
        _classCallCheck(this, PatientComponent);

        this.route = route;
        this.active = 'details';
        this.calendarOptions = {
          initialView: 'dayGridWeek',
          themeSystem: 'bootstrap',
          headerToolbar: {
            start: '',
            center: 'title',
            end: 'dayGridMonth,dayGridWeek today prev,next'
          }
        };
      }

      _createClass(PatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          this.user = {
            id: 1,
            photo: '//style.anu.edu.au/_anu/4/images/placeholders/person.png',
            firstName: 'Name',
            middleName: 'Middle Name?',
            lastName: 'Surname',
            birthday: '00-00-0000',
            gender: 'Male',
            tags: [],
            maritalStatus: 'Single',
            contact: {
              phone: ['11111'],
              email: ['test@email.com'],
              messengerList: [],
              mobile: [{
                isMainPhone: true,
                phone: '',
                note: ''
              }]
            },
            address: {
              registration: {
                houseNumber: '',
                apartmentNumber: '',
                locality: '',
                country: '',
                postIndex: '',
                region: '',
                street: ''
              },
              actual: {
                houseNumber: '',
                apartmentNumber: '',
                locality: '',
                country: '',
                postIndex: '',
                region: '',
                street: ''
              }
            }
          };
        }
      }]);

      return PatientComponent;
    }();

    PatientComponent.ɵfac = function PatientComponent_Factory(t) {
      return new (t || PatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    PatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientComponent,
      selectors: [["app-patient"]],
      decls: 74,
      vars: 11,
      consts: [[1, "content-wrapper"], [1, "content", "profile-content"], [1, "profile__sidebar"], [1, "profile__sidebar-header"], [1, "profile__avatar-wrapper"], ["alt", "", 1, "profile__avatar", 3, "src"], [1, "profile__name"], [1, "profile__location"], [1, "profile__sidebar-body"], [1, "profile__label"], [1, "profile__info"], [1, "profile__info-item"], ["data-feather", "globe"], ["href", ""], ["data-feather", "github"], ["data-feather", "twitter"], ["data-feather", "instagram"], ["data-feather", "facebook"], [1, "profile__sidebar-footer"], ["data-feather", "briefcase"], ["data-feather", "home"], ["data-feather", "smartphone"], ["data-feather", "phone"], ["data-feather", "mail"], [1, "profile__body"], ["ngbNav", "", "orientation", "horizontal", 1, "px-4", "profile__nav", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [1, "mt-1", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "stat"], [1, "stat__col"], [1, "stat__card"], [1, "stat__count"], [1, "stat__title"], [1, "details__body"], [1, "details__title"], [1, "details__body-container", "row"], [1, "details__section", "col"], [1, "details__section-title"], [1, "details__item"], [1, "details__label"], [1, "details__text"], ["href", "#", 1, "details__text", "details__link"], [1, "records__container"], [1, "records__header"], [1, "records__search"], ["src", "./assets/img/header/search.svg", "alt", "", 1, "records__search-icon"], ["type", "text", "placeholder", "Search colleague", 1, "records__search-input"], [1, "records__filter"], [1, "records__view"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "stroke", "currentColor"], ["d", "M3 3.7H20C20.1634 3.7 20.3 3.8366 20.3 4V10C20.3 10.1634 20.1634 10.3 20 10.3H3C2.8366 10.3 2.7 10.1634 2.7 10V4C2.7 3.8366 2.8366 3.7 3 3.7ZM3 13.7H20C20.1634 13.7 20.3 13.8366 20.3 14V20C20.3 20.1634 20.1634 20.3 20 20.3H3C2.8366 20.3 2.7 20.1634 2.7 20V14C2.7 13.8366 2.8366 13.7 3 13.7Z", "stroke-width", "1.4"], [1, "records__body"], [1, "report-wrapper"], [1, "report"], [1, "report__header"], [1, "custom-checkbox"], ["type", "checkbox", "id", "0", 1, "custom-checkbox__input"], ["for", "0", 1, "custom-checkbox__label"], [1, "report__header-text"], [1, "report__body"], ["type", "checkbox", "id", "1", 1, "custom-checkbox__input"], ["for", "1", 1, "custom-checkbox__label"], [1, "report__user"], ["src", "./assets/img/sidebar/avatar.png", "alt", "", 1, "report__avatar"], [1, "report__name"], ["type", "checkbox", "id", "2", 1, "custom-checkbox__input"], ["for", "2", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "3", 1, "custom-checkbox__input"], ["for", "3", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "4", 1, "custom-checkbox__input"], ["for", "4", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "5", 1, "custom-checkbox__input"], ["for", "5", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "6", 1, "custom-checkbox__input"], ["for", "6", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "7", 1, "custom-checkbox__input"], ["for", "7", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "8", 1, "custom-checkbox__input"], ["for", "8", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "9", 1, "custom-checkbox__input"], ["for", "9", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "10", 1, "custom-checkbox__input"], ["for", "10", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "11", 1, "custom-checkbox__input"], ["for", "11", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "12", 1, "custom-checkbox__input"], ["for", "12", 1, "custom-checkbox__label"], ["type", "checkbox", "id", "13", 1, "custom-checkbox__input"], ["for", "13", 1, "custom-checkbox__label"], [1, "tiles-wrapper"], [1, "tile"], [1, "tile__header"], [1, "tile__title"], [1, "tile__call"], [1, "tile__body"], [1, "tile__label"], [1, "tile__text"], [1, "tile__footer"], [1, "tile__user"], [1, "tile__img-wrapper"], ["src", "./assets/img/sidebar/avatar.png", "alt", ""], [1, "tile__name"], [1, "tile__actions"], [1, "tile__edit"], ["data-feather", "edit-2"], [1, "tile__delete"], ["data-feather", "trash-2"], [1, "tile__status"], [3, "options"]],
      template: function PatientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0410\u0434\u0440\u0435\u0441? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0421\u0421\u042B\u041B\u041A\u0418: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "http://resume.kurchik/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "@kurchik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "@kurchik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "@kurchik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "@kurchik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u041D\u0410\u042F \u0418\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0418\u042F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041C\u0438\u043D\u0441\u043A, \u0413\u0443\u0440\u0441\u043A\u043E\u0433\u043E 44/2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u041C\u0438\u043D\u0441\u043A, \u0416\u0443\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E 10/2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "+375 (29) 133 80 75");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "+375 (29) xxx xx xx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "kurchik.sasha@mail.ru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function PatientComponent_Template_ul_activeIdChange_59_listener($event) {
            return ctx.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, PatientComponent_ng_template_64_Template, 96, 4, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, PatientComponent_ng_template_68_Template, 354, 0, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, PatientComponent_ng_template_72_Template, 1, 1, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.firstName + " " + ctx.user.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", "records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-4", ctx.active != "calendar")("content-calendar", ctx.active == "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r20);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__["FullCalendarComponent"]],
      styles: [".profile-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.profile__sidebar[_ngcontent-%COMP%] {\n  min-width: 250px;\n  background: var(--white);\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n  border-radius: 4px;\n}\n\n.profile__body[_ngcontent-%COMP%] {\n  background: var(--white);\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n  border-radius: 4px;\n  flex-grow: 1;\n  margin-left: 15px;\n  height: 100%;\n}\n\n.profile__sidebar-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\n.profile__sidebar-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.profile__sidebar-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid #EBEFF2;\n}\n\n.profile__avatar[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 104px;\n  border-radius: 100%;\n}\n\n.profile__name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  color: var(--black);\n  margin-top: 15px;\n}\n\n.profile__position[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--gray);\n  margin-top: 7px;\n}\n\n.profile__location[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 16px;\n  color: var(--gray);\n  opacity: 0.7;\n  margin-top: 7px;\n}\n\n.profile__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 16px;\n  margin-bottom: 10px;\n  color: var(--gray);\n}\n\n.profile__info[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.profile__info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n}\n\n.profile__info-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: var(--dark-blue);\n  margin-right: 10px;\n}\n\n.profile__info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--dark-blue);\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.profile__info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--dark-blue);\n  font-size: 14px;\n}\n\n.profile__sidebar-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.profile__subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-bottom: 15px;\n  margin-top: 30px;\n}\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 -5px;\n}\n\n.stat__col[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  flex-grow: 1;\n}\n\n.stat__card[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);\n}\n\n.stat__count[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.profile__patient-list[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.profile__patient[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  border-top: 1px solid #EBEFF2;\n  display: flex;\n}\n\n.profile__patient-img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.profile__patient-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n}\n\n.profile__patient-text[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.profile__patient-text[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 5px;\n  color: var(--table-gray);\n}\n\n.profile__patient-text[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n\n\n\n\n\n\n.details__body[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.details__section[_ngcontent-%COMP%] {\n  min-width: 300px;\n  max-width: 400px;\n}\n\n.details__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 30px;\n  line-height: 45px;\n  color: var(--gray);\n}\n\n.details__section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: var(--accent-blue);\n  margin-bottom: 5px;\n}\n\n.details__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 2px 0;\n}\n\n.details__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4C5862;\n  opacity: 0.5;\n  width: 125px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  min-width: 125px;\n  max-width: 125px;\n}\n\n.details__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4C5862;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  max-width: 250px;\n}\n\n.details__link[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n  padding-right: 25px;\n  position: relative;\n  text-decoration: none;\n}\n\n.details__link[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.records__header[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.records__search[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 12px 18px;\n  background: #F5F8FA;\n  border-radius: 4px;\n  width: 45%;\n  min-width: 200px;\n}\n\n.records__search-input[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  border: none;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.records__search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.records__search-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--gray);\n}\n\n.records__search-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: var(--gray);\n}\n\n.records__search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray);\n}\n\n.records__view[_ngcontent-%COMP%] {\n  color: #C2CFE0;\n}\n\n.tiles[_ngcontent-%COMP%]   .records__view[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.records__container[_ngcontent-%COMP%]   .report-wrapper[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.records__container.tiles[_ngcontent-%COMP%]   .report-wrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.records__container[_ngcontent-%COMP%]   .tiles-wrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.records__container.tiles[_ngcontent-%COMP%]   .tiles-wrapper[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.records__body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.tile[_ngcontent-%COMP%] {\n  background: var(--white);\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n  margin: 20px 0;\n  padding: 16px;\n}\n\n.tile__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tile__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  letter-spacing: 0.01em;\n  color: var(--table-black);\n}\n\n.tile__call[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: var(--gray);\n}\n\n.tile__body[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 5px;\n}\n\n.tile__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #4C5862;\n  opacity: 0.5;\n  margin-right: 8px;\n}\n\n.tile__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #4C5862;\n}\n\n.tile__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 17px;\n}\n\n.tile__user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.tile__img-wrapper[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 25px;\n  height: 25px;\n}\n\n.tile__img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 100%;\n}\n\n.tile__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n  color: var(--table-gray);\n}\n\n.tile__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.tile__edit[_ngcontent-%COMP%], .tile__delete[_ngcontent-%COMP%] {\n  height: 15px;\n  color: #C2CFE0;\n}\n\n.tile__edit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .tile__delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.tile__status[_ngcontent-%COMP%] {\n  background: #F7CB5B;\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 11px;\n  letter-spacing: 0.02em;\n  color: var(--white);\n  padding: 5px 0;\n  text-align: center;\n  width: 84px;\n  margin-left: 10px;\n}\n\n.modal__container[_ngcontent-%COMP%] {\n  position: fixed;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  z-index: 1000;\n}\n\n.modal__backdrop[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #000000;\n  opacity: 0.3;\n  z-index: 0;\n}\n\n.modal__window[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  margin: 100px auto;\n  width: 700px;\n  background: var(--white);\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n  border-radius: 4px;\n}\n\n.modal__header[_ngcontent-%COMP%] {\n  padding: 20px 20px 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal__body[_ngcontent-%COMP%] {\n  \n}\n\n.modal__close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.accordion__header[_ngcontent-%COMP%] {\n  display: flex;\n  \n  align-items: center;\n  cursor: pointer;\n}\n\n.accordion__icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-bottom: -5px;\n  transition: all 200ms;\n}\n\n.accordion__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.accordion__container[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  display: none;\n}\n\n.tile[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: calc(100% - 60px);\n  padding: 35px;\n}\n\n.profile__nav[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    + .nav-item[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  display: block;\n  padding: 20px 0;\n  color: var(--dark-blue);\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--black);\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.profile__nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  background-color: var(--accent-blue);\n  height: 1px;\n}\n\n\n\n.report[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 4px;\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.report-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  color: var(--dark-blue);\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n\n.report__header-text[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n\n.report__body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--table-gray);\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.report__body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n\n.report__body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n\n.report__user[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.report__avatar[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  border-radius: 100%;\n}\n\n.report__name[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  font-weight: 500;\n  font-size: 15px;\n  color: var(--table-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhdGllbnQvQzpcXFVzZXJzXFxyYWtldFxcV2Vic3Rvcm1Qcm9qZWN0c1xcbWVkLXZpZXcvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXHBhdGllbnRcXHBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYXRpZW50L3BhdGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsNENBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSx1QkFBQTtLQUFBLG9CQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQSxhQUFBOztBQUNBLHFCQUFBOztBQUNBLElBQUE7O0FBRUE7RUFDRSxnQkFBQTtBQ0ZGOztBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRHdCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7O0FEd0JBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNyQkY7O0FEd0JBO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDdEJGOztBRHlCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsYUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjs7QURxQkE7RUFDRSxrQkFBQTtBQ3RCRjs7QURxQkE7RUFDRSxrQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxjQUFBO0FDdEJGOztBRHlCQTtFQUNFLHlCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGNBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsYUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxhQUFBO0FDdEJGOztBRHlCQTtFQUNFLGNBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usd0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDdEJGOztBRHlCQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ3RCRjs7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsWUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDdEJGOztBRHlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FDdEJGOztBRHlCQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsMkJBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsZUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDdEJGOztBRHlCQTtFQUNFLFlBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0FDdEJGOztBRHlCQTtFQUNFLGVBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsZ0NBQUE7QUN0QkY7O0FEd0JFO0VBQ0UsaUJBQUE7QUN0Qko7O0FEeUJFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsbUJBQUE7QUN4Qko7O0FEMkJFO0VBQ0UseUJBQUE7QUN6Qko7O0FENEJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FDMUJKOztBRCtCQSxlQUFBOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQzdCRjs7QURnQ0E7RUFDRSxnQkFBQTtFQUNBLDRDQUFBO0FDN0JGOztBRGdDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDN0JGOztBRGdDQTtFQUNFLGtCQUFBO0FDN0JGOztBRGdDQTtFQUNFLFlBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQzdCRjs7QURnQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtBQzdCRjs7QURnQ0E7RUFDRSxtQkFBQTtBQzdCRjs7QURnQ0E7RUFDRSxlQUFBO0FDN0JGOztBRGdDQTtFQUNFLDBDQUFBO0FDN0JGOztBRGdDQTtFQUNFLGtCQUFBO0FDN0JGOztBRGdDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UsYUFBQTtBQzdCRjs7QURnQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDN0JGOztBRGdDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM3QkYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXIge1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX2JvZHkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXItaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXItYm9keSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXItZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFRkYyO1xyXG59XHJcblxyXG4ucHJvZmlsZV9fYXZhdGFyIHtcclxuICB3aWR0aDogMTA0cHg7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZV9fbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9fcG9zaXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9fbG9jYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX2xhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbn1cclxuXHJcblxyXG5cclxuLnByb2ZpbGVfX2luZm8ge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9maWxlX19pbmZvLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4ucHJvZmlsZV9faW5mby1pdGVtIHN2ZyB7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX2luZm8taXRlbSBhIHtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9faW5mby1pdGVtIHNwYW4ge1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3NpZGViYXItaGVhZGVyIC5idG4ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX19zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc3RhdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgLTVweDtcclxufVxyXG5cclxuLnN0YXRfX2NvbCB7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uc3RhdF9fY2FyZCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxufVxyXG5cclxuLnN0YXRfX2NvdW50IHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX19wYXRpZW50LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9maWxlX19wYXRpZW50IHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVGRjI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3BhdGllbnQtaW1nIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX19wYXRpZW50LWltZyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xyXG59XHJcblxyXG4ucHJvZmlsZV9fcGF0aWVudC10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfX3BhdGllbnQtdGV4dCAudGltZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtZ3JheSk7XHJcbn1cclxuXHJcbi5wcm9maWxlX19wYXRpZW50LXRleHQgLm5vdGUge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi8qI2RldGFpbHMgeyovXHJcbi8qICAgIHBhZGRpbmc6IDIwcHg7Ki9cclxuLyp9Ki9cclxuXHJcbi5kZXRhaWxzX19ib2R5IHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uZGV0YWlsc19fYm9keS1jb250YWluZXIge1xyXG4gIC8vZGlzcGxheTogZmxleDtcclxuICAvL2ZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmRldGFpbHNfX3NlY3Rpb24ge1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLy8uZGV0YWlsc19fc2VjdGlvbiB7XHJcbi8vICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4vL31cclxuLy9cclxuLy8uZGV0YWlsc19fc2VjdGlvbjpudGgtY2hpbGQob2RkKSB7XHJcbi8vICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4vLyAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0VCRUZGMjtcclxuLy8gIG1pbi13aWR0aDogMzIxcHg7XHJcbi8vfVxyXG4vL1xyXG4vLy5kZXRhaWxzX19zZWN0aW9uOm50aC1jaGlsZChldmVuKSB7XHJcbi8vICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbi8vfVxyXG5cclxuLmRldGFpbHNfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbn1cclxuXHJcbi5kZXRhaWxzX19zZWN0aW9uLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZGV0YWlsc19faXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBwYWRkaW5nOiAycHggMDtcclxufVxyXG5cclxuLmRldGFpbHNfX2xhYmVsIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM0QzU4NjI7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHdpZHRoOiAxMjVweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIG1pbi13aWR0aDogMTI1cHg7XHJcbiAgbWF4LXdpZHRoOiAxMjVweDtcclxufVxyXG5cclxuLmRldGFpbHNfX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzRDNTg2MjtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzX19saW5rIHtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmRldGFpbHNfX2xpbms6YWZ0ZXIge1xyXG4gIC8vY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb25zL2NoYWluLnN2Z1wiKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucmVjb3Jkc19faGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNvcmRzX19zZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTJweCAxOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGNUY4RkE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnJlY29yZHNfX3NlYXJjaC1pbnB1dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xyXG59XHJcblxyXG4ucmVjb3Jkc19fc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucmVjb3Jkc19fc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG59XHJcblxyXG4ucmVjb3Jkc19fdmlldyB7XHJcbiAgY29sb3I6ICNDMkNGRTA7XHJcbn1cclxuXHJcbi50aWxlcyAucmVjb3Jkc19fdmlldyB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxufVxyXG5cclxuLnJlY29yZHNfX2NvbnRhaW5lciAucmVwb3J0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucmVjb3Jkc19fY29udGFpbmVyLnRpbGVzIC5yZXBvcnQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJlY29yZHNfX2NvbnRhaW5lciAudGlsZXMtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJlY29yZHNfX2NvbnRhaW5lci50aWxlcyAudGlsZXMtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yZWNvcmRzX19ib2R5IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGlsZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4udGlsZV9faGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRpbGVfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xyXG59XHJcblxyXG4udGlsZV9fY2FsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG59XHJcblxyXG4udGlsZV9fYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50aWxlX19sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgY29sb3I6ICM0QzU4NjI7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4udGlsZV9fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgY29sb3I6ICM0QzU4NjI7XHJcbn1cclxuXHJcbi50aWxlX19mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbn1cclxuXHJcbi50aWxlX191c2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aWxlX19pbWctd3JhcHBlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnRpbGVfX2ltZy13cmFwcGVyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpbGVfX25hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgY29sb3I6IHZhcigtLXRhYmxlLWdyYXkpO1xyXG59XHJcblxyXG4udGlsZV9fYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGlsZV9fZWRpdCwgLnRpbGVfX2RlbGV0ZSB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGNvbG9yOiAjQzJDRkUwO1xyXG59XHJcblxyXG4udGlsZV9fZWRpdCBzdmcsIC50aWxlX19kZWxldGUgc3ZnIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aWxlX19zdGF0dXMge1xyXG4gIGJhY2tncm91bmQ6ICNGN0NCNUI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDg0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbF9fY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5tb2RhbF9fYmFja2Ryb3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLm1vZGFsX193aW5kb3cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5tb2RhbF9faGVhZGVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWxfX2JvZHkge1xyXG4gIC8qcGFkZGluZzogMTBweCAyMHB4IDIwcHg7Ki9cclxufVxyXG5cclxuLm1vZGFsX19jbG9zZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uX19oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjY29yZGlvbl9faWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbn1cclxuXHJcbi5hY2NvcmRpb25fX2ljb24gc3ZnIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb25fX2NvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRpbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIHBhZGRpbmc6IDM1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX19uYXYge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xyXG5cclxuICAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rLmFjdGl2ZTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qLS0tUkVQT1JULS0tKi9cclxuXHJcbi5yZXBvcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnJlcG9ydC13cmFwcGVyIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG59XHJcblxyXG4ucmVwb3J0X19oZWFkZXIgdGgge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIHBhZGRpbmc6IDE0cHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xyXG59XHJcblxyXG4ucmVwb3J0X19oZWFkZXIgdGg6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyLXRleHQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyIHRoOmxhc3QtY2hpbGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2JvZHkgdGQge1xyXG4gIHBhZGRpbmc6IDIwcHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ncmF5KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcclxufVxyXG5cclxuLnJlcG9ydF9fYm9keSB0cjpsYXN0LWNoaWxkIHRkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ucmVwb3J0X19ib2R5IHRyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2JvZHkgdHI6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnJlcG9ydF9fYm9keSB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4ucmVwb3J0X19ib2R5IHRkOmxhc3QtY2hpbGQgIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ucmVwb3J0X191c2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucmVwb3J0X19hdmF0YXIge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4ucmVwb3J0X19uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xyXG59XHJcblxyXG4iLCIucHJvZmlsZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2ZpbGVfX3NpZGViYXIge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wcm9maWxlX19ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9maWxlX19zaWRlYmFyLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnByb2ZpbGVfX3NpZGViYXItYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5wcm9maWxlX19zaWRlYmFyLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFRkYyO1xufVxuXG4ucHJvZmlsZV9fYXZhdGFyIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4ucHJvZmlsZV9fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnByb2ZpbGVfX3Bvc2l0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5wcm9maWxlX19sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5wcm9maWxlX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbn1cblxuLnByb2ZpbGVfX2luZm8ge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ucHJvZmlsZV9faW5mby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLnByb2ZpbGVfX2luZm8taXRlbSBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZmlsZV9faW5mby1pdGVtIGEge1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9maWxlX19pbmZvLWl0ZW0gc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9maWxlX19zaWRlYmFyLWhlYWRlciAuYnRuIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnByb2ZpbGVfX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG5cbi5zdGF0X19jb2wge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uc3RhdF9fY2FyZCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uc3RhdF9fY291bnQge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5wcm9maWxlX19wYXRpZW50LWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ucHJvZmlsZV9fcGF0aWVudCB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVGRjI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9maWxlX19wYXRpZW50LWltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5wcm9maWxlX19wYXRpZW50LWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG59XG5cbi5wcm9maWxlX19wYXRpZW50LXRleHQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnByb2ZpbGVfX3BhdGllbnQtdGV4dCAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogdmFyKC0tdGFibGUtZ3JheSk7XG59XG5cbi5wcm9maWxlX19wYXRpZW50LXRleHQgLm5vdGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4vKiNkZXRhaWxzIHsqL1xuLyogICAgcGFkZGluZzogMjBweDsqL1xuLyp9Ki9cbi5kZXRhaWxzX19ib2R5IHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmRldGFpbHNfX3NlY3Rpb24ge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZGV0YWlsc19fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG59XG5cbi5kZXRhaWxzX19zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZGV0YWlsc19faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwYWRkaW5nOiAycHggMDtcbn1cblxuLmRldGFpbHNfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzRDNTg2MjtcbiAgb3BhY2l0eTogMC41O1xuICB3aWR0aDogMTI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBtaW4td2lkdGg6IDEyNXB4O1xuICBtYXgtd2lkdGg6IDEyNXB4O1xufVxuXG4uZGV0YWlsc19fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM0QzU4NjI7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4uZGV0YWlsc19fbGluayB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZGV0YWlsc19fbGluazphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cblxuLnJlY29yZHNfX2hlYWRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlY29yZHNfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEycHggMThweDtcbiAgYmFja2dyb3VuZDogI0Y1RjhGQTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogNDUlO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4ucmVjb3Jkc19fc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5yZWNvcmRzX19zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucmVjb3Jkc19fc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbn1cblxuLnJlY29yZHNfX3ZpZXcge1xuICBjb2xvcjogI0MyQ0ZFMDtcbn1cblxuLnRpbGVzIC5yZWNvcmRzX192aWV3IHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcbn1cblxuLnJlY29yZHNfX2NvbnRhaW5lciAucmVwb3J0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnJlY29yZHNfX2NvbnRhaW5lci50aWxlcyAucmVwb3J0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmVjb3Jkc19fY29udGFpbmVyIC50aWxlcy13cmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJlY29yZHNfX2NvbnRhaW5lci50aWxlcyAudGlsZXMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVjb3Jkc19fYm9keSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50aWxlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnRpbGVfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRpbGVfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xufVxuXG4udGlsZV9fY2FsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xufVxuXG4udGlsZV9fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRpbGVfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzRDNTg2MjtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnRpbGVfX3RleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjNEM1ODYyO1xufVxuXG4udGlsZV9fZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxN3B4O1xufVxuXG4udGlsZV9fdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aWxlX19pbWctd3JhcHBlciB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnRpbGVfX2ltZy13cmFwcGVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGlsZV9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6IHZhcigtLXRhYmxlLWdyYXkpO1xufVxuXG4udGlsZV9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aWxlX19lZGl0LCAudGlsZV9fZGVsZXRlIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogI0MyQ0ZFMDtcbn1cblxuLnRpbGVfX2VkaXQgc3ZnLCAudGlsZV9fZGVsZXRlIHN2ZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpbGVfX3N0YXR1cyB7XG4gIGJhY2tncm91bmQ6ICNGN0NCNUI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tb2RhbF9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubW9kYWxfX2JhY2tkcm9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuMztcbiAgei1pbmRleDogMDtcbn1cblxuLm1vZGFsX193aW5kb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIHdpZHRoOiA3MDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubW9kYWxfX2hlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbF9fYm9keSB7XG4gIC8qcGFkZGluZzogMTBweCAyMHB4IDIwcHg7Ki9cbn1cblxuLm1vZGFsX19jbG9zZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjY29yZGlvbl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWNjb3JkaW9uX19pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbn1cblxuLmFjY29yZGlvbl9faWNvbiBzdmcge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5hY2NvcmRpb25fX2NvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGlsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5wcm9maWxlX19uYXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcbn1cbi5wcm9maWxlX19uYXYgLm5hdi1pdGVtICsgLm5hdi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4ucHJvZmlsZV9fbmF2IC5uYXYtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjBweCAwO1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbn1cbi5wcm9maWxlX19uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cbi5wcm9maWxlX19uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XG59XG4ucHJvZmlsZV9fbmF2IC5uYXYtbGluay5hY3RpdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbi8qLS0tUkVQT1JULS0tKi9cbi5yZXBvcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5yZXBvcnQtd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4ucmVwb3J0X19oZWFkZXIgdGgge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xufVxuXG4ucmVwb3J0X19oZWFkZXIgdGg6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5yZXBvcnRfX2hlYWRlci10ZXh0IHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucmVwb3J0X19oZWFkZXIgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuXG4ucmVwb3J0X19ib2R5IHRkIHtcbiAgcGFkZGluZzogMjBweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ncmF5KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XG59XG5cbi5yZXBvcnRfX2JvZHkgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5yZXBvcnRfX2JvZHkgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZXBvcnRfX2JvZHkgdHI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5yZXBvcnRfX2JvZHkgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5yZXBvcnRfX2JvZHkgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuXG4ucmVwb3J0X191c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJlcG9ydF9fYXZhdGFyIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLnJlcG9ydF9fbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ibGFjayk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient',
          templateUrl: './patient.component.html',
          styleUrls: ['./patient.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/patients/add-patient/add-patient.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/core/components/patients/add-patient/add-patient.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddPatientComponent */

  /***/
  function srcAppCoreComponentsPatientsAddPatientAddPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function () {
      return AddPatientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_forms_add_client_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @models/forms/add-client-form */
    "./src/app/core/models/forms/add-client-form.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_form_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/form-control.service */
    "./src/app/core/services/form-control.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_controls_control_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/components/controls/control/control.component */
    "./src/app/shared/components/controls/control/control.component.ts");

    function AddPatientComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reserved for checkbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.formModel.groups["generalInfo"].title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r3.formModel.groups["generalInfo"].controls["firstName"])("form", ctx_r3.form.controls[ctx_r3.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r3.formModel.groups["generalInfo"].controls["lastName"])("form", ctx_r3.form.controls[ctx_r3.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r3.formModel.groups["generalInfo"].controls["middleName"])("form", ctx_r3.form.controls[ctx_r3.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r3.formModel.groups["generalInfo"].controls["birthday"])("form", ctx_r3.form.controls[ctx_r3.formModel.groups["generalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r3.formModel.groups["generalInfo"].controls["gender"])("form", ctx_r3.form.controls[ctx_r3.formModel.groups["generalInfo"].name]);
      }
    }

    function AddPatientComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.formModel.groups["contactInfo"].title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["email"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["mobilePhone"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["addPhone"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["country"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["region"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["city"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["index"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["street"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["building"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r4.formModel.groups["contactInfo"].controls["apartment"])("form", ctx_r4.form.controls[ctx_r4.formModel.groups["contactInfo"].name]);
      }
    }

    function AddPatientComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.formModel.groups["passportData"].title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r5.formModel.groups["passportData"].controls["passportScan"])("form", ctx_r5.form.controls[ctx_r5.formModel.groups["passportData"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r5.formModel.groups["passportData"].controls["address"])("form", ctx_r5.form.controls[ctx_r5.formModel.groups["passportData"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r5.formModel.groups["passportData"].controls["passportNumber"])("form", ctx_r5.form.controls[ctx_r5.formModel.groups["passportData"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r5.formModel.groups["passportData"].controls["whenIssued"])("form", ctx_r5.form.controls[ctx_r5.formModel.groups["passportData"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r5.formModel.groups["passportData"].controls["issuedBy"])("form", ctx_r5.form.controls[ctx_r5.formModel.groups["passportData"].name]);
      }
    }

    function AddPatientComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.formModel.groups["photo"].title, " ");
      }
    }

    function AddPatientComponent_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.formModel.groups["parent"].title, " ");
      }
    }

    function AddPatientComponent_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.formModel.groups["generalMedicalInfo"].title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r8.formModel.groups["generalMedicalInfo"].controls["chronicDiseases"])("form", ctx_r8.form.controls[ctx_r8.formModel.groups["generalMedicalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r8.formModel.groups["generalMedicalInfo"].controls["bloodGroup"])("form", ctx_r8.form.controls[ctx_r8.formModel.groups["generalMedicalInfo"].name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r8.formModel.groups["generalMedicalInfo"].controls["allergy"])("form", ctx_r8.form.controls[ctx_r8.formModel.groups["generalMedicalInfo"].name]);
      }
    }

    function AddPatientComponent_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-control", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.formModel.groups["paymentInfo"].title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r9.formModel.groups["paymentInfo"].controls["insuranceCompany"])("form", ctx_r9.form.controls[ctx_r9.formModel.groups["paymentInfo"].name]);
      }
    }

    var AddPatientComponent =
    /*#__PURE__*/
    function () {
      function AddPatientComponent(activeModal, fcs) {
        _classCallCheck(this, AddPatientComponent);

        this.activeModal = activeModal;
        this.fcs = fcs;
        this.active = 'top';
      }

      _createClass(AddPatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formModel = _models_forms_add_client_form__WEBPACK_IMPORTED_MODULE_1__["addClientFormMetadata"];
          this.form = this.fcs.toMainFormObj(this.formModel);
          console.log(this.form);
          this.active = _models_forms_add_client_form__WEBPACK_IMPORTED_MODULE_1__["addClientFormMetadata"].groups['generalInfo'].name;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var res = this.form.getRawValue();
          console.log(res); // res.role = 'client';
          // this.payload = JSON.stringify(res);
          // console.log(this.payload);
          // this.http.addUser(res).subscribe(resp => console.log(resp));
        }
      }]);

      return AddPatientComponent;
    }();

    AddPatientComponent.ɵfac = function AddPatientComponent_Factory(t) {
      return new (t || AddPatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_control_service__WEBPACK_IMPORTED_MODULE_3__["FormControlService"]));
    };

    AddPatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddPatientComponent,
      selectors: [["app-add-patient"]],
      inputs: {
        name: "name"
      },
      decls: 43,
      vars: 24,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "d-flex"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 2, "min-width", "200px", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [1, "mt-1", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", "", 3, "formGroupName"], [1, "ml-4", 3, "ngbNavOutlet"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "row"], [1, "col-6", "mt-3", 3, "control", "form"], [1, "col-6", "mt-3"]],
      template: function AddPatientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add patients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPatientComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPatientComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function AddPatientComponent_Template_ul_activeIdChange_9_listener($event) {
            return ctx.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddPatientComponent_ng_template_14_Template, 9, 11, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddPatientComponent_ng_template_18_Template, 12, 21, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddPatientComponent_ng_template_22_Template, 7, 11, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddPatientComponent_ng_template_26_Template, 2, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddPatientComponent_ng_template_30_Template, 2, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddPatientComponent_ng_template_34_Template, 5, 7, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddPatientComponent_ng_template_38_Template, 3, 3, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPatientComponent_Template_button_click_41_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["generalInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["generalInfo"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["generalInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["contactInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["contactInfo"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["contactInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["passportData"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["passportData"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["passportData"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["photo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["photo"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["photo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["parent"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["parent"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["parent"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["generalMedicalInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["generalMedicalInfo"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["generalMedicalInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbNavItem", ctx.formModel.groups["paymentInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formModel.groups["paymentInfo"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", ctx.formModel.groups["paymentInfo"].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r2);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _shared_components_controls_control_control_component__WEBPACK_IMPORTED_MODULE_5__["ControlComponent"]],
      styles: [".nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--table-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhdGllbnRzL2FkZC1wYXRpZW50L0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxwYXRpZW50c1xcYWRkLXBhdGllbnRcXGFkZC1wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGF0aWVudHMvYWRkLXBhdGllbnQvYWRkLXBhdGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGF0aWVudHMvYWRkLXBhdGllbnQvYWRkLXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtYmxhY2spO1xyXG59XHJcbiIsIi5uYXYtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRhYmxlLWJsYWNrKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-patient',
          templateUrl: './add-patient.component.html',
          styleUrls: ['./add-patient.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _services_form_control_service__WEBPACK_IMPORTED_MODULE_3__["FormControlService"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/components/patients/patient-row/patient-row.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/core/components/patients/patient-row/patient-row.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PatientRowComponent */

  /***/
  function srcAppCoreComponentsPatientsPatientRowPatientRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientRowComponent", function () {
      return PatientRowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["app-patient-row", ""];

    var PatientRowComponent =
    /*#__PURE__*/
    function () {
      function PatientRowComponent() {
        _classCallCheck(this, PatientRowComponent);
      }

      _createClass(PatientRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log(this.http.getUsers());
        }
      }, {
        key: "getFullName",
        value: function getFullName(firstName, middleName, lastName) {
          var fullName = firstName;

          if (middleName) {
            fullName += ' ';
            fullName += middleName;
          }

          fullName += ' ';
          fullName += lastName;
          return fullName;
        }
      }]);

      return PatientRowComponent;
    }();

    PatientRowComponent.ɵfac = function PatientRowComponent_Factory(t) {
      return new (t || PatientRowComponent)();
    };

    PatientRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientRowComponent,
      selectors: [["", "app-patient-row", ""]],
      inputs: {
        user: "user"
      },
      attrs: _c0,
      decls: 17,
      vars: 8,
      consts: [[1, "custom-checkbox"], ["type", "checkbox", 1, "custom-checkbox__input", 3, "id"], [1, "custom-checkbox__label", 3, "for"], [1, "report__user"], ["alt", "", 1, "report__avatar", 3, "src"], [1, "report__name", 3, "routerLink"]],
      template: function PatientRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5 Minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "../patient/" + ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getFullName(ctx.user.firstName, ctx.user.middleName, ctx.user.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.contact.email[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.contact.phone[0]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".report__user[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.report__avatar[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  border-radius: 100%;\n}\n\n.report__name[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  font-weight: 500;\n  font-size: 15px;\n  color: var(--table-black);\n  text-decoration: none;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--table-gray);\n  border-bottom: 1px solid #EBEFF2;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtcm93L0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxwYXRpZW50c1xccGF0aWVudC1yb3dcXHBhdGllbnQtcm93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1yb3cvcGF0aWVudC1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtcm93L3BhdGllbnQtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydF9fdXNlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJlcG9ydF9fYXZhdGFyIHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLnJlcG9ydF9fbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHZhcigtLXRhYmxlLWJsYWNrKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nOiAyMHB4IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtZ3JheSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XHJcbn1cclxuXHJcbnRkOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbnRkOmxhc3QtY2hpbGQgIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcbiIsIi5yZXBvcnRfX3VzZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmVwb3J0X19hdmF0YXIge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4ucmVwb3J0X19uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHZhcigtLXRhYmxlLWJsYWNrKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDIwcHggMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGFibGUtZ3JheSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xufVxuXG50ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxudGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: '[app-patient-row]',
          templateUrl: './patient-row.component.html',
          styleUrls: ['./patient-row.component.scss']
        }]
      }], function () {
        return [];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/components/patients/patients.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/components/patients/patients.component.ts ***!
    \****************************************************************/

  /*! exports provided: PatientsComponent */

  /***/
  function srcAppCoreComponentsPatientsPatientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientsComponent", function () {
      return PatientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./add-patient/add-patient.component */
    "./src/app/core/components/patients/add-patient/add-patient.component.ts");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _patient_row_patient_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./patient-row/patient-row.component */
    "./src/app/core/components/patients/patient-row/patient-row.component.ts");

    function PatientsComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
      }

      if (rf & 2) {
        var user_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r11);
      }
    }

    var PatientsComponent =
    /*#__PURE__*/
    function () {
      function PatientsComponent(http, modalService) {
        _classCallCheck(this, PatientsComponent);

        this.http = http;
        this.modalService = modalService;
        this.users = Array(0); // Must be defined as Input parameter or fetched on init

        this.closeResult = '';
      }

      _createClass(PatientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = {
            id: 1,
            photo: '//style.anu.edu.au/_anu/4/images/placeholders/person.png',
            firstName: 'Name',
            middleName: '',
            lastName: 'Surname',
            birthday: '',
            gender: 'Male',
            tags: [],
            maritalStatus: 'Single',
            contact: {
              phone: ['11111'],
              email: ['test@email.com'],
              messengerList: [],
              mobile: [{
                isMainPhone: true,
                phone: '',
                note: ''
              }]
            },
            address: {
              registration: {
                houseNumber: '',
                apartmentNumber: '',
                locality: '',
                country: '',
                postIndex: '',
                region: '',
                street: ''
              },
              actual: {
                houseNumber: '',
                apartmentNumber: '',
                locality: '',
                country: '',
                postIndex: '',
                region: '',
                street: ''
              }
            }
          };

          for (var i = 0; i < 15; i++) {
            this.users.push(user);
            this.users[i].id = i;
          } // this.http.getUsers().subscribe((res) => console.log(res));

        }
      }, {
        key: "open",
        value: function open() {
          var modalRef = this.modalService.open(_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_1__["AddPatientComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.name = 'World';
        }
      }]);

      return PatientsComponent;
    }();

    PatientsComponent.ɵfac = function PatientsComponent_Factory(t) {
      return new (t || PatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]));
    };

    PatientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientsComponent,
      selectors: [["app-patients"]],
      decls: 29,
      vars: 1,
      consts: [[1, "content-wrapper"], [1, "d-flex", "justify-content-end", "mb-3"], [1, "btn", "btn-primary", "px-5", "py-2", 3, "click"], [1, "report-wrapper"], [1, "report"], [1, "report__header"], [1, "custom-checkbox"], ["type", "checkbox", "id", "0", 1, "custom-checkbox__input"], ["for", "0", 1, "custom-checkbox__label"], [1, "report__header-text"], [1, "report__body"], ["app-patient-row", "", 3, "user", 4, "ngFor", "ngForOf"], ["app-patient-row", "", 3, "user"]],
      template: function PatientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientsComponent_Template_button_click_2_listener() {
            return ctx.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Recent activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PatientsComponent_tr_28_Template, 1, 1, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _patient_row_patient_row_component__WEBPACK_IMPORTED_MODULE_5__["PatientRowComponent"]],
      styles: [".report[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 4px;\n  width: 100%;\n  border-collapse: collapse;\n}\n.report-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n}\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  color: var(--dark-blue);\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid #EBEFF2;\n}\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n.report__header-text[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: calc(100%);\n  padding: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhdGllbnRzL0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxwYXRpZW50c1xccGF0aWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFBO0FBRUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0VBQ0EsNENBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtBQ0FGO0FER0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLG1CQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7QUNBRjtBREdBO0VBQ0UsMENBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tUkVQT1JULS0tKi9cclxuXHJcbi5yZXBvcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnJlcG9ydC13cmFwcGVyIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG59XHJcblxyXG4ucmVwb3J0X19oZWFkZXIgdGgge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIHBhZGRpbmc6IDE0cHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xyXG59XHJcblxyXG4ucmVwb3J0X19oZWFkZXIgdGg6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyLXRleHQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyIHRoOmxhc3QtY2hpbGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2JvZHkgdHI6bGFzdC1jaGlsZCB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnJlcG9ydF9fYm9keSB0ciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVwb3J0X19ib2R5IHRyOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLy9oZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDAlKTtcclxuICBwYWRkaW5nOiAzNXB4O1xyXG59XHJcbiIsIi8qLS0tUkVQT1JULS0tKi9cbi5yZXBvcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5yZXBvcnQtd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4ucmVwb3J0X19oZWFkZXIgdGgge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xufVxuXG4ucmVwb3J0X19oZWFkZXIgdGg6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5yZXBvcnRfX2hlYWRlci10ZXh0IHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucmVwb3J0X19oZWFkZXIgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuXG4ucmVwb3J0X19ib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ucmVwb3J0X19ib2R5IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVwb3J0X19ib2R5IHRyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICBwYWRkaW5nOiAzNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patients',
          templateUrl: './patients.component.html',
          styleUrls: ['./patients.component.scss']
        }]
      }], function () {
        return [{
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/stock/stock.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/components/stock/stock.component.ts ***!
    \**********************************************************/

  /*! exports provided: StockComponent */

  /***/
  function srcAppCoreComponentsStockStockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockComponent", function () {
      return StockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/table/table.component */
    "./src/app/shared/components/table/table.component.ts");

    function StockComponent_ng_template_5_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r32.items[0].content + " " + item_r32.items[3].content + " x " + item_r32.count);
      }
    }

    function StockComponent_ng_template_5_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StockComponent_ng_template_5_1_ng_template_0_Template, 2, 1, "ng-template", 23);
      }

      if (rf & 2) {
        var item_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r32.count > 0);
      }
    }

    function StockComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function StockComponent_ng_template_5_Template_div_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          return _r26.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StockComponent_ng_template_5_1_Template, 1, 1, undefined, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Send request");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.tableParams.body);
      }
    }

    function StockComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-table", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", ctx_r28.tableParams);
      }
    }

    function StockComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Content ");
      }
    }

    function StockComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Content ");
      }
    }

    var StockComponent =
    /*#__PURE__*/
    function () {
      function StockComponent() {
        _classCallCheck(this, StockComponent);

        this.active = 'equipment';
      }

      _createClass(StockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tableParams = {
            header: [{
              content: 'Наименование'
            }, {
              content: 'Производитель'
            }, {
              content: 'Страна'
            }, {
              content: 'Модель'
            }, {
              content: 'Количество'
            }, {
              content: 'Цена за ед.'
            }, {
              content: 'Пооследнее изменение'
            }, {
              content: ''
            }],
            body: [{
              count: 0,
              items: [{
                content: 'Имплантат'
              }, {
                content: 'Straumann'
              }, {
                content: 'Швейцария'
              }, {
                content: 'SLActive'
              }, {
                content: '5'
              }, {
                content: '659 руб.'
              }, {
                content: '5 минут назад'
              }]
            }, {
              count: 0,
              items: [{
                content: 'Имплантат'
              }, {
                content: 'Nobel'
              }, {
                content: 'Израиль'
              }, {
                content: 'Модель'
              }, {
                content: '7'
              }, {
                content: '659 руб.'
              }, {
                content: '14 минут назад'
              }]
            }, {
              count: 0,
              items: [{
                content: 'Брекеты'
              }, {
                content: 'ORMKO'
              }, {
                content: 'США'
              }, {
                content: 'DAMON Q'
              }, {
                content: '2'
              }, {
                content: '90руб.'
              }, {
                content: '3 часа назад'
              }]
            }, {
              count: 0,
              items: [{
                content: 'Брекеты'
              }, {
                content: 'ORMKO'
              }, {
                content: 'США'
              }, {
                content: 'DAMON Ormko'
              }, {
                content: '14'
              }, {
                content: '160 руб.'
              }, {
                content: '5 дней назад'
              }]
            }, {
              count: 0,
              items: [{
                content: 'Пластина'
              }, {
                content: 'TITANMED'
              }, {
                content: 'Германия'
              }, {
                content: 'P-met-11'
              }, {
                content: '1'
              }, {
                content: '49 руб.'
              }, {
                content: '2 дня назад'
              }]
            }, {
              count: 0,
              items: [{
                content: 'Штифт'
              }, {
                content: 'Россия'
              }, {
                content: 'Россия'
              }, {
                content: 'Ш-22.56'
              }, {
                content: '9'
              }, {
                content: '190 руб.'
              }, {
                content: '4 часа назад'
              }]
            }, {
              count: 0,
              items: [{
                content: 'Скальпель'
              }, {
                content: 'Россия'
              }, {
                content: 'Россия'
              }, {
                content: 'С12'
              }, {
                content: '30'
              }, {
                content: '17 руб.'
              }, {
                content: 'Дек 12, 2019'
              }]
            }],

            get totalCount() {
              return this.body.reduce(function (sum, curr) {
                return sum + curr.count;
              }, 0);
            }

          };
        }
      }]);

      return StockComponent;
    }();

    StockComponent.ɵfac = function StockComponent_Factory(t) {
      return new (t || StockComponent)();
    };

    StockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StockComponent,
      selectors: [["app-stock"]],
      decls: 32,
      vars: 7,
      consts: [[1, "content-wrapper"], [1, "card", "p-4", "header"], [1, "title"], [1, "name"], ["popContent", ""], ["triggers", "manual", "placement", "left", "container", "body", 1, "basket", 3, "ngbPopover", "disablePopover", "mouseenter"], ["popover", "ngbPopover"], ["name", "shopping-cart"], [1, "counter", "ml-2"], [1, "searchbar", "pt-2"], ["ngbNav", "", "orientation", "horizontal", 1, "stock__nav", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [1, "mt-1", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "search", "ml-4", "px-3"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search for a contact"], [1, "nav-content", "mt-3"], [3, "ngbNavOutlet"], [1, "p-2", 3, "mouseleave"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "mt-3"], [3, "ngIf"], [1, "report-wrapper"], [3, "params"]],
      template: function StockComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0421\u041A\u041B\u0410\u0414 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StockComponent_ng_template_5_Template, 4, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StockComponent_Template_div_mouseenter_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return _r26.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i-feather", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function StockComponent_Template_ul_activeIdChange_13_listener($event) {
            return ctx.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StockComponent_ng_template_18_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StockComponent_ng_template_22_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0420\u0435\u0441\u0443\u0440\u0441\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, StockComponent_ng_template_26_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r24)("disablePopover", ctx.tableParams.totalCount == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", "equipment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", "instruments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", "resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r27);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"], angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]],
      styles: [".card[_ngcontent-%COMP%] {\n  background: var(--white);\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n}\n\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .basket[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .stock__nav[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .stock__nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    + .nav-item[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .stock__nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  display: block;\n  padding: 0 0 20px;\n  color: var(--dark-blue);\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .stock__nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--black);\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .stock__nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .stock__nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  background-color: var(--accent-blue);\n  height: 1px;\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  background-color: #F5F8FA;\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n  border-radius: 4px;\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  padding-left: 12px;\n  font-weight: normal;\n  font-size: 12px;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--gray);\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: var(--gray);\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray);\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 16px 2px;\n  font-size: 13px;\n  color: #C2CFE0;\n}\n\n.header[_ngcontent-%COMP%]   .report-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3N0b2NrL0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxzdG9ja1xcc3RvY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zdG9jay9zdG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsNENBQUE7QUNDRjs7QURHRTtFQUlFLGFBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRERJO0VBQ0UseUJBQUE7QUNHTjs7QURDSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQ0NOOztBREdFO0VBQ0UsYUFBQTtBQ0RKOztBREVJO0VBQ0UsZ0NBQUE7QUNBTjs7QURFTTtFQUNFLGlCQUFBO0FDQVI7O0FER007RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNEUjs7QURJTTtFQUNFLG1CQUFBO0FDRlI7O0FES007RUFDRSx5QkFBQTtBQ0hSOztBRE1NO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FDSlI7O0FEUUk7RUFHRSx5QkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtBQ1ZOOztBRFlNO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FDVlI7O0FEYU07RUFDRSxrQkFBQTtBQ1hSOztBRFVNO0VBQ0Usa0JBQUE7QUNYUjs7QURVTTtFQUNFLGtCQUFBO0FDWFI7O0FEY007RUFDRSxhQUFBO0FDWlI7O0FEZU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDYlI7O0FEa0JFO0VBQ0UsZ0JBQUE7RUFDQSw0Q0FBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zdG9jay9zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIC50aXRsZSB7XHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmJhc2tldHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnN0b2NrX19uYXYge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcclxuXHJcbiAgICAgIC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2LWxpbmsuYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaCB7XHJcbiAgICAgIC8vaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGOEZBO1xyXG4gICAgICAvL3otaW5kZXg6IDEwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLy9wYWRkaW5nOiAwIDM1cHg7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICNDMkNGRTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZXBvcnQtd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5oZWFkZXIgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlciAudGl0bGUgLm5hbWUge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xufVxuLmhlYWRlciAudGl0bGUgLmJhc2tldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5oZWFkZXIgLnNlYXJjaGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGVhZGVyIC5zZWFyY2hiYXIgLnN0b2NrX19uYXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcbn1cbi5oZWFkZXIgLnNlYXJjaGJhciAuc3RvY2tfX25hdiAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbi5oZWFkZXIgLnNlYXJjaGJhciAuc3RvY2tfX25hdiAubmF2LWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCAyMHB4O1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbn1cbi5oZWFkZXIgLnNlYXJjaGJhciAuc3RvY2tfX25hdiAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xufVxuLmhlYWRlciAuc2VhcmNoYmFyIC5zdG9ja19fbmF2IC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xufVxuLmhlYWRlciAuc2VhcmNoYmFyIC5zdG9ja19fbmF2IC5uYXYtbGluay5hY3RpdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcbiAgaGVpZ2h0OiAxcHg7XG59XG4uaGVhZGVyIC5zZWFyY2hiYXIgLnNlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY4RkE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5oZWFkZXIgLnNlYXJjaGJhciAuc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG4uaGVhZGVyIC5zZWFyY2hiYXIgLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG59XG4uaGVhZGVyIC5zZWFyY2hiYXIgLnNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaGVhZGVyIC5zZWFyY2hiYXIgLnNlYXJjaCBpIHtcbiAgcGFkZGluZzogMTZweCAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNDMkNGRTA7XG59XG4uaGVhZGVyIC5yZXBvcnQtd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stock',
          templateUrl: './stock.component.html',
          styleUrls: ['./stock.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/core/components/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_controls_controls_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/controls/controls.module */
    "./src/app/shared/components/controls/controls.module.ts");
    /* harmony import */


    var _auth_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/token.interceptor */
    "./src/app/core/auth/token.interceptor.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/core/test/test.component.ts");
    /* harmony import */


    var _components_authorized_container_authorized_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/authorized-container/authorized-container.component */
    "./src/app/core/components/authorized-container/authorized-container.component.ts");
    /* harmony import */


    var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/components/components.module */
    "./src/app/shared/components/components.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/admin-dashboard/admin-dashboard.component */
    "./src/app/core/components/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _components_patients_patients_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/patients/patients.component */
    "./src/app/core/components/patients/patients.component.ts");
    /* harmony import */


    var _components_patients_patient_row_patient_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/patients/patient-row/patient-row.component */
    "./src/app/core/components/patients/patient-row/patient-row.component.ts");
    /* harmony import */


    var _components_patients_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/patients/add-patient/add-patient.component */
    "./src/app/core/components/patients/add-patient/add-patient.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/employees/employees.component */
    "./src/app/core/components/employees/employees.component.ts");
    /* harmony import */


    var _components_employees_employee_row_employee_row_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/employees/employee-row/employee-row.component */
    "./src/app/core/components/employees/employee-row/employee-row.component.ts");
    /* harmony import */


    var _components_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/employees/add-employee/add-employee.component */
    "./src/app/core/components/employees/add-employee/add-employee.component.ts");
    /* harmony import */


    var _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/patient/patient.component */
    "./src/app/core/components/patient/patient.component.ts");
    /* harmony import */


    var _shared_icons_icons_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @shared/icons/icons.module */
    "./src/app/shared/icons/icons.module.ts");
    /* harmony import */


    var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @fullcalendar/angular */
    "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
    /* harmony import */


    var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @fullcalendar/daygrid */
    "./node_modules/@fullcalendar/daygrid/main.js");
    /* harmony import */


    var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @fullcalendar/bootstrap */
    "./node_modules/@fullcalendar/bootstrap/main.js");
    /* harmony import */


    var _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/stock/stock.component */
    "./src/app/core/components/stock/stock.component.ts");
    /* harmony import */


    var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/employee/employee.component */
    "./src/app/core/components/employee/employee.component.ts");
    /* harmony import */


    var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./calendar/calendar.component */
    "./src/app/core/calendar/calendar.component.ts"); // the main connector. must go first
    // a plugin


    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_21__["FullCalendarModule"].registerPlugins([_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_22__["default"], _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_23__["default"]]);

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _auth_token_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"],
        multi: true
      }
      /*,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
      }
      */
      ],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_components_controls_controls_module__WEBPACK_IMPORTED_MODULE_5__["ControlsModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbNavModule"], _shared_icons_icons_module__WEBPACK_IMPORTED_MODULE_20__["IconsModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_21__["FullCalendarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPopoverModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"], _components_authorized_container_authorized_container_component__WEBPACK_IMPORTED_MODULE_8__["AuthorizedContainerComponent"], _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["AdminDashboardComponent"], _components_patients_patients_component__WEBPACK_IMPORTED_MODULE_12__["PatientsComponent"], _components_patients_patient_row_patient_row_component__WEBPACK_IMPORTED_MODULE_13__["PatientRowComponent"], _components_patients_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_14__["AddPatientComponent"], _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_16__["EmployeesComponent"], _components_employees_employee_row_employee_row_component__WEBPACK_IMPORTED_MODULE_17__["EmployeeRowComponent"], _components_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_18__["AddEmployeeComponent"], _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_19__["PatientComponent"], _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_24__["StockComponent"], _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_25__["EmployeeComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_26__["CalendarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_components_controls_controls_module__WEBPACK_IMPORTED_MODULE_5__["ControlsModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbNavModule"], _shared_icons_icons_module__WEBPACK_IMPORTED_MODULE_20__["IconsModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_21__["FullCalendarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPopoverModule"]],
        exports: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          // tslint:disable-next-line:max-line-length
          declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"], _components_authorized_container_authorized_container_component__WEBPACK_IMPORTED_MODULE_8__["AuthorizedContainerComponent"], _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["AdminDashboardComponent"], _components_patients_patients_component__WEBPACK_IMPORTED_MODULE_12__["PatientsComponent"], _components_patients_patient_row_patient_row_component__WEBPACK_IMPORTED_MODULE_13__["PatientRowComponent"], _components_patients_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_14__["AddPatientComponent"], _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_16__["EmployeesComponent"], _components_employees_employee_row_employee_row_component__WEBPACK_IMPORTED_MODULE_17__["EmployeeRowComponent"], _components_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_18__["AddEmployeeComponent"], _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_19__["PatientComponent"], _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_24__["StockComponent"], _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_25__["EmployeeComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_26__["CalendarComponent"]],
          exports: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_components_controls_controls_module__WEBPACK_IMPORTED_MODULE_5__["ControlsModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbNavModule"], _shared_icons_icons_module__WEBPACK_IMPORTED_MODULE_20__["IconsModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_21__["FullCalendarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPopoverModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _auth_token_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"],
            multi: true
          }
          /*,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
          }
          */
          ]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/models/controls/control-base-model.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/models/controls/control-base-model.ts ***!
    \************************************************************/

  /*! exports provided: ControlBaseModel */

  /***/
  function srcAppCoreModelsControlsControlBaseModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlBaseModel", function () {
      return ControlBaseModel;
    });

    var ControlBaseModel = function ControlBaseModel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ControlBaseModel);

      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.placeholder = options.placeholder || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.width = options.width || 12;
    };
    /***/

  },

  /***/
  "./src/app/core/models/controls/control-input-model.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/models/controls/control-input-model.ts ***!
    \*************************************************************/

  /*! exports provided: ControlInputModel */

  /***/
  function srcAppCoreModelsControlsControlInputModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlInputModel", function () {
      return ControlInputModel;
    });
    /* harmony import */


    var _control_base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./control-base-model */
    "./src/app/core/models/controls/control-base-model.ts");

    var ControlInputModel =
    /*#__PURE__*/
    function (_control_base_model__) {
      _inherits(ControlInputModel, _control_base_model__);

      var _super = _createSuper(ControlInputModel);

      function ControlInputModel() {
        var _this2;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ControlInputModel);

        _this2 = _super.call(this, options);
        _this2.controlType = 'input';
        _this2.type = options['type'] || '';
        return _this2;
      }

      return ControlInputModel;
    }(_control_base_model__WEBPACK_IMPORTED_MODULE_0__["ControlBaseModel"]);
    /***/

  },

  /***/
  "./src/app/core/models/forms/add-client-form.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/models/forms/add-client-form.ts ***!
    \******************************************************/

  /*! exports provided: addClientFormMetadata */

  /***/
  function srcAppCoreModelsFormsAddClientFormTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addClientFormMetadata", function () {
      return addClientFormMetadata;
    });
    /* harmony import */


    var _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @models/controls/control-input-model */
    "./src/app/core/models/controls/control-input-model.ts");

    var addClientFormMetadata = {
      groups: {
        generalInfo: {
          name: 'generalInfo',
          title: 'General info',
          controls: {
            firstName: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'firstName',
              label: 'First name',
              value: '',
              required: true
            }),
            middleName: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'middleName',
              label: 'Middle name',
              value: '',
              required: true
            }),
            lastName: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'lastName',
              label: 'Last name',
              value: '',
              required: true
            }),
            gender: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'gender',
              label: 'Gender',
              value: '',
              required: true
            }),
            birthday: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'birthday',
              label: 'Birthday',
              value: '',
              required: true
            }),
            isRb: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'isRb',
              label: 'Is RB',
              value: 'true',
              required: true
            })
          }
        },
        contactInfo: {
          name: 'contactInfo',
          title: 'Contact Info',
          controls: {
            email: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'email',
              label: 'Email',
              value: '',
              required: true
            }),
            mobilePhone: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'mobilePhone',
              label: 'Mobile phone',
              value: '',
              required: true
            }),
            addPhone: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'addPhone',
              label: 'Additional phone',
              value: '',
              required: true
            }),
            country: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'country',
              label: 'Country',
              value: '',
              required: true
            }),
            region: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'region',
              label: 'Region',
              value: '',
              required: true
            }),
            city: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'city',
              label: 'City',
              value: '',
              required: true
            }),
            index: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'index',
              label: 'Index',
              value: '',
              required: true
            }),
            street: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'street',
              label: 'Street',
              value: '',
              required: true
            }),
            building: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'building',
              label: 'Building',
              value: '',
              required: true
            }),
            apartment: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'apartment',
              label: 'Apartment',
              value: '',
              required: true
            })
          }
        },
        passportData: {
          name: 'passportData',
          title: 'Passport Data',
          controls: {
            passportScan: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'passportScan',
              label: 'Passport Scan',
              value: '',
              required: true
            }),
            address: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'address',
              label: 'Address',
              value: '',
              required: true
            }),
            passportNumber: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'passportNumber',
              label: 'series and number of passport',
              value: '',
              required: true
            }),
            whenIssued: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'whenIssued',
              label: 'When Issued',
              value: '',
              required: true
            }),
            issuedBy: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'issuedBy',
              label: 'Issued By',
              value: '',
              required: true
            })
          }
        },
        photo: {
          name: 'photo',
          title: 'Photo',
          controls: {}
        },
        parent: {
          name: 'parent',
          title: 'Parent',
          controls: {}
        },
        generalMedicalInfo: {
          name: 'generalMedicalInfo',
          title: 'General Medical Info',
          controls: {
            chronicDiseases: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'chronicDiseases',
              label: 'Chronic Diseases',
              value: '',
              required: true
            }),
            bloodGroup: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'bloodGroup',
              label: 'Blood Group',
              value: '',
              required: true
            }),
            allergy: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'allergy',
              label: 'Allergy',
              value: '',
              required: true
            })
          }
        },
        paymentInfo: {
          name: 'paymentInfo',
          title: 'Payment Info',
          controls: {
            insuranceCompany: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'insuranceCompany',
              label: 'Insurance Company',
              value: '',
              required: true
            })
          }
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/core/models/forms/add-employee-form.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/models/forms/add-employee-form.ts ***!
    \********************************************************/

  /*! exports provided: addEmployeeFormMetadata */

  /***/
  function srcAppCoreModelsFormsAddEmployeeFormTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addEmployeeFormMetadata", function () {
      return addEmployeeFormMetadata;
    });
    /* harmony import */


    var _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @models/controls/control-input-model */
    "./src/app/core/models/controls/control-input-model.ts");

    var addEmployeeFormMetadata = {
      groups: {
        generalInfo: {
          name: 'generalInfo',
          title: 'General info',
          controls: {
            firstName: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'firstName',
              label: 'First name',
              value: '',
              required: true
            }),
            middleName: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'middleName',
              label: 'Middle name',
              value: '',
              required: true
            }),
            lastName: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'lastName',
              label: 'Last name',
              value: '',
              required: true
            }),
            gender: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'gender',
              label: 'Gender',
              value: '',
              required: true
            }),
            birthday: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'birthday',
              label: 'Birthday',
              value: '',
              required: true
            }),
            maritalStatus: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'maritalStatus',
              label: 'Marital Status',
              value: '',
              required: true
            })
          }
        },
        jobData: {
          name: 'jobData',
          title: 'Job Data',
          controls: {
            position: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'position',
              label: 'Position',
              value: '',
              required: true
            }),
            academicDegree: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'academicDegree',
              label: 'Academic Degree',
              value: '',
              required: true
            }),
            category: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'category',
              label: 'Category',
              value: '',
              required: true
            }),
            address: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'address',
              label: 'Address',
              value: '',
              required: true
            })
          }
        },
        contactInfo: {
          name: 'contactInfo',
          title: 'Contact Info',
          controls: {
            country: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'country',
              label: 'Country',
              value: '',
              required: true
            }),
            city: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'city',
              label: 'City',
              value: '',
              required: true
            }),
            address: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'address',
              label: 'Address',
              value: '',
              required: true
            }),
            addPhone: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'addPhone',
              label: 'Additional phone',
              value: '',
              required: true
            }),
            skype: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'skype',
              label: 'Skype',
              value: '',
              required: true
            }),
            passportData: new _models_controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
              key: 'passportData',
              label: 'Passport Data',
              value: '',
              required: true
            })
          }
        },
        photo: {
          name: 'photo',
          title: 'Photo',
          controls: {}
        },
        userPermissions: {
          name: 'userPermissions',
          title: 'User Permissions',
          controls: {}
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/core/models/forms/user-profile.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/models/forms/user-profile.ts ***!
    \***************************************************/

  /*! exports provided: userProfileMetadata */

  /***/
  function srcAppCoreModelsFormsUserProfileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userProfileMetadata", function () {
      return userProfileMetadata;
    });
    /* harmony import */


    var _controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../controls/control-input-model */
    "./src/app/core/models/controls/control-input-model.ts");

    var userProfileMetadata = [new _controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
      key: 'first_name',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 2
    }), new _controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
      key: 'last_name',
      label: 'Last name',
      value: 'Bombasto',
      required: true,
      order: 3
    }), new _controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
      key: 'email',
      label: 'Email',
      type: 'email',
      order: 4
    }), new _controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
      key: 'login',
      label: 'Login',
      order: 1
    }), new _controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
      key: 'phone',
      label: 'Phone',
      order: 5
    }), new _controls_control_input_model__WEBPACK_IMPORTED_MODULE_0__["ControlInputModel"]({
      key: 'birthday',
      label: 'Birthday',
      order: 6
    })];
    /***/
  },

  /***/
  "./src/app/core/services/form-control.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/form-control.service.ts ***!
    \*******************************************************/

  /*! exports provided: FormControlService */

  /***/
  function srcAppCoreServicesFormControlServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlService", function () {
      return FormControlService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FormControlService =
    /*#__PURE__*/
    function () {
      function FormControlService() {
        _classCallCheck(this, FormControlService);
      }

      _createClass(FormControlService, [{
        key: "toMainFormObj",
        value: function toMainFormObj(formModel) {
          var _this3 = this;

          var form = {};
          Object.keys(formModel.groups).forEach(function (key) {
            return form[formModel.groups[key].name] = _this3.toFormGroupObj(formModel.groups[key].controls);
          });
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](form);
        } // toMainFrom(controls: ControlBaseModel<any>[]) {
        //   const form = {};
        //   controls.forEach(el => form[el.key] = this.toFormGroup(el));
        //   return new FormGroup(form);
        // }

      }, {
        key: "toFormGroup",
        value: function toFormGroup(controls) {
          var group = {};
          controls.forEach(function (control) {
            group[control.key] = control.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](control.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required) : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](control.value || '');
          });
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
        }
      }, {
        key: "toFormGroupObj",
        value: function toFormGroupObj(controls) {
          var group = {};
          Object.keys(controls).forEach(function (key) {
            group[key] = controls[key].required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](controls[key].value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required) : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](controls[key].value || '');
          });
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
        }
      }]);

      return FormControlService;
    }();

    FormControlService.ɵfac = function FormControlService_Factory(t) {
      return new (t || FormControlService)();
    };

    FormControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormControlService,
      factory: FormControlService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlService, [{
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
  "./src/app/core/services/http.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/http.service.ts ***!
    \***********************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppCoreServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
      }

      _createClass(HttpService, [{
        key: "getUsers",
        value: function getUsers() {// const params = new HttpParams({"page": 1});
          // params.set('page', String(page));
          // return this.http.get('/dev/users');
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get("/dev/user/".concat(id));
        }
      }, {
        key: "addUser",
        value: function addUser(data) {
          return this.http.post('dev/users', data);
        }
      }, {
        key: "getMe",
        value: function getMe() {
          // const headers = new HttpHeaders({Authentication: localStorage.getItem('token')});
          return this.http.get('/dev/me');
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/test/test.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/test/test.component.ts ***!
    \*********************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppCoreTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/http.service */
    "./src/app/core/services/http.service.ts");

    var TestComponent =
    /*#__PURE__*/
    function () {
      function TestComponent(http) {
        _classCallCheck(this, TestComponent);

        this.http = http;
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.http.getMe().subscribe(function (res) {
            return console.log(res);
          });
        }
      }]);

      return TestComponent;
    }();

    TestComponent.ɵfac = function TestComponent_Factory(t) {
      return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
    };

    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestComponent,
      selectors: [["app-test"]],
      decls: 2,
      vars: 0,
      template: function TestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test',
          templateUrl: './test.component.html',
          styleUrls: ['./test.component.scss']
        }]
      }], function () {
        return [{
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/components.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/components/components.module.ts ***!
    \********************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppSharedComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/icons/icons.module */
    "./src/app/shared/icons/icons.module.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./table/table.component */
    "./src/app/shared/components/table/table.component.ts");
    /* harmony import */


    var _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./table/table-row/table-row.component */
    "./src/app/shared/components/table/table-row/table-row.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"], _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_7__["TableRowComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"]],
        exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"], _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_7__["TableRowComponent"]],
          exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/controls/control-input/control-input.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/components/controls/control-input/control-input.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ControlInputComponent */

  /***/
  function srcAppSharedComponentsControlsControlInputControlInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlInputComponent", function () {
      return ControlInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ControlInputComponent =
    /*#__PURE__*/
    function () {
      // get isValid() {return this.form.controls[this.control.key].valid; }
      function ControlInputComponent() {
        _classCallCheck(this, ControlInputComponent);
      }

      _createClass(ControlInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ControlInputComponent;
    }();

    ControlInputComponent.ɵfac = function ControlInputComponent_Factory(t) {
      return new (t || ControlInputComponent)();
    };

    ControlInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ControlInputComponent,
      selectors: [["app-control-input"]],
      inputs: {
        control: "control",
        form: "form"
      },
      decls: 4,
      vars: 7,
      consts: [[1, "input-group", 3, "formGroup"], [3, "type", "formControlName", "id", "placeholder"]],
      template: function ControlInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.control.type)("formControlName", ctx.control.key)("id", ctx.control.key)("placeholder", ctx.control.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.control.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.control.label);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRyb2xzL2NvbnRyb2wtaW5wdXQvY29udHJvbC1pbnB1dC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-control-input',
          templateUrl: './control-input.component.html',
          styleUrls: ['./control-input.component.scss']
        }]
      }], function () {
        return [];
      }, {
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/controls/control/control.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/components/controls/control/control.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ControlComponent */

  /***/
  function srcAppSharedComponentsControlsControlControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlComponent", function () {
      return ControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _control_input_control_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../control-input/control-input.component */
    "./src/app/shared/components/controls/control-input/control-input.component.ts");

    function ControlComponent_app_control_input_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-control-input", 2);
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r45.form)("control", ctx_r45.control);
      }
    }

    var ControlComponent =
    /*#__PURE__*/
    function () {
      function ControlComponent() {
        _classCallCheck(this, ControlComponent);
      }

      _createClass(ControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isValid",
        get: function get() {
          return this.form.controls[this.control.key].valid;
        }
      }]);

      return ControlComponent;
    }();

    ControlComponent.ɵfac = function ControlComponent_Factory(t) {
      return new (t || ControlComponent)();
    };

    ControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ControlComponent,
      selectors: [["app-control"]],
      inputs: {
        control: "control",
        form: "form"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "ngSwitch"], [3, "form", "control", 4, "ngSwitchCase"], [3, "form", "control"]],
      template: function ControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ControlComponent_app_control_input_1_Template, 1, 2, "app-control-input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.control.controlType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "input");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _control_input_control_input_component__WEBPACK_IMPORTED_MODULE_2__["ControlInputComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRyb2xzL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-control',
          templateUrl: './control.component.html',
          styleUrls: ['./control.component.scss']
        }]
      }], function () {
        return [];
      }, {
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/controls/controls.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/components/controls/controls.module.ts ***!
    \***************************************************************/

  /*! exports provided: ControlsModule */

  /***/
  function srcAppSharedComponentsControlsControlsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsModule", function () {
      return ControlsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _control_input_control_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./control-input/control-input.component */
    "./src/app/shared/components/controls/control-input/control-input.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _control_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./control/control.component */
    "./src/app/shared/components/controls/control/control.component.ts");

    var ControlsModule = function ControlsModule() {
      _classCallCheck(this, ControlsModule);
    };

    ControlsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ControlsModule
    });
    ControlsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ControlsModule_Factory(t) {
        return new (t || ControlsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ControlsModule, {
        declarations: [_control_input_control_input_component__WEBPACK_IMPORTED_MODULE_2__["ControlInputComponent"], _control_control_component__WEBPACK_IMPORTED_MODULE_4__["ControlComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        exports: [_control_control_component__WEBPACK_IMPORTED_MODULE_4__["ControlComponent"], _control_input_control_input_component__WEBPACK_IMPORTED_MODULE_2__["ControlInputComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_control_input_control_input_component__WEBPACK_IMPORTED_MODULE_2__["ControlInputComponent"], _control_control_component__WEBPACK_IMPORTED_MODULE_4__["ControlComponent"]],
          exports: [_control_control_component__WEBPACK_IMPORTED_MODULE_4__["ControlComponent"], _control_input_control_input_component__WEBPACK_IMPORTED_MODULE_2__["ControlInputComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "fas", "fa-search", "header__search"], ["type", "text", "placeholder", "Search for a contact", 1, "header__input"], [1, "fas", "fa-bell", "header__notifications"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid #EBEFF2;\n  background-color: var(--white);\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  padding: 0 35px;\n}\n\n.header__input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  padding-left: 12px;\n  font-weight: normal;\n  font-size: 12px;\n}\n\n.header__input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--gray);\n}\n\n.header__input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: var(--gray);\n}\n\n.header__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray);\n}\n\n.header__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.header__search[_ngcontent-%COMP%] {\n  padding: 23px 2px 0;\n  font-size: 13px;\n  color: #C2CFE0;\n}\n\n.header__notifications[_ngcontent-%COMP%] {\n  padding: 23px 4px 0;\n  font-size: 16px;\n  color: #C2CFE0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURGQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERkE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAzNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyX19pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmhlYWRlcl9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2lucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyX19zZWFyY2gge1xyXG4gIHBhZGRpbmc6IDIzcHggMnB4IDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjQzJDRkUwO1xyXG59XHJcblxyXG4uaGVhZGVyX19ub3RpZmljYXRpb25zIHtcclxuICBwYWRkaW5nOiAyM3B4IDRweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI0MyQ0ZFMDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDM1cHg7XG59XG5cbi5oZWFkZXJfX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5oZWFkZXJfX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbn1cblxuLmhlYWRlcl9faW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGVhZGVyX19zZWFyY2gge1xuICBwYWRkaW5nOiAyM3B4IDJweCAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjQzJDRkUwO1xufVxuXG4uaGVhZGVyX19ub3RpZmljYXRpb25zIHtcbiAgcGFkZGluZzogMjNweCA0cHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0MyQ0ZFMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);

        this.compact = false;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.compact = !this.compact;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 78,
      vars: 2,
      consts: [[1, "sidebar"], [1, "sidebar__header"], [1, "sidebar__title"], [1, "full"], [1, "short"], [1, "sidebar__subtitle"], [1, "sidebar__body"], [1, "sidebar__user"], [1, "sidebar__avatar-wrapper"], ["src", "//style.anu.edu.au/_anu/4/images/placeholders/person.png", "alt", "", 1, "sidebar__avatar"], [1, "sidebar__name-container"], [1, "sidebar__name"], [1, "sidebar__email"], [1, "sidebar__nav"], [1, "sidebar__item"], ["name", "box", 1, "sidebar__icon"], ["href", "./dashboard.html", 1, "sidebar__item-text"], ["routerLinkActive", "active", 1, "sidebar__item"], ["name", "calendar", 1, "sidebar__icon"], ["routerLink", "calendar", 1, "sidebar__item-text"], ["href", "./chat.html", 1, "sidebar__item-text"], ["name", "inbox", 1, "sidebar__icon"], ["href", "./mail.html", 1, "sidebar__item-text"], ["name", "user", 1, "sidebar__icon"], ["routerLink", "patients", 1, "sidebar__item-text"], ["name", "folder", 1, "sidebar__icon"], ["href", "./files.html", 1, "sidebar__item-text"], ["name", "clipboard", 1, "sidebar__icon"], ["href", "./tasks.html", 1, "sidebar__item-text"], [1, "sidebar__submenu"], [1, "sidebar__submenu-item", "task-active"], [1, "sidebar__submenu-item", "task-completed"], [1, "sidebar__submenu-item", "task-ended"], ["name", "package", 1, "sidebar__icon"], ["routerLink", "stock", 1, "sidebar__item-text"], ["routerLink", "employees", 1, "sidebar__item-text"], [1, "sidebar__footer"], ["name", "aperture", 1, "sidebar__icon"], [1, "sidebar__item-text"], ["name", "help-circle", 1, "sidebar__icon"], [1, "sidebar__item", "sidebar__toggle", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "currentColor", "stroke", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ELEGIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "EL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Clinic CRM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sierra Ferguson ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " s.ferguson@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i-feather", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i-feather", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i-feather", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0427\u0430\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i-feather", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Mail ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i-feather", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u041F\u0430\u0446\u0438\u0435\u043D\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i-feather", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0424\u0430\u0439\u043B\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i-feather", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u0417\u0430\u0434\u0430\u0447\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Active ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Completed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Ended ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i-feather", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0421\u043A\u043B\u0430\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i-feather", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i-feather", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i-feather", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_73_listener() {
            return ctx.toggleSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Toggle sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("compact", ctx.compact);
        }
      },
      directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);\n  max-width: 256px;\n  min-width: 256px;\n  height: 100vh;\n  overflow-y: auto;\n  background-color: var(--white);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar__header[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  height: 60px;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.sidebar__body[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n}\n\n.sidebar__footer[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  border-top: 1px solid #EBEFF2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.sidebar__title[_ngcontent-%COMP%] {\n  font-family: Open Sans, serif;\n  font-weight: 600;\n  font-size: 24px;\n  color: var(--accent-blue);\n  margin: 0;\n}\n\n.sidebar__subtitle[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0;\n}\n\n.sidebar__title[_ngcontent-%COMP%]   .short[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.sidebar__user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n.sidebar__avatar[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  border: 1px solid rgba(255, 255, 255, 0);\n  width: 46px;\n  height: 46px;\n}\n\n.sidebar__avatar-wrapper[_ngcontent-%COMP%] {\n  border: 2px solid rgba(255, 255, 255, 0);\n  border-radius: 100%;\n  height: 50px;\n  width: 50px;\n}\n\n.active[_ngcontent-%COMP%]   .sidebar__avatar-wrapper[_ngcontent-%COMP%] {\n  border-color: var(--accent-blue);\n}\n\n.sidebar__name-container[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n\n.sidebar__email[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  color: var(--gray);\n}\n\n.sidebar__name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--black);\n  margin-bottom: 5px;\n}\n\n.sidebar__item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px 0;\n  align-items: flex-start;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.sidebar__item.active[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.sidebar__item-text[_ngcontent-%COMP%] {\n  color: var(--dark-blue);\n  margin-left: 16px;\n  font-weight: 500;\n  font-size: 13px;\n  text-decoration: none;\n}\n\n.active[_ngcontent-%COMP%]   .sidebar__item-text[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.sidebar__icon[_ngcontent-%COMP%] {\n  width: 20px;\n  min-width: 20px;\n  height: 20px;\n  color: #C2CFE0;\n}\n\n.sidebar__item.active[_ngcontent-%COMP%]   .sidebar__icon[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.sidebar__submenu[_ngcontent-%COMP%] {\n  color: var(--dark-blue);\n  overflow: hidden;\n  list-style-type: none;\n  height: 0;\n  padding: 0;\n}\n\n.active[_ngcontent-%COMP%]   .sidebar__submenu[_ngcontent-%COMP%] {\n  height: inherit;\n  padding: 5px 0 0 16px;\n}\n\n.sidebar__submenu-item[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-top: 8px;\n  position: relative;\n}\n\n.sidebar__submenu-item[_ngcontent-%COMP%]:before {\n  width: 8px;\n  height: 8px;\n  display: block;\n  content: \"\";\n  border-radius: 100%;\n  position: absolute;\n  top: calc(50% - 4px);\n  box-sizing: border-box;\n  left: -16px;\n}\n\n.email-scheduled[_ngcontent-%COMP%]:before {\n  border: 2px solid #885AF8;\n}\n\n.email-sent[_ngcontent-%COMP%]:before, .task-completed[_ngcontent-%COMP%]:before, .contact-new[_ngcontent-%COMP%]:before, .deal-high[_ngcontent-%COMP%]:before {\n  border: 2px solid #2ED47A;\n}\n\n.email-archived[_ngcontent-%COMP%]:before, .task-ended[_ngcontent-%COMP%]:before, .contact-fired[_ngcontent-%COMP%]:before, .deal-urgent[_ngcontent-%COMP%]:before {\n  border: 2px solid #F7685B;\n}\n\n.email-draft[_ngcontent-%COMP%]:before, .task-active[_ngcontent-%COMP%]:before, .contact-top-rated[_ngcontent-%COMP%]:before, .deal-low[_ngcontent-%COMP%]:before {\n  border: 2px solid #FFB946;\n}\n\n.sidebar__toggle[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-top: 20px;\n  color: #C2CFE0;\n}\n\n.sidebar__toggle[_ngcontent-%COMP%]   .sidebar__item-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gray);\n}\n\n.sidebar__toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  min-width: 14px;\n  height: 14px;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n\n.sidebar.compact[_ngcontent-%COMP%] {\n  max-width: 70px;\n  min-width: 70px;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%] {\n  padding: 0;\n  justify-content: center;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__title[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__title[_ngcontent-%COMP%]   .short[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__name-container[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__user[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__item[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.compact[_ngcontent-%COMP%]   .sidebar__item-text[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXHJha2V0XFxXZWJzdG9ybVByb2plY3RzXFxtZWQtdmlldy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxnQ0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBRElBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ0RGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FETUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSx1QkFBQTtBQ0pGOztBRE9BO0VBQ0UsdUJBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2lkZWJhciB7XHJcbiAgYm94LXNoYWRvdzogNnB4IDBweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgbWF4LXdpZHRoOiAyNTZweDtcclxuICBtaW4td2lkdGg6IDI1NnB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2lkZWJhcl9faGVhZGVyIHtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFRkYyO1xyXG59XHJcblxyXG4uc2lkZWJhcl9fYm9keSB7XHJcbiAgcGFkZGluZzogMTRweCAyNHB4O1xyXG59XHJcblxyXG4uc2lkZWJhcl9fZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxNHB4IDI0cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVGRjI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5zaWRlYmFyX190aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNpZGViYXJfX3RpdGxlIC5zaG9ydCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNpZGViYXJfX3VzZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4uc2lkZWJhcl9fYXZhdGFyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG59XHJcblxyXG4uc2lkZWJhcl9fYXZhdGFyLXdyYXBwZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUgLnNpZGViYXJfX2F2YXRhci13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxufVxyXG5cclxuLnNpZGViYXJfX25hbWUtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19lbWFpbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG59XHJcblxyXG4uc2lkZWJhcl9fbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNpZGViYXJfX2l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnNpZGViYXJfX2l0ZW0uYWN0aXZlIHtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xyXG59XHJcblxyXG4uc2lkZWJhcl9faXRlbS10ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUgLnNpZGViYXJfX2l0ZW0tdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxufVxyXG5cclxuLnNpZGViYXJfX2ljb24ge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNDMkNGRTA7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtLmFjdGl2ZSAuc2lkZWJhcl9faWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFyX19zdWJtZW51IHtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFjdGl2ZSAuc2lkZWJhcl9fc3VibWVudSB7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDVweCAwIDAgMTZweDtcclxuXHJcbn1cclxuXHJcbi5zaWRlYmFyX19zdWJtZW51LWl0ZW0ge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNpZGViYXJfX3N1Ym1lbnUtaXRlbTpiZWZvcmUge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBsZWZ0OiAtMTZweDtcclxufVxyXG5cclxuLmVtYWlsLXNjaGVkdWxlZDpiZWZvcmUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM4ODVBRjg7XHJcbn1cclxuXHJcbi5lbWFpbC1zZW50OmJlZm9yZSwgLnRhc2stY29tcGxldGVkOmJlZm9yZSwgLmNvbnRhY3QtbmV3OmJlZm9yZSwgLmRlYWwtaGlnaDpiZWZvcmUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyRUQ0N0E7XHJcbn1cclxuXHJcbi5lbWFpbC1hcmNoaXZlZDpiZWZvcmUsIC50YXNrLWVuZGVkOmJlZm9yZSwgLmNvbnRhY3QtZmlyZWQ6YmVmb3JlLCAuZGVhbC11cmdlbnQ6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjRjc2ODVCO1xyXG59XHJcblxyXG4uZW1haWwtZHJhZnQ6YmVmb3JlLCAudGFzay1hY3RpdmU6YmVmb3JlLCAuY29udGFjdC10b3AtcmF0ZWQ6YmVmb3JlLCAuZGVhbC1sb3c6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjRkZCOTQ2O1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJfX3RvZ2dsZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjQzJDRkUwXHJcbn1cclxuXHJcbi5zaWRlYmFyX190b2dnbGUgLnNpZGViYXJfX2l0ZW0tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxufVxyXG5cclxuLnNpZGViYXJfX3RvZ2dsZSBzdmcge1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIG1pbi13aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5jb21wYWN0IC5zaWRlYmFyX190b2dnbGUgc3ZnIHtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXIuY29tcGFjdCB7XHJcbiAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gIG1pbi13aWR0aDogNzBweDtcclxufVxyXG5cclxuLmNvbXBhY3QgLnNpZGViYXJfX2hlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbXBhY3QgLnNpZGViYXJfX2hlYWRlciBkaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbXBhY3QgLnNpZGViYXJfX3RpdGxlIC5mdWxse1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb21wYWN0IC5zaWRlYmFyX190aXRsZSAuc2hvcnR7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uY29tcGFjdCAuc2lkZWJhcl9fbmFtZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb21wYWN0IC5zaWRlYmFyX191c2VyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbXBhY3QgLnNpZGViYXJfX2l0ZW0ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29tcGFjdCAuc2lkZWJhcl9faXRlbS10ZXh0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIi5zaWRlYmFyIHtcbiAgYm94LXNoYWRvdzogNnB4IDBweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIG1heC13aWR0aDogMjU2cHg7XG4gIG1pbi13aWR0aDogMjU2cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgei1pbmRleDogMjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlYmFyX19oZWFkZXIge1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XG59XG5cbi5zaWRlYmFyX19ib2R5IHtcbiAgcGFkZGluZzogMTRweCAyNHB4O1xufVxuXG4uc2lkZWJhcl9fZm9vdGVyIHtcbiAgcGFkZGluZzogMTRweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VCRUZGMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zaWRlYmFyX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNpZGViYXJfX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWRlYmFyX190aXRsZSAuc2hvcnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhcl9fdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5zaWRlYmFyX19hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xufVxuXG4uc2lkZWJhcl9fYXZhdGFyLXdyYXBwZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uYWN0aXZlIC5zaWRlYmFyX19hdmF0YXItd3JhcHBlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xufVxuXG4uc2lkZWJhcl9fbmFtZS1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG59XG5cbi5zaWRlYmFyX19lbWFpbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xufVxuXG4uc2lkZWJhcl9fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnNpZGViYXJfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2lkZWJhcl9faXRlbS5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xufVxuXG4uc2lkZWJhcl9faXRlbS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFjdGl2ZSAuc2lkZWJhcl9faXRlbS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcbn1cblxuLnNpZGViYXJfX2ljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjQzJDRkUwO1xufVxuXG4uc2lkZWJhcl9faXRlbS5hY3RpdmUgLnNpZGViYXJfX2ljb24ge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWJsdWUpO1xufVxuXG4uc2lkZWJhcl9fc3VibWVudSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFjdGl2ZSAuc2lkZWJhcl9fc3VibWVudSB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcGFkZGluZzogNXB4IDAgMCAxNnB4O1xufVxuXG4uc2lkZWJhcl9fc3VibWVudS1pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlYmFyX19zdWJtZW51LWl0ZW06YmVmb3JlIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSA0cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsZWZ0OiAtMTZweDtcbn1cblxuLmVtYWlsLXNjaGVkdWxlZDpiZWZvcmUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjODg1QUY4O1xufVxuXG4uZW1haWwtc2VudDpiZWZvcmUsIC50YXNrLWNvbXBsZXRlZDpiZWZvcmUsIC5jb250YWN0LW5ldzpiZWZvcmUsIC5kZWFsLWhpZ2g6YmVmb3JlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzJFRDQ3QTtcbn1cblxuLmVtYWlsLWFyY2hpdmVkOmJlZm9yZSwgLnRhc2stZW5kZWQ6YmVmb3JlLCAuY29udGFjdC1maXJlZDpiZWZvcmUsIC5kZWFsLXVyZ2VudDpiZWZvcmUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRjc2ODVCO1xufVxuXG4uZW1haWwtZHJhZnQ6YmVmb3JlLCAudGFzay1hY3RpdmU6YmVmb3JlLCAuY29udGFjdC10b3AtcmF0ZWQ6YmVmb3JlLCAuZGVhbC1sb3c6YmVmb3JlIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGQjk0Njtcbn1cblxuLnNpZGViYXJfX3RvZ2dsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjQzJDRkUwO1xufVxuXG4uc2lkZWJhcl9fdG9nZ2xlIC5zaWRlYmFyX19pdGVtLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbn1cblxuLnNpZGViYXJfX3RvZ2dsZSBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgbWluLXdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5jb21wYWN0IC5zaWRlYmFyX190b2dnbGUgc3ZnIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1ibHVlKTtcbn1cblxuLnNpZGViYXIuY29tcGFjdCB7XG4gIG1heC13aWR0aDogNzBweDtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuXG4uY29tcGFjdCAuc2lkZWJhcl9faGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb21wYWN0IC5zaWRlYmFyX19oZWFkZXIgZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29tcGFjdCAuc2lkZWJhcl9fdGl0bGUgLmZ1bGwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tcGFjdCAuc2lkZWJhcl9fdGl0bGUgLnNob3J0IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uY29tcGFjdCAuc2lkZWJhcl9fbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tcGFjdCAuc2lkZWJhcl9fdXNlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29tcGFjdCAuc2lkZWJhcl9faXRlbSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29tcGFjdCAuc2lkZWJhcl9faXRlbS10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/table/table-row/table-row.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/table/table-row/table-row.component.ts ***!
    \**************************************************************************/

  /*! exports provided: TableRowComponent */

  /***/
  function srcAppSharedComponentsTableTableRowTableRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableRowComponent", function () {
      return TableRowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["app-table-row", ""];

    function TableRowComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r52.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx_r52.id);
      }
    }

    function TableRowComponent_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 8);
      }

      if (rf & 2) {
        var item_r54 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r54 == null ? null : item_r54.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var TableRowComponent =
    /*#__PURE__*/
    function () {
      function TableRowComponent() {
        _classCallCheck(this, TableRowComponent);

        this.hasCheckbox = true;
      }

      _createClass(TableRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addItem",
        value: function addItem() {
          this.rowData.count++;
        }
      }, {
        key: "subtractItem",
        value: function subtractItem() {
          if (this.rowData.count > 0) {
            this.rowData.count--;
          }
        }
      }]);

      return TableRowComponent;
    }();

    TableRowComponent.ɵfac = function TableRowComponent_Factory(t) {
      return new (t || TableRowComponent)();
    };

    TableRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableRowComponent,
      selectors: [["", "app-table-row", ""]],
      inputs: {
        id: "id",
        hasCheckbox: "hasCheckbox",
        rowData: "rowData"
      },
      attrs: _c0,
      decls: 7,
      vars: 3,
      consts: [[3, "ngIf"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-lg", "fa-minus-square", 3, "click"], [1, "fas", "fa-lg", "fa-plus-square", 3, "click"], [1, "custom-checkbox"], ["type", "checkbox", 1, "custom-checkbox__input", 3, "id"], [1, "custom-checkbox__label", 3, "for"], [3, "innerHTML"]],
      template: function TableRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableRowComponent_ng_template_0_Template, 4, 2, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableRowComponent_td_1_Template, 1, 1, "td", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableRowComponent_Template_i_click_4_listener() {
            return ctx.subtractItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableRowComponent_Template_i_click_6_listener() {
            return ctx.addItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rowData.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.rowData.count, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["td[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--table-gray);\n  border-bottom: 1px solid #EBEFF2;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n\ni[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUtcm93L0M6XFxVc2Vyc1xccmFrZXRcXFdlYnN0b3JtUHJvamVjdHNcXG1lZC12aWV3L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHRhYmxlXFx0YWJsZS1yb3dcXHRhYmxlLXJvdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUtcm93L3RhYmxlLXJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUtcm93L3RhYmxlLXJvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcclxuICBwYWRkaW5nOiAyMHB4IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogdmFyKC0tdGFibGUtZ3JheSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XHJcbn1cclxuXHJcbnRkOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbnRkOmxhc3QtY2hpbGQgIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwidGQge1xuICBwYWRkaW5nOiAyMHB4IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRhYmxlLWdyYXkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcbn1cblxudGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbnRkOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: '[app-table-row]',
          templateUrl: './table-row.component.html',
          styleUrls: ['./table-row.component.scss']
        }]
      }], function () {
        return [];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hasCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/table/table.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/table/table.component.ts ***!
    \************************************************************/

  /*! exports provided: TableComponent */

  /***/
  function srcAppSharedComponentsTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _table_row_table_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./table-row/table-row.component */
    "./src/app/shared/components/table/table-row/table-row.component.ts");

    function TableComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableComponent_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var headerItem_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", headerItem_r49.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function TableComponent_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
      }

      if (rf & 2) {
        var row_r50 = ctx.$implicit;
        var id_r51 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", row_r50)("id", id_r51);
      }
    }

    var TableComponent =
    /*#__PURE__*/
    function () {
      function TableComponent() {
        _classCallCheck(this, TableComponent);

        this.hasCheckbox = true;
      }

      _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TableComponent;
    }();

    TableComponent.ɵfac = function TableComponent_Factory(t) {
      return new (t || TableComponent)();
    };

    TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableComponent,
      selectors: [["app-table"]],
      inputs: {
        hasCheckbox: "hasCheckbox",
        params: "params"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "report"], [1, "report__header"], [3, "ngIf"], [4, "ngFor", "ngForOf"], [1, "report__body"], ["app-table-row", "", 3, "rowData", "id", 4, "ngFor", "ngForOf"], [2, "width", "50px"], [1, "custom-checkbox"], ["type", "checkbox", "id", "0", 1, "custom-checkbox__input"], ["for", "0", 1, "custom-checkbox__label"], [1, "report__header-text", 3, "innerHTML"], ["app-table-row", "", 3, "rowData", "id"]],
      template: function TableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_ng_template_3_Template, 4, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableComponent_th_4_Template, 2, 1, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableComponent_tr_7_Template, 1, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.params.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.params.body);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _table_row_table_row_component__WEBPACK_IMPORTED_MODULE_2__["TableRowComponent"]],
      styles: [".report[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border-radius: 4px;\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  color: var(--dark-blue);\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n\n.report__header-text[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.report__header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.report__body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvQzpcXFVzZXJzXFxyYWtldFxcV2Vic3Rvcm1Qcm9qZWN0c1xcbWVkLXZpZXcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdGFibGVcXHRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyIHRoIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICBwYWRkaW5nOiAxNHB4IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcclxufVxyXG5cclxuLnJlcG9ydF9faGVhZGVyIHRoOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2hlYWRlci10ZXh0IHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2hlYWRlciB0aDpsYXN0LWNoaWxkIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ucmVwb3J0X19ib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5yZXBvcnRfX2JvZHkgdHIge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLnJlcG9ydF9fYm9keSB0cjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbiIsIi5yZXBvcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5yZXBvcnRfX2hlYWRlciB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIHBhZGRpbmc6IDE0cHggMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XG59XG5cbi5yZXBvcnRfX2hlYWRlciB0aDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxuLnJlcG9ydF9faGVhZGVyLXRleHQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5yZXBvcnRfX2hlYWRlciB0aDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG5cbi5yZXBvcnRfX2JvZHkgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5yZXBvcnRfX2JvZHkgdHIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5yZXBvcnRfX2JvZHkgdHI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-table',
          templateUrl: './table.component.html',
          styleUrls: ['./table.component.scss']
        }]
      }], function () {
        return [];
      }, {
        hasCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        params: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/icons/icons.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/icons/icons.module.ts ***!
    \**********************************************/

  /*! exports provided: IconsModule */

  /***/
  function srcAppSharedIconsIconsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsModule", function () {
      return IconsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-feather/icons */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather-icons.js");

    var icons = {
      Aperture: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Aperture"],
      HelpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["HelpCircle"],
      Box: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Box"],
      Calendar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Calendar"],
      Inbox: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Inbox"],
      User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["User"],
      Folder: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Folder"],
      Clipboard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Clipboard"],
      Package: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Package"],
      ShoppingCart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"]
    };

    var IconsModule = function IconsModule() {
      _classCallCheck(this, IconsModule);
    };

    IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconsModule
    });
    IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconsModule_Factory(t) {
        return new (t || IconsModule)();
      },
      imports: [[angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"].pick(icons)], angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, {
        imports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]],
        exports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"].pick(icons)],
          exports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\raket\WebstormProjects\med-view\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map