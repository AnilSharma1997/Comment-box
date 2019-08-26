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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");






var routes = [{
        path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<app-header></app-header>\n    <router-outlet></router-outlet>\n"

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
        this.title = 'angular';
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _app_shared_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot()
            ],
            providers: [_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar \r\n{\r\n     background-color: #404040 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBRUssb0NBQW9DO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIFxyXG57XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand ml-5\" href=\"/\">RentoMojo CommentBox WebApp</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\"><span></span></a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"btn btn-primary\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"btn btn-primary ml-2\" routerLink=\"register\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.toastr.success('Successfully Logged out');
        this.router.navigate(['/']);
        return false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pb-cmnt-container {\r\n    font-family: Lato;\r\n    margin-top: 100px;\r\n    z-index: -1;\r\n    /*margin-left: 100px;*!*/\r\n  }\r\n\r\n  .pb-cmnt-textarea {\r\n    resize: none;\r\n    padding: 20px;\r\n    height: 130px;\r\n    width: 100%;\r\n    border: 1px solid #F2F2F2;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBiLWNtbnQtY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDEwMHB4OyohKi9cclxuICB9XHJcblxyXG4gIC5wYi1jbW50LXRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjJGMkYyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pb-cmnt-container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"card card-info\">\n        <div class=\"card-block\">\n          <form [formGroup]=\"commentDescription\">\n            <div class=\"form-group\">\n              <textarea type=\"text\" formControlName=\"comment\" class=\"form-control pb-cmnt-textarea \"\n                placeholder=\"Type a Comment...\"></textarea>\n            </div>\n            <div class=\"mt-1 mb-2 ml-2\">\n              <button class=\"btn btn-danger\" (click)=\"onComment()\">Post Comment</button>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-12\" *ngFor=\"let comment of loadedComments; let i = index\">\n          <div class=\"card-block\">\n            <div class=\"row\" style=\"padding-left: 20px;\">\n              <div class=\"col-md-8\">\n                <b>{{i+1}}.&nbsp; &nbsp;{{comment.author.username}}</b> <br>\n                {{comment.text}}\n              </div>\n              <div class=\"col-md-4\">\n                <button type=\"submit\" class=\"btn btn-link\" style=\"height: 20px;color: green\"\n                  (click)=\"onUpvote(comment)\">\n                  <img src=\"../../../assets/like.png\" alt=\"\" style=\"height: 20px;\"> {{comment.upvote.length}} upvote\n                </button>\n                <button type=\"submit\" class=\"btn btn-link\" style=\"height: 20px; color: red\"\n                  (click)=\"onDownvote(comment)\">\n                  <img src=\"../../../assets/dislike.png\" alt=\"\" style=\"height: 20px;\"> {{comment.downvote.length}}\n                  downvote\n                </button>\n                <br>\n              </div>\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, formBuilder, router, toastr) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCommentList().subscribe(function (res) {
            console.log("loaded comments are ", res);
            _this.loadedComments = res;
        });
        this.commentDescription = this.formBuilder.group({
            comment: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    HomeComponent.prototype.onComment = function () {
        var _this = this;
        if (this.commentDescription.value.comment == null) {
            this.toastr.error('Comment field is required');
            return;
        }
        if (!this.authService.loggedIn()) {
            this.toastr.error('Please Login');
            this.router.navigate(['/login']);
            return;
        }
        var comment = this.commentDescription.value.comment;
        this.authService.comment(comment).subscribe(function (data) {
            console.log("comment posted ", data);
            _this.loadedComments.push(data);
            _this.toastr.success('Comment posted successfully');
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.onUpvote = function (comment) {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.toastr.error('Please Login');
            this.router.navigate(['/login']);
            return;
        }
        var user = this.authService.loadUser();
        var userId = user.id;
        if (comment.author.id == userId) {
            this.toastr.error('You cant upvote your own comment');
            return;
        }
        if (comment.downvote.includes(userId)) {
            this.toastr.error('You have already downvoted');
            return;
        }
        if (comment.upvote.includes(userId)) {
            this.toastr.error('You have already upvoted');
            return;
        }
        var upvoteData = {
            comment_id: comment._id,
            id: user.id
        };
        this.authService.commentupvote(upvoteData).subscribe(function (data) {
            _this.toastr.success('Comment upvoted successfully');
            comment.upvote.push(upvoteData.id);
            _this.commentDescription.value.comment = '';
            //this.router.navigate(['/']);
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.onDownvote = function (comment) {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.toastr.error('Please Login');
            this.router.navigate(['/login']);
            return;
        }
        var user = this.authService.loadUser();
        var userId = user.id;
        if (comment.author.id == userId) {
            this.toastr.error('You can not downvote your own comment');
            return;
        }
        if (comment.downvote.includes(userId)) {
            this.toastr.error('You have already downvoted');
            return;
        }
        if (comment.upvote.includes(userId)) {
            this.toastr.error('You have already upvoted');
            return;
        }
        var upvoteData = {
            comment_id: comment._id,
            id: user.id
        };
        this.authService.commentdownvote(upvoteData).subscribe(function (data) {
            _this.toastr.success('Comment downvoted successfully');
            comment.downvote.push(upvoteData.id);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Numans');\n/* Made with love by Mutiullah Samim*/\n.container{\r\nheight: 630px;\r\nalign-content: center;\r\nbackground-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\nfont-family: 'Numans', sans-serif;\r\n}\n.card{\r\nmargin-top: 12%;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\n.card-header h3{\r\ncolor: white;\r\n}\n#label{\r\n    color: white;\r\n}\ninput:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\n.remember{\r\ncolor: white;\r\n}\n.remember input\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\n.login_btn{\r\ncolor: black;\r\nbackground-color: #FFC312;\r\nwidth: 100px;\r\n}\n.login_btn:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\n.links{\r\ncolor: white;\r\n}\n.links a{\r\nmargin-left: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkRBQTZEO0FBRjdELHFDQUFxQztBQUlyQztBQUNBLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsaUZBQWlGO0FBQ2pGLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsaUNBQWlDO0FBQ2pDO0FBRUE7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWiw0Q0FBNEM7QUFDNUM7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLDhCQUE4Qjs7QUFFOUI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUVBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7QUFFQTtBQUNBLFlBQVk7QUFDWix1QkFBdUI7QUFDdkI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFkZSB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltKi9cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcblxyXG4uY29udGFpbmVye1xyXG5oZWlnaHQ6IDYzMHB4O1xyXG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2dldHdhbGxwYXBlcnMuY29tL3dhbGxwYXBlci9mdWxsL2EvNS9kLzU0NDc1MC5qcGcnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZHtcclxubWFyZ2luLXRvcDogMTIlO1xyXG5tYXJnaW4tYm90dG9tOiBhdXRvO1xyXG53aWR0aDogNDAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDN7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2xhYmVse1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1c3tcclxub3V0bGluZTogMCAwIDAgMCAgIWltcG9ydGFudDtcclxuYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnJlbWVtYmVye1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZW1lbWJlciBpbnB1dFxyXG57XHJcbndpZHRoOiAyMHB4O1xyXG5oZWlnaHQ6IDIwcHg7XHJcbm1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bntcclxuY29sb3I6IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG53aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG46aG92ZXJ7XHJcbmNvbG9yOiBibGFjaztcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rc3tcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlua3MgYXtcclxubWFyZ2luLWxlZnQ6IDRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row mt-5\">\n    <div class=\"col-xs-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0\">\n      <div class=\"row justify-content-center bm-canvas-min-100 align-items-center bm-header-view\">\n        <div class=\"col-xs-12 col-md-10 col-xl-8 position-relative\">\n          <form class=\"mb-6\" [formGroup]=\"LoginForm\">\n            <div class=\"form-group\">\n              <label for=\"name\">Username</label>\n              <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter your username\"\n                formControlName=\"username\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control form-control-sm\" id=\"password\" placeholder=\"Enter your password\"\n                formControlName=\"password\" />\n            </div>\n            <button class=\"btn btn-sm btn-block\" (click)=\"onLogInClick()\">\n              Log in\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>  -->\n\n<!--   <div class=\"container pt-3\">\n      <div class=\"row justify-content-sm-center\">\n        <div class=\"col-sm-6 col-md-4\">\n    \n          <div class=\"card border-info text-center\">\n            <div class=\"card-header\">\n              Sign in to continue\n            </div>\n            <div class=\"card-body\">\n              <form class=\"mb-6\" [formGroup]=\"LoginForm\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter your username\"\n                      formControlName=\"username\" />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-sm\" id=\"password\" placeholder=\"Enter your password\"\n                      formControlName=\"password\" />\n                  </div>\n                  <button class=\"btn btn-sm btn-block\" (click)=\"onLogInClick()\">\n                    Log in\n                  </button>\n                </form>\n            </div>\n          </div>\n          <a href=\"#\" class=\"float-right\">Create an account </a>\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"container\">\n      <div class=\"d-flex justify-content-center\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3>Sign In</h3>\n          </div>\n          <div class=\"card-body\">\n            <form class=\"mb-6\" [formGroup]=\"LoginForm\">\n                <div class=\"form-group\">\n                  <label for=\"name\" id=\"label\">Username</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter your username\"\n                    formControlName=\"username\" />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\" id=\"label\">Password</label>\n                  <input type=\"password\" class=\"form-control form-control-sm\" id=\"password\" placeholder=\"Enter your password\"\n                    formControlName=\"password\" />\n                </div>\n                <button class=\"btn btn-sm btn-block\" (click)=\"onLogInClick()\">\n                  Log in\n                </button>\n              </form>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"d-flex justify-content-center links\">\n              Don't have an account?<a routerLink=\"/register\">Sign Up</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.LoginForm = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLogInClick = function () {
        var _this = this;
        if (this.LoginForm.invalid) {
            return;
        }
        var loginData = {
            username: this.LoginForm.value.username,
            password: this.LoginForm.value.password
        };
        this.authService.authenticateUser(loginData).subscribe(function (response) {
            if (response['success']) {
                _this.authService.storeUserData(response['token'], response['user']);
                _this.toastr.success('Successfully Logged In');
                _this.router.navigate(['/']);
            }
            else {
                _this.toastr.error(response['msg']);
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            _this.toastr.error('Username or password is incorrect');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Numans');\n/* Made with love by Mutiullah Samim*/\n.container{\r\nheight: 630px;\r\nalign-content: center;\r\nbackground-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\nfont-family: 'Numans', sans-serif;\r\n}\n.card{\r\nmargin-top: 12%;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\n.card-header h3{\r\ncolor: white;\r\n}\n#label{\r\n    color: white;\r\n}\n.login_btn{\r\ncolor: black;\r\nbackground-color: #FFC312;\r\nwidth: 100px;\r\n}\n.login_btn:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\n.links{\r\ncolor: white;\r\n}\n.links a{\r\nmargin-left: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkRBQTZEO0FBRjdELHFDQUFxQztBQUlyQztBQUNBLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsaUZBQWlGO0FBQ2pGLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsaUNBQWlDO0FBQ2pDO0FBRUE7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWiw0Q0FBNEM7QUFDNUM7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUdBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7QUFFQTtBQUNBLFlBQVk7QUFDWix1QkFBdUI7QUFDdkI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFkZSB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltKi9cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcblxyXG4uY29udGFpbmVye1xyXG5oZWlnaHQ6IDYzMHB4O1xyXG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2dldHdhbGxwYXBlcnMuY29tL3dhbGxwYXBlci9mdWxsL2EvNS9kLzU0NDc1MC5qcGcnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZHtcclxubWFyZ2luLXRvcDogMTIlO1xyXG5tYXJnaW4tYm90dG9tOiBhdXRvO1xyXG53aWR0aDogNDAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDN7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2xhYmVse1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmxvZ2luX2J0bntcclxuY29sb3I6IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG53aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG46aG92ZXJ7XHJcbmNvbG9yOiBibGFjaztcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rc3tcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlua3MgYXtcclxubWFyZ2luLWxlZnQ6IDRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"d-flex justify-content-center\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Sign up</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"mb-6\" [formGroup]=\"registerForm\">\n          <div class=\"form-group\">\n            <label for=\"name\" id=\"label\">Name</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter your full name\"\n              formControlName=\"name\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\" id=\"label\">Username</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter your username\"\n              formControlName=\"username\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"eMail\" id=\"label\">E-Mail</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter your E-Mail address\"\n              formControlName=\"email\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\" id=\"label\">Password</label>\n            <input type=\"password\" class=\"form-control form-control-sm\" id=\"password\" placeholder=\"Enter your password\"\n              formControlName=\"password\"\n              [ngClass]=\"{\n                'border-bm-red':\n                  password.invalid &&\n                  (password.dirty || password.touched),\n                'border-bm-green':\n                  password.valid && (password.dirty || password.touched)\n              }\" />\n              <p\n              class=\"text-white mt-1\"\n              *ngIf=\"password.touched && !!password.errors?.required\"\n            >\n              This field is required\n            </p>\n          </div>\n          <button class=\"btn btn-sm btn-block\" (click)=\"onSignupClick()\">\n            Sign up\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, toastr, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.passwordRegExp = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].passwordPattern;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.passwordRegExp)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSignupClick = function () {
        var _this = this;
        // if(this.registerForm.invalid){
        //   return;
        // }
        var signupData = {
            name: this.registerForm.value.name,
            username: this.registerForm.value.username,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        };
        this.authService.registerUser(signupData).subscribe(function (response) {
            if (response['success']) {
                _this.toastr.success('You are now registered and can now login');
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error('Something went wrong');
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    //readonly baseURL = 'http://localhost:3000/';
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (userData) {
        return this.http.post('users/register', userData);
    };
    AuthService.prototype.authenticateUser = function (userData) {
        return this.http.post('users/authenticate', userData);
    };
    AuthService.prototype.loggedIn = function () {
        // console.log("logged in jwt helper ",this.jwtHelper.isTokenExpired());
        // return !this.jwtHelper.isTokenExpired();
        if (localStorage.getItem('user'))
            return true;
        else
            return false;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadUser = function () {
        var user = localStorage.getItem('user');
        return JSON.parse(user);
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getCommentList = function () {
        return this.http.get('comments');
    };
    AuthService.prototype.comment = function (comment) {
        var user = this.loadUser();
        var data = {
            text: comment,
            author: {
                id: user.id,
                username: user.username
            }
        };
        return this.http.post('comments', data);
    };
    AuthService.prototype.commentupvote = function (data) {
        var comid = data.comment_id;
        var userid = {
            id: data.id
        };
        return this.http.put('comments/upvote/' + comid, userid);
    };
    AuthService.prototype.commentdownvote = function (data) {
        var comid = data.comment_id;
        var userid = {
            id: data.id
        };
        return this.http.put('comments/downvote/' + comid, userid);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
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
    production: false,
    passwordPattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$_%^&*])(?=.{8,50}$)'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Comment-box\Comment-box\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map