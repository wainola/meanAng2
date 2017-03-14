webpackJsonp([0,3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.usuarioRegistrado = function (usuario) {
        console.log('Entre al registro'); // flag de verificacion.
        console.log("El usuario es: " + usuario);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // PARA EFECTOS DE DEPLOY ESTE NO ES LA URL QUE USAREMOS PARA HACER LA LLAMADA A LA BASE DE DATOS.
        // DESCOMENTAR PARA USAR LOCALMENTE.
        //return this.http.post('http://localhost:3000/usuarios/registroPlataforma', usuario, {headers: headers})
        // LLAMADA A LA API EN EL DEPLOY.
        return this.http.post('usuarios/registroPlataforma', usuario, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.autenticacionUsuario = function (usuario) {
        console.log("Flag autenticacion!");
        console.log("\n    " + usuario.usuario + "\n    " + usuario.password + "\n    ");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // trabajamos con observadores desde aqui.
        // PARA EFECTOS DE DEPLOY ESTE NO ES LA URL QUE USAREMOS PARA HACER LA LLAMADA A LA BASE DE DATOS.
        // DESCOMENTAR PARA USAR LOCALMENTE.
        //return this.http.post('http://localhost:3000/usuarios/autenticacion', usuario, {headers: headers})
        // LLAMADA A LA API EN EL DEPLOY.
        return this.http.post('usuarios/autenticacion', usuario, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.guardaDatosUsuario = function (token, usuario) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.tokenAutenticacion = token;
        this.usuario = usuario;
    };
    AuthService.prototype.cierreSesion = function () {
        this.tokenAutenticacion = null;
        this.usuario = null;
        localStorage.clear();
    };
    AuthService.prototype.sesionIniciada = function () {
        //chequea si JWT existe en el localStorage. Si existe, chequea si esta expirado o no.
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/auth.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentes_home_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_registro_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_dashboard_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_login_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guardias_auth_guard__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rutas; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(674),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
var rutas = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_1__componentes_home_component__["a" /* HomeComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_2__componentes_registro_component__["a" /* RegistroComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_3__componentes_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guardias_auth_guard__["a" /* AuthGuardia */]] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_4__componentes_login_component__["a" /* LoginComponent */] }
];
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/app.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(675),
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/dashboard.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(676),
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/home.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, router, flasMsg, fb) {
        this.auth = auth;
        this.router = router;
        this.flasMsg = flasMsg;
        this.fb = fb;
        this.formulario = fb.group({
            usuario: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required]
        });
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var user = {
            usuario: this.formulario.value.usuario,
            password: this.formulario.value.password
        };
        console.log("\n    " + user.usuario + "\n    " + user.password + "\n    ");
        this.auth.autenticacionUsuario(user)
            .subscribe(function (data) {
            if (data.success) {
                //generacion del servicio de autenticacion.
                console.log("Exito!");
                _this.auth.guardaDatosUsuario(data.token, data.usuario);
                _this.flasMsg.show("Sesion iniciada", { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log("No exito!");
                _this.flasMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/home']);
            }
        });
        this.formulario.reset();
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(677),
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/login.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_validacion_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_auth_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistroComponent = (function () {
    function RegistroComponent(fb, validacion, flashMsge, auth, router) {
        this.fb = fb;
        this.validacion = validacion;
        this.flashMsge = flashMsge;
        this.auth = auth;
        this.router = router;
        this.formulario = fb.group({
            nombre: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            usuario: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            direccion: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            correo: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    RegistroComponent.prototype.addData = function () {
        var _this = this;
        if (!this.validacion.validacionEmail(this.formulario.value.correo)) {
            this.flashMsge.show('Ingrese un correo valido!', { cssClass: 'alert-danger', timeout: 2000 });
            this.formulario.reset();
        }
        if (!this.validacion.validacionData(this.formulario.value)) {
            this.flashMsge.show("Algunos de los campos no estan llenos", { cssClass: "alert-danger", timeout: 2000 });
            this.formulario.reset();
        }
        else {
            var usuario = {
                nombre: this.formulario.value.nombre,
                usuario: this.formulario.value.usuario,
                direccion: this.formulario.value.direccion,
                correo: this.formulario.value.correo,
                password: this.formulario.value.password
            };
            this.auth.usuarioRegistrado(usuario)
                .subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                    _this.flashMsge.show("Registrado Exitosamente!", { cssClass: 'alert-success', timeout: 2000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    console.log(data);
                    _this.flashMsge.show('Algo paso', { cssClass: 'alert-danger', timeout: 2000 });
                    _this.router.navigate(['/register']);
                }
            });
            this.formulario.reset();
        }
    };
    RegistroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registro',
            inputs: [],
            template: __webpack_require__(679),
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_validacion_service__["a" /* ValidacionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__servicios_validacion_service__["a" /* ValidacionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__servicios_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], RegistroComponent);
    return RegistroComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/registro.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardia; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardia = (function () {
    function AuthGuardia(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardia.prototype.canActivate = function () {
        if (this.auth.sesionIniciada()) {
            // si esto es true significa que estamos logeados.
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardia = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuardia);
    return AuthGuardia;
    var _a, _b;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/auth.guard.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidacionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidacionService = (function () {
    function ValidacionService() {
    }
    ValidacionService.prototype.validacionEmail = function (correo) {
        // usando expresion regular para validar el correo.
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(correo);
    };
    ValidacionService.prototype.validacionData = function (data) {
        if (data.nombre === undefined || data.usuario === undefined || data.direccion === undefined || data.correo === undefined || data.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidacionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidacionService);
    return ValidacionService;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/validacion.service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 396;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(513);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/main.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_home_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_registro_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_nav_bar_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_dashboard_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_login_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servicios_validacion_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__servicios_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guardias_auth_guard__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__componentes_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__componentes_registro_component__["a" /* RegistroComponent */],
                __WEBPACK_IMPORTED_MODULE_9__componentes_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__componentes_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__componentes_login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* rutas */]),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            // aca añadimos los servicios que generamos.
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__servicios_validacion_service__["a" /* ValidacionService */],
                __WEBPACK_IMPORTED_MODULE_13__servicios_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__guardias_auth_guard__["a" /* AuthGuardia */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = (function () {
    function NavBarComponent(router, flashMsge, auth) {
        this.router = router;
        this.flashMsge = flashMsge;
        this.auth = auth;
    }
    NavBarComponent.prototype.onLogedOut = function () {
        this.auth.cierreSesion();
        this.flashMsge.show('Has cerrado sesión.', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/home']);
        return false;
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(678),
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/nav-bar.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/environment.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/nicolasriquelmeguzman/Documents/Proyectos/webChaloAng/MEAN/angular-cliente/src/polyfills.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-nav-bar></app-nav-bar>\n    <!-- para usar los flash messages-->\n    <flash-messages></flash-messages>\n    <!-- para usar las rutas -->\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\" />\n  <link rel=\"stylesheet\" href=\"./assets/dashboardStyle.css\" />\n</head>\n\n<div class=\"container-fluid\" id=\"main\">\n    <div class=\"row row-offcanvas row-offcanvas-left\">\n        <div class=\"col-md-3 col-lg-2 sidebar-offcanvas\" id=\"sidebar\" role=\"navigation\">\n            <ul class=\"nav flex-column pl-1\">\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Overview</a></li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#submenu1\" data-toggle=\"collapse\" data-target=\"#submenu1\">Reports ▾</a>\n                    <ul class=\"list-unstyled flex-column pl-3 collapse\" id=\"submenu1\" aria-expanded=\"false\">\n                       <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Sub item</a></li>\n                       <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Sub item</a></li>\n                    </ul>\n                </li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Analytics</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Export</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Nav item</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Nav item</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Another</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Nav item</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">One more</a></li>\n            </ul>\n        </div>\n        <!--/col-->\n\n        <div class=\"col-md-9 col-lg-10 main\">\n\n            <!--toggle sidebar button\n            <p class=\"hidden-md-up\">\n                <button type=\"button\" class=\"btn btn-primary-outline btn-sm\" data-toggle=\"offcanvas\"><i class=\"fa fa-chevron-left\"></i> Menu</button>\n            </p>-->\n\n            <h1 class=\"display-2 hidden-xs-down\">\n            Bootstrap 4 Dashboard\n            </h1>\n            <p class=\"lead hidden-xs-down\">(with off-canvas sidebar, based on BS v4 alpha 6)</p>\n\n            <div class=\"alert alert-warning fade collapse\" role=\"alert\" id=\"myAlert\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                    <span class=\"sr-only\">Close</span>\n                </button>\n                <strong>Holy guacamole!</strong> It's free.. this is an example theme.\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-xl-3 col-lg-6\">\n                    <div class=\"card card-inverse card-success\">\n                        <div class=\"card-block bg-success\">\n                            <div class=\"rotate\">\n                                <i class=\"fa fa-user fa-5x\"></i>\n                            </div>\n                            <h6 class=\"text-uppercase\">Users</h6>\n                            <h1 class=\"display-1\">134</h1>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6\">\n                    <div class=\"card card-inverse card-danger\">\n                        <div class=\"card-block bg-danger\">\n                            <div class=\"rotate\">\n                                <i class=\"fa fa-list fa-4x\"></i>\n                            </div>\n                            <h6 class=\"text-uppercase\">Posts</h6>\n                            <h1 class=\"display-1\">87</h1>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6\">\n                    <div class=\"card card-inverse card-info\">\n                        <div class=\"card-block bg-info\">\n                            <div class=\"rotate\">\n                                <i class=\"fa fa-twitter fa-5x\"></i>\n                            </div>\n                            <h6 class=\"text-uppercase\">Tweets</h6>\n                            <h1 class=\"display-1\">125</h1>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-6\">\n                    <div class=\"card card-inverse card-warning\">\n                        <div class=\"card-block bg-warning\">\n                            <div class=\"rotate\">\n                                <i class=\"fa fa-share fa-5x\"></i>\n                            </div>\n                            <h6 class=\"text-uppercase\">Shares</h6>\n                            <h1 class=\"display-1\">36</h1>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--/row-->\n\n            <hr>\n\n            <div class=\"row placeholders mb-3\">\n                <div class=\"col-6 col-sm-3 placeholder text-center\">\n                    <img src=\"//placehold.it/200/dddddd/fff?text=1\" class=\"center-block img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n                    <h4>Responsive</h4>\n                    <span class=\"text-muted\">Device agnostic</span>\n                </div>\n                <div class=\"col-6 col-sm-3 placeholder text-center\">\n                    <img src=\"//placehold.it/200/e4e4e4/fff?text=2\" class=\"center-block img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n                    <h4>Frontend</h4>\n                    <span class=\"text-muted\">UI / UX oriented</span>\n                </div>\n                <div class=\"col-6 col-sm-3 placeholder text-center\">\n                    <img src=\"//placehold.it/200/d6d6d6/fff?text=3\" class=\"center-block img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n                    <h4>HTML5</h4>\n                    <span class=\"text-muted\">Standards-based</span>\n                </div>\n                <div class=\"col-6 col-sm-3 placeholder text-center\">\n                    <img src=\"//placehold.it/200/e0e0e0/fff?text=4\" class=\"center-block img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n                    <h4>Framework</h4>\n                    <span class=\"text-muted\">CSS and JavaScript</span>\n                </div>\n            </div>\n\n            <a id=\"features\"></a>\n            <hr>\n            <p class=\"lead\">\n                Are you ready for Bootstap 4? It's the 4th generation of this popular responsive framework. Bootstrap 4 will include some interesting new features such as 5 grid sizes (now including xl), cards, `em` sizing, CSS normalization (reboot) and larger font\n                sizes.\n            </p>\n\n            <hr>\n            <div class=\"row mb-3\">\n                <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"card\">\n                        <img class=\"card-img-top img-responsive\" src=\"//placehold.it/740x180/bbb/fff?text=...\" alt=\"Card image cap\">\n                        <div class=\"card-block\">\n                            <h4 class=\"card-title\">Card title</h4>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n                        </div>\n                    </div>\n\n                    <div class=\"card card-inverse bg-inverse mt-3\">\n                        <div class=\"card-block\">\n                            <h3 class=\"card-title\">Dark background</h3>\n                            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                            <a href=\"#\" class=\"btn btn-outline-secondary\">Outline</a>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-lg-9 col-md-8\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                            <thead class=\"thead-inverse\">\n                                <tr>\n                                    <th>#</th>\n                                    <th>Label</th>\n                                    <th>Header</th>\n                                    <th>Column</th>\n                                    <th>Data</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1,001</td>\n                                    <td>responsive</td>\n                                    <td>bootstrap</td>\n                                    <td>cards</td>\n                                    <td>grid</td>\n                                </tr>\n                                <tr>\n                                    <td>1,002</td>\n                                    <td>rwd</td>\n                                    <td>web designers</td>\n                                    <td>theme</td>\n                                    <td>responsive</td>\n                                </tr>\n                                <tr>\n                                    <td>1,003</td>\n                                    <td>free</td>\n                                    <td>open-source</td>\n                                    <td>download</td>\n                                    <td>template</td>\n                                </tr>\n                                <tr>\n                                    <td>1,003</td>\n                                    <td>frontend</td>\n                                    <td>developer</td>\n                                    <td>coding</td>\n                                    <td>card panel</td>\n                                </tr>\n                                <tr>\n                                    <td>1,004</td>\n                                    <td>migration</td>\n                                    <td>bootstrap 4</td>\n                                    <td>mobile-first</td>\n                                    <td>design</td>\n                                </tr>\n                                <tr>\n                                    <td>1,005</td>\n                                    <td>navbar</td>\n                                    <td>sticky</td>\n                                    <td>jumbtron</td>\n                                    <td>header</td>\n                                </tr>\n                                <tr>\n                                    <td>1,006</td>\n                                    <td>collapse</td>\n                                    <td>affix</td>\n                                    <td>submenu</td>\n                                    <td>footer</td>\n                                </tr>\n                                <tr>\n                                    <td>1,007</td>\n                                    <td>layout</td>\n                                    <td>examples</td>\n                                    <td>themes</td>\n                                    <td>grid</td>\n                                </tr>\n                                <tr>\n                                    <td>1,008</td>\n                                    <td>migration</td>\n                                    <td>bootstrap 4</td>\n                                    <td>flexbox</td>\n                                    <td>design</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <!--/row-->\n\n            <a id=\"more\"></a>\n            <hr>\n            <h2 class=\"sub-header\">Use card decks for equal height rows of cards</h2>\n            <div class=\"card-deck-wrapper mb-3\">\n                <div class=\"card-deck\">\n                    <div class=\"card card-inverse card-success text-center\">\n                        <div class=\"card-block\">\n                            <blockquote class=\"card-blockquote\">\n                                <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>\n                                <footer>Makes flexible layouts <cite title=\"Source Title\">Faster</cite></footer>\n                            </blockquote>\n                        </div>\n                    </div>\n                    <div class=\"card card-inverse card-danger text-center\">\n                        <div class=\"card-block\">\n                            <blockquote class=\"card-blockquote\">\n                                <p>The Bootstrap 3.x element that was called \"Panel\" before, is now called a \"Card\".</p>\n                                <footer>All of this makes more <cite title=\"Source Title\">Sense</cite></footer>\n                            </blockquote>\n                        </div>\n                    </div>\n                    <div class=\"card card-inverse card-warning text-center\">\n                        <div class=\"card-block\">\n                            <blockquote class=\"card-blockquote\">\n                                <p>There are also some interesting new text classes for uppercase and capitalize.</p>\n                                <footer>These handy utilities make it <cite title=\"Source Title\">Easy</cite></footer>\n                            </blockquote>\n                        </div>\n                    </div>\n                    <div class=\"card card-inverse card-info text-center\">\n                        <div class=\"card-block\">\n                            <blockquote class=\"card-blockquote\">\n                                <p>If you want to use cool icons in Bootstrap 4, you'll have to find your own such as Font Awesome or Ionicons.</p>\n                                <footer>The Glyphicons are not <cite title=\"Source Title\">Included</cite></footer>\n                            </blockquote>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--/row-->\n\n            <a id=\"flexbox\"></a>\n            <hr>\n            <h2>Masonry-style grid columns</h2>\n            <h6>with Bootstrap 4 flexbox</h6>\n\n            <div class=\"card-columns mb-3\">\n                <div class=\"card\">\n                    <img class=\"card-img-top img-responsive\" src=\"//placehold.it/600x200/444/fff?text=...\" alt=\"Card image cap\">\n                    <div class=\"card-block\">\n                        <h4 class=\"card-title\">Card title that wraps to a new line</h4>\n                        <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                    </div>\n                </div>\n                <div class=\"card card-block\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>Bootstrap 4 will be lighter and easier to customize.</p>\n                        <footer>\n                            <small class=\"text-muted\">\n                              Someone famous like <cite title=\"Source Title\">Mark Otto</cite>\n                            </small>\n                        </footer>\n                    </blockquote>\n                </div>\n                <div class=\"card\">\n                    <img class=\"card-img-top img-responsive\" src=\"//placehold.it/600x200/bbb/fff?text=...\" alt=\"Card image cap\">\n                    <div class=\"card-block\">\n                        <h4 class=\"card-title\">Card title</h4>\n                        <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                        <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                    </div>\n                </div>\n                <div class=\"card card-block card-inverse card-primary text-center\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>\n                        <footer>\n                            <small>\n                              Someone famous in <cite title=\"Source Title\">Bootstrap</cite>\n                            </small>\n                        </footer>\n                    </blockquote>\n                </div>\n                <div class=\"card card-block text-center\">\n                    <h4 class=\"card-title\">Clever heading</h4>\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 5 mins ago</small></p>\n                </div>\n                <div class=\"card\">\n                    <img class=\"card-img img-responsive\" src=\"//placehold.it/600x200/777/fff?text=...\" alt=\"Card image\">\n                </div>\n                <div class=\"card card-block text-right\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>There are also some interesting new text classes to uppercase or capitalize.</p>\n                        <footer>\n                            <small class=\"text-muted\">\n                              Someone famous in <cite title=\"Source Title\">Bootstrap</cite>\n                            </small>\n                        </footer>\n                    </blockquote>\n                </div>\n                <div class=\"card card-block\">\n                    <h4 class=\"card-title\">Responsive</h4>\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-block\">\n                        <ul class=\"list-unstyled\">\n                            <li class=\"text-capitalize\"><code class=\"text-lowercase\">text-capitalize</code> Capitalize each word</li>\n                            <li class=\"text-uppercase\"><code class=\"text-lowercase\">text-uppercase</code> Uppercase text</li>\n                            <li class=\"text-success\"><code>text-success</code> Contextual colors for text</li>\n                            <li><code>text-muted</code> <span class=\"text-muted\">Lighten with muted</span></li>\n                            <li><code>text-info</code> <span class=\"text-muted\">Info text color</span></li>\n                            <li><code>text-danger</code> <span class=\"text-muted\">Danger text color</span></li>\n                            <li><code>text-warning</code> <span class=\"text-muted\">Warning text color</span></li>\n                            <li><code>text-primary</code> <span class=\"text-primary\">Primary text color</span></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"card card-block\">\n                    <h4 class=\"card-title\">Heading</h4>\n                    <p class=\"card-text\">So now that you've seen some of what Bootstrap 4 has to offer, are you going to give it a try?</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 12 mins ago</small></p>\n                </div>\n            </div>\n            <!--/card-columns-->\n\n            <a id=\"layouts\"></a>\n            <hr>\n            <h2 class=\"sub-header\">Interesting layouts and elements</h2>\n            <div class=\"row mb-3\">\n                <div class=\"col-lg-6\">\n\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Bye .well, .panel &amp; .thumbnail\n                        </div>\n                        <div class=\"card-block\">\n                            <h4 class=\"card-title\">Replaced with .card</h4>\n                            <p class=\"card-text\">All of these Bootstrap 3.x components have been dropped entirely for the new card component.</p>\n                            <button type=\"button\" class=\"btn btn-secondary btn-lg\">Large</button>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-lg-6\">\n                    <!-- Nav tabs -->\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" href=\"#home1\" role=\"tab\" data-toggle=\"tab\">Home</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#profile1\" role=\"tab\" data-toggle=\"tab\">Profile</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#messages1\" role=\"tab\" data-toggle=\"tab\">Messages</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#settings1\" role=\"tab\" data-toggle=\"tab\">Settings</a>\n                        </li>\n                    </ul>\n\n                    <!-- Tab panes -->\n                    <div class=\"tab-content\">\n                        <br>\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home1\">\n                            <h4>Home</h4>\n                            <p>\n                                1. These Bootstrap 4 Tabs work basically the same as the Bootstrap 3.x tabs.\n                                <br>\n                                <br>\n                                <button class=\"btn btn-primary-outline btn-lg\">Wow</button>\n                            </p>\n                        </div>\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile1\">\n                            <h4>Pro</h4>\n                            <p>\n                                2. Tabs are helpful to hide or collapse some addtional content.\n                            </p>\n                        </div>\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"messages1\">\n                            <h4>Messages</h4>\n                            <p>\n                                3. You can really put whatever you want into the tab pane.\n                            </p>\n                        </div>\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"settings1\">\n                            <h4>Settings</h4>\n                            <p>\n                                4. Some of the Bootstrap 3.x components like well and panel have been dropped for the new card component.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"col-lg-6\">\n                    <div class=\"card card-default card-block\">\n                        <ul id=\"tabsJustified\" class=\"nav nav-tabs nav-justified\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"\" data-target=\"#tab1\" data-toggle=\"tab\">List</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"\" data-target=\"#tab2\" data-toggle=\"tab\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"\" data-target=\"#tab3\" data-toggle=\"tab\">More</a>\n                            </li>\n                        </ul>\n                        <!--/tabs-->\n                        <br>\n                        <div id=\"tabsJustifiedContent\" class=\"tab-content\">\n                            <div class=\"tab-pane\" id=\"tab1\">\n                                <div class=\"list-group\">\n                                    <a href=\"\" class=\"list-group-item\"><span class=\"float-right label label-success\">51</span> Home Link</a>\n                                    <a href=\"\" class=\"list-group-item\"><span class=\"float-right label label-success\">8</span> Link 2</a>\n                                    <a href=\"\" class=\"list-group-item\"><span class=\"float-right label label-success\">23</span> Link 3</a>\n                                    <a href=\"\" class=\"list-group-item text-muted\">Link n..</a>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane active\" id=\"tab2\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-7\">\n                                        <h4>Profile Section</h4>\n                                        <p>Imagine creating this simple user profile inside a tab card.</p>\n                                    </div>\n                                    <div class=\"col-sm-5\"><img src=\"//placehold.it/170\" class=\"float-right img-responsive img-rounded\"></div>\n                                </div>\n                                <hr>\n                                <a href=\"javascript:;\" class=\"btn btn-info btn-block\">Read More Profiles</a>\n                                <div class=\"spacer5\"></div>\n                            </div>\n                            <div class=\"tab-pane\" id=\"tab3\">\n                                <div class=\"list-group\">\n                                    <a href=\"\" class=\"list-group-item\"><span class=\"float-right label label-info label-pill\">44</span> <code>.panel</code> is now <code>.card</code></a>\n                                    <a href=\"\" class=\"list-group-item\"><span class=\"float-right label label-info label-pill\">8</span> <code>.nav-justified</code> is deprecated</a>\n                                    <a href=\"\" class=\"list-group-item\"><span class=\"float-right label label-info label-pill\">23</span> <code>.badge</code> is now <code>.label-pill</code></a>\n                                    <a href=\"\" class=\"list-group-item text-muted\">Message n..</a>\n                                </div>\n                            </div>\n                        </div>\n                        <!--/tabs content-->\n                    </div><!--/card-->\n                </div><!--/col-->\n                <div class=\"col-lg-6\">\n                    <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                      <div class=\"card\">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingOne\"  data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                              Collapsible Group Item #1\n                        </div>\n                        <div id=\"collapseOne\" class=\"card-block collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                             <p>This is a Bootstrap 4 accordion that uses the <code>.card</code> classes instead of <code>.panel</code>. The single-open section aspect is not working because the parent option (dependent on .panel) has not yet been finalized in BS 4 alpha. </p>\n                        </div>\n                        <div class=\"card-header\" role=\"tab\" id=\"headingTwo\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                              Collapsible Group Item #2\n                        </div>\n                        <div id=\"collapseTwo\" class=\"card-block collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                             <p>Just like it's predecesor, Bootstrap 4 is mobile-first so that you start by designing for smaller devices such as smartphones and tablets, then proceed to laptop and desktop layouts.</p>\n                        </div>\n                        <div class=\"card-header\" role=\"tab\" id=\"headingThree\"  data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                              Collapsible Group Item #3\n                        </div>\n                        <div id=\"collapseThree\" class=\"card-block collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                             <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles.</p>\n                        </div>\n                      </div>\n                    </div>\n                </div><!--/col-->\n            </div><!--/row-->\n\n        </div>\n        <!--/main col-->\n    </div>\n\n</div>\n<!--/.container-->\n<footer class=\"container-fluid\">\n    <p class=\"text-right small\">©2016-2017 Company</p>\n</footer>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Modal</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                    <span class=\"sr-only\">Close</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                This is a dashboard layout for Bootstrap 4. This is an example of the Modal component which you can use to show content. Any content can be placed inside the modal and it can use the Bootstrap grid classes.\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary-outline\" data-dismiss=\"modal\">OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n    <!--scripts loaded here-->\n    \n    <script src=\"//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js\"></script>\n    <script src=\"//cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js\"></script>\n    <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js\"></script>\n    \n    <script src=\"./assets/scripts.js\"></script>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col\">\n            <div class=\"jumbotron\">\n                <h1 class=\"display-3 text-center\">CMS</h1>\n                <p class=\"lead text-center\">CMS, manejador de contenidos armado con <a href=\"https://expressjs.com/\">Express</a>, <a href=\"https://www.mongodb.com/\">Mongo</a> y <a href=\"https://angular.io/\">Angular</a></p>\n                <h3>Caracteristicas:</h3>\n                <ul>\n                    <li>Sistema de login con autenticacion aplicando JWT.</li>\n                    <li>Sistema de gestion interna de data con comunicación directa con la API.</li>\n                    <li>Dashboard de visualización de los datos ingresados.</li>\n                    <li>Extensibilidad</li>\n                </ul>\n                <h3>Soon:</h3>\n                <ul>\n                    <li>Integración con aplicación de escritorio a traves de <a href=\"https://electron.atom.io/\">Electron</a>.</li>\n                    <li>Visualización de datos con libreria <a href=\"https://d3js.org/\">D3.js</a>.</li>\n                </ul>\n\n                <div class=\"row\">\n                    <div class=\"col text-center\">\n                        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</button>\n                        <button type=\"button\" class=\"btn btn-success\"[routerLink]=\"['/register']\">Registrate</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div class=\"jumbotron mt-3\">\n            <h2 class=\"display-4\">Iniciar sesión</h2>\n            <form [formGroup]=\"formulario\" (submit)=\"onLogin()\">\n\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"\" value=\"\" placeholder=\"usuario\" class=\"form-control\" formControlName=\"usuario\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" placeholder=\"contraseña\" class=\"form-control\" formControlName=\"password\">\n                </div>\n\n                <div class=\"row justify-content-center\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Iniciar Sesión</button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse\" style=\"background-color: #303F9F;\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Clases</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    \n    <ul class=\"navbar-nav ml-auto\">\n      <!-- home -->\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a [routerLink]=\"['/']\" class=\"nav-link\"><i class=\"fa fa-home fa-2x\" aria-hidden=\"true\"></i></a>\n      </li>\n      <!-- Registro -->\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"!auth.sesionIniciada()\">\n        <a [routerLink]=\"['/register']\" class=\"nav-link\"><i class=\"fa fa-file-text fa-2x\" aria-hidden=\"true\"></i></a>\n      </li>\n      <!-- Dashboard -->\n      <li class=\"nav-item\" *ngIf=\"auth.sesionIniciada()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a [routerLink]=\"['/dashboard']\" class=\"nav-link\"><i class=\"fa fa-user fa-2x\" aria-hidden=\"true\"></i></a>\n      </li>\n      <!-- Cierre de sesion-->\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"auth.sesionIniciada()\">\n        <a [routerLink]=\"['/']\" class=\"nav-link\" (click)=\"onLogedOut()\"><i class=\"fa fa-sign-out fa-2x\" aria-hidden=\"true\"></i></a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row  justify-content-center\">\n        <div class=\"col\">\n            <div class=\"jumbotron mt-3\">\n            <h2 class=\"display-4 text\">Registro</h2>\n            <!-- formulario de registro -->\n            <form [formGroup]=\"formulario\" (submit)=\"addData()\">\n\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"nombre\" value=\"\" placeholder=\"nombre\" class=\"form-control\" formControlName=\"nombre\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"usuario\" value=\"\" placeholder=\"usuario\" class=\"form-control\" formControlName=\"usuario\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"direccion\" value=\"\" placeholder=\"direccion\" class=\"form-control\" formControlName=\"direccion\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"correo\" value=\"\" placeholder=\"correo\" class=\"form-control\" formControlName=\"correo\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" name=\"password\" value=\"\" placeholder=\"contraseña\" class=\"form-control\" formControlName=\"password\">\n                </div>\n\n                <div class=\"row justify-content-center\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Registrar</button>\n                </div>\n\n            </form>\n        </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(397);


/***/ })

},[699]);
//# sourceMappingURL=main.bundle.map