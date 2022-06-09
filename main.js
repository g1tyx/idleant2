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

/***/ "./src/app/action-group/action-group.component.html":
/*!**********************************************************!*\
  !*** ./src/app/action-group/action-group.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6> {{actGr.name}}</h6>\n<div class=\"p\">\n\n  <input id=\"userNum\"\n         [(ngModel)]=\"actGr.userNum\"\n         (change)=\"actGr.reload(ms.game)\"\n         type=\"number\"\n         placeholder=\"1\"\n         step=\"1\"\n         min=\"1\"\n         size=\"3\">\n  <ng-template #one>1</ng-template>\n  <span> 将会花费: </span>\n  <app-price-line *ngFor=\"let price of actGr.pricesTemp; trackBy:getPriceId\"\n                  [unit]=\"price.base\"\n                  [canBuy]=\"price.canBuy\"\n                  [price]=\"price.price\"></app-price-line>\n\n</div>\n<div class=\"btn-group\">\n  <button *ngIf=\"!actGr.canBuy\"\n          class=\"btn btn-sm w-100\"\n          disabled>\n    不能购买\n  </button>\n  <!-- <app-cant-buy-signposts *ngIf=\"!action.canBuy\" [action]=\"action\"></app-cant-buy-signposts> -->\n  <button *ngIf=\"actGr.canBuy\"\n          class=\"btn btn-sm w-100\"\n          (click)=\"buy()\">\n    购买 {{actGr.realNum | format: true}}\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/action-group/action-group.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/action-group/action-group.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  max-width: 4rem; }\n\n.btn-group {\n  margin-top: 0.3rem;\n  width: 99%; }\n\napp-cant-buy-signposts {\n  margin-bottom: -0.2rem;\n  margin-top: -0.2rem; }\n"

/***/ }),

/***/ "./src/app/action-group/action-group.component.ts":
/*!********************************************************!*\
  !*** ./src/app/action-group/action-group.component.ts ***!
  \********************************************************/
/*! exports provided: ActionGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGroupComponent", function() { return ActionGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/actions/action-group */ "./src/app/model/actions/action-group.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionGroupComponent = /** @class */ (function () {
    function ActionGroupComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        //Nothing
    }
    ActionGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.updateEmitter.subscribe(function () {
            _this.actGr.reload(_this.ms.game);
            // this.actGr.reloadAvailableTime();
            _this.cd.markForCheck();
        });
    };
    ActionGroupComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ActionGroupComponent.prototype.buy = function (event) {
        this.actGr.buy(this.ms.game, this.actGr.realNum);
    };
    ActionGroupComponent.prototype.getPriceId = function (index, price) {
        return price.base.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"])
    ], ActionGroupComponent.prototype, "actGr", void 0);
    ActionGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-action-group",
            template: __webpack_require__(/*! ./action-group.component.html */ "./src/app/action-group/action-group.component.html"),
            styles: [__webpack_require__(/*! ./action-group.component.scss */ "./src/app/action-group/action-group.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ActionGroupComponent);
    return ActionGroupComponent;
}());



/***/ }),

/***/ "./src/app/action/action-header/action-header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/action/action-header/action-header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>\n  <clr-icon *ngIf=\"shape\"\n            [attr.shape]=\"shape\"></clr-icon>\n  {{action.name}}\n  <span *ngIf=\"action.limit.gte(2)\">({{quantity | format: true}})</span>\n</h6>\n"

/***/ }),

/***/ "./src/app/action/action-header/action-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/action/action-header/action-header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/action/action-header/action-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/action/action-header/action-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActionHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionHeaderComponent", function() { return ActionHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/action */ "./src/app/model/action.ts");
/* harmony import */ var _model_actions_team_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/actions/team-action */ "./src/app/model/actions/team-action.ts");
/* harmony import */ var _model_actions_twin_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/actions/twin-action */ "./src/app/model/actions/twin-action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActionHeaderComponent = /** @class */ (function () {
    function ActionHeaderComponent() {
        //
    }
    ActionHeaderComponent.prototype.ngOnChanges = function (changes) {
        this.shape =
            this.action instanceof _model_actions_team_action__WEBPACK_IMPORTED_MODULE_2__["TeamAction"]
                ? "angle"
                : this.action instanceof _model_actions_twin_action__WEBPACK_IMPORTED_MODULE_3__["TwinAction"]
                    ? "angle-double"
                    : "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_action__WEBPACK_IMPORTED_MODULE_1__["Action"])
    ], ActionHeaderComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Decimal)
    ], ActionHeaderComponent.prototype, "quantity", void 0);
    ActionHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-action-header",
            template: __webpack_require__(/*! ./action-header.component.html */ "./src/app/action/action-header/action-header.component.html"),
            styles: [__webpack_require__(/*! ./action-header.component.scss */ "./src/app/action/action-header/action-header.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ActionHeaderComponent);
    return ActionHeaderComponent;
}());



/***/ }),

/***/ "./src/app/action/action.component.html":
/*!**********************************************!*\
  !*** ./src/app/action/action.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-action-header [action]=\"action\"\n                   [quantity]=\"action.quantity\"></app-action-header>\n<div class=\"p\">\n  <span *ngIf=\"action.description !==''\">\n    {{action.description}}\n    <br>\n  </span>\n</div>\n<app-buttons [action]=\"action\"\n             [skippable]=\"skippable\"></app-buttons>\n"

/***/ }),

/***/ "./src/app/action/action.component.scss":
/*!**********************************************!*\
  !*** ./src/app/action/action.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/action/action.component.ts":
/*!********************************************!*\
  !*** ./src/app/action/action.component.ts ***!
  \********************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/action */ "./src/app/model/action.ts");
/* harmony import */ var _model_actions_warp_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/actions/warp-action */ "./src/app/model/actions/warp-action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionComponent = /** @class */ (function () {
    function ActionComponent() {
        this.skippable = true;
        //Nothing
    }
    ActionComponent.prototype.ngOnInit = function () {
        this.skippable = !(this.action instanceof _model_actions_warp_action__WEBPACK_IMPORTED_MODULE_2__["WarpAction"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_action__WEBPACK_IMPORTED_MODULE_1__["Action"])
    ], ActionComponent.prototype, "action", void 0);
    ActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-action",
            template: __webpack_require__(/*! ./action.component.html */ "./src/app/action/action.component.html"),
            styles: [__webpack_require__(/*! ./action.component.scss */ "./src/app/action/action.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./src/app/action/buttons/buttons.component.html":
/*!*******************************************************!*\
  !*** ./src/app/action/buttons/buttons.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!action.complete\">\n  <input *ngIf=\"!action.isLimited || action.limit.gte(2); else one\"\n         id=\"userNum\"\n         [(ngModel)]=\"action.userNum\"\n         (change)=\"action.reloadUserPrices()\"\n         type=\"number\"\n         placeholder=\"1\"\n         step=\"1\"\n         min=\"1\"\n         size=\"3\">\n  <ng-template #one>1</ng-template>\n  <span>将会花费: </span>\n  <app-price-line *ngFor=\"let price of action.prices; trackBy:getPriceId\"\n                  [unit]=\"price.base\"\n                  [canBuy]=\"price.userCanBuy\"\n                  [price]=\"price.priceUser\"></app-price-line>\n</div>\n\n<div *ngIf=\"!action.complete\"\n     class=\"btn-group\">\n  <button *ngIf=\"!action.canBuy && !canSkip\"\n          class=\"btn btn-sm w-100\"\n          disabled>\n    不能购买\n    <span *ngIf=\"showTime\">\n      距离可以购买还差 {{action.availableIn | endIn}}\n    </span>\n  </button>\n  <button *ngIf=\"!action.canBuy && skippable && showTime && canSkip\"\n          class=\"btn btn-primary btn-sm w-100\"\n          (click)=\"skip()\">\n    不能购买。 跳过 {{minuteSkip}} 分钟\n  </button>\n  <app-cant-buy-signposts *ngIf=\"showTime && !action.canBuy\"\n                          [action]=\"action\"></app-cant-buy-signposts>\n  <button *ngIf=\"action.canBuy\"\n          class=\"btn btn-sm w-100\"\n          (click)=\"buy(action.realNum)\"\n          [disabled]=\"!action.canUserBuy\">\n    购买\n    <span *ngIf=\"!action.isLimited || action.limit.gte(2)\">{{action.realNum | format: true}}</span>\n  </button>\n  <button *ngIf=\"action.maxBuy.gt(3)\"\n          class=\"btn btn-sm w-100\"\n          (click)=\"buy(action.maxBuy.div(2).floor())\">\n    购买 {{action.maxBuy.div(2).floor() | format: true}}\n  </button>\n  <button *ngIf=\"action.maxBuy.gte(2)\"\n          class=\"btn btn-sm w-100\"\n          (click)=\"buy(action.maxBuy)\">\n    购买 {{action.maxBuy | format: true}}\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/action/buttons/buttons.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/action/buttons/buttons.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  max-width: 4rem; }\n\n.btn-group {\n  margin-top: 0.3rem;\n  width: 99%; }\n\napp-cant-buy-signposts {\n  margin-bottom: -0.2rem;\n  margin-top: -0.2rem; }\n"

/***/ }),

/***/ "./src/app/action/buttons/buttons.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/action/buttons/buttons.component.ts ***!
  \*****************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/action */ "./src/app/model/action.ts");
/* harmony import */ var _model_prestige_prestige__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/prestige/prestige */ "./src/app/model/prestige/prestige.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.buttonsOnly = false;
        this.skippable = true;
        this.showTime = true;
        this.minuteSkip = 1;
        this.canSkip = false;
        //Nothing
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showTime = !(this.action instanceof _model_prestige_prestige__WEBPACK_IMPORTED_MODULE_3__["Prestige"]);
        if (this.action) {
            this.action.reloadUserPrices();
            this.action.reloadAvailableTime();
            this.checkSkip();
        }
        this.sub = this.ms.updateEmitter.subscribe(function () {
            _this.action.reloadUserPrices();
            _this.action.reloadAvailableTime();
            _this.checkSkip();
            _this.cd.markForCheck();
        });
    };
    ButtonsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ButtonsComponent.prototype.getPriceId = function (index, price) {
        return price.base.id;
    };
    ButtonsComponent.prototype.buy = function (quantity) {
        this.action.buy(quantity);
        this.ms.updateEmitter.emit(1);
    };
    ButtonsComponent.prototype.checkSkip = function () {
        this.canSkip = false;
        if (!this.action.canBuy && this.skippable && this.showTime) {
            this.minuteSkip = Math.ceil(Math.max(this.action.availableIn / 60000, 1));
            this.canSkip = this.ms.game.time.quantity.gt(this.minuteSkip * 60);
        }
    };
    ButtonsComponent.prototype.skip = function () {
        if (this.canSkip)
            this.ms.game.actMin.buy(new Decimal(this.minuteSkip));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_action__WEBPACK_IMPORTED_MODULE_2__["Action"])
    ], ButtonsComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonsComponent.prototype, "buttonsOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonsComponent.prototype, "skippable", void 0);
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-buttons",
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/action/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/action/buttons/buttons.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/action/cant-buy-signposts/cant-buy-signposts.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/action/cant-buy-signposts/cant-buy-signposts.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-signpost>\n  <clr-signpost-content *clrIfOpen>\n    <h3 style=\"margin-top: 0\">{{action.name}}</h3>\n    <p>将在  {{action.availableIn | endIn}} 后可用</p>\n\n    <div *ngFor=\"let cost of action.prices; trackBy getPriceId\">\n      <h6>{{cost.base.name}} {{getVal(cost)}}% </h6>\n      <span *ngIf=\"!cost.canBuy\">将在 {{cost.avIn.times(1000).toNumber() | endIn}} 后可用</span>\n      <div class=\"progress-static danger\"\n           [ngClass]=\"{'success': cost.canBuy, 'danger': !cost.canBuy}\">\n        <div class=\"progress-meter\"\n             [attr.data-value]=\"getVal(cost)\"></div>\n      </div>\n    </div>\n\n  </clr-signpost-content>\n</clr-signpost>\n"

/***/ }),

/***/ "./src/app/action/cant-buy-signposts/cant-buy-signposts.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/action/cant-buy-signposts/cant-buy-signposts.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/action/cant-buy-signposts/cant-buy-signposts.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/action/cant-buy-signposts/cant-buy-signposts.component.ts ***!
  \***************************************************************************/
/*! exports provided: CantBuySignpostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantBuySignpostsComponent", function() { return CantBuySignpostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/action */ "./src/app/model/action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CantBuySignpostsComponent = /** @class */ (function () {
    function CantBuySignpostsComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        //
    }
    CantBuySignpostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.updateEmitter.subscribe(function (m) {
            _this.cd.markForCheck();
        });
    };
    CantBuySignpostsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CantBuySignpostsComponent.prototype.getVal = function (price) {
        return Math.floor(Math.min(price.base.quantity.div(price.priceUser).toNumber() * 100, 100));
    };
    CantBuySignpostsComponent.prototype.getPriceId = function (index, price) {
        return price.base.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_action__WEBPACK_IMPORTED_MODULE_2__["Action"])
    ], CantBuySignpostsComponent.prototype, "action", void 0);
    CantBuySignpostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cant-buy-signposts",
            template: __webpack_require__(/*! ./cant-buy-signposts.component.html */ "./src/app/action/cant-buy-signposts/cant-buy-signposts.component.html"),
            styles: [__webpack_require__(/*! ./cant-buy-signposts.component.scss */ "./src/app/action/cant-buy-signposts/cant-buy-signposts.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CantBuySignpostsComponent);
    return CantBuySignpostsComponent;
}());



/***/ }),

/***/ "./src/app/action/price-line/price-line.component.html":
/*!*************************************************************!*\
  !*** ./src/app/action/price-line/price-line.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [class.notEnough]=\"!canBuy\">\n  <span class=\"monospace\">{{price | format}}</span>\n  <!-- <a [routerLink]=\"'/nav/unit/'+unit.id\"> {{unit.name}}</a>, -->\n\n  <clr-signpost>\n    <a clrSignpostTrigger>\n      {{unit.name}},\n    </a>\n    <clr-signpost-content *clrIfOpen>\n      <h3 style=\"margin-top: 0\">{{unit.name}}</h3>\n      <p>\n        数量:\n        <span *ngIf=\"unit.quantity.abs().gt(0.001)\"\n              class=\"qta monospace\">\n          {{unit.quantity | format}}\n        </span>\n        <br />\n        <app-polynom [a]=\"unit.a\"\n                     [b]=\"unit.b\"\n                     [c]=\"unit.c\">\n        </app-polynom>\n      </p>\n      <a [routerLink]=\"'/nav/unit/'+unit.id\"\n         class=\"noRed\">\n        前往 {{unit.name}}\n      </a>\n    </clr-signpost-content>\n  </clr-signpost>\n\n</span>\n"

/***/ }),

/***/ "./src/app/action/price-line/price-line.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/action/price-line/price-line.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signpost-trigger {\n  margin-left: 0.15rem;\n  margin-right: 0.15rem; }\n"

/***/ }),

/***/ "./src/app/action/price-line/price-line.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/action/price-line/price-line.component.ts ***!
  \***********************************************************/
/*! exports provided: PriceLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceLineComponent", function() { return PriceLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_full_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/full-unit */ "./src/app/model/full-unit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PriceLineComponent = /** @class */ (function () {
    function PriceLineComponent() {
        //Nothing
    }
    PriceLineComponent.prototype.ngOnInit = function () {
        //Nothing
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_full_unit__WEBPACK_IMPORTED_MODULE_1__["FullUnit"])
    ], PriceLineComponent.prototype, "unit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PriceLineComponent.prototype, "canBuy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Decimal)
    ], PriceLineComponent.prototype, "price", void 0);
    PriceLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-price-line",
            template: __webpack_require__(/*! ./price-line.component.html */ "./src/app/action/price-line/price-line.component.html"),
            styles: [__webpack_require__(/*! ./price-line.component.scss */ "./src/app/action/price-line/price-line.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], PriceLineComponent);
    return PriceLineComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-main-container *ngIf=\"ms.show\"\n                    [@fadeInOut]>\n  <app-header [lab]=\"ms.game.tabs.lab.unlocked\"\n              [labBadge]=\"ms.game.canBuyResearch\"\n              [travel]=\"ms.game.tabs.travel.unlocked\"\n              [autoBuy]=\"ms.game.tabs.autoBuy.unlocked\"\n              [travelBadge]=\"ms.game.canTravel\"\n              [prestige]=\"ms.game.tabs.prestige.unlocked\"\n              [mastery]=\"ms.game.tabs.mastery.unlocked\">\n  </app-header>\n  <app-material-nav *ngIf=\"os.materialPosition != 3\"></app-material-nav>\n\n  <router-outlet></router-outlet>\n\n\n</clr-main-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-material-nav {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content; }\n\n:host /deep/ .content-container .content-area {\n  padding: 0.225rem 0.45rem 0.45rem 0.45rem !important; }\n\n:host /deep/ .clr-row {\n  margin-left: -0.225rem !important;\n  margin-right: -0.225rem !important; }\n\n:host /deep/ h1 {\n  line-height: 1.6rem;\n  margin-top: 0; }\n\n:host /deep/ p {\n  margin-top: 0; }\n\n:host /deep/ .monospace {\n  font-family: RobotoMono, Consolas, Monaco, Courier, monospace !important;\n  font-size: 90%; }\n\n:host /deep/ .notEnough {\n  color: #c92100; }\n\n:host /deep/ .notEnough a:link :not(.noRed) {\n    color: #c92100; }\n\n:host /deep/ .notEnough a:visited :not(.noRed) {\n    color: #c92100; }\n\n:host /deep/ h6 {\n  margin-top: 0.6rem; }\n\n:host /deep/ .w-100 {\n  max-width: 100% !important; }\n\n:host /deep/ clr-signpost-content h3 {\n  margin-bottom: 0.3rem;\n  margin-top: 0; }\n\n:host /deep/ .nav-content {\n  padding-bottom: 1rem; }\n\n:host /deep/ .clr-vertical-nav {\n  padding-top: 0; }\n\n:host /deep/ clr-tree-node {\n  overflow-y: visible !important; }\n\n:host /deep/ .card {\n  margin-top: 0.4rem; }\n\n:host /deep/ .card h6 {\n    font-size: 0.75rem;\n    font-weight: 200;\n    letter-spacing: normal;\n    margin-bottom: 0.4rem;\n    margin-top: 0.1rem; }\n\n:host /deep/ .card .card-block .card-title {\n    margin-bottom: 0.4rem !important; }\n\n:host /deep/ .card :host /deep/ .card-block,\n  :host /deep/ .card .card-footer,\n  :host /deep/ .card .card-header,\n  :host /deep/ .card .card > .list,\n  :host /deep/ .card .card > .list-unstyled {\n    padding-bottom: 0.4rem;\n    padding-top: 0.4rem; }\n\n:host /deep/ .btn {\n  height: auto; }\n\n:host /deep/ app-cant-buy-signposts {\n  height: 1rem; }\n\n:host /deep/ clr-datagrid {\n  margin-top: 0;\n  padding-top: 0; }\n\n:host /deep/ .clr-vertical-nav .nav-trigger {\n  margin-top: 0; }\n\n@media screen and (max-width: 768px) {\n  app-material-nav {\n    display: none; } }\n\n@media screen and (max-width: 1050px) {\n  :host /deep/ .clr-col,\n  :host /deep/ .clr-col-1,\n  :host /deep/ .clr-col-2,\n  :host /deep/ .clr-col-3,\n  :host /deep/ .clr-col-4,\n  :host /deep/ .clr-col-5,\n  :host /deep/ .clr-col-6,\n  :host /deep/ .clr-col-7,\n  :host /deep/ .clr-col-8,\n  :host /deep/ .clr-col-9,\n  :host /deep/ .clr-col-10,\n  :host /deep/ .clr-col-11,\n  :host /deep/ .clr-col-12,\n  :host /deep/ .clr-col-xs,\n  :host /deep/ .clr-col-xs-1,\n  :host /deep/ .clr-col-xs-2,\n  :host /deep/ .clr-col-xs-3,\n  :host /deep/ .clr-col-xs-4,\n  :host /deep/ .clr-col-xs-5,\n  :host /deep/ .clr-col-xs-6,\n  :host /deep/ .clr-col-xs-7,\n  :host /deep/ .clr-col-xs-8,\n  :host /deep/ .clr-col-xs-9,\n  :host /deep/ .clr-col-xs-10,\n  :host /deep/ .clr-col-xs-11,\n  :host /deep/ .clr-col-xs-12,\n  :host /deep/ .clr-col-sm,\n  :host /deep/ .clr-col-sm-1,\n  :host /deep/ .clr-col-sm-2,\n  :host /deep/ .clr-col-sm-3,\n  :host /deep/ .clr-col-sm-4,\n  :host /deep/ .clr-col-sm-5,\n  :host /deep/ .clr-col-sm-6,\n  :host /deep/ .clr-col-sm-7,\n  :host /deep/ .clr-col-sm-8,\n  :host /deep/ .clr-col-sm-9,\n  :host /deep/ .clr-col-sm-10,\n  :host /deep/ .clr-col-sm-11,\n  :host /deep/ .clr-col-sm-12,\n  :host /deep/ .clr-col-md,\n  :host /deep/ .clr-col-md-1,\n  :host /deep/ .clr-col-md-2,\n  :host /deep/ .clr-col-md-3,\n  :host /deep/ .clr-col-md-4,\n  :host /deep/ .clr-col-md-5,\n  :host /deep/ .clr-col-md-6,\n  :host /deep/ .clr-col-md-7,\n  :host /deep/ .clr-col-md-8,\n  :host /deep/ .clr-col-md-9,\n  :host /deep/ .clr-col-md-10,\n  :host /deep/ .clr-col-md-11,\n  :host /deep/ .clr-col-md-12,\n  :host /deep/ .clr-col-lg,\n  :host /deep/ .clr-col-lg-1,\n  :host /deep/ .clr-col-lg-2,\n  :host /deep/ .clr-col-lg-3,\n  :host /deep/ .clr-col-lg-4,\n  :host /deep/ .clr-col-lg-5,\n  :host /deep/ .clr-col-lg-6,\n  :host /deep/ .clr-col-lg-7,\n  :host /deep/ .clr-col-lg-8,\n  :host /deep/ .clr-col-lg-9,\n  :host /deep/ .clr-col-lg-10,\n  :host /deep/ .clr-col-lg-11,\n  :host /deep/ .clr-col-lg-12,\n  :host /deep/ .clr-col-xl,\n  :host /deep/ .clr-col-xl-1,\n  :host /deep/ .clr-col-xl-2,\n  :host /deep/ .clr-col-xl-3,\n  :host /deep/ .clr-col-xl-4,\n  :host /deep/ .clr-col-xl-5,\n  :host /deep/ .clr-col-xl-6,\n  :host /deep/ .clr-col-xl-7,\n  :host /deep/ .clr-col-xl-8,\n  :host /deep/ .clr-col-xl-9,\n  :host /deep/ .clr-col-xl-10,\n  :host /deep/ .clr-col-xl-11,\n  :host /deep/ .clr-col-xl-12 {\n    padding-left: 0.2rem !important;\n    padding-right: 0.2rem !important; } }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
/* harmony import */ var _clr_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/icons */ "./node_modules/@clr/icons/index.js");
/* harmony import */ var _clr_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clr_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _clr_icons_shapes_essential_shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/icons/shapes/essential-shapes */ "./node_modules/@clr/icons/shapes/essential-shapes.js");
/* harmony import */ var _clr_icons_shapes_essential_shapes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_essential_shapes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _clr_icons_shapes_commerce_shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/icons/shapes/commerce-shapes */ "./node_modules/@clr/icons/shapes/commerce-shapes.js");
/* harmony import */ var _clr_icons_shapes_commerce_shapes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_commerce_shapes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _clr_icons_shapes_core_shapes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/icons/shapes/core-shapes */ "./node_modules/@clr/icons/shapes/core-shapes.js");
/* harmony import */ var _clr_icons_shapes_core_shapes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_core_shapes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _clr_icons_shapes_media_shapes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/icons/shapes/media-shapes */ "./node_modules/@clr/icons/shapes/media-shapes.js");
/* harmony import */ var _clr_icons_shapes_media_shapes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_media_shapes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _clr_icons_shapes_social_shapes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/icons/shapes/social-shapes */ "./node_modules/@clr/icons/shapes/social-shapes.js");
/* harmony import */ var _clr_icons_shapes_social_shapes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_social_shapes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @clr/icons/shapes/technology-shapes */ "./node_modules/@clr/icons/shapes/technology-shapes.js");
/* harmony import */ var _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _clr_icons_shapes_text_edit_shapes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @clr/icons/shapes/text-edit-shapes */ "./node_modules/@clr/icons/shapes/text-edit-shapes.js");
/* harmony import */ var _clr_icons_shapes_text_edit_shapes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_text_edit_shapes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./options.service */ "./src/app/options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ClarityIcons } from "@clr/icons";










var AppComponent = /** @class */ (function () {
    function AppComponent(ms, os) {
        this.ms = ms;
        this.os = os;
        this.show = false;
        _clr_icons__WEBPACK_IMPORTED_MODULE_2__["ClarityIcons"].add({
            bug: _clr_icons_shapes_essential_shapes__WEBPACK_IMPORTED_MODULE_3__["ClrShapeBug"],
            lightbulb: _clr_icons_shapes_essential_shapes__WEBPACK_IMPORTED_MODULE_3__["ClrShapeLightbulb"],
            world: _clr_icons_shapes_essential_shapes__WEBPACK_IMPORTED_MODULE_3__["ClrShapeWorld"],
            clock: _clr_icons_shapes_essential_shapes__WEBPACK_IMPORTED_MODULE_3__["ClrShapeClock"],
            cog: _clr_icons_shapes_core_shapes__WEBPACK_IMPORTED_MODULE_6__["ClrShapeCog"],
            store: _clr_icons_shapes_commerce_shapes__WEBPACK_IMPORTED_MODULE_5__["ClrShapeStore"],
            "exclamation-triangle": _clr_icons_shapes_core_shapes__WEBPACK_IMPORTED_MODULE_6__["ClrShapeExclamationTriangle"],
            "angle-double": _clr_icons_shapes_core_shapes__WEBPACK_IMPORTED_MODULE_6__["ClrShapeAngleDouble"],
            angle: _clr_icons_shapes_core_shapes__WEBPACK_IMPORTED_MODULE_6__["ClrShapeAngle"],
            pause: _clr_icons_shapes_media_shapes__WEBPACK_IMPORTED_MODULE_7__["ClrShapePause"],
            infoStandard: _clr_icons_shapes_core_shapes__WEBPACK_IMPORTED_MODULE_6__["ClrShapeInfoStandard"],
            floppy: _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__["ClrShapeFloppy"],
            "paint-roller": _clr_icons_shapes_text_edit_shapes__WEBPACK_IMPORTED_MODULE_10__["ClrShapePaintRoller"],
            install: _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__["ClrShapeInstall"],
            uninstall: _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__["ClrShapeUninstall"],
            tools: _clr_icons_shapes_essential_shapes__WEBPACK_IMPORTED_MODULE_3__["ClrShapeTools"],
            star: _clr_icons_shapes_social_shapes__WEBPACK_IMPORTED_MODULE_8__["ClrShapeStar"],
            dashboard: _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__["ClrShapeDashboard"],
            certificate: _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__["ClrShapeCertificate"],
            "upload-cloud": _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__["ClrShapeUploadCloud"],
            "download-cloud": _clr_icons_shapes_technology_shapes__WEBPACK_IMPORTED_MODULE_9__["ClrShapeDownloadCloud"]
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ms.start();
        }, 1);
    };
    AppComponent.prototype.onKey = function (event) {
        // with type info
        switch (event.key) {
            case "m":
                this.ms.game.actMin.buy();
                break;
            case "h":
                this.ms.game.actHour.buy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:keyup", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onKey", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("fadeInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _options_service__WEBPACK_IMPORTED_MODULE_11__["OptionsService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _action_group_action_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-group/action-group.component */ "./src/app/action-group/action-group.component.ts");
/* harmony import */ var _action_action_header_action_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action/action-header/action-header.component */ "./src/app/action/action-header/action-header.component.ts");
/* harmony import */ var _action_action_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./action/action.component */ "./src/app/action/action.component.ts");
/* harmony import */ var _action_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./action/buttons/buttons.component */ "./src/app/action/buttons/buttons.component.ts");
/* harmony import */ var _action_cant_buy_signposts_cant_buy_signposts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./action/cant-buy-signposts/cant-buy-signposts.component */ "./src/app/action/cant-buy-signposts/cant-buy-signposts.component.ts");
/* harmony import */ var _action_price_line_price_line_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./action/price-line/price-line.component */ "./src/app/action/price-line/price-line.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _auto_buy_tab_auto_buy_tab_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auto-buy-tab/auto-buy-tab.component */ "./src/app/auto-buy-tab/auto-buy-tab.component.ts");
/* harmony import */ var _auto_buy_auto_buy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auto-buy/auto-buy.component */ "./src/app/auto-buy/auto-buy.component.ts");
/* harmony import */ var _change_world_change_world_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./change-world/change-world.component */ "./src/app/change-world/change-world.component.ts");
/* harmony import */ var _end_in_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./end-in.pipe */ "./src/app/end-in.pipe.ts");
/* harmony import */ var _format_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./format.pipe */ "./src/app/format.pipe.ts");
/* harmony import */ var _group_tabs_group_auto_buy_group_auto_buy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./group-tabs/group-auto-buy/group-auto-buy.component */ "./src/app/group-tabs/group-auto-buy/group-auto-buy.component.ts");
/* harmony import */ var _group_tabs_group_tabs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./group-tabs/group-tabs.component */ "./src/app/group-tabs/group-tabs.component.ts");
/* harmony import */ var _group_tabs_unit_group_unit_group_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./group-tabs/unit-group/unit-group.component */ "./src/app/group-tabs/unit-group/unit-group.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_bug_card_bug_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/bug-card/bug-card.component */ "./src/app/home/bug-card/bug-card.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _laboratory_lab_menu_lab_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./laboratory/lab-menu/lab-menu.component */ "./src/app/laboratory/lab-menu/lab-menu.component.ts");
/* harmony import */ var _laboratory_laboratory_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./laboratory/laboratory.component */ "./src/app/laboratory/laboratory.component.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
/* harmony import */ var _mastery_mastery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mastery/mastery.component */ "./src/app/mastery/mastery.component.ts");
/* harmony import */ var _material_nav_material_nav_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./material-nav/material-nav.component */ "./src/app/material-nav/material-nav.component.ts");
/* harmony import */ var _material_nav_tab_tab_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./material-nav/tab/tab.component */ "./src/app/material-nav/tab/tab.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _nav_unit_line_unit_line_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./nav/unit-line/unit-line.component */ "./src/app/nav/unit-line/unit-line.component.ts");
/* harmony import */ var _options_nav_credits_credits_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./options-nav/credits/credits.component */ "./src/app/options-nav/credits/credits.component.ts");
/* harmony import */ var _options_nav_options_nav_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./options-nav/options-nav.component */ "./src/app/options-nav/options-nav.component.ts");
/* harmony import */ var _options_nav_save_save_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./options-nav/save/save.component */ "./src/app/options-nav/save/save.component.ts");
/* harmony import */ var _options_nav_stats_stats_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./options-nav/stats/stats.component */ "./src/app/options-nav/stats/stats.component.ts");
/* harmony import */ var _options_nav_ui_options_ui_options_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./options-nav/ui-options/ui-options.component */ "./src/app/options-nav/ui-options/ui-options.component.ts");
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./options.service */ "./src/app/options.service.ts");
/* harmony import */ var _polynom_polynom_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./polynom/polynom.component */ "./src/app/polynom/polynom.component.ts");
/* harmony import */ var _prestige_buy_prestige_buy_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./prestige-buy/prestige-buy.component */ "./src/app/prestige-buy/prestige-buy.component.ts");
/* harmony import */ var _prestige_group_prestige_group_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./prestige-group/prestige-group.component */ "./src/app/prestige-group/prestige-group.component.ts");
/* harmony import */ var _prestige_nav_prestige_nav_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./prestige-nav/prestige-nav.component */ "./src/app/prestige-nav/prestige-nav.component.ts");
/* harmony import */ var _prestige_prestige_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./prestige/prestige.component */ "./src/app/prestige/prestige.component.ts");
/* harmony import */ var _production_signposts_production_signposts_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./production-signposts/production-signposts.component */ "./src/app/production-signposts/production-signposts.component.ts");
/* harmony import */ var _research_name_name_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./research/name/name.component */ "./src/app/research/name/name.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./research/research.component */ "./src/app/research/research.component.ts");
/* harmony import */ var _roman_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./roman.pipe */ "./src/app/roman.pipe.ts");
/* harmony import */ var _unit_tabs_made_by_chart_made_by_chart_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./unit-tabs/made-by-chart/made-by-chart.component */ "./src/app/unit-tabs/made-by-chart/made-by-chart.component.ts");
/* harmony import */ var _unit_tabs_unit_auto_buy_unit_auto_buy_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./unit-tabs/unit-auto-buy/unit-auto-buy.component */ "./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.ts");
/* harmony import */ var _unit_tabs_unit_tabs_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./unit-tabs/unit-tabs.component */ "./src/app/unit-tabs/unit-tabs.component.ts");
/* harmony import */ var _unit_tabs_unit_unit_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./unit-tabs/unit/unit.component */ "./src/app/unit-tabs/unit/unit.component.ts");
/* harmony import */ var _world_world_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./world/world.component */ "./src/app/world/world.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_33__["NavComponent"],
                _unit_tabs_unit_unit_component__WEBPACK_IMPORTED_MODULE_53__["UnitComponent"],
                _format_pipe__WEBPACK_IMPORTED_MODULE_20__["FormatPipe"],
                _action_action_component__WEBPACK_IMPORTED_MODULE_10__["ActionComponent"],
                _nav_unit_line_unit_line_component__WEBPACK_IMPORTED_MODULE_34__["UnitLineComponent"],
                _action_price_line_price_line_component__WEBPACK_IMPORTED_MODULE_13__["PriceLineComponent"],
                _polynom_polynom_component__WEBPACK_IMPORTED_MODULE_41__["PolynomComponent"],
                _options_nav_options_nav_component__WEBPACK_IMPORTED_MODULE_36__["OptionsNavComponent"],
                _options_nav_save_save_component__WEBPACK_IMPORTED_MODULE_37__["SaveComponent"],
                _laboratory_laboratory_component__WEBPACK_IMPORTED_MODULE_28__["LaboratoryComponent"],
                _end_in_pipe__WEBPACK_IMPORTED_MODULE_19__["EndInPipe"],
                _research_research_component__WEBPACK_IMPORTED_MODULE_48__["ResearchComponent"],
                _material_nav_material_nav_component__WEBPACK_IMPORTED_MODULE_31__["MaterialNavComponent"],
                _production_signposts_production_signposts_component__WEBPACK_IMPORTED_MODULE_46__["ProductionSignpostsComponent"],
                _action_cant_buy_signposts_cant_buy_signposts_component__WEBPACK_IMPORTED_MODULE_12__["CantBuySignpostsComponent"],
                _group_tabs_unit_group_unit_group_component__WEBPACK_IMPORTED_MODULE_23__["UnitGroupComponent"],
                _action_group_action_group_component__WEBPACK_IMPORTED_MODULE_8__["ActionGroupComponent"],
                _material_nav_tab_tab_component__WEBPACK_IMPORTED_MODULE_32__["TabComponent"],
                _world_world_component__WEBPACK_IMPORTED_MODULE_54__["WorldComponent"],
                _change_world_change_world_component__WEBPACK_IMPORTED_MODULE_18__["ChangeWorldComponent"],
                _prestige_prestige_component__WEBPACK_IMPORTED_MODULE_45__["PrestigeComponent"],
                _options_nav_ui_options_ui_options_component__WEBPACK_IMPORTED_MODULE_39__["UiOptionsComponent"],
                _prestige_nav_prestige_nav_component__WEBPACK_IMPORTED_MODULE_44__["PrestigeNavComponent"],
                _prestige_group_prestige_group_component__WEBPACK_IMPORTED_MODULE_43__["PrestigeGroupComponent"],
                _prestige_buy_prestige_buy_component__WEBPACK_IMPORTED_MODULE_42__["PrestigeBuyComponent"],
                _auto_buy_auto_buy_component__WEBPACK_IMPORTED_MODULE_17__["AutoBuyComponent"],
                _unit_tabs_unit_auto_buy_unit_auto_buy_component__WEBPACK_IMPORTED_MODULE_51__["UnitAutoBuyComponent"],
                _unit_tabs_unit_tabs_component__WEBPACK_IMPORTED_MODULE_52__["UnitTabsComponent"],
                _action_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"],
                _action_action_header_action_header_component__WEBPACK_IMPORTED_MODULE_9__["ActionHeaderComponent"],
                _options_nav_stats_stats_component__WEBPACK_IMPORTED_MODULE_38__["StatsComponent"],
                _mastery_mastery_component__WEBPACK_IMPORTED_MODULE_30__["MasteryComponent"],
                _research_name_name_component__WEBPACK_IMPORTED_MODULE_47__["NameComponent"],
                _roman_pipe__WEBPACK_IMPORTED_MODULE_49__["RomanPipe"],
                _auto_buy_tab_auto_buy_tab_component__WEBPACK_IMPORTED_MODULE_16__["AutoBuyTabComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
                _group_tabs_group_tabs_component__WEBPACK_IMPORTED_MODULE_22__["GroupTabsComponent"],
                _laboratory_lab_menu_lab_menu_component__WEBPACK_IMPORTED_MODULE_27__["LabMenuComponent"],
                _home_bug_card_bug_card_component__WEBPACK_IMPORTED_MODULE_25__["BugCardComponent"],
                _unit_tabs_made_by_chart_made_by_chart_component__WEBPACK_IMPORTED_MODULE_50__["MadeByChartComponent"],
                _options_nav_credits_credits_component__WEBPACK_IMPORTED_MODULE_35__["CreditsComponent"],
                _group_tabs_group_auto_buy_group_auto_buy_component__WEBPACK_IMPORTED_MODULE_21__["GroupAutoBuyComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_15__["APPROUTES"], { useHash: true }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    positionClass: "toast-bottom-right",
                    preventDuplicates: false
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_7__["SliderModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrFormsNextModule"]
            ],
            providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _options_service__WEBPACK_IMPORTED_MODULE_40__["OptionsService"], _main_service__WEBPACK_IMPORTED_MODULE_29__["MainService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            exports: [_options_nav_credits_credits_component__WEBPACK_IMPORTED_MODULE_35__["CreditsComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APPROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROUTES", function() { return APPROUTES; });
/* harmony import */ var _auto_buy_tab_auto_buy_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-buy-tab/auto-buy-tab.component */ "./src/app/auto-buy-tab/auto-buy-tab.component.ts");
/* harmony import */ var _group_tabs_group_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-tabs/group-tabs.component */ "./src/app/group-tabs/group-tabs.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _laboratory_laboratory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laboratory/laboratory.component */ "./src/app/laboratory/laboratory.component.ts");
/* harmony import */ var _mastery_mastery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mastery/mastery.component */ "./src/app/mastery/mastery.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _options_nav_credits_credits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options-nav/credits/credits.component */ "./src/app/options-nav/credits/credits.component.ts");
/* harmony import */ var _options_nav_options_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options-nav/options-nav.component */ "./src/app/options-nav/options-nav.component.ts");
/* harmony import */ var _options_nav_save_save_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options-nav/save/save.component */ "./src/app/options-nav/save/save.component.ts");
/* harmony import */ var _options_nav_stats_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options-nav/stats/stats.component */ "./src/app/options-nav/stats/stats.component.ts");
/* harmony import */ var _options_nav_ui_options_ui_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./options-nav/ui-options/ui-options.component */ "./src/app/options-nav/ui-options/ui-options.component.ts");
/* harmony import */ var _prestige_group_prestige_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prestige-group/prestige-group.component */ "./src/app/prestige-group/prestige-group.component.ts");
/* harmony import */ var _prestige_nav_prestige_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./prestige-nav/prestige-nav.component */ "./src/app/prestige-nav/prestige-nav.component.ts");
/* harmony import */ var _prestige_prestige_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./prestige/prestige.component */ "./src/app/prestige/prestige.component.ts");
/* harmony import */ var _unit_tabs_unit_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unit-tabs/unit-tabs.component */ "./src/app/unit-tabs/unit-tabs.component.ts");
/* harmony import */ var _unit_tabs_unit_unit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./unit-tabs/unit/unit.component */ "./src/app/unit-tabs/unit/unit.component.ts");
















var APPROUTES = [
    {
        path: "",
        redirectTo: "nav/unit/f",
        pathMatch: "full"
    },
    {
        path: "nav",
        component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
        children: [
            { path: "unit", component: _unit_tabs_unit_unit_component__WEBPACK_IMPORTED_MODULE_15__["UnitComponent"] },
            { path: "unit/:id", component: _unit_tabs_unit_tabs_component__WEBPACK_IMPORTED_MODULE_14__["UnitTabsComponent"] },
            { path: "group/:id", component: _group_tabs_group_tabs_component__WEBPACK_IMPORTED_MODULE_1__["GroupTabsComponent"] }
        ]
    },
    {
        path: "pre",
        component: _prestige_nav_prestige_nav_component__WEBPACK_IMPORTED_MODULE_12__["PrestigeNavComponent"],
        children: [{ path: ":id", component: _prestige_group_prestige_group_component__WEBPACK_IMPORTED_MODULE_11__["PrestigeGroupComponent"] }]
    },
    {
        path: "lab",
        component: _laboratory_laboratory_component__WEBPACK_IMPORTED_MODULE_3__["LaboratoryComponent"]
    },
    {
        path: "travel",
        component: _prestige_prestige_component__WEBPACK_IMPORTED_MODULE_13__["PrestigeComponent"]
    },
    {
        path: "opt",
        component: _options_nav_options_nav_component__WEBPACK_IMPORTED_MODULE_7__["OptionsNavComponent"],
        children: [
            { path: "save", component: _options_nav_save_save_component__WEBPACK_IMPORTED_MODULE_8__["SaveComponent"] },
            { path: "ui", component: _options_nav_ui_options_ui_options_component__WEBPACK_IMPORTED_MODULE_10__["UiOptionsComponent"] },
            { path: "stats", component: _options_nav_stats_stats_component__WEBPACK_IMPORTED_MODULE_9__["StatsComponent"] },
            { path: "credits", component: _options_nav_credits_credits_component__WEBPACK_IMPORTED_MODULE_6__["CreditsComponent"] }
        ]
    },
    {
        path: "mast",
        component: _mastery_mastery_component__WEBPACK_IMPORTED_MODULE_4__["MasteryComponent"]
    },
    {
        path: "auto",
        component: _auto_buy_tab_auto_buy_tab_component__WEBPACK_IMPORTED_MODULE_0__["AutoBuyTabComponent"]
    },
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];


/***/ }),

/***/ "./src/app/auto-buy-tab/auto-buy-tab.component.html":
/*!**********************************************************!*\
  !*** ./src/app/auto-buy-tab/auto-buy-tab.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n  <h1>自动购买者</h1>\n  <p>\n    其他自动购买者可以在单个单位的页面找到。\n    自动购买者执行是按优先级排序的，升序(例如: -5优先级在100优先级之前执行)。\n    最小间隔为1秒，之后您将获得最高购买。\n  </p>\n  <form>\n    <section class=\"form-block\">\n      <div class=\"form-group\">\n        <label>选项:</label>\n        <clr-checkbox [name]=\"'on'\"\n                      [id]=\"'on1'\"\n                      [(clrChecked)]=\"ms.game.autoBuyManager.enabled\"\n                      [clrInline]=\"true\">\n          开启\n        </clr-checkbox>\n        <clr-checkbox [name]=\"'multi'\"\n                      [id]=\"'multi1'\"\n                      [(clrChecked)]=\"ms.game.autoBuyManager.multiBuy\"\n                      [clrInline]=\"true\">\n          多重购买\n        </clr-checkbox>\n      </div>\n    </section>\n  </form>\n\n  <div class=\"clr-row\">\n    <div class=\"clr-col-12\tclr-col-sm-12\tclr-col-md-10\tclr-col-lg-6\tclr-col-xl-5\"\n         *ngFor=\"let autoB of unlSpecial; trackBy:getAutoBuyId\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <app-auto-buy [autoBuy]=\"autoB\"></app-auto-buy>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/auto-buy-tab/auto-buy-tab.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/auto-buy-tab/auto-buy-tab.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auto-buy-tab/auto-buy-tab.component.ts":
/*!********************************************************!*\
  !*** ./src/app/auto-buy-tab/auto-buy-tab.component.ts ***!
  \********************************************************/
/*! exports provided: AutoBuyTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBuyTabComponent", function() { return AutoBuyTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoBuyTabComponent = /** @class */ (function () {
    function AutoBuyTabComponent(ms) {
        this.ms = ms;
        this.unlSpecial = new Array();
        //
    }
    AutoBuyTabComponent.prototype.ngOnInit = function () {
        this.unlSpecial = [];
        if (this.ms.game.allPrestige.autoBuyUnlock.autoBuyMin.done) {
            this.unlSpecial.push(this.ms.game.autoBuyManager.minuteAutoBuy);
        }
        if (this.ms.game.allPrestige.autoBuyUnlock.autoBuyResearch.done) {
            this.unlSpecial.push(this.ms.game.autoBuyManager.researchAutoBuy);
        }
    };
    AutoBuyTabComponent.prototype.getAutoBuyId = function (index, autoBuy) {
        return autoBuy.id;
    };
    AutoBuyTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-auto-buy-tab",
            template: __webpack_require__(/*! ./auto-buy-tab.component.html */ "./src/app/auto-buy-tab/auto-buy-tab.component.html"),
            styles: [__webpack_require__(/*! ./auto-buy-tab.component.scss */ "./src/app/auto-buy-tab/auto-buy-tab.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-container]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], AutoBuyTabComponent);
    return AutoBuyTabComponent;
}());



/***/ }),

/***/ "./src/app/auto-buy/auto-buy.component.html":
/*!**************************************************!*\
  !*** ./src/app/auto-buy/auto-buy.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bought\"\n     class=\"progress-static top\">\n  <div class=\"progress-meter\"\n       [attr.data-value]=\"progress\"></div>\n</div>\n<app-action-header [action]=\"autoBuy\"\n                   [quantity]=\"autoBuy.quantity\"></app-action-header>\n\n<div class=\"clr-row clr-justify-content-between\"\n     *ngIf=\"bought\">\n  <div>\n    <label>优先级:</label>\n    <input placeholder=\"Priority\"\n           name=\"name\"\n           [(ngModel)]=\"autoBuy.priority\"\n           type=\"number\"\n           placeholder=\"1\"\n           step=\"1\"\n           size=\"2\"\n           (change)=\"reload()\" />\n\n  </div>\n  <div>\n    <label>最大购买多个:</label>\n    <clr-signpost>\n      <clr-signpost-content *clrIfOpen>\n        <h3 style=\"margin-top: 0\">最大购买倍数</h3>\n        <p>\n          乘以最大可用购买。 (例如: 0.5 => 最大的一半)。\n          使用它可以防止生产失败和/或节省宝贵的资源。\n          范围是 0 - 1\n        </p>\n      </clr-signpost-content>\n    </clr-signpost>\n    <div class=\"clr-control-container\"\n         [ngClass]=\"{'clr-error' : autoBuy.priceSavePercent <0 || autoBuy.priceSavePercent >1}\">\n      <input class=\"clr-input\"\n             placeholder=\"Priority\"\n             name=\"price_m\"\n             [(ngModel)]=\"autoBuy.priceSavePercent\"\n             type=\"number\"\n             placeholder=\"1\"\n             min=\"0\"\n             max=\"1\"\n             step=\"0.01\"\n             size=\"2\" />\n      <clr-icon class=\"clr-validate-icon\"\n                shape=\"exclamation-circle\"></clr-icon>\n    </div>\n  </div>\n  <div>\n    <clr-checkbox [name]=\"autoBuy.id\"\n                  [id]=\"autoBuy.id\"\n                  [(clrChecked)]=\"autoBuy.active\"\n                  (change)=\"reload()\"\n                  [clrInline]=\"true\">\n      激活\n    </clr-checkbox>\n  </div>\n\n</div>\n<div class=\"clr-row clr-align-items-start\"\n     *ngIf=\"bought\">\n  <div class=\"clr-col\">\n    <span>\n      时间间隔:\n      <span class=\"monospace\">{{autoBuy.max}} </span>\n      秒\n    </span>\n    <span *ngIf=\"autoBuy.multiBuy.gt(1)\">\n      多重购买:\n      <span class=\"monospace\">{{autoBuy.multiBuy | format:true}} </span>\n    </span>\n  </div>\n</div>\n\n<app-buttons [action]=\"autoBuy\"></app-buttons>\n"

/***/ }),

/***/ "./src/app/auto-buy/auto-buy.component.scss":
/*!**************************************************!*\
  !*** ./src/app/auto-buy/auto-buy.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  max-width: 3rem; }\n"

/***/ }),

/***/ "./src/app/auto-buy/auto-buy.component.ts":
/*!************************************************!*\
  !*** ./src/app/auto-buy/auto-buy.component.ts ***!
  \************************************************/
/*! exports provided: AutoBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBuyComponent", function() { return AutoBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_autoBuy_auto_buy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/autoBuy/auto-buy */ "./src/app/model/autoBuy/auto-buy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoBuyComponent = /** @class */ (function () {
    function AutoBuyComponent(ms) {
        this.ms = ms;
        this.bought = false;
        this.progress = 0;
        //
    }
    AutoBuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.autoBuy.reload();
        this.bought = this.autoBuy.quantity.gt(0);
        if (this.bought) {
            this.progress = Math.floor((this.autoBuy.current / this.autoBuy.max) * 100);
        }
        this.sub = this.ms.updateEmitter.subscribe(function (s) {
            _this.autoBuy.reload();
            _this.bought = _this.autoBuy.quantity.gt(0);
            if (_this.bought) {
                _this.progress = Math.floor((_this.autoBuy.current / _this.autoBuy.max) * 100);
            }
        });
    };
    AutoBuyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AutoBuyComponent.prototype.reload = function () {
        this.ms.game.autoBuyManager.buildActiveList();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_autoBuy_auto_buy__WEBPACK_IMPORTED_MODULE_2__["AutoBuy"])
    ], AutoBuyComponent.prototype, "autoBuy", void 0);
    AutoBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-auto-buy",
            template: __webpack_require__(/*! ./auto-buy.component.html */ "./src/app/auto-buy/auto-buy.component.html"),
            styles: [__webpack_require__(/*! ./auto-buy.component.scss */ "./src/app/auto-buy/auto-buy.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], AutoBuyComponent);
    return AutoBuyComponent;
}());



/***/ }),

/***/ "./src/app/change-world/change-world.component.html":
/*!**********************************************************!*\
  !*** ./src/app/change-world/change-world.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>从这里你可以旅行到新的世界.</h1>\n\n\n<clr-alert [clrAlertType]=\"'alert-success'\"\n           [clrAlertClosable]=\"false\"\n           *ngIf=\"ms.game.canTravel; else warn\">\n  <div class=\"alert-item\">\n    <span class=\"alert-text\">\n      你将会得到\n      <span class=\"monospace\">{{ms.game.currentWorld.prestige}} </span>\n      经验\n\n            <span *ngIf=\"ms.game.hasSecondMastery()\">\n        和 1 专精点\n      </span>\n    </span>\n  </div>\n</clr-alert>\n\n<ng-template #warn>\n  <clr-alert [clrAlertType]=\"'alert-danger'\"\n             [clrAlertClosable]=\"false\">\n    <div class=\"alert-item\">\n      <span class=\"alert-text\">\n        如果您选择跳过，你将得不到经验奖励!\n      </span>\n    </div>\n  </clr-alert>\n</ng-template>\n\n\n<clr-alert [clrAlertType]=\"'alert-warning'\"\n           [clrAlertClosable]=\"false\"\n           *ngIf=\"!ms.game.researches.mastery.done\">\n  <div class=\"alert-item \">\n    <span class=\"alert-text\">\n      专精研究未完成。\n    </span>\n  </div>\n</clr-alert>\n\n<button class=\"btn\"\n        (click)=\"randomize()\">随机</button>\n\n<span>\n  最低等级:\n  <span class=\"monospace\">\n    {{minLevel | format:true}}\n  </span>\n</span>\n<span>\n  最高等级:\n  <span class=\"monospace\">\n    {{maxLevel | format:true}}\n  </span>\n</span>\n\n<p-slider [(ngModel)]=\"rangeValues\"\n          [range]=\"true\"\n          [min]=\"1\"\n          [max]=\"maxSafeInt\"\n          (onChange)=\"setLevels()\"></p-slider>\n\n<!-- <div class=\"card-columns\">\n    <app-world [world]=\"world\"\n               *ngFor=\"let world of ms.game.nextWorlds; trackBy:getWorldId\"></app-world>\n  </div> -->\n\n<div class=\"clr-row clr-justify-content-center\">\n  <div *ngFor=\"let world of ms.game.nextWorlds; trackBy:getWorldId\"\n       class=\"worldMaxWidt clr-col-sm-12 clr-col-md-4\">\n    <app-world [world]=\"world\"></app-world>\n  </div>\n</div>\n\n\n<clr-modal [(clrModalOpen)]=\"travelMessage\">\n  <h3 class=\"modal-title\">更换世界 ?</h3>\n  <div class=\"modal-body\">\n    <p>你将失去一切，除了声望升级，继续 ?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\"\n            class=\"btn btn-outline\"\n            (click)=\"travelMessage = false\">取消</button>\n    <button type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"travel()\">确定</button>\n  </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/change-world/change-world.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/change-world/change-world.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ p-slider div {\n  margin-left: 1rem;\n  margin-right: 1rem; }\n\n@media screen and (min-width: 57rem) {\n  .worldMaxWidt {\n    max-width: 19rem; } }\n"

/***/ }),

/***/ "./src/app/change-world/change-world.component.ts":
/*!********************************************************!*\
  !*** ./src/app/change-world/change-world.component.ts ***!
  \********************************************************/
/*! exports provided: ChangeWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeWorldComponent", function() { return ChangeWorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeWorldComponent = /** @class */ (function () {
    function ChangeWorldComponent(ms, cd, router) {
        this.ms = ms;
        this.cd = cd;
        this.router = router;
        this.maxSafeInt = Number.MAX_SAFE_INTEGER;
        this.minLevel = new Decimal(1);
        this.maxLevel = new Decimal(1);
        this.rangeValues = [1, Number.MAX_SAFE_INTEGER];
        this.travelMessage = false;
        this.ms.game.reloadMaxLevel();
    }
    ChangeWorldComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
        this.cd.markForCheck();
    };
    ChangeWorldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setLevels();
        this.worldSub = this.ms.worldEmitter.subscribe(function (world) {
            _this.worldTravel = world;
            _this.travelMessage = true;
        });
    };
    ChangeWorldComponent.prototype.setLevels = function () {
        this.maxLevel = this.ms.game.realMaxLevel
            .times(this.rangeValues[1] / Number.MAX_SAFE_INTEGER)
            .ceil();
        this.minLevel = this.ms.game.realMaxLevel
            .times(this.rangeValues[0] / Number.MAX_SAFE_INTEGER)
            .floor()
            .min(this.maxLevel)
            .max(1);
    };
    ChangeWorldComponent.prototype.getWorldId = function (index, world) {
        return world.name + world.level + index;
    };
    ChangeWorldComponent.prototype.randomize = function () {
        this.ms.game.generateWorlds(this.minLevel, this.maxLevel);
    };
    ChangeWorldComponent.prototype.ngOnDestroy = function () {
        this.worldSub.unsubscribe();
    };
    ChangeWorldComponent.prototype.travel = function () {
        this.travelMessage = false;
        this.ms.game.goToWorld(this.worldTravel);
        this.router.navigateByUrl("/");
    };
    ChangeWorldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-change-world",
            template: __webpack_require__(/*! ./change-world.component.html */ "./src/app/change-world/change-world.component.html"),
            styles: [__webpack_require__(/*! ./change-world.component.scss */ "./src/app/change-world/change-world.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChangeWorldComponent);
    return ChangeWorldComponent;
}());



/***/ }),

/***/ "./src/app/end-in.pipe.ts":
/*!********************************!*\
  !*** ./src/app/end-in.pipe.ts ***!
  \********************************/
/*! exports provided: EndInPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndInPipe", function() { return EndInPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns_distance_in_words_strict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/distance_in_words_strict */ "./node_modules/date-fns/distance_in_words_strict/index.js");
/* harmony import */ var date_fns_distance_in_words_strict__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_strict__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ "./node_modules/date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_is_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/is_valid */ "./node_modules/date-fns/is_valid/index.js");
/* harmony import */ var date_fns_is_valid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_valid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format.pipe */ "./src/app/format.pipe.ts");
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options.service */ "./src/app/options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SECONDS_IN_YEAR = 3.154e7;
var EndInPipe = /** @class */ (function () {
    function EndInPipe(options) {
        this.options = options;
        this.pipeFormat = new _format_pipe__WEBPACK_IMPORTED_MODULE_4__["FormatPipe"](options);
    }
    EndInPipe.prototype.transform = function (value, args) {
        if (!isNaN(value) && value > 0 && value < Number.POSITIVE_INFINITY) {
            var dateEnd = new Date(Date.now() + value);
            if (date_fns_is_valid__WEBPACK_IMPORTED_MODULE_3__(dateEnd)) {
                return this.options.timeFormatDetail
                    ? date_fns_distance_in_words_strict__WEBPACK_IMPORTED_MODULE_1__(0, value)
                    : date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__(new Date(Date.now() + value));
            }
            else {
                return ("在 " + this.pipeFormat.transform(value / SECONDS_IN_YEAR) + " 年");
            }
        }
        else {
            return "没有";
        }
    };
    EndInPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "endIn"
        }),
        __metadata("design:paramtypes", [_options_service__WEBPACK_IMPORTED_MODULE_5__["OptionsService"]])
    ], EndInPipe);
    return EndInPipe;
}());



/***/ }),

/***/ "./src/app/format.pipe.ts":
/*!********************************!*\
  !*** ./src/app/format.pipe.ts ***!
  \********************************/
/*! exports provided: FormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatPipe", function() { return FormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.service */ "./src/app/options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormatPipe = /** @class */ (function () {
    function FormatPipe(options) {
        this.options = options;
    }
    FormatPipe.prototype.transform = function (value, integer, formatter) {
        value = new Decimal(value);
        if (!formatter)
            formatter = this.options.formatter;
        var str = "";
        if (value.abs().lt(100000)) {
            var num = value.abs().toNumber();
            var digits = integer || num >= 100
                ? 0
                : num < 10
                    ? num < 0.001 && num !== 0
                        ? 6
                        : 2
                    : 1;
            if (num < 100) {
                var pow = Math.pow(10, digits + 1);
                num = Math.floor(num * pow) / pow;
            }
            else {
                num = Math.floor(num);
            }
            str = num.toLocaleString(this.options.usaFormat ? "en-US" : "it-IT", {
                minimumFractionDigits: digits,
                maximumFractionDigits: digits
            });
        }
        else {
            str = formatter.formatShort(value.abs());
            if (integer && value.abs().lessThan(100))
                str = str.replace(/\.0+$/, "");
            if (!this.options.usaFormat)
                str = str.replace(".", ",");
        }
        return (value.lt(0) ? "-" : "") + str;
    };
    FormatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "format"
        }),
        __metadata("design:paramtypes", [_options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"]])
    ], FormatPipe);
    return FormatPipe;
}());



/***/ }),

/***/ "./src/app/group-tabs/group-auto-buy/group-auto-buy.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/group-tabs/group-auto-buy/group-auto-buy.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <div *ngIf=\"unitGroup\"\n       class=\"clr-col-xs-12\tclr-col-sm-6\tclr-col-md-6\tclr-col-lg-6\tclr-col-xl-6\">\n\n    <h5>\n      自动购买者聚合分组\n    </h5>\n\n    <button class=\"btn btn-success-outline\"\n            (click)=\"allOn(true)\">全部开启</button>\n    <button class=\"btn btn-danger-outline\"\n            (click)=\"allOn(false)\">全部关闭</button>\n    <button class=\"btn btn-outline\"\n            (click)=\"multiModal = true\">最大购买倍数</button>\n\n    <clr-modal [(clrModalOpen)]=\"multiModal\">\n      <h3 class=\"modal-title\">设置最大购买倍数</h3>\n      <div class=\"modal-body\">\n        <form clrForm\n              class=\"clr-form clr-form-compact\">\n\n          <div class=\"form-group\">\n            <label for=\"price_m\">最大购买倍数:</label>\n            <input class=\"clr-input\"\n                   placeholder=\"Priority\"\n                   name=\"price_m\"\n                   [(ngModel)]=\"reqMulti\"\n                   type=\"number\"\n                   placeholder=\"1\"\n                   min=\"0\"\n                   max=\"1\"\n                   step=\"0.01\"\n                   size=\"2\" />\n          </div>\n\n          <!-- <label>AutoBuyer type:</label> -->\n          <div class=\"form-group\">\n            <label for=\"sel\">自动购买者类型:</label>\n            <div class=\"select\">\n              <select name=\"sel\"\n                      [(ngModel)]=\"autoBuyType\">\n                <option value=\"0\">所有类型</option>\n                <option value=\"1\"\n                        *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyQuantity.done\">Hatch</option>\n                <option value=\"2\"\n                        *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyTeam.done\">Team</option>\n                <option value=\"3\"\n                        *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyTwin.done\">Twin</option>\n              </select>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\"\n                class=\"btn btn-outline\"\n                (click)=\"multiModal = false\">取消</button>\n        <button type=\"button\"\n                class=\"btn btn-primary\"\n                (click)=\"setMulti(false)\">已选择</button>\n        <button type=\"button\"\n                class=\"btn btn-primary\"\n                (click)=\"setMulti(true)\">全部</button>\n      </div>\n    </clr-modal>\n\n    <app-action-group *ngIf=\"hatchActionGrp\"\n                      [actGr]=\"hatchActionGrp\"></app-action-group>\n    <app-action-group *ngIf=\"teamActionGrp && ms.game.researches.team2.done\"\n                      [actGr]=\"teamActionGrp\"></app-action-group>\n    <app-action-group *ngIf=\"twinActionGrp && ms.game.researches.twin.done\"\n                      [actGr]=\"twinActionGrp\"></app-action-group>\n\n  </div>\n  <div *ngIf=\"unitGroup\"\n       class=\"clr-col-xs-12\tclr-col-sm-6\tclr-col-md-6\tclr-col-lg-6\tclr-col-xl-6\">\n    <h6> 自动购买者: </h6>\n\n    <clr-datagrid *ngIf=\"unitGroup\"\n                  class=\"datagrid-compact\"\n                  [(clrDgSelected)]=\"unitGroup.selected\"\n                  (clrDgSelectedChange)=\"selectedChanged($event)\">\n\n      <clr-dg-column [clrDgField]=\"'unit.name'\">名称</clr-dg-column>\n\n      <clr-dg-column [clrDgSortBy]=\"unitAutoHatchSorter\"\n                     *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyQuantity.done\">\n        孵化 - 倍数\n      </clr-dg-column>\n      <clr-dg-column [clrDgSortBy]=\"unitAutoTeamSorter\"\n                     *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyTeam.done\">\n        团队 - 倍数\n      </clr-dg-column>\n      <clr-dg-column [clrDgSortBy]=\"unitAutoTwinSorter\"\n                     *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyTwin.done\">\n        双胞胎 - 倍数\n      </clr-dg-column>\n      <clr-dg-row *clrDgItems=\"let unit of unitGroup.unlocked\"\n                  [clrDgItem]=\"unit\">\n        <clr-dg-cell>\n          <a [routerLink]=\"'/nav/unit/'+unit.id\">\n            {{unit.name}}\n          </a>\n        </clr-dg-cell>\n\n        <clr-dg-cell *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyQuantity.done && unit.buyAction?.autoBuyer\"\n                     class=\"monospace\">\n          <clr-checkbox *ngIf=\"unit.buyAction?.autoBuyer?.quantity.gt(0)\"\n                        name=\"chkH\"\n                        [attr.id]=\"unit.id+ 'chkH'\"\n                        (change)=\"reload()\"\n                        [(ngModel)]=\"unit.buyAction.autoBuyer.active\">\n            <span class=\"monospace\">\n              {{unit.buyAction?.autoBuyer?.quantity | format: true}}\n              {{unit.buyAction?.autoBuyer?.priceSavePercent | format: false}}\n            </span>\n          </clr-checkbox>\n        </clr-dg-cell>\n        <clr-dg-cell *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyTeam.done\"\n                     class=\"monospace\">\n          <clr-checkbox *ngIf=\"unit.teamAction?.autoBuyer?.quantity.gt(0)\"\n                        name=\"chkT\"\n                        [attr.id]=\"unit.id+ 'chkT'\"\n                        (change)=\"reload()\"\n                        [(ngModel)]=\"unit.teamAction.autoBuyer.active\">\n            <span class=\"monospace\">\n              {{unit.teamAction?.autoBuyer?.quantity | format: true}}\n              {{unit.teamAction?.autoBuyer?.priceSavePercent | format: false}}\n            </span>\n          </clr-checkbox>\n        </clr-dg-cell>\n        <clr-dg-cell *ngIf=\"ms.game.allPrestige.autoBuyUnlock.autoBuyTwin.done\"\n                     class=\"monospace\">\n          <clr-checkbox *ngIf=\"unit.twinAction?.autoBuyer?.quantity.gt(0)\"\n                        name=\"chkW\"\n                        [attr.id]=\"unit.id+ 'chkW'\"\n                        (change)=\"reload()\"\n                        [(ngModel)]=\"unit.twinAction.autoBuyer.active\">\n            <span class=\"monospace\">\n              {{unit.twinAction?.autoBuyer?.quantity | format: true}}\n              {{unit.twinAction?.autoBuyer?.priceSavePercent | format: false}}\n            </span>\n          </clr-checkbox>\n        </clr-dg-cell>\n\n      </clr-dg-row>\n\n\n    </clr-datagrid>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/group-tabs/group-auto-buy/group-auto-buy.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/group-tabs/group-auto-buy/group-auto-buy.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/group-tabs/group-auto-buy/group-auto-buy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/group-tabs/group-auto-buy/group-auto-buy.component.ts ***!
  \***********************************************************************/
/*! exports provided: GroupAutoBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAutoBuyComponent", function() { return GroupAutoBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/actions/action-group */ "./src/app/model/actions/action-group.ts");
/* harmony import */ var _model_unit_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _model_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/utility */ "./src/app/model/utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupAutoBuyComponent = /** @class */ (function () {
    function GroupAutoBuyComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.unitAutoHatchSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_4__["UnitAutoHatchSorter"]();
        this.unitAutoTeamSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_4__["UnitAutoTeamSorter"]();
        this.unitAutoTwinSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_4__["UnitAutoTwinSorter"]();
        this.multiModal = false;
        this.reqMulti = 1;
        this.autoBuyType = "0";
    }
    GroupAutoBuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.updateEmitter.subscribe(function (m) {
            _this.cd.markForCheck();
        });
    };
    GroupAutoBuyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    GroupAutoBuyComponent.prototype.ngOnChanges = function (changes) {
        this.getGroup();
    };
    GroupAutoBuyComponent.prototype.selectedChanged = function (event) {
        this.getGroup();
    };
    GroupAutoBuyComponent.prototype.getGroup = function () {
        this.hatchActionGrp = null;
        this.teamActionGrp = null;
        this.twinActionGrp = null;
        if (this.unitGroup.unlocked[0].buyAction) {
            if (this.ms.game.allPrestige.autoBuyUnlock.autoBuyQuantity.done) {
                this.hatchActionGrp = new _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"]("孵化", this.unitGroup.selected
                    .filter(function (u) { return u.buyAction; })
                    .map(function (u) { return u.buyAction; })
                    .filter(function (b) { return b.autoBuyer; })
                    .map(function (a) { return a.autoBuyer; }), this.ms.game);
                this.hatchActionGrp.actionList.forEach(function (a) { return a.reload(); });
            }
            if (this.ms.game.allPrestige.autoBuyUnlock.autoBuyTeam.done &&
                this.unitGroup.unlocked[0].teamAction) {
                this.teamActionGrp = new _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"]("团队合作", this.unitGroup.selected
                    .filter(function (u) { return u.teamAction; })
                    .map(function (u) { return u.teamAction; })
                    .filter(function (b) { return b.autoBuyer; })
                    .map(function (a) { return a.autoBuyer; }), this.ms.game);
                this.teamActionGrp.actionList.forEach(function (a) { return a.reload(); });
            }
            if (this.ms.game.allPrestige.autoBuyUnlock.autoBuyTwin.done &&
                this.unitGroup.unlocked[0].twinAction) {
                this.twinActionGrp = new _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"]("双胞胎", this.unitGroup.selected
                    .filter(function (u) { return u.twinAction; })
                    .map(function (u) { return u.twinAction; })
                    .filter(function (b) { return b.autoBuyer; })
                    .map(function (a) { return a.autoBuyer; }), this.ms.game);
                this.twinActionGrp.actionList.forEach(function (a) { return a.reload(); });
            }
        }
        else {
            this.hatchActionGrp = null;
            this.teamActionGrp = null;
            this.twinActionGrp = null;
        }
    };
    GroupAutoBuyComponent.prototype.reload = function () {
        this.ms.game.autoBuyManager.buildActiveList();
    };
    GroupAutoBuyComponent.prototype.allOn = function (status) {
        if (status === void 0) { status = true; }
        this.unitGroup.unlocked.forEach(function (u) {
            if (u.buyAction && u.buyAction.autoBuyer) {
                u.buyAction.autoBuyer.active = status;
            }
            if (u.teamAction && u.teamAction.autoBuyer) {
                u.teamAction.autoBuyer.active = status;
            }
            if (u.twinAction && u.twinAction.autoBuyer) {
                u.twinAction.autoBuyer.active = status;
            }
        });
        this.reload();
    };
    GroupAutoBuyComponent.prototype.setMulti = function (all) {
        var _this = this;
        if (all === void 0) { all = true; }
        if (this.reqMulti <= 1 && this.reqMulti > 0) {
            var selection = all ? this.unitGroup.unlocked : this.unitGroup.selected;
            selection.forEach(function (u) {
                switch (_this.autoBuyType) {
                    case "0": {
                        u.buyAction.autoBuyer.priceSavePercent = _this.reqMulti;
                        u.teamAction.autoBuyer.priceSavePercent = _this.reqMulti;
                        u.twinAction.autoBuyer.priceSavePercent = _this.reqMulti;
                        break;
                    }
                    case "1": {
                        u.buyAction.autoBuyer.priceSavePercent = _this.reqMulti;
                        break;
                    }
                    case "2": {
                        u.teamAction.autoBuyer.priceSavePercent = _this.reqMulti;
                        break;
                    }
                    case "3": {
                        u.twinAction.autoBuyer.priceSavePercent = _this.reqMulti;
                        break;
                    }
                }
            });
        }
        this.multiModal = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_unit_group__WEBPACK_IMPORTED_MODULE_3__["UnitGroup"])
    ], GroupAutoBuyComponent.prototype, "unitGroup", void 0);
    GroupAutoBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-group-auto-buy",
            template: __webpack_require__(/*! ./group-auto-buy.component.html */ "./src/app/group-tabs/group-auto-buy/group-auto-buy.component.html"),
            styles: [__webpack_require__(/*! ./group-auto-buy.component.scss */ "./src/app/group-tabs/group-auto-buy/group-auto-buy.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], GroupAutoBuyComponent);
    return GroupAutoBuyComponent;
}());



/***/ }),

/***/ "./src/app/group-tabs/group-tabs.component.html":
/*!******************************************************!*\
  !*** ./src/app/group-tabs/group-tabs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{unitGroup.name}}\n\n  <clr-dropdown>\n    <button type=\"button\"\n            class=\"btn btn-outline-primary btn-link\"\n            clrDropdownTrigger>\n      操作\n      <clr-icon shape=\"caret down\"></clr-icon>\n    </button>\n    <clr-dropdown-menu *clrIfOpen>\n      <label class=\"dropdown-header\">选项</label>\n      <clr-dropdown>\n        <button type=\"button\"\n                clrDropdownTrigger>选择</button>\n        <clr-dropdown-menu>\n          <button type=\"button\"\n                  (click)=\"select(bug)\"\n                  clrDropdownItem\n                  *ngFor=\"let bug of bugs;trackBy getBugId\">\n            {{utility.getBugName(bug) }}\n          </button>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n      <clr-dropdown>\n        <button type=\"button\"\n                clrDropdownTrigger>添加到选项</button>\n        <clr-dropdown-menu>\n          <button type=\"button\"\n                  (click)=\"selectAdd(bug)\"\n                  clrDropdownItem\n                  *ngFor=\"let bug of bugs;trackBy getBugId\">\n            {{utility.getBugName(bug) }}\n          </button>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n      <clr-dropdown>\n        <button type=\"button\"\n                clrDropdownTrigger>取消选择</button>\n        <clr-dropdown-menu>\n          <button type=\"button\"\n                  (click)=\"selectRemove(bug)\"\n                  clrDropdownItem\n                  *ngFor=\"let bug of bugs;trackBy getBugId\">\n            {{utility.getBugName(bug) }}\n          </button>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n\n    </clr-dropdown-menu>\n  </clr-dropdown>\n\n</h1>\n<clr-tabs>\n\n  <clr-tab>\n    <button clrTabLink\n            id=\"link1\">概览</button>\n    <clr-tab-content id=\"content1\"\n                     *clrIfActive=\"ms.overviewTaActive\">\n      <app-unit-group *ngIf=\"unitGroup\"\n                      [unitGroup]=\"unitGroup\"></app-unit-group>\n    </clr-tab-content>\n  </clr-tab>\n\n  <clr-tab *ngIf=\"ms.game.tabs.autoBuy.unlocked\">\n    <button clrTabLink>自动购买者</button>\n    <clr-tab-content *clrIfActive=\"ms.prestigeTaActive\">\n      <app-group-auto-buy [unitGroup]=\"unitGroup\"></app-group-auto-buy>\n    </clr-tab-content>\n  </clr-tab>\n\n</clr-tabs>\n"

/***/ }),

/***/ "./src/app/group-tabs/group-tabs.component.scss":
/*!******************************************************!*\
  !*** ./src/app/group-tabs/group-tabs.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ clr-tabs ul {\n  margin-top: -0.4rem; }\n\n:host /deep/ h5 {\n  margin-bottom: 15px;\n  margin-top: 8px; }\n"

/***/ }),

/***/ "./src/app/group-tabs/group-tabs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/group-tabs/group-tabs.component.ts ***!
  \****************************************************/
/*! exports provided: GroupTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupTabsComponent", function() { return GroupTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash_es_uniq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/uniq */ "./node_modules/lodash-es/uniq.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/utility */ "./src/app/model/utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupTabsComponent = /** @class */ (function () {
    function GroupTabsComponent(ms, route, cd) {
        this.ms = ms;
        this.route = route;
        this.cd = cd;
        this.bugs = new Array();
        this.utility = _model_utility__WEBPACK_IMPORTED_MODULE_4__["Utility"];
    }
    GroupTabsComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    GroupTabsComponent.prototype.ngOnInit = function () {
        this.paramsSub = this.route.params.subscribe(this.getGroup.bind(this));
    };
    GroupTabsComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    GroupTabsComponent.prototype.getGroup = function (params) {
        this.paramsSave = params;
        var id = "" + params.id;
        if (id === undefined)
            id = "0";
        this.unitGroup = this.ms.game.unitGroups.find(function (g) { return "" + g.id === id; });
        if (!this.unitGroup)
            this.unitGroup = this.ms.game.unitGroups[0];
        if (!this.unitGroup)
            return;
        this.ms.game.lastUnitUrl = "nav/group/" + this.unitGroup.id;
        this.bugs = Object(lodash_es_uniq__WEBPACK_IMPORTED_MODULE_2__["default"])(this.unitGroup.unlocked.map(function (u) { return u.bugType; }));
        this.cd.markForCheck();
    };
    GroupTabsComponent.prototype.select = function (bug) {
        this.unitGroup.selected = this.unitGroup.unlocked.filter(function (u) { return u.bugType === bug; });
    };
    GroupTabsComponent.prototype.selectAdd = function (bug) {
        this.unitGroup.selected = Object(lodash_es_uniq__WEBPACK_IMPORTED_MODULE_2__["default"])(this.unitGroup.selected.concat(this.unitGroup.unlocked.filter(function (u) { return u.bugType === bug; })));
    };
    GroupTabsComponent.prototype.selectRemove = function (bug) {
        this.unitGroup.selected = this.unitGroup.selected.filter(function (u) { return u.bugType !== bug; });
    };
    GroupTabsComponent.prototype.getBugId = function (index, bug) {
        return bug;
    };
    GroupTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-group-tabs",
            template: __webpack_require__(/*! ./group-tabs.component.html */ "./src/app/group-tabs/group-tabs.component.html"),
            styles: [__webpack_require__(/*! ./group-tabs.component.scss */ "./src/app/group-tabs/group-tabs.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-area]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], GroupTabsComponent);
    return GroupTabsComponent;
}());



/***/ }),

/***/ "./src/app/group-tabs/unit-group/unit-group.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/group-tabs/unit-group/unit-group.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <div *ngIf=\"unitGroup\"\n       class=\"clr-col-xs-12\tclr-col-sm-6\tclr-col-md-6\tclr-col-lg-6\tclr-col-xl-6\">\n\n    <h5>\n      这里集合了 {{unitGroup.name}}: {{unitsSpan}}\n    </h5>\n\n    <div *ngIf=\"hatchActionGrp\">\n      <span>操作性(平均数): </span>\n      <p-slider [min]=\"0\"\n                [max]=\"100\"\n                [step]=\"0.01\"\n                [(ngModel)]=\"operativity\"\n                (onChange)=\"changeOperativity()\"\n                [disabled]=\"unitGroup.selected.length == 0\"\n                animate=\"true\"></p-slider>\n    </div>\n\n    <app-action-group *ngIf=\"hatchActionGrp\"\n                      [actGr]=\"hatchActionGrp\"></app-action-group>\n    <app-action-group *ngIf=\"teamActionGrp && ms.game.researches.team2.done\"\n                      [actGr]=\"teamActionGrp\"></app-action-group>\n    <app-action-group *ngIf=\"twinActionGrp && ms.game.researches.twin.done\"\n                      [actGr]=\"twinActionGrp\"></app-action-group>\n\n  </div>\n  <div class=\"clr-col-xs-12\tclr-col-sm-6\tclr-col-md-6\tclr-col-lg-6\tclr-col-xl-6\">\n    <h6> 统计: </h6>\n    <clr-datagrid *ngIf=\"unitGroup\"\n                  class=\"datagrid-compact\"\n                  [(clrDgSelected)]=\"unitGroup.selected\"\n                  (clrDgSelectedChange)=\"selectedChanged($event)\">\n\n      <clr-dg-column [clrDgField]=\"'unit.name'\">名称</clr-dg-column>\n      <clr-dg-column [clrDgSortBy]=\"unitQuantitySorter\">\n        <span *ngIf=\"!isSmall\">数量</span>\n        <span *ngIf=\"isSmall\">Q. B.</span>\n        <span *ngIf=\"team && isSmall\">Te.</span>\n        <span *ngIf=\"twin && isSmall\">Tw.</span>\n      </clr-dg-column>\n      <clr-dg-column [clrDgSortBy]=\"unitBoughtSorter\"\n                     *ngIf=\"!isSmall\">已购买</clr-dg-column>\n      <clr-dg-column [clrDgSortBy]=\"unitTeamSorter\"\n                     *ngIf=\"team && !isSmall\">团队</clr-dg-column>\n      <clr-dg-column [clrDgSortBy]=\"unitTwinSorter\"\n                     *ngIf=\"twin && !isSmall\">双胞胎</clr-dg-column>\n\n      <clr-dg-row *clrDgItems=\"let unit of unitGroup.unlocked\"\n                  [clrDgItem]=\"unit\">\n        <clr-dg-cell>\n          <a [routerLink]=\"'/nav/unit/'+unit.id\">\n            {{unit.name}}\n          </a>\n        </clr-dg-cell>\n        <clr-dg-cell>\n          <span *ngIf=\"!isSmall\"\n                class=\"monospace\">{{unit.quantity | format: true}}</span>\n          <span *ngIf=\"isSmall\"\n                class=\"monospace\">\n            {{unit.quantity | format: true}} - {{unit.buyAction?.quantity | format: true}}\n            <span *ngIf=\"team && isSmall\"\n                  class=\"monospace\">- {{unit.teamAction?.quantity | format: true}}</span>\n            <span *ngIf=\"twin && isSmall\"\n                  class=\"monospace\">- {{unit.twinAction?.quantity | format: true}}</span>\n          </span>\n        </clr-dg-cell>\n        <clr-dg-cell *ngIf=\"!isSmall\"\n                     class=\"monospace\">\n          {{unit.buyAction?.quantity | format: true}}\n        </clr-dg-cell>\n        <clr-dg-cell *ngIf=\"team && !isSmall\"\n                     class=\"monospace\">\n          {{unit.teamAction?.quantity | format: true}}\n        </clr-dg-cell>\n        <clr-dg-cell *ngIf=\"twin && !isSmall\"\n                     class=\"monospace\">\n          {{unit.twinAction?.quantity | format: true}}\n        </clr-dg-cell>\n      </clr-dg-row>\n\n\n    </clr-datagrid>\n\n    <div class=\"pieContainer\"\n         #pieContainer>\n      <!-- <canvas baseChart [data]=\"unitGroup.chartData\" [labels]=\"unitGroup.chartLabels\" [chartType]=\"'pie'\"> -->\n      <canvas #chart> </canvas>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/group-tabs/unit-group/unit-group.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/group-tabs/unit-group/unit-group.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clr-row {\n  margin-left: 0;\n  margin-right: 0; }\n\nclr-datagrid {\n  margin-top: 0;\n  padding-top: 0; }\n\n@media only screen and (max-width: 768px) {\n  .clr-col-xs-12 {\n    padding-left: 0.2rem !important;\n    padding-right: 0 !important; }\n  .pieContainer {\n    max-width: calc(100% - 40px); } }\n\n.pieContainer {\n  display: flex;\n  height: 80%;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/group-tabs/unit-group/unit-group.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/group-tabs/unit-group/unit-group.component.ts ***!
  \***************************************************************/
/*! exports provided: UnitGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitGroupComponent", function() { return UnitGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/actions/action-group */ "./src/app/model/actions/action-group.ts");
/* harmony import */ var _model_CONSTANTS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _model_unit_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _model_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/utility */ "./src/app/model/utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UnitGroupComponent = /** @class */ (function () {
    function UnitGroupComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.selected = new Array();
        this.unitsSpan = "";
        this.unitQuantitySorter = new _model_utility__WEBPACK_IMPORTED_MODULE_5__["UnitQuantitySorter"]();
        this.unitBoughtSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_5__["UnitBoughtSorter"]();
        this.unitTeamSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_5__["UnitTeamSorter"]();
        this.unitTwinSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_5__["UnitTwinSorter"]();
        this.team = false;
        this.twin = false;
        this.isSmall = false;
        this.operativity = 100;
        this.forceChange = false;
    }
    UnitGroupComponent.prototype.ngOnChanges = function (changes) {
        this.forceChange = true;
        this.getGroup();
    };
    UnitGroupComponent.prototype.ngAfterViewInit = function () {
        if (!this.unitGroup)
            this.unitGroup = this.ms.game.unitGroups[0];
        this.unitGroup.updateChartLabel();
        setTimeout(this.initChart.bind(this), 0.1);
    };
    UnitGroupComponent.prototype.initChart = function () {
        this.chartRef.nativeElement.width = this.pieContainerRef.nativeElement.clientWidth;
        this.chartRef.nativeElement.height = this.pieContainerRef.nativeElement.clientHeight;
        var canvas = this.chartRef.nativeElement;
        canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);
        Chart.defaults.global.tooltips.enabled = false;
        var chartCtx = this.chartRef.nativeElement.getContext("2d");
        this.chart = new Chart(chartCtx, {
            type: "pie",
            data: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: _model_CONSTANTS__WEBPACK_IMPORTED_MODULE_3__["CONSTS"].CHART_COLORS.backgroundColor,
                        borderColor: _model_CONSTANTS__WEBPACK_IMPORTED_MODULE_3__["CONSTS"].CHART_COLORS.borderColor,
                        borderWidth: 0
                    }
                ]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false
            }
        });
    };
    UnitGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSmall = window.innerWidth < 1200;
        this.getOperativity();
        this.sub = this.ms.updateEmitter.subscribe(function (m) {
            _this.updateChart();
            _this.getOperativity();
            _this.cd.markForCheck();
        });
        this.subEff = this.ms.efficiencyEmitter.subscribe(function (e) {
            _this.operativity = e;
            _this.cd.markForCheck();
        });
    };
    UnitGroupComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.subEff.unsubscribe();
    };
    UnitGroupComponent.prototype.getOperativity = function () {
        if (this.unitGroup.unlocked[0].buyAction) {
            this.operativity =
                this.unitGroup.selected.length > 0
                    ? this.unitGroup.selected
                        .map(function (u) { return u.efficiency; })
                        .reduce(function (p, c) { return p + c; }, 0) / this.unitGroup.selected.length
                    : 0;
        }
    };
    UnitGroupComponent.prototype.getGroup = function () {
        this.unitsSpan = this.unitGroup.unlocked
            .map(function (u) { return u.name; })
            .reduce(function (p, c) { return p + ", " + c; });
        this.hatchActionGrp = null;
        this.teamActionGrp = null;
        this.twinActionGrp = null;
        if (this.unitGroup.unlocked[0].buyAction) {
            this.hatchActionGrp = new _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"]("孵化", this.unitGroup.selected.filter(function (u) { return u.buyAction; }).map(function (u) { return u.buyAction; }), this.ms.game);
            if (this.ms.game.researches.team2.done &&
                this.unitGroup.unlocked[0].teamAction) {
                this.team = true;
                this.teamActionGrp = new _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"]("团队合作", this.unitGroup.selected
                    .filter(function (u) { return u.teamAction; })
                    .map(function (u) { return u.teamAction; }), this.ms.game);
            }
            if (this.ms.game.researches.twin.done &&
                this.unitGroup.unlocked[0].twinAction) {
                this.twin = true;
                this.twinActionGrp = new _model_actions_action_group__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"]("双胞胎", this.unitGroup.selected
                    .filter(function (u) { return u.twinAction; })
                    .map(function (u) { return u.twinAction; }), this.ms.game);
            }
        }
        else {
            this.hatchActionGrp = null;
            this.teamActionGrp = null;
            this.twinActionGrp = null;
        }
        // this.doGraph();
        this.cd.markForCheck();
    };
    UnitGroupComponent.prototype.selectedChanged = function (event) {
        this.getGroup();
    };
    UnitGroupComponent.prototype.updateChart = function () {
        if (!this.unitGroup)
            return;
        var lastData = this.unitGroup.chartData;
        this.unitGroup.updateChart();
        if (this.forceChange ||
            lastData !== this.unitGroup.chartData ||
            (this.chart &&
                this.chart.data &&
                this.chart.data.datasets[0] &&
                this.chart.data.datasets[0].data.length === 0) ||
            (this.chart &&
                this.chart.labels &&
                this.chart.labels[0] !== this.unitGroup.chartLabels[0])) {
            this.doGraph();
            this.forceChange = false;
        }
    };
    UnitGroupComponent.prototype.doGraph = function () {
        this.unitGroup.updateChartLabel();
        if (typeof this.chart !== "undefined" && this.chart) {
            this.chart.data.datasets[0].data = this.unitGroup.chartData;
            this.chart.data.labels = this.unitGroup.chartLabels;
            this.chart.update();
        }
    };
    UnitGroupComponent.prototype.changeOperativity = function (event) {
        var _this = this;
        this.unitGroup.selected.forEach(function (u) { return (u.efficiency = _this.operativity); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_unit_group__WEBPACK_IMPORTED_MODULE_4__["UnitGroup"])
    ], UnitGroupComponent.prototype, "unitGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("chart"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UnitGroupComponent.prototype, "chartRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pieContainer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UnitGroupComponent.prototype, "pieContainerRef", void 0);
    UnitGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-unit-group",
            template: __webpack_require__(/*! ./unit-group.component.html */ "./src/app/group-tabs/unit-group/unit-group.component.html"),
            styles: [__webpack_require__(/*! ./unit-group.component.scss */ "./src/app/group-tabs/unit-group/unit-group.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UnitGroupComponent);
    return UnitGroupComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-header class=\"header\"\n            [ngClass]=\"headerClass\">\n\n  <div class=\"header-nav\"\n       [clr-nav-level]=\"1\">\n    <a [routerLink]='\"nav\"'\n       class=\"nav-link\"\n       [routerLinkActive]=\"'active'\"\n       (click)=\"navigateLast()\">\n      <span class=\"nav-text\">\n        <clr-icon shape=\"bug\"></clr-icon>\n      </span>\n    </a>\n    <a [routerLink]='\"lab\"'\n       class=\"nav-link\"\n       *ngIf=\"lab\"\n       [routerLinkActive]=\"'active'\">\n      <span class=\"nav-text\">\n        <clr-icon shape=\"lightbulb\"\n                  [ngClass]=\"{'has-badge': labBadge}\"></clr-icon>\n      </span>\n    </a>\n    <a [routerLink]='\"home\"'\n       class=\"nav-link\"\n       [routerLinkActive]=\"'active'\">\n      <span class=\"nav-text\">\n        <clr-icon shape=\"dashboard\"></clr-icon>\n      </span>\n    </a>\n    <a [routerLink]='\"travel\"'\n       class=\"nav-link\"\n       *ngIf=\"travel\"\n       [routerLinkActive]=\"'active'\">\n      <span class=\"nav-text\">\n        <clr-icon shape=\"world\"\n                  [ngClass]=\"{'has-badge': travelBadge}\"></clr-icon>\n      </span>\n    </a>\n    <a [routerLink]='\"auto\"'\n       class=\"nav-link\"\n       *ngIf=\"autoBuy\"\n       [routerLinkActive]=\"'active'\">\n      <span class=\"nav-text\">\n        <clr-icon shape=\"star\"></clr-icon>\n      </span>\n    </a>\n    <a [routerLink]='\"pre\"'\n       class=\"nav-link\"\n       *ngIf=\"prestige\"\n       [routerLinkActive]=\"'active'\">\n      <span class=\"nav-text\">\n        <clr-icon shape=\"store\"></clr-icon>\n      </span>\n    </a>\n    <a [routerLink]='\"mast\"'\n       class=\"nav-link\"\n       *ngIf=\"mastery\"\n       [routerLinkActive]=\"'active'\">\n      <span class=\"nav-text\">\n        <clr-icon shape=\"star\"></clr-icon>\n      </span>\n    </a>\n  </div>\n\n  <div class=\"header-actions\">\n\n    <form class=\"search\">\n      <label id=\"multiLabel\"\n             for=\"multi\">数量(N):&nbsp;</label>\n      <input class=\"multiBuy\"\n             min=\"1\"\n             id=\"multi\"\n             type=\"number\"\n             name=\"buyMulti\"\n             placeholder=\"Buy multiplier\"\n             [(ngModel)]=\"buyMulti\">\n    </form>\n\n    <clr-dropdown  style=\"padding-left: 15px;\">\n      <button class=\"nav-icon\"\n              clrDropdownTrigger>\n        <clr-icon shape=\"tools\"></clr-icon>\n        <clr-icon shape=\"caret down\"></clr-icon>\n      </button>\n      <clr-dropdown-menu *clrIfOpen\n                         clrPosition=\"bottom-right\">\n\n        <clr-dropdown *ngIf=\"ms.game.allPrestige.time.timeProducer.quantity.gt(0)\">\n          <button type=\"button\"\n                  clrDropdownTrigger>时间扭曲</button>\n          <clr-dropdown-menu clrPosition=\"left-top\">\n            <a clrDropdownItem\n               (click)=\"warp(p)\"\n               *ngFor=\"let p of minuteWarps\"\n               [ngClass]=\"{'disabled': !warpAv(p)}\">\n              扭曲 {{p}} 分钟\n            </a>\n          </clr-dropdown-menu>\n        </clr-dropdown>\n\n        <a clrDropdownItem\n           (click)=\"all100()\">全部 100%</a>\n\n        <clr-dropdown *ngFor=\"let list of groupNoEnemy; trackBy:getListId\">\n          <button type=\"button\"\n                  clrDropdownTrigger>{{list.name}}</button>\n          <clr-dropdown-menu clrPosition=\"left-top\"\n                             *clrIfOpen>\n            <a clrDropdownItem\n               (click)=\"list.buyN(buyMulti)\">购买 n</a>\n            <a clrDropdownItem\n               (click)=\"list.buyTeam(buyMulti)\"\n               *ngIf=\"ms.game.researches.team2.done\">团队 n</a>\n            <a clrDropdownItem\n               (click)=\"list.buyTwins(buyMulti)\"\n               *ngIf=\"ms.game.researches.twin.done\">双胞胎 n</a>\n            <div class=\"dropdown-divider\"></div>\n            <clr-dropdown *ngIf=\"ms.game.tabs.autoBuy.unlocked && list.hasAutoBuy()\">\n              <button type=\"button\"\n                      clrDropdownTrigger>自动购买者</button>\n              <clr-dropdown-menu *clrIfOpen>\n                <a clrDropdownItem\n                   (click)=\"list.autoBuy(true)\">全部开启</a>\n                <a clrDropdownItem\n                   (click)=\"list.autoBuy(false)\">全部关闭</a>\n                <a clrDropdownItem\n                   *ngIf=\"list.hasAutoBuyBuy()\"\n                   (click)=\"list.autoBuyBuy(true)\">孵化开启</a>\n                <a clrDropdownItem\n                   *ngIf=\"list.hasAutoBuyBuy()\"\n                   (click)=\"list.autoBuyBuy(false)\">孵化关闭</a>\n                <a clrDropdownItem\n                   *ngIf=\"list.hasAutoBuyTeam()\"\n                   (click)=\"list.autoBuyTeam(true)\">团队开启</a>\n                <a clrDropdownItem\n                   *ngIf=\"list.hasAutoBuyTeam()\"\n                   (click)=\"list.autoBuyTeam(false)\">团队关闭</a>\n                <a clrDropdownItem\n                   *ngIf=\"list.hasAutoBuyTwin()\"\n                   (click)=\"list.autoBuyTwin(true)\">双胞胎开启</a>\n                <a clrDropdownItem\n                   *ngIf=\"list.hasAutoBuyTwin()\"\n                   (click)=\"list.autoBuyTwin(false)\">双胞胎关闭</a>\n              </clr-dropdown-menu>\n            </clr-dropdown>\n            <div class=\"dropdown-divider\"\n                 *ngIf=\"ms.game.tabs.autoBuy.unlocked && list.hasAutoBuy()\"></div>\n            <a clrDropdownItem\n               (click)=\"allCustom(p, list)\"\n               *ngFor=\"let p of percentPreset\">\n              {{p}}%\n            </a>\n          </clr-dropdown-menu>\n        </clr-dropdown>\n\n      </clr-dropdown-menu>\n    </clr-dropdown>\n\n    <a href=\"javascript://\"\n       class=\"nav-link nav-icon\">\n      <clr-icon shape=\"clock\"\n                (click)=\"openTimeModal()\"></clr-icon>\n    </a>\n    <a href=\"javascript://\"\n       class=\"nav-link nav-icon\">\n      <clr-icon [attr.shape]=\"ms.game.isPaused ? 'play' : 'pause'\"\n                (click)=\"ms.game.isPaused = ! ms.game.isPaused\"></clr-icon>\n    </a>\n    <a [routerLink]=\"'opt/save/'\"\n       class=\"nav-link nav-icon\"\n       [routerLinkActive]=\"'active'\">\n      <clr-icon shape=\"cog\"></clr-icon>\n    </a>\n  </div>\n\n</clr-header>\n\n<clr-modal [(clrModalOpen)]=\"timeModal\"\n           [clrModalSize]=\"'lg'\">\n  <h3 class=\"modal-title\">时间扭曲</h3>\n  <div class=\"modal-body actMinH\"\n       *ngIf=\"ms.game.actMin && ms.game.actHour\">\n    <span> 你可以跳过 {{ms.game.time.quantity.toNumber() *1000| endIn}}:\n      <span class=\"monospace\">\n        {{ms.game.time.quantity | format}}\n      </span>\n    </span>\n    <br />\n    <span>\n      你得到了\n      <span class=\"monospace\">\n        {{ms.game.time.c | format }}</span>\n      /秒 最大: <span class=\"monospace\">{{ms.game.maxTimeBank | format}}</span>\n    </span>\n    <div class=\"clr-row\">\n      <div class=\"clr-col-6\">\n        <app-action [action]=\"ms.game.actMin\"></app-action>\n      </div>\n      <div class=\"clr-col-6\">\n        <app-action [action]=\"ms.game.actHour\"></app-action>\n      </div>\n    </div>\n  </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .header-hamburger-trigger,\n:host /deep/ .header-overflow-trigger {\n  height: 1.5rem !important; }\n\nheader,\n.header {\n  height: 1.5rem; }\n\nheader .header-nav .nav-link .fa,\nheader .header-nav .nav-link .nav-icon,\nheader .header-nav .nav-link .nav-text,\nheader .header-nav .nav-link.nav-icon,\nheader .header-nav .nav-link.nav-text,\n.header .header-nav .nav-link .fa,\n.header .header-nav .nav-link .nav-icon,\n.header .header-nav .nav-link .nav-text,\n.header .header-nav .nav-link.nav-icon,\n.header .header-nav .nav-link.nav-text {\n  line-height: 1.5rem; }\n\nheader .branding > a,\nheader .branding > .nav-link,\n.header .branding > a,\n.header .branding > .nav-link {\n  height: 1.5rem;\n  line-height: 1.5rem; }\n\nheader .branding .title,\n.header .branding .title {\n  line-height: 1.5rem; }\n\nheader .settings .nav-link .fa,\nheader .settings .nav-link .nav-icon,\nheader .settings .nav-link .nav-text,\nheader .settings .nav-link.nav-icon,\nheader .settings .nav-link.nav-text,\nheader .header-actions .nav-link .fa,\nheader .header-actions .nav-link .nav-icon,\nheader .header-actions .nav-link .nav-text,\nheader .header-actions .nav-link.nav-icon,\nheader .header-actions .nav-link.nav-text,\n.header .settings .nav-link .fa,\n.header .settings .nav-link .nav-icon,\n.header .settings .nav-link .nav-text,\n.header .settings .nav-link.nav-icon,\n.header .settings .nav-link.nav-text,\n.header .header-actions .nav-link .fa,\n.header .header-actions .nav-link .nav-icon,\n.header .header-actions .nav-link .nav-text,\n.header .header-actions .nav-link.nav-icon,\n.header .header-actions .nav-link.nav-text {\n  line-height: 1.5rem; }\n\nheader .settings .nav-icon,\nheader .header-actions .nav-icon,\n.header .settings .nav-icon,\n.header .header-actions .nav-icon {\n  height: 1.5rem;\n  width: 1.5rem; }\n\nheader .branding,\nheader .header-nav,\nheader .search-box,\nheader .search,\nheader .settings,\nheader .header-actions,\nheader .divider,\n.header .branding,\n.header .header-nav,\n.header .search-box,\n.header .search,\n.header .settings,\n.header .header-actions,\n.header .divider {\n  height: 1.5rem; }\n\n.actMinH {\n  min-height: 8.5rem; }\n\n.multiBuy {\n  background: none;\n  border: 0;\n  color: #fafafa;\n  max-width: 2rem;\n  padding: 0;\n  vertical-align: middle; }\n\n#multiLabel:before {\n  display: none; }\n\n.search {\n  margin-right: 1.2rem; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, ms, cd) {
        this.router = router;
        this.ms = ms;
        this.cd = cd;
        this.lab = false;
        this.labBadge = false;
        this.travel = false;
        this.travelBadge = false;
        this.prestige = false;
        this.mastery = false;
        this.autoBuy = false;
        this.headerClass = "header-6";
        this.timeModal = false;
        this.percentPreset = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
        this.minuteWarps = [1, 5, 10, 20, 30, 60, 90, 120, 240];
        this.groupNoEnemy = new Array();
        this.buyMulti = 1;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.options.headerEmitter.subscribe(function () {
            _this.reloadHeader();
            _this.cd.markForCheck();
        });
        this.subGroup = this.ms.unlockGroupEmiter.subscribe(function () {
            _this.reloadHeader();
            _this.cd.markForCheck();
        });
        this.reloadHeader();
        this.cd.markForCheck();
    };
    HeaderComponent.prototype.reloadHeader = function () {
        var _this = this;
        this.headerClass = "header-" + this.ms.options.header;
        if (this.ms.game) {
            this.groupNoEnemy = this.ms.game.unlockedGroups.filter(function (g) { return g !== _this.ms.game.worldMalus && g !== _this.ms.game.materials; });
        }
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.subGroup.unsubscribe();
    };
    HeaderComponent.prototype.navigateLast = function () {
        this.router.navigateByUrl(this.ms.game.lastUnitUrl);
    };
    HeaderComponent.prototype.openTimeModal = function () {
        this.ms.game.actHour.reload();
        this.ms.game.actMin.reload();
        this.timeModal = true;
    };
    HeaderComponent.prototype.all100 = function () {
        this.ms.game.unlockedUnits.forEach(function (u) {
            u.efficiency = 100;
        });
        this.ms.efficiencyEmitter.emit(100);
    };
    HeaderComponent.prototype.warp = function (minute) {
        this.ms.game.actMin.buy(new Decimal(minute));
    };
    HeaderComponent.prototype.allCustom = function (eff, list) {
        list.allCustom(eff);
        this.ms.efficiencyEmitter.emit(eff);
    };
    HeaderComponent.prototype.getListId = function (index, list) {
        return list.name;
    };
    HeaderComponent.prototype.warpAv = function (minutes) {
        return this.ms.game.time.quantity.gt(minutes * 60);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "lab", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "labBadge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "travel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "travelBadge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "prestige", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "mastery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "autoBuy", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/bug-card/bug-card.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/bug-card/bug-card.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <div class=\"card-title\">\n    这个世界上的虫子\n  </div>\n  <div class=\"card-text\">\n    <div id=\"container\"\n         #container>\n      <canvas #radar></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/bug-card/bug-card.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/bug-card/bug-card.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  margin: auto;\n  min-height: 12rem; }\n"

/***/ }),

/***/ "./src/app/home/bug-card/bug-card.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/bug-card/bug-card.component.ts ***!
  \*****************************************************/
/*! exports provided: BugCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugCardComponent", function() { return BugCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_bugsTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _model_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/strings */ "./src/app/model/strings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BugCardComponent = /** @class */ (function () {
    function BugCardComponent(ms) {
        this.ms = ms;
        //Nothing
    }
    BugCardComponent.prototype.ngOnInit = function () {
        //
    };
    BugCardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.chartRef.nativeElement.width = _this.containerRef.nativeElement.clientWidth;
            _this.chartRef.nativeElement.height = _this.containerRef.nativeElement.clientHeight;
            var canvas = _this.chartRef.nativeElement;
            canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);
            Chart.defaults.global.tooltips.enabled = true;
            Chart.defaults.scale.ticks.beginAtZero = true;
            Chart.defaults.scale.ticks.display = false;
            var chartCtx = _this.chartRef.nativeElement.getContext("2d");
            _this.chart = new Chart(chartCtx, {
                type: "radar",
                data: {
                    labels: [
                        "价格",
                        "生产",
                        "效率",
                        "团队价格",
                        "双胞胎价格"
                    ],
                    datasets: _this.ms.game.currentWorld.additionalBugs.map(function (b) {
                        return _this.genDataset(b);
                    })
                },
                options: {
                    maintainAspectRatio: true,
                    legend: { position: "right" }
                }
            });
        }, 0);
    };
    BugCardComponent.prototype.genDataset = function (bug) {
        var bugClass = _model_bugsTypes__WEBPACK_IMPORTED_MODULE_2__["BUGS"][bug];
        var dataset = {
            backgroundColor: bugClass.color + "80",
            borderColor: bugClass.color,
            data: [
                1 / bugClass.priceMulti,
                bugClass.prodMulti,
                bugClass.efficiencyMulti,
                1 / bugClass.teamPriceMulti,
                1 / bugClass.twinPriceMulti
            ],
            label: _model_strings__WEBPACK_IMPORTED_MODULE_3__["STRINGS"].bug[bug]
        };
        return dataset;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BugCardComponent.prototype, "bug", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("radar"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BugCardComponent.prototype, "chartRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("container"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BugCardComponent.prototype, "containerRef", void 0);
    BugCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-bug-card",
            template: __webpack_require__(/*! ./bug-card.component.html */ "./src/app/home/bug-card/bug-card.component.html"),
            styles: [__webpack_require__(/*! ./bug-card.component.scss */ "./src/app/home/bug-card/bug-card.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.card]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], BugCardComponent);
    return BugCardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n  <div class=\"card-columns\">\n    <app-world [world]=\"ms.game.currentWorld\"\n               [cantTravel]=\"false\"></app-world>\n\n    <app-bug-card></app-bug-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(ms) {
        this.ms = ms;
        //
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    HomeComponent.prototype.ngOnInit = function () {
        //
    };
    HomeComponent.prototype.getBugId = function (index, bug) {
        return "" + bug;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-container]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/laboratory/lab-menu/lab-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/laboratory/lab-menu/lab-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-dropdown>\n  <button type=\"button\"\n          class=\"btn btn-outline-primary btn-link\"\n          clrDropdownTrigger>\n    实验室\n    <clr-icon shape=\"caret down\"></clr-icon>\n  </button>\n  <clr-dropdown-menu *clrIfOpen>\n    <label class=\"dropdown-header\">买1个</label>\n    <button type=\"button\"\n            clrDropdownItem\n            (click)=\"buy1()\">买便宜的</button>\n    <button type=\"button\"\n            clrDropdownItem\n            (click)=\"buy1(false)\">买更便宜的(不重复)</button>\n    <div class=\"dropdown-divider\"></div>\n    <label class=\"dropdown-header\">买最大数量</label>\n    <button type=\"button\"\n            clrDropdownItem\n            (click)=\"buyMulti()\">买最大数量</button>\n    <button type=\"button\"\n            clrDropdownItem\n            (click)=\"buyMulti(false)\">买最大数量 (不重复)</button>\n    <button type=\"button\"\n            clrDropdownItem\n            (click)=\"buyMultiR()\">递归购买最大数量</button>\n    <button type=\"button\"\n            clrDropdownItem\n            (click)=\"buyMultiR(false)\">递归购买最大数量(不重复)</button>\n  </clr-dropdown-menu>\n</clr-dropdown>\n"

/***/ }),

/***/ "./src/app/laboratory/lab-menu/lab-menu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/laboratory/lab-menu/lab-menu.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/laboratory/lab-menu/lab-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/laboratory/lab-menu/lab-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: LabMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabMenuComponent", function() { return LabMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabMenuComponent = /** @class */ (function () {
    function LabMenuComponent(ms) {
        this.ms = ms;
    }
    LabMenuComponent.prototype.ngOnInit = function () {
        //
    };
    LabMenuComponent.prototype.getResearchArray = function (repeating) {
        if (repeating === void 0) { repeating = true; }
        var toDo = this.ms.game.researches.toDo;
        toDo = repeating
            ? toDo.filter(function (r) { return !r.unlimited || r.quantity.lt(r.maxAutoBuyLevel); })
            : toDo.filter(function (r) { return !r.unlimited; });
        toDo.forEach(function (r) {
            r.reload();
            r.reloadUserPrices();
        });
        return toDo.sort(function (r1, r2) {
            return r1.prices[0].priceUser.cmp(r2.prices[0].priceUser);
        });
    };
    LabMenuComponent.prototype.buy1 = function (rep) {
        if (rep === void 0) { rep = true; }
        var res = this.getResearchArray(rep);
        if (res.length > 0)
            res[0].buy();
    };
    LabMenuComponent.prototype.buyMulti = function (rep) {
        if (rep === void 0) { rep = true; }
        var res = this.getResearchArray(rep);
        var len = res.length;
        var ret = false;
        for (var i = 0; i < len; i++) {
            if (res[i].buy())
                ret = true;
            else
                break;
        }
        return ret;
    };
    LabMenuComponent.prototype.buyMultiR = function (rep) {
        if (rep === void 0) { rep = true; }
        while (this.buyMulti(rep))
            ;
    };
    LabMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-lab-menu",
            template: __webpack_require__(/*! ./lab-menu.component.html */ "./src/app/laboratory/lab-menu/lab-menu.component.html"),
            styles: [__webpack_require__(/*! ./lab-menu.component.scss */ "./src/app/laboratory/lab-menu/lab-menu.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], LabMenuComponent);
    return LabMenuComponent;
}());



/***/ }),

/***/ "./src/app/laboratory/laboratory.component.html":
/*!******************************************************!*\
  !*** ./src/app/laboratory/laboratory.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n  <h1>在这里，科学家们讨论着以前没人见过的东西。</h1>\n\n  <div class=\"toggle-switch\">\n    <input type=\"checkbox\"\n           id=\"t1\"\n           [(ngModel)]=\"resDone\"\n           (change)=\"changeList()\">\n    <label for=\"t1\">显示已完成的研究</label>\n  </div>\n  <span>\n    科学:\n    <span class=\"monospace\">\n      {{ms.game.materials.science.quantity | format}} - {{ms.game.materials.science.c | format}} /秒\n    </span>\n  </span>\n  <app-lab-menu></app-lab-menu>\n  <div class=\"card-columns card-columns-3\">\n    <app-research [research]=\"res\"\n                  *ngFor=\"let res of resList ;trackBy:getRestId\"></app-research>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/laboratory/laboratory.component.scss":
/*!******************************************************!*\
  !*** ./src/app/laboratory/laboratory.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin-bottom: 0; }\n\n.card-footer button {\n  min-width: 20%; }\n\n.card-header,\n.card-block,\n.card-footer {\n  padding: 0.3rem 0.5rem; }\n\n.card-block {\n  padding-bottom: 0.15rem; }\n\n.card-footer {\n  padding-top: 0.15rem; }\n"

/***/ }),

/***/ "./src/app/laboratory/laboratory.component.ts":
/*!****************************************************!*\
  !*** ./src/app/laboratory/laboratory.component.ts ***!
  \****************************************************/
/*! exports provided: LaboratoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaboratoryComponent", function() { return LaboratoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LaboratoryComponent = /** @class */ (function () {
    function LaboratoryComponent(ms) {
        this.ms = ms;
        this.resDone = false;
    }
    LaboratoryComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    LaboratoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeList();
        this.sub = this.ms.researchEmitter.subscribe(function (m) { return _this.changeList(); });
        this.ms.game.researches.toDo.forEach(function (r) {
            // r.reloadUserPrices();
            r.reloadAvailableTime();
        });
    };
    LaboratoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LaboratoryComponent.prototype.changeList = function () {
        this.resList = this.resDone
            ? this.ms.game.researches.done
            : this.ms.game.researches.toDo;
    };
    LaboratoryComponent.prototype.getRestId = function (index, res) {
        return res.id;
    };
    LaboratoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-laboratory",
            template: __webpack_require__(/*! ./laboratory.component.html */ "./src/app/laboratory/laboratory.component.html"),
            styles: [__webpack_require__(/*! ./laboratory.component.scss */ "./src/app/laboratory/laboratory.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-container]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], LaboratoryComponent);
    return LaboratoryComponent;
}());



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ "./node_modules/date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _end_in_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./end-in.pipe */ "./src/app/end-in.pipe.ts");
/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/game */ "./src/app/model/game.ts");
/* harmony import */ var _model_masteries_mastery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/masteries/mastery */ "./src/app/model/masteries/mastery.ts");
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options.service */ "./src/app/options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var GAME_VERSION = 0;
var H8 = 8 * 3600 * 1000;
var H1 = 3600 * 1000;
var SAVE_INTERVAL = 5 * 60 * 1000;
var UP_INTERVAL = 250; // 4 fps
var MainService = /** @class */ (function () {
    function MainService(options, toastr, document) {
        var _this = this;
        this.options = options;
        this.toastr = toastr;
        this.document = document;
        this.show = false;
        this.updateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.researchEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.worldEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unlockGroupEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.efficiencyEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //#region Unit Tas
        this.lastTab = 0;
        this.overviewTaActive = false;
        this.prestigeTaActive = false;
        //#endregion
        this.titleId = "E86B";
        this.playFabId = -1;
        this.testing = false;
        this.playFabLogged = false;
        this.endInPipe = new _end_in_pipe__WEBPACK_IMPORTED_MODULE_5__["EndInPipe"](this.options);
        this.themeClarity = this.document.createElement("link");
        this.themeClarity.rel = "stylesheet";
        this.themeClarity.type = "text/css";
        this.document.querySelector("head").appendChild(this.themeClarity);
        this.themeMy = this.document.createElement("link");
        this.themeMy.rel = "stylesheet";
        this.themeMy.type = "text/css";
        this.document.querySelector("head").appendChild(this.themeMy);
        this.last = Date.now();
        this.load(true);
        if (!this.game) {
            this.setTheme();
            this.game = new _model_game__WEBPACK_IMPORTED_MODULE_6__["Game"](this);
        }
        //  Kong Api
        var url = window.location !== window.parent.location
            ? document.referrer
            : document.location.href;
        if (url.includes("kongregate") && typeof kongregateAPI !== "undefined") {
            kongregateAPI.loadAPI(function () {
                _this.kongregate = kongregateAPI.getAPI();
                console.log("KongregateAPI Loaded");
                setTimeout(function () {
                    try {
                        console.log("Kongregate build");
                        _this.sendKong();
                    }
                    catch (e) {
                        console.log("Error: " + e.message);
                    }
                }, 5 * 1000);
            });
        }
        //else console.log("Github build");
    }
    MainService.prototype.start = function () {
        this.show = true;
        setInterval(this.update.bind(this), UP_INTERVAL);
        setInterval(this.save.bind(this, true), SAVE_INTERVAL);
    };
    MainService.prototype.update = function () {
        var now = Date.now();
        var diff = now - this.last;
        if (diff > H1) {
            var bonus = 0;
            if (diff > H8) {
                bonus =
                    (diff *
                        30 *
                        this.game.allMateries.getSum(_model_masteries_mastery__WEBPACK_IMPORTED_MODULE_7__["MasteryTypes"].MORE_IDLE_8H)) /
                        100;
            }
            this.toastr.info(bonus > 0
                ? "奖励: " + date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__(new Date(Date.now() + bonus))
                : "", "你离线了: " +
                date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__(new Date(Date.now() + diff)));
            diff = diff + bonus;
        }
        this.game.updateWithTime(diff);
        this.game.postUpdate(diff);
        this.last = now;
        this.updateEmitter.emit(diff);
    };
    MainService.prototype.getSave = function () {
        try {
            var save = {};
            save.m = this.game.getSave();
            save.o = this.options.getSave();
            save.time = this.last;
            save.ver = GAME_VERSION;
            // console.log(JSON.stringify(save));
            return lz_string__WEBPACK_IMPORTED_MODULE_3__["compressToBase64"](JSON.stringify(save));
        }
        catch (ex) {
            this.toastr.error(ex && ex.message ? ex.message : "unknown error", "Save Error");
        }
    };
    MainService.prototype.save = function (autosave) {
        if (autosave === void 0) { autosave = false; }
        try {
            var save = this.getSave();
            if (!!save) {
                localStorage.setItem("save", save);
                if (!autosave || this.options.autosaveNotification) {
                    this.toastr.success("", "游戏已保存");
                    console.log("Game Saved");
                    this.lastSave = new Date();
                    this.saveEmitter.emit(this.lastSave);
                }
            }
            else
                this.toastr.error("未知错误 1", "保存失败");
        }
        catch (ex) {
            this.toastr.error(ex && ex.message ? ex.message : "unknown error", "Save Error");
        }
    };
    MainService.prototype.import = function (raw, first, playFab) {
        var _this = this;
        if (first === void 0) { first = false; }
        if (playFab === void 0) { playFab = false; }
        try {
            if (raw === "TEST") {
                this.testing = true;
                return;
            }
        }
        catch (e) { }
        try {
            if (!raw) {
                if (!first) {
                    setTimeout(function () { return _this.toastr.error("未找到存档", "加载失败"); }, 0);
                }
                return false;
            }
            var json = lz_string__WEBPACK_IMPORTED_MODULE_3__["decompressFromBase64"](raw);
            var data = JSON.parse(json);
            if (!("m" in data)) {
                setTimeout(function () { return _this.toastr.error("存档无效", "加载失败"); }, 0);
                return false;
            }
            this.game = null;
            this.game = new _model_game__WEBPACK_IMPORTED_MODULE_6__["Game"](this);
            if (!!data.o)
                this.options.restore(data.o);
            this.setTheme();
            this.last = data.time;
            this.lastSave = new Date(this.last);
            this.game.restore(data.m);
            setTimeout(function () { return _this.toastr.success("", "游戏加载成功"); }, 0);
            return true;
        }
        catch (ex) {
            // tslint:disable-next-line:no-console
            console.log(ex);
            setTimeout(function () {
                return _this.toastr.error(ex && ex.message ? ex.message : "unknown error", "Load Error");
            }, 0);
            return false;
        }
    };
    MainService.prototype.load = function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        try {
            return this.import(localStorage.getItem("save"), first);
        }
        catch (ex) {
            setTimeout(function () {
                return _this.toastr.error(ex && ex.message ? ex.message : "unknown error", "Load Error");
            }, 0);
            return false;
        }
    };
    MainService.prototype.clear = function () {
        localStorage.removeItem("save");
        window.location.reload();
    };
    MainService.prototype.setTheme = function () {
        var themeClarity = this.options.dark
            ? "clr-ui-dark.min.css"
            : "clr-ui.min.css";
        if (this.themeClarity.href !== themeClarity) {
            this.themeClarity.href = themeClarity;
        }
        var myTheme = "assets/" + (this.options.dark ? "dark.css" : "light.css");
        if (myTheme !== this.themeMy.href) {
            this.themeMy.href =
                "assets/" + (this.options.dark ? "dark.css" : "light.css");
        }
    };
    MainService.prototype.sendKong = function () {
        try {
            if (this.kongregate) {
                this.kongregate.stats.submit("LogExperience", this.game.experience.quantity.log10());
                this.kongregate.stats.submit("Mastery", this.game.allMateries.totalEarned);
                this.kongregate.stats.submit("WorldCompleted", this.game.stats.completedWorld.toNumber());
                this.kongregate.stats.submit("LogBestExp", this.game.stats.bestExpS.log10());
            }
        }
        catch (e) {
            console.log("Kongregate Stats error: " + e.message);
        }
    };
    //#region PlayFab
    MainService.prototype.playFabLogin = function () {
        if (!this.kongregate) {
            this.toastr.error("You need to be logged in to Kongregate.", "PlayFab error");
            return;
        }
        try {
            var authTicket = this.kongregate.services.getGameAuthToken();
            var requestData = {
                TitleId: this.titleId,
                KongregateId: this.kongregate.services.getUserId(),
                AuthTicket: authTicket,
                CreateAccount: true
            };
            try {
                PlayFab.ClientApi.LoginWithKongregate(requestData, this.playFabLoginCallback.bind(this));
            }
            catch (e) {
                console.log("Unable to send login request to PlayFab.");
                this.toastr.error("Unable to send login request to PlayFab.");
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    MainService.prototype.playFabLoginCallback = function (data, error) {
        if (error) {
            console.log(error.errorMessage);
            this.toastr.error("You need to be logged in to Kongregate.", "Couldn't log in to PlayFab Cloud");
            return;
        }
        if (data) {
            this.playFabId = data.data.PlayFabId;
            PlayFab.settings.titleId = "E86B";
            this.playFabLogged = true;
            this.saveEmitter.emit();
            console.log("Logged in to playFab");
            this.toastr.info("Logged in to PlayFab");
        }
    };
    MainService.prototype.savePlayFab = function () {
        if (!this.playFabId ||
            typeof PlayFab === "undefined" ||
            typeof PlayFab.ClientApi === "undefined") {
            return false;
        }
        // Cut compressed object into strings of 10,000 bytes for PlayFab
        var chunks = this.getSave().match(/.{1,10000}/g);
        if (chunks.length > 10) {
            this.toastr.error("size limit exceeded", "Error saving to cloud");
        }
        // convert array into object with numbers as keys
        // const data = $.extend({}, chunks);
        var data = {};
        for (var i = 0; i < chunks.length; i++)
            data[i] = chunks[i];
        var requestData = {
            TitleId: this.titleId,
            PlayFabId: this.playFabId,
            Data: data
        };
        try {
            PlayFab.ClientApi.UpdateUserData(requestData, this.saveToPlayFabCallback.bind(this));
        }
        catch (e) {
            console.log(e);
        }
    };
    MainService.prototype.saveToPlayFabCallback = function (data, error) {
        if (error) {
            console.log(error);
            return false;
        }
        if (data) {
            console.log("Game Saved!");
            this.toastr.success("Game saved to PlayFab");
            return true;
        }
    };
    MainService.prototype.loadPlayFab = function () {
        if (!this.playFabId ||
            typeof PlayFab === "undefined" ||
            typeof PlayFab.ClientApi === "undefined") {
            console.log(this.playFabId, PlayFab);
            return false;
        }
        var requestData = {
            Keys: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "save"],
            PlayFabId: this.playFabId
        };
        try {
            console.log("attempting to send load request");
            PlayFab.ClientApi.GetUserData(requestData, this.loadFromPlayFabCallback.bind(this));
            console.log("sent load request");
        }
        catch (e) {
            console.log(e);
        }
    };
    MainService.prototype.loadFromPlayFabCallback = function (data, error) {
        try {
            console.log("loading callback fired");
            // console.log(data, error);
            if (error) {
                console.log(error);
                return;
            }
            if (data) {
                if (data.data.Data) {
                    var raw = Object.values(data.data.Data)
                        .map(function (val) {
                        return val.Value;
                    })
                        .join("");
                    console.log(raw);
                    this.import(raw, false, true);
                }
            }
        }
        catch (e) {
            console.log(e);
            this.toastr.error("PlayFab Load error");
        }
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            Document])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/mastery/mastery.component.html":
/*!************************************************!*\
  !*** ./src/app/mastery/mastery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n  <div id=\"network\"\n       #network></div>\n</div>\n<clr-vertical-nav [clrVerticalNavCollapsible]=\"true\"\n                  class=\"nav-trigger--bottom\">\n\n  <a clrVerticalNavLink>\n    <h6>专精\n      <span class=\"monospace\"\n            *ngIf=\"ms.game.allMateries.masteryPoint > 0\">{{ms.game.allMateries.masteryPoint}}</span>\n    </h6>\n  </a>\n  <div *ngIf=\"!node; else buy\">\n    <a clrVerticalNavLink\n       *ngFor=\"let desc of list; trackBy:getDescId\">\n      {{desc}}\n    </a>\n  </div>\n  <ng-template #buy>\n    <p clrVerticalNavLink>{{node.label}}</p>\n    <button class=\"btn\"\n            *ngIf=\"node.available && !node.owned\"\n            [disabled]=\"ms.game.allMateries.masteryPoint <1\"\n            (click)=\"buyMastery()\">\n      购买\n    </button>\n  </ng-template>\n  <button class=\"btn\"\n          *ngIf=\"ms.game.allMateries.totalEarned > 0\"\n          (click)=\"showReset = true\" style=\"min-height: 38px;\">\n    重置\n  </button>\n\n\n\n  <!-- Debug Stuff -->\n  <!-- <button class=\"btn\"\n          (click)=\"export()\">\n    Export positions\n  </button>\n  <textarea name=\"raw\"\n            [(ngModel)]=\"exp\"\n            rows=\"1\"></textarea> -->\n\n</clr-vertical-nav>\n\n\n<clr-modal [(clrModalOpen)]=\"showReset\"\n           [clrModalClosable]=\"true\">\n  <h3 class=\"modal-title\">专精重置</h3>\n  <div class=\"modal-body\">\n    <p>\n      重置专精升级，你可以获得专精点数 {{ms.game.allMateries.totalEarned}}\n      <br />\n      你将移动到基础世界而没有任何奖励。\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\"\n            class=\"btn btn-outline\"\n            (click)=\"showReset = false\">取消</button>\n    <button type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"reset()\">重置</button>\n  </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/mastery/mastery.component.scss":
/*!************************************************!*\
  !*** ./src/app/mastery/mastery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#network {\n  height: 100%;\n  width: 100%; }\n\n.clr-vertical-nav {\n  width: 15rem; }\n\nclr-vertical-nav .btn {\n  color: #007cbb;\n  margin: 1rem; }\n\n.clr-vertical-nav.is-collapsed .btn {\n  display: none; }\n\n.clr-vertical-nav .nav-link.active,\n.clr-vertical-nav .nav-link:hover {\n  background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/mastery/mastery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mastery/mastery.component.ts ***!
  \**********************************************/
/*! exports provided: MasteryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasteryComponent", function() { return MasteryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_masteries_mastery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/masteries/mastery */ "./src/app/model/masteries/mastery.ts");
/* harmony import */ var _model_world__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/world */ "./src/app/model/world.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MasteryComponent = /** @class */ (function () {
    function MasteryComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.list = new Array();
        this.exp = "";
        this.showReset = false;
        //
    }
    MasteryComponent.prototype.rebuildList = function () {
        this.list = [];
        var length = Object.keys(_model_masteries_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"]).length / 2;
        for (var i = 0; i < length; i++) {
            var sum = this.ms.game.allMateries.getSum(i);
            if (sum > 0) {
                var desc = _model_masteries_mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].getDescription(i, sum);
                this.list.push(desc);
            }
        }
    };
    MasteryComponent.prototype.ngOnInit = function () {
        this.rebuildList();
    };
    MasteryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var myNodes = _this.ms.game.allMateries.visMasteries;
            var myEedges = _this.ms.game.allMateries.visEdge;
            _this.networkVis = new vis__WEBPACK_IMPORTED_MODULE_1__["Network"](_this.networkDiv.nativeElement, {
                nodes: myNodes,
                edges: myEedges
            }, {
                nodes: { borderWidth: 2 },
                edges: {
                    smooth: {
                        enabled: true,
                        type: "dynamic",
                        roundness: 0.5
                    }
                },
                interaction: { dragNodes: false, hover: true },
                physics: {
                    enabled: false,
                    barnesHut: {
                        gravitationalConstant: -6900,
                        avoidOverlap: 0.0
                    },
                    minVelocity: 1
                }
            });
            _this.networkVis.on("click", function (params) {
                var masteryBuy = params.nodes[0];
                _this.node =
                    masteryBuy || masteryBuy === 0
                        ? _this.ms.game.allMateries.visMasteries.get(masteryBuy)
                        : null;
                _this.cd.markForCheck();
            });
        }, 0);
    };
    MasteryComponent.prototype.getDescId = function (index, desc) {
        return index + desc;
    };
    MasteryComponent.prototype.buyMastery = function () {
        if (this.ms.game.allMateries.buy(this.node.id)) {
            this.ms.game.setMaxTimeBank();
            this.node = null;
            this.rebuildList();
        }
    };
    MasteryComponent.prototype.export = function () {
        this.networkVis.storePositions();
        this.exp = JSON.stringify(this.networkVis.getPositions());
    };
    MasteryComponent.prototype.reset = function () {
        this.ms.game.allMateries.reset();
        this.rebuildList();
        this.cd.markForCheck();
        var baseWorld = new _model_world__WEBPACK_IMPORTED_MODULE_4__["World"]("base");
        baseWorld.setLevel(new Decimal(1), this.ms.game);
        this.ms.game.generateWorlds();
        baseWorld.name = "Home World";
        this.ms.game.canTravel = false;
        this.ms.game.goToWorld(baseWorld);
        this.showReset = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("network"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MasteryComponent.prototype, "networkDiv", void 0);
    MasteryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-mastery",
            template: __webpack_require__(/*! ./mastery.component.html */ "./src/app/mastery/mastery.component.html"),
            styles: [__webpack_require__(/*! ./mastery.component.scss */ "./src/app/mastery/mastery.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-container]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MasteryComponent);
    return MasteryComponent;
}());



/***/ }),

/***/ "./src/app/material-nav/material-nav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/material-nav/material-nav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navMat\"\n    role=\"tablist\">\n  <li class=\"nav-item\"\n      class=\"matTab\"\n      *ngFor=\"let g of ms.game.materials.unlocked ; trackBy:getUnitId\">\n\n    <app-tab [id]=\"g.id\"\n             [isEnding]=\"g.isEnding\"\n             [name]=\"g.name\"\n             [quantity]=\"g.quantity\"\n             [perSec]=\"g.c\"></app-tab>\n\n  </li>\n  <li *ngIf=\"ms.game.firstEndingUnit\">\n\n    <clr-alert [clrAlertClosable]=\"false\"\n               [clrAlertType]=\"ms.game.firstEndingUnit.endIn < 3600000 ? 'alert-danger':'alert-warning'\">\n      <div clr-alert-item\n           class=\"alert-item\">\n        <span class=\"alert-text\">\n          {{ms.game.firstEndingUnit.name}} 将在 {{ms.game.firstEndingUnit.endIn | endIn}} 后消耗完\n        </span>\n      </div>\n    </clr-alert>\n\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/material-nav/material-nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/material-nav/material-nav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .nav .nav-link {\n  line-height: 0.8rem; }\n\n:host /deep/ .matTab {\n  max-width: 200px;\n  min-width: 130px;\n  text-align: left;\n  width: 100%; }\n\nul {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content; }\n\nli {\n  padding-left: 1rem; }\n\n:host /deep/ .navMat {\n  padding-left: 0 !important; }\n\n.nav {\n  height: auto; }\n\n:host /deep/ .alert {\n  margin-top: auto; }\n"

/***/ }),

/***/ "./src/app/material-nav/material-nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/material-nav/material-nav.component.ts ***!
  \********************************************************/
/*! exports provided: MaterialNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialNavComponent", function() { return MaterialNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialNavComponent = /** @class */ (function () {
    function MaterialNavComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
    }
    MaterialNavComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    MaterialNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.updateEmitter.subscribe(function (m) {
            _this.cd.markForCheck();
        });
    };
    MaterialNavComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MaterialNavComponent.prototype.getUnitId = function (index, base) {
        return base.id;
    };
    MaterialNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-material-nav",
            template: __webpack_require__(/*! ./material-nav.component.html */ "./src/app/material-nav/material-nav.component.html"),
            styles: [__webpack_require__(/*! ./material-nav.component.scss */ "./src/app/material-nav/material-nav.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.subnav]": "true",
                "[class.matTab]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MaterialNavComponent);
    return MaterialNavComponent;
}());



/***/ }),

/***/ "./src/app/material-nav/tab/tab.component.html":
/*!*****************************************************!*\
  !*** ./src/app/material-nav/tab/tab.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/nav/unit/'+id]\"\n   class=\"nav-link matLink clr-row clr-justify-content-between\"\n   routerLinkActive=\"active\"\n   [ngClass]=\"{'red': isEnding}\">\n\n  <span>\n    <clr-icon class=\"is-error is-solid\"\n              shape=\"exclamation-triangle\"\n              *ngIf=\"isEnding\"></clr-icon>\n    <span class=\"first small\">{{name}}</span>\n    <br/>\n    <span class=\"monospace\">{{quantity | format:false:ms.options.formatter}}</span>\n  </span>\n\n  <span class=\"perSecTab  monospace clr-col clr-align-self-end\">\n    <span *ngIf=\"perSec.abs().gt(0.001)\"\n          [ngClass]=\"{'notEnough': perSec.lt(0)}\">\n      {{perSec | format:false:ms.options.formatter}}/s\n    </span>\n  </span>\n\n</a>\n"

/***/ }),

/***/ "./src/app/material-nav/tab/tab.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/material-nav/tab/tab.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".perSecTab {\n  width: 45%; }\n\na {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/material-nav/tab/tab.component.ts":
/*!***************************************************!*\
  !*** ./src/app/material-nav/tab/tab.component.ts ***!
  \***************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabComponent = /** @class */ (function () {
    function TabComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.id = "";
        this.isEnding = false;
        this.name = "";
        this.quantity = new Decimal(0);
        this.perSec = new Decimal(0);
        //
    }
    TabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formatSub = this.ms.options.formatEmitter.subscribe(function (m) {
            _this.cd.markForCheck();
        });
    };
    TabComponent.prototype.ngOnDestroy = function () {
        this.formatSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "isEnding", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "quantity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "perSec", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tab",
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/material-nav/tab/tab.component.html"),
            styles: [__webpack_require__(/*! ./tab.component.scss */ "./src/app/material-nav/tab/tab.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/model/CONSTANTS.ts":
/*!************************************!*\
  !*** ./src/app/model/CONSTANTS.ts ***!
  \************************************/
/*! exports provided: CONSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTS", function() { return CONSTS; });
var CONSTS = /** @class */ (function () {
    function CONSTS() {
    }
    CONSTS.PRICE_LARVAE_0 = new Decimal(1);
    CONSTS.PRICE_LARVAE_1 = new Decimal(20);
    CONSTS.PRICE_LARVAE_2 = new Decimal(100);
    CONSTS.PRICE_QUEEN = new Decimal(1e5);
    CONSTS.PRICE_NEST = new Decimal(1e9);
    CONSTS.PRICE_0 = new Decimal(20);
    CONSTS.PRICE_1 = new Decimal(1e3);
    CONSTS.PRICE_2 = new Decimal(1e6);
    CONSTS.PRICE_3 = new Decimal(1e10);
    CONSTS.PRICE_ENG = new Decimal(100);
    CONSTS.PROD_LARVAE = new Decimal(0.2);
    CONSTS.PROD_GAN = new Decimal(1);
    CONSTS.CONSUME_GAN = new Decimal(-1);
    CONSTS.PROD_1 = new Decimal(20);
    CONSTS.CONSUME_1 = new Decimal(-15);
    CONSTS.TEAM_PRICE_0 = new Decimal(5e2);
    CONSTS.TEAM_PRICE_1 = new Decimal(5e3);
    CONSTS.TEAM_PRICE_2 = new Decimal(5e5);
    CONSTS.TEAM_PRICE_3 = new Decimal(5e9);
    CONSTS.TWIN_PRICE_0 = new Decimal(1e3);
    CONSTS.TWIN_PRICE_1 = new Decimal(1e4);
    CONSTS.TWIN_PRICE_2 = new Decimal(1e6);
    CONSTS.TWIN_PRICE_3 = new Decimal(1e10);
    CONSTS.RES_PRICE_1 = new Decimal(5e3);
    CONSTS.RES_PRICE_2 = new Decimal(5e6);
    CONSTS.RES_PRICE_3 = new Decimal(5e9);
    CONSTS.BASE_WIN_CONDITION_MATERIALS = new Decimal(1e12);
    CONSTS.BASE_WIN_CONDITION_OTHER = new Decimal(600);
    CONSTS.SWARM_PRICE_GROWRATE = 1.01;
    CONSTS.CHART_COLORS = {
        backgroundColor: [
            "rgba(255, 99, 132, 0.3)",
            "rgba(54, 162, 235, 0.3)",
            "rgba(255, 206, 86, 0.3)",
            "rgba(75, 192, 192, 0.3)",
            "rgba(153, 102, 255, 0.3)",
            "rgba(255, 159, 64, 0.3)" // arancio strano
        ],
        borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
        ]
    };
    return CONSTS;
}());



/***/ }),

/***/ "./src/app/model/action.ts":
/*!*********************************!*\
  !*** ./src/app/model/action.ts ***!
  \*********************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var _baseUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseUnit */ "./src/app/model/baseUnit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action(id, name, description, prices) {
        if (prices === void 0) { prices = new Array(); }
        var _this = _super.call(this, id, name, description, new Decimal(0), true) || this;
        _this.prices = prices;
        _this.done = false;
        _this.isLimited = false;
        _this.limit = new Decimal(Number.POSITIVE_INFINITY);
        _this.complete = false;
        _this.canBuy = false;
        _this.maxBuy = new Decimal(0);
        _this.canUserBuy = false;
        _this.userNum = 1;
        _this.realNum = new Decimal(1);
        _this.availableIn = NaN;
        _this.autoBuyPriceMulti = 1;
        _this.autoBuyTimeMulti = 1;
        return _this;
    }
    Action.prototype.checkResearch = function () {
        return !this.requiredResearch || this.requiredResearch.done;
    };
    Action.prototype.reload = function () {
        var _this = this;
        if (this.complete && this.checkResearch()) {
            this.maxBuy = new Decimal(0);
            this.canBuy = false;
        }
        else {
            this.prices.forEach(function (p) { return p.reload(_this.quantity); });
            this.maxBuy = this.prices
                .map(function (p) { return p.maxBuy; })
                .reduce(function (p, c) { return p.min(c); }, new Decimal(Number.POSITIVE_INFINITY));
            if (this.isLimited) {
                this.maxBuy = Decimal.min(this.limit.minus(this.quantity), this.maxBuy);
            }
            this.maxBuy = this.maxBuy.floor();
            this.canBuy = this.maxBuy.gte(1);
        }
    };
    Action.prototype.buy = function (toBuy) {
        var _this = this;
        if (toBuy === void 0) { toBuy = new Decimal(1); }
        toBuy = toBuy.floor();
        this.reload();
        if (this.canBuy && this.maxBuy.gte(toBuy)) {
            this.prices.forEach(function (p) { return p.buy(toBuy, _this.quantity); });
            this.quantity = this.quantity.plus(toBuy);
            this.done = true;
            if (this.isLimited && this.quantity.gte(this.limit))
                this.complete = true;
            this.reload();
            this.reloadUserPrices();
            this.onBuy();
            return true;
        }
        else {
            return false;
        }
    };
    Action.prototype.reloadUserPrices = function () {
        var _this = this;
        var real = 1;
        if (!isNaN(this.userNum) && this.userNum >= 1)
            real = this.userNum;
        this.realNum = new Decimal(real);
        this.canUserBuy = this.maxBuy.gte(this.realNum);
        this.prices.forEach(function (p) {
            return p.loadPriceUser(new Decimal(_this.realNum), _this.quantity);
        });
    };
    Action.prototype.reloadAvailableTime = function () {
        // if (this.prices.findIndex(p => p.base.isEnding) > -1) {
        //   this.availableIn = NaN;
        // } else {
        this.availableIn =
            this.prices
                .map(function (p) { return p.getTime(); })
                .reduce(function (p, c) { return p.max(c); }, new Decimal(0))
                .toNumber() * 1000;
        // }
    };
    Action.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.done = false;
        this.complete = false;
        this.canBuy = false;
        this.maxBuy = new Decimal(0);
        this.canUserBuy = false;
        this.userNum = 1;
        this.realNum = new Decimal(1);
        this.availableIn = NaN;
    };
    Action.prototype.onBuy = function () {
        //Do nothing
    };
    //#region Save and Load
    Action.prototype.getSave = function () {
        var save = _super.prototype.getSave.call(this);
        if (this.done)
            save.d = this.done;
        if (this.complete)
            save.c = this.complete;
        return save;
    };
    Action.prototype.restore = function (data) {
        if (_super.prototype.restore.call(this, data)) {
            this.done = !!data.d;
            this.complete = !!data.c;
            return true;
        }
        else {
            return false;
        }
    };
    return Action;
}(_baseUnit__WEBPACK_IMPORTED_MODULE_0__["BaseUnit"]));



/***/ }),

/***/ "./src/app/model/actions/action-group.ts":
/*!***********************************************!*\
  !*** ./src/app/model/actions/action-group.ts ***!
  \***********************************************/
/*! exports provided: ActionGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGroup", function() { return ActionGroup; });
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");

var ActionGroup = /** @class */ (function () {
    function ActionGroup(name, actionList, game) {
        var _this = this;
        this.name = name;
        this.actionList = actionList;
        this.canBuy = false;
        this.userNum = 1;
        this.realNum = new Decimal(1);
        this.availableIn = NaN;
        this.pricesTemp = new Array();
        this.prices = new Array();
        this.actionList = this.actionList.filter(function (a) { return !a.complete && a.unlocked; });
        this.actionList
            .map(function (b) { return b.prices; })
            .forEach(function (p) { return p.forEach(function (p2) { return _this.prices.push(p2); }); });
        this.reload(game);
    }
    ActionGroup.prototype.reload = function (game) {
        var _this = this;
        var real = 1;
        if (!isNaN(this.userNum) && this.userNum >= 1)
            real = this.userNum;
        this.realNum = new Decimal(real);
        this.pricesTemp = new Array();
        this.actionList.forEach(function (a) {
            a.prices.forEach(function (p) {
                p.loadPriceUser(_this.realNum, a.quantity);
                var price = _this.pricesTemp.find(function (k) { return k.base === p.base; });
                if (price) {
                    price.price = price.price.plus(p.priceUser);
                }
                else {
                    var priTemp = new _price__WEBPACK_IMPORTED_MODULE_0__["Price"](p.base, p.priceUser, 1);
                    _this.pricesTemp.push(priTemp);
                }
            });
        });
        this.pricesTemp.forEach(function (p) {
            // p.reloadRealPrice();
            // p.reload(new Decimal(0));
            p.canBuy = p.base.quantity.gt(p.price);
        });
        this.canBuy = this.pricesTemp.findIndex(function (p) { return !p.canBuy; }) < 0;
        if (this.actionList.findIndex(function (a) { return !a.canBuy; }) > -1) {
            this.canBuy = false;
            return;
        }
    };
    ActionGroup.prototype.buy = function (game, toBuy) {
        if (toBuy === void 0) { toBuy = new Decimal(1); }
        var ret = true;
        this.actionList.forEach(function (a) {
            if (!a.buy(toBuy)) {
                ret = false;
            }
        });
        this.reload(game);
        return ret;
    };
    return ActionGroup;
}());



/***/ }),

/***/ "./src/app/model/actions/buy-action.ts":
/*!*********************************************!*\
  !*** ./src/app/model/actions/buy-action.ts ***!
  \*********************************************/
/*! exports provided: BuyAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyAction", function() { return BuyAction; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action */ "./src/app/model/action.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BuyAction = /** @class */ (function (_super) {
    __extends(BuyAction, _super);
    function BuyAction(prices, unit, toUnlock, id) {
        if (toUnlock === void 0) { toUnlock = null; }
        if (id === void 0) { id = ""; }
        var _this = _super.call(this, id === "" ? "B" : id, "孵化", "", prices) || this;
        _this.unit = unit;
        _this.toUnlock = toUnlock;
        _this.autoBuyPriceMulti = 1;
        return _this;
    }
    BuyAction.prototype.buy = function (toBuy) {
        if (toBuy === void 0) { toBuy = new Decimal(1); }
        if (_super.prototype.buy.call(this, toBuy)) {
            if (this.unit) {
                if (this.unit.twinAction) {
                    toBuy = toBuy.times(this.unit.twinAction.quantity.plus(1));
                }
                this.unit.quantity = this.unit.quantity.plus(toBuy);
            }
            if (this.toUnlock)
                this.toUnlock.forEach(function (u) { return u.unlock(); });
            return true;
        }
        else {
            return false;
        }
    };
    return BuyAction;
}(_action__WEBPACK_IMPORTED_MODULE_0__["Action"]));



/***/ }),

/***/ "./src/app/model/actions/buy-research.ts":
/*!***********************************************!*\
  !*** ./src/app/model/actions/buy-research.ts ***!
  \***********************************************/
/*! exports provided: BuyResearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyResearch", function() { return BuyResearch; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action */ "./src/app/model/action.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BuyResearch = /** @class */ (function (_super) {
    __extends(BuyResearch, _super);
    function BuyResearch(researches) {
        var _this = _super.call(this, "resAutoBAct", "购买研究", "购买更便宜的研究") || this;
        _this.researches = researches;
        return _this;
    }
    BuyResearch.prototype.buy = function (toBuy) {
        if (toBuy === void 0) { toBuy = new Decimal(1); }
        var buyList = this.researches.toDo.filter(function (r) { return r.autoBuyable && r.quantity.lt(r.maxAutoBuyLevel); });
        if (buyList.length < 1)
            return false;
        buyList.sort(function (res1, res2) {
            return res1.prices[0].priceUser.cmp(res2.prices[0].priceUser);
        });
        var len = toBuy.min(buyList.length).toNumber();
        var ret = false;
        for (var i = 0; i < len; i++) {
            if (buyList[i].buy()) {
                ret = true;
            }
            else {
                break;
            }
        }
        return ret;
    };
    return BuyResearch;
}(_action__WEBPACK_IMPORTED_MODULE_0__["Action"]));



/***/ }),

/***/ "./src/app/model/actions/team-action.ts":
/*!**********************************************!*\
  !*** ./src/app/model/actions/team-action.ts ***!
  \**********************************************/
/*! exports provided: TeamAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamAction", function() { return TeamAction; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action */ "./src/app/model/action.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TeamAction = /** @class */ (function (_super) {
    __extends(TeamAction, _super);
    function TeamAction(prices) {
        var _this = _super.call(this, "T", "团队合作", "得到更好的团队合作加成", prices) || this;
        _this.autoBuyPriceMulti = 1.5;
        _this.autoBuyTimeMulti = 1.5;
        return _this;
    }
    TeamAction.prototype.reload = function () {
        if (this.teamRes.done) {
            _super.prototype.reload.call(this);
        }
        else {
            this.canBuy = false;
            // this.maxBuy = new Decimal(0);
        }
    };
    return TeamAction;
}(_action__WEBPACK_IMPORTED_MODULE_0__["Action"]));



/***/ }),

/***/ "./src/app/model/actions/twin-action.ts":
/*!**********************************************!*\
  !*** ./src/app/model/actions/twin-action.ts ***!
  \**********************************************/
/*! exports provided: TwinAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwinAction", function() { return TwinAction; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action */ "./src/app/model/action.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TwinAction = /** @class */ (function (_super) {
    __extends(TwinAction, _super);
    function TwinAction(prices, unit) {
        var _this = _super.call(this, "w", "双胞胎", "孵化更多的 " + unit.name + " 使用同样的价格", prices) || this;
        _this.unit = unit;
        _this.autoBuyPriceMulti = 2;
        _this.autoBuyTimeMulti = 2;
        return _this;
    }
    /**
     * On buy add unit retroactively
     * @param toBuy
     */
    TwinAction.prototype.buy = function (toBuy) {
        if (toBuy === void 0) { toBuy = new Decimal(1); }
        if (_super.prototype.buy.call(this, toBuy)) {
            this.unit.quantity = this.unit.quantity.plus(this.unit.buyAction.quantity.times(toBuy));
            return true;
        }
        else {
            return false;
        }
    };
    TwinAction.prototype.reload = function () {
        if (this.twinRes.done) {
            _super.prototype.reload.call(this);
        }
        else {
            this.canBuy = false;
            // this.maxBuy = new Decimal(0);
        }
    };
    return TwinAction;
}(_action__WEBPACK_IMPORTED_MODULE_0__["Action"]));



/***/ }),

/***/ "./src/app/model/actions/warp-action.ts":
/*!**********************************************!*\
  !*** ./src/app/model/actions/warp-action.ts ***!
  \**********************************************/
/*! exports provided: WarpAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarpAction", function() { return WarpAction; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action */ "./src/app/model/action.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../strings */ "./src/app/model/strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var WarpAction = /** @class */ (function (_super) {
    __extends(WarpAction, _super);
    /**
     *  Action for warp
     * @param warp seconds to warp
     * @param game
     */
    function WarpAction(warp, game) {
        var _this = _super.call(this, "warp" + warp, "", "", [new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](game.time, warp, 1)]) || this;
        _this.warp = warp;
        _this.game = game;
        var id = "warp" + warp;
        if (id in _strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].actions) {
            _this.name = _strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].actions[id][0];
            _this.description = _strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].actions[id][1];
        }
        _this.unlocked = true;
        return _this;
    }
    WarpAction.prototype.buy = function (toBuy) {
        if (toBuy === void 0) { toBuy = new Decimal(1); }
        if (!_super.prototype.buy.call(this, toBuy))
            return false;
        this.game.warp(toBuy.toNumber() * 1000 * this.warp);
        return true;
    };
    return WarpAction;
}(_action__WEBPACK_IMPORTED_MODULE_0__["Action"]));



/***/ }),

/***/ "./src/app/model/autoBuy/auto-buy-manager.ts":
/*!***************************************************!*\
  !*** ./src/app/model/autoBuy/auto-buy-manager.ts ***!
  \***************************************************/
/*! exports provided: AutoBuyManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBuyManager", function() { return AutoBuyManager; });
/* harmony import */ var _actions_buy_research__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/buy-research */ "./src/app/model/actions/buy-research.ts");
/* harmony import */ var _auto_buy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-buy */ "./src/app/model/autoBuy/auto-buy.ts");


var AutoBuyManager = /** @class */ (function () {
    function AutoBuyManager() {
        this.allAutoBuyer = new Array();
        this.activeAutoBuy = new Array();
        this.enabled = true;
        this.multiBuy = true;
        //#endregion
    }
    AutoBuyManager.prototype.update = function (time) {
        if (time === void 0) { time = 0; }
        if (this.enabled)
            this.activeAutoBuy.forEach(function (a) { return a.update(time); });
    };
    AutoBuyManager.prototype.buildActiveList = function () {
        this.activeAutoBuy = this.allAutoBuyer
            .filter(function (a) { return a.isActive(); })
            .sort(function (a, b) { return a.priority - b.priority; });
    };
    AutoBuyManager.prototype.createFromUnit = function (unit, game) {
        var _this = this;
        unit.actions.forEach(function (a) {
            var auto = new _auto_buy__WEBPACK_IMPORTED_MODULE_1__["AutoBuy"](a, game.genExperiencePrice(unit.autoBuyerPrice * a.autoBuyPriceMulti), _this, unit);
            auto.startMax = unit.autoBuyerTime * a.autoBuyTimeMulti;
            _this.allAutoBuyer.push(auto);
            a.autoBuyer = auto;
        });
    };
    AutoBuyManager.prototype.createSpecial = function (game) {
        //  Minute Warp
        this.minuteAutoBuy = new _auto_buy__WEBPACK_IMPORTED_MODULE_1__["AutoBuy"](game.actMin, game.genExperiencePrice(100), this);
        this.minuteAutoBuy.startMax = 60 * 10;
        this.allAutoBuyer.push(this.minuteAutoBuy);
        //  Research
        this.researchAutoBuy = new _auto_buy__WEBPACK_IMPORTED_MODULE_1__["AutoBuy"](new _actions_buy_research__WEBPACK_IMPORTED_MODULE_0__["BuyResearch"](game.researches), game.genExperiencePrice(200), this);
        this.researchAutoBuy.startMax = 60 * 10;
        this.allAutoBuyer.push(this.researchAutoBuy);
        this.allAutoBuyer.forEach(function (a) { return a.reloadLevel(); });
    };
    //#region Save and Load
    AutoBuyManager.prototype.getSave = function () {
        return {
            autList: this.allAutoBuyer.map(function (a) { return a.getSave(); }),
            ena: this.enabled,
            multi: this.multiBuy
        };
    };
    AutoBuyManager.prototype.restore = function (data) {
        if ("ena" in data)
            this.enabled = data.ena;
        if ("multi" in data)
            this.multiBuy = data.multi;
        if ("autList" in data) {
            var _loop_1 = function (a) {
                this_1.allAutoBuyer.find(function (u) { return u.id === a.i; }).restore(a);
            };
            var this_1 = this;
            for (var _i = 0, _a = data.autList; _i < _a.length; _i++) {
                var a = _a[_i];
                _loop_1(a);
            }
            this.buildActiveList();
        }
        else {
            return false;
        }
    };
    return AutoBuyManager;
}());



/***/ }),

/***/ "./src/app/model/autoBuy/auto-buy.ts":
/*!*******************************************!*\
  !*** ./src/app/model/autoBuy/auto-buy.ts ***!
  \*******************************************/
/*! exports provided: DELAY_LEVEL, MIN_DELAY, AutoBuy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY_LEVEL", function() { return DELAY_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_DELAY", function() { return MIN_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBuy", function() { return AutoBuy; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _prestige_prestige__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prestige/prestige */ "./src/app/model/prestige/prestige.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DELAY_LEVEL = 0.6;
var MIN_DELAY = 1;
var AutoBuy = /** @class */ (function (_super) {
    __extends(AutoBuy, _super);
    function AutoBuy(action, price, autoBuyManager, unit) {
        if (unit === void 0) { unit = null; }
        var _this = _super.call(this, "au-" + action.id + (unit ? "_" + unit.id : ""), price, action.name) || this;
        _this.action = action;
        _this.autoBuyManager = autoBuyManager;
        _this.unit = unit;
        _this.active = true;
        _this.priority = 0;
        _this.current = 0;
        _this.startMax = 5;
        _this.max = 5;
        _this.multiBuy = new Decimal(1);
        _this.priceSavePercent = 1;
        return _this;
    }
    AutoBuy.prototype.isActive = function () {
        return (this.quantity.gt(0) &&
            this.active &&
            (!this.unit || this.unit.unlocked) &&
            this.action.checkResearch());
    };
    AutoBuy.prototype.buy = function (toBuy) {
        if (toBuy === void 0) { toBuy = new Decimal(1); }
        var original = new Decimal(this.quantity);
        var result = _super.prototype.buy.call(this, toBuy);
        this.reloadLevel();
        if (result && original.lt(1))
            this.autoBuyManager.buildActiveList();
        return result;
    };
    AutoBuy.prototype.reloadLevel = function () {
        if (this.quantity.gt(0)) {
            this.max =
                Math.round(this.startMax *
                    Math.pow(DELAY_LEVEL, this.quantity.toNumber() - 1) *
                    100) / 100;
            if (this.max < MIN_DELAY) {
                this.multiBuy = Decimal.pow(1 / DELAY_LEVEL, this.quantity.toNumber() -
                    1 -
                    Math.floor(Math.log(MIN_DELAY / this.startMax) / Math.log(DELAY_LEVEL))).ceil();
                this.max = MIN_DELAY;
            }
            else {
                this.multiBuy = new Decimal(1);
            }
        }
        else {
            this.max = this.startMax;
        }
    };
    AutoBuy.prototype.update = function (time) {
        if (time === void 0) { time = 0; }
        if (!this.active || !this.isActive())
            return;
        this.current = this.current + time / 1000;
        this.action.reload();
        if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(this.priceSavePercent) &&
            this.priceSavePercent <= 1 &&
            this.priceSavePercent > 0) {
            this.action.maxBuy = this.action.maxBuy.times(this.priceSavePercent);
            this.canBuy = this.action.maxBuy.gte(1);
        }
        else {
            this.canBuy = false;
        }
        var max = this.multiBuy.min(this.action.maxBuy);
        if (this.current >= this.max && this.canBuy && this.action.buy(max)) {
            this.current = 0;
        }
    };
    //#region Save and Load
    AutoBuy.prototype.getSave = function () {
        var save = _super.prototype.getSave.call(this);
        save.a_p = this.active;
        save.a_i = this.priority;
        save.a_c = this.current;
        if (this.priceSavePercent > 0)
            save.a_s = this.priceSavePercent;
        return save;
    };
    AutoBuy.prototype.restore = function (data) {
        if (_super.prototype.restore.call(this, data)) {
            this.active = !!data.a_p;
            if ("a_i" in data)
                this.priority = data.a_i;
            if ("a_c" in data)
                this.current = data.a_c;
            if ("a_s" in data)
                this.priceSavePercent = data.a_s;
            this.reloadLevel();
            return true;
        }
        else {
            return false;
        }
    };
    return AutoBuy;
}(_prestige_prestige__WEBPACK_IMPORTED_MODULE_1__["Prestige"]));



/***/ }),

/***/ "./src/app/model/baseUnit.ts":
/*!***********************************!*\
  !*** ./src/app/model/baseUnit.ts ***!
  \***********************************/
/*! exports provided: BaseUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUnit", function() { return BaseUnit; });
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/isArray */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var lodash_es_sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/sample */ "./node_modules/lodash-es/sample.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strings */ "./src/app/model/strings.ts");



var BaseUnit = /** @class */ (function () {
    function BaseUnit(id, name, description, quantity, noAutoName) {
        if (name === void 0) { name = ""; }
        if (description === void 0) { description = ""; }
        if (quantity === void 0) { quantity = new Decimal(0); }
        if (noAutoName === void 0) { noAutoName = false; }
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.unlocked = true;
        this.usedForProductionBonus = new Array();
        if (!noAutoName && id in _strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].units) {
            this.name = _strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].units[id][0];
            this.getRandomDescription();
        }
    }
    BaseUnit.prototype.getRandomDescription = function () {
        this.description = Object(lodash_es_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].units[this.id][1])
            ? Object(lodash_es_sample__WEBPACK_IMPORTED_MODULE_1__["default"])(_strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].units[this.id][1])
            : _strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].units[this.id][1];
    };
    BaseUnit.prototype.reset = function () {
        this.quantity = new Decimal(0);
        // this.uiQuantity = new Decimal(0);
    };
    //Region Save and Restore
    BaseUnit.prototype.getSave = function () {
        var data = {
            i: this.id
        };
        if (!this.quantity.eq(0))
            data.q = this.quantity;
        return data;
    };
    BaseUnit.prototype.restore = function (data) {
        if (!("i" in data && data.i === this.id))
            return false;
        if ("q" in data)
            this.quantity = new Decimal(data.q);
        return true;
    };
    return BaseUnit;
}());



/***/ }),

/***/ "./src/app/model/bugsTypes.ts":
/*!************************************!*\
  !*** ./src/app/model/bugsTypes.ts ***!
  \************************************/
/*! exports provided: Tags, BugTypes, Bug, BUGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugTypes", function() { return BugTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bug", function() { return Bug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUGS", function() { return BUGS; });
var Tags;
(function (Tags) {
    Tags[Tags["FARMER"] = 0] = "FARMER";
    Tags[Tags["MINER"] = 1] = "MINER";
    Tags[Tags["SOIL_G"] = 2] = "SOIL_G";
    Tags[Tags["LARVA"] = 3] = "LARVA";
    Tags[Tags["QUEEN"] = 4] = "QUEEN";
    Tags[Tags["NEST"] = 5] = "NEST";
})(Tags || (Tags = {}));
var BugTypes;
(function (BugTypes) {
    BugTypes[BugTypes["ANT"] = 0] = "ANT";
    BugTypes[BugTypes["BEE"] = 1] = "BEE";
    BugTypes[BugTypes["WASP"] = 2] = "WASP";
    BugTypes[BugTypes["SUPER_MAJOR"] = 3] = "SUPER_MAJOR";
})(BugTypes || (BugTypes = {}));
var Bug = /** @class */ (function () {
    function Bug(priceMulti, prodMulti, efficiencyMulti, teamPriceMulti, twinPriceMulti, color) {
        this.priceMulti = priceMulti;
        this.prodMulti = prodMulti;
        this.efficiencyMulti = efficiencyMulti;
        this.teamPriceMulti = teamPriceMulti;
        this.twinPriceMulti = twinPriceMulti;
        this.color = color;
    }
    return Bug;
}());

var BUGS = {
    0: new Bug(1, 1, 1, 1, 1, "#36a2eb"),
    1: new Bug(1.5, 1.2, 1.2, 0.1, 1, "#FFCE56"),
    2: new Bug(0.5, 0.9, 1, 10, 0.1, "#ff9f40"),
    3: new Bug(3, 4, 1.1, 1.5, 1.5, "#FF6384")
};


/***/ }),

/***/ "./src/app/model/full-unit.ts":
/*!************************************!*\
  !*** ./src/app/model/full-unit.ts ***!
  \************************************/
/*! exports provided: FullUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullUnit", function() { return FullUnit; });
/* harmony import */ var lodash_es_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/uniq */ "./node_modules/lodash-es/uniq.js");
/* harmony import */ var _actions_buy_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/buy-action */ "./src/app/model/actions/buy-action.ts");
/* harmony import */ var _actions_team_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/team-action */ "./src/app/model/actions/team-action.ts");
/* harmony import */ var _actions_twin_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/twin-action */ "./src/app/model/actions/twin-action.ts");
/* harmony import */ var _baseUnit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseUnit */ "./src/app/model/baseUnit.ts");
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _production__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./production */ "./src/app/model/production.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var FullUnit = /** @class */ (function (_super) {
    __extends(FullUnit, _super);
    function FullUnit(id, name, description, quantity) {
        if (name === void 0) { name = ""; }
        if (description === void 0) { description = ""; }
        if (quantity === void 0) { quantity = new Decimal(0); }
        var _this = _super.call(this, id, name, description, quantity) || this;
        _this.unlocked = false;
        _this.actions = new Array();
        _this.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_5__["BugTypes"].ANT;
        _this.efficiency = 100;
        _this.a = new Decimal(0);
        _this.b = new Decimal(0);
        _this.c = new Decimal(0);
        _this.producedBy = Array();
        _this.produces = Array();
        _this.endIn = Number.POSITIVE_INFINITY;
        _this.boughtBonus = 0.005;
        _this.isNew = false;
        _this.isEnding = false;
        _this.bonus = new Decimal(0);
        //  Increase production of this unit by other unit
        _this.productionsBonus = new Array();
        _this.productionsEfficiency = new Array();
        _this.productionsAll = new Array();
        _this.malus = null;
        _this.winNonLiner = true;
        _this.followerQuantity = new Decimal(5);
        _this.hasAutoBuyer = true;
        _this.autoBuyerTime = 5;
        _this.autoBuyerPrice = 10;
        //#endregion
        _this.tempA = new Decimal(0);
        _this.tempB = new Decimal(0);
        _this.tempC = new Decimal(0);
        _this.tags = new Array();
        return _this;
    }
    FullUnit.prototype.generateBuyAction = function (prices, toUnlock) {
        if (toUnlock === void 0) { toUnlock = null; }
        this.buyAction = new _actions_buy_action__WEBPACK_IMPORTED_MODULE_1__["BuyAction"](prices, this, toUnlock);
        this.actions.push(this.buyAction);
    };
    FullUnit.prototype.generateTeamAction = function (price) {
        this.teamAction = new _actions_team_action__WEBPACK_IMPORTED_MODULE_2__["TeamAction"](price);
        this.actions.push(this.teamAction);
    };
    FullUnit.prototype.generateTwinAction = function (price) {
        this.twinAction = new _actions_twin_action__WEBPACK_IMPORTED_MODULE_3__["TwinAction"](price, this);
        this.actions.push(this.twinAction);
    };
    FullUnit.prototype.unlock = function () {
        if (this.unlocked)
            return;
        this.unlocked = true;
        this.isNew = true;
        this.produces.forEach(function (u) { return u.product.unlock(); });
        if (this.unitGroup) {
            this.unitGroup.check();
            this.unitGroup.selected.push(this);
            this.unitGroup.selected = Object(lodash_es_uniq__WEBPACK_IMPORTED_MODULE_0__["default"])(this.unitGroup.selected);
        }
    };
    FullUnit.prototype.isActive = function () {
        return (this.unlocked && this.efficiency > Number.EPSILON && this.quantity.gt(0));
    };
    FullUnit.prototype.isStopped = function () {
        return this.efficiency < 0.01;
    };
    FullUnit.prototype.addProducer = function (producer, ratio) {
        if (ratio === void 0) { ratio = 1; }
        ratio = new Decimal(ratio);
        var prod = new _production__WEBPACK_IMPORTED_MODULE_6__["Production"](producer, this, ratio);
        this.producedBy.push(prod);
        producer.produces.push(prod);
    };
    FullUnit.prototype.reloadTeamBonus = function (teamBonus, multiBonus) {
        if (teamBonus === void 0) { teamBonus = false; }
        this.bonus = new Decimal(0);
        if (teamBonus && this.buyAction) {
            this.bonus = this.buyAction.quantity.times(this.boughtBonus);
            if (this.teamAction) {
                this.bonus = this.bonus.times(this.teamAction.quantity.plus(1));
            }
            this.bonus = this.bonus.times(multiBonus);
        }
    };
    FullUnit.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.unlocked = false;
        this.efficiency = 100;
        this.a = new Decimal(0);
        this.b = new Decimal(0);
        this.c = new Decimal(0);
        if (this.buyAction)
            this.buyAction.reset();
        if (this.teamAction)
            this.teamAction.reset();
        if (this.twinAction)
            this.twinAction.reset();
    };
    FullUnit.prototype.setBugType = function (bug) {
        this.bugType = bug;
        if (!(bug in _bugsTypes__WEBPACK_IMPORTED_MODULE_5__["BUGS"]))
            return;
        var bugClass = _bugsTypes__WEBPACK_IMPORTED_MODULE_5__["BUGS"][bug];
        if (this.buyAction && bugClass.priceMulti !== 1) {
            this.buyAction.prices.filter(function (p) { return p.price.gt(1); }).forEach(function (p) {
                p.price = p.price.times(bugClass.priceMulti);
            });
        }
        if (this.produces.length > 0 && bugClass.prodMulti !== 1) {
            this.produces.forEach(function (p) {
                p.ratio = p.ratio.times(bugClass.prodMulti);
            });
        }
        if (this.produces.length > 0 && bugClass.efficiencyMulti !== 1) {
            this.produces.filter(function (p) { return p.ratio.gt(0); }).forEach(function (p) {
                p.ratio = p.ratio.times(bugClass.efficiencyMulti);
            });
        }
        if (this.teamAction && bugClass.teamPriceMulti !== 1) {
            this.teamAction.prices.forEach(function (p) {
                p.price = p.price.times(bugClass.teamPriceMulti);
            });
        }
        if (this.twinAction && bugClass.twinPriceMulti !== 1) {
            this.twinAction.prices.forEach(function (p) {
                p.price = p.price.times(bugClass.twinPriceMulti);
            });
        }
    };
    //#region Save and Restore
    FullUnit.prototype.getSave = function () {
        var save = _super.prototype.getSave.call(this);
        if (this.unlocked)
            save.u = this.unlocked;
        if (this.actions)
            save.a = this.actions.map(function (a) { return a.getSave(); });
        if (this.efficiency < 100)
            save.e = this.efficiency;
        if (this.isNew)
            save.n = true;
        return save;
    };
    FullUnit.prototype.restore = function (data) {
        if (!("i" in data && data.i === this.id))
            return false;
        if ("q" in data)
            this.quantity = new Decimal(data.q);
        if (this.actions && "a" in data) {
            var _loop_1 = function (s) {
                this_1.actions.find(function (a) { return a.id === s.i; }).restore(s);
            };
            var this_1 = this;
            for (var _i = 0, _a = data.a; _i < _a.length; _i++) {
                var s = _a[_i];
                _loop_1(s);
            }
        }
        this.unlocked = !!data.u;
        if ("e" in data)
            this.efficiency = data.e;
        if ("n" in data)
            this.isNew = data.n;
        return true;
    };
    return FullUnit;
}(_baseUnit__WEBPACK_IMPORTED_MODULE_4__["BaseUnit"]));



/***/ }),

/***/ "./src/app/model/game.ts":
/*!*******************************!*\
  !*** ./src/app/model/game.ts ***!
  \*******************************/
/*! exports provided: ADDITIONAL_PRICE1, ADDITIONAL_PRICE2, Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDITIONAL_PRICE1", function() { return ADDITIONAL_PRICE1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDITIONAL_PRICE2", function() { return ADDITIONAL_PRICE2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/sample */ "./node_modules/lodash-es/sample.js");
/* harmony import */ var _actions_warp_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/warp-action */ "./src/app/model/actions/warp-action.ts");
/* harmony import */ var _autoBuy_auto_buy_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autoBuy/auto-buy-manager */ "./src/app/model/autoBuy/auto-buy-manager.ts");
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _malus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./malus */ "./src/app/model/malus.ts");
/* harmony import */ var _masteries_all_masteries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masteries/all-masteries */ "./src/app/model/masteries/all-masteries.ts");
/* harmony import */ var _masteries_mastery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masteries/mastery */ "./src/app/model/masteries/mastery.ts");
/* harmony import */ var _prestige_all_prestige__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prestige/all-prestige */ "./src/app/model/prestige/all-prestige.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./price */ "./src/app/model/price.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _stats_stats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stats/stats */ "./src/app/model/stats/stats.ts");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs */ "./src/app/model/tabs.ts");
/* harmony import */ var _units_ants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./units/ants */ "./src/app/model/units/ants.ts");
/* harmony import */ var _units_bees__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./units/bees */ "./src/app/model/units/bees.ts");
/* harmony import */ var _units_buildings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./units/buildings */ "./src/app/model/units/buildings.ts");
/* harmony import */ var _units_engineers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./units/engineers */ "./src/app/model/units/engineers.ts");
/* harmony import */ var _units_gatherers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./units/gatherers */ "./src/app/model/units/gatherers.ts");
/* harmony import */ var _units_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./units/helpers */ "./src/app/model/units/helpers.ts");
/* harmony import */ var _units_malus_killer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./units/malus-killer */ "./src/app/model/units/malus-killer.ts");
/* harmony import */ var _units_materials__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./units/materials */ "./src/app/model/units/materials.ts");
/* harmony import */ var _units_researches__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./units/researches */ "./src/app/model/units/researches.ts");
/* harmony import */ var _units_special__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./units/special */ "./src/app/model/units/special.ts");
/* harmony import */ var _units_wasps__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./units/wasps */ "./src/app/model/units/wasps.ts");
/* harmony import */ var _units_workers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./units/workers */ "./src/app/model/units/workers.ts");
/* harmony import */ var _units_world_bonus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./units/world-bonus */ "./src/app/model/units/world-bonus.ts");
/* harmony import */ var _units_world_malus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./units/world-malus */ "./src/app/model/units/world-malus.ts");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utility */ "./src/app/model/utility.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./world */ "./src/app/model/world.ts");






























var STARTING_FOOD = new Decimal(100);
var ADDITIONAL_PRICE1 = new Decimal(1e4);
var ADDITIONAL_PRICE2 = new Decimal(1e9);
var MAX_UPDATE_TRY = 20;
var Game = /** @class */ (function () {
    function Game(ms) {
        var _this = this;
        this.ms = ms;
        this.units = new Array();
        this.unlockedUnits = new Array();
        this.unitGroups = new Array();
        this.unlockedGroups = new Array();
        this.isPaused = false;
        //#endregion
        this.lastUnitUrl = "nav/unit/f";
        this.currentWorld = new _world__WEBPACK_IMPORTED_MODULE_29__["World"]();
        this.nextWorlds = new Array();
        this.canTravel = false;
        this.maxLevel = new Decimal(5);
        this.realMaxLevel = new Decimal(5);
        this.canBuyResearch = false;
        this.maxTimeBank = new Decimal(0);
        this.upNumber = 0;
        this.tabs = new _tabs__WEBPACK_IMPORTED_MODULE_13__["Tabs"]();
        //#region Declarations
        this.materials = new _units_materials__WEBPACK_IMPORTED_MODULE_21__["Materials"](this);
        this.unitGroups.push(this.materials);
        this.researches = new _units_researches__WEBPACK_IMPORTED_MODULE_22__["Researches"](this.ms.researchEmitter, this);
        this.ants = new _units_ants__WEBPACK_IMPORTED_MODULE_14__["Ants"](this);
        this.unitGroups.push(this.ants);
        this.bees = new _units_bees__WEBPACK_IMPORTED_MODULE_15__["Bees"](this);
        this.unitGroups.push(this.bees);
        this.wasps = new _units_wasps__WEBPACK_IMPORTED_MODULE_24__["Wasps"](this);
        this.unitGroups.push(this.wasps);
        this.gatherers = new _units_gatherers__WEBPACK_IMPORTED_MODULE_18__["Gatherers"](this);
        this.unitGroups.push(this.gatherers);
        this.advWorkers = new _units_workers__WEBPACK_IMPORTED_MODULE_25__["Workers"](this);
        this.unitGroups.push(this.advWorkers);
        this.buildings = new _units_buildings__WEBPACK_IMPORTED_MODULE_16__["Buildings"](this);
        this.unitGroups.push(this.buildings);
        this.engineers = new _units_engineers__WEBPACK_IMPORTED_MODULE_17__["Engineers"](this);
        this.unitGroups.push(this.engineers);
        this.worldMalus = new _units_world_malus__WEBPACK_IMPORTED_MODULE_27__["WorldMalus"](this);
        this.unitGroups.push(this.worldMalus);
        this.killers = new _units_malus_killer__WEBPACK_IMPORTED_MODULE_20__["MalusKiller"](this);
        this.unitGroups.push(this.killers);
        this.special = new _units_special__WEBPACK_IMPORTED_MODULE_23__["Special"](this);
        this.unitGroups.push(this.special);
        this.helpers = new _units_helpers__WEBPACK_IMPORTED_MODULE_19__["Helpers"](this);
        this.unitGroups.push(this.helpers);
        this.unitGroups.forEach(function (g) { return g.declareStuff(); });
        this.advWorkers.additionalBuyPreces = [
            new _price__WEBPACK_IMPORTED_MODULE_10__["Price"](this.materials.soil, ADDITIONAL_PRICE1)
        ];
        this.researches.declareStuff();
        this.worldBonus = new _units_world_bonus__WEBPACK_IMPORTED_MODULE_26__["WorldBonus"]();
        this.worldBonus.declareStuff();
        this.experience = new _full_unit__WEBPACK_IMPORTED_MODULE_5__["FullUnit"]("prest");
        this.experience.reset = function () {
            //  Do nothing !
            //  Intended
        };
        this.time = new _full_unit__WEBPACK_IMPORTED_MODULE_5__["FullUnit"]("time");
        this.time.reset = function () {
            //  Do nothing !
            //  Intended
        };
        //#endregion
        //#region Build Lists
        this.unitGroups
            .map(function (g) { return g.list; })
            .forEach(function (l) { return l.forEach(function (u) { return _this.units.push(u); }); });
        this.units.push(this.experience, this.time);
        //#endregion
        //#region Relations
        this.unitGroups.forEach(function (g) { return g.setRelations(); });
        this.researches.setRelations(this.materials.science, this);
        this.researches.team1.toUnlock.push(this.advWorkers.firstResearch);
        this.worldBonus.setRelations(this);
        //#endregion
        //#region Worlds
        this.worldBonus.addWorlds();
        this.unitGroups.forEach(function (g) { return g.addWorlds(); });
        //#endregion
        //#region Prestige
        this.allPrestige = new _prestige_all_prestige__WEBPACK_IMPORTED_MODULE_9__["AllPrestige"]();
        this.allPrestige.declareStuff(this);
        //#endregion
        //#region Time Warp
        this.actMin = new _actions_warp_action__WEBPACK_IMPORTED_MODULE_1__["WarpAction"](60, this);
        this.actHour = new _actions_warp_action__WEBPACK_IMPORTED_MODULE_1__["WarpAction"](3600, this);
        //#endregion
        //#region Assign team and twin research to actions
        this.units.forEach(function (u) {
            if (u.teamAction)
                u.teamAction.requiredResearch = _this.researches.team2;
            if (u.twinAction)
                u.twinAction.requiredResearch = _this.researches.twin;
        });
        //#endregion
        //#region Autobuyers
        this.autoBuyManager = new _autoBuy_auto_buy_manager__WEBPACK_IMPORTED_MODULE_2__["AutoBuyManager"]();
        this.units.filter(function (u) { return u.hasAutoBuyer; }).forEach(function (u) {
            if (!!u.buyAction) {
                _this.autoBuyManager.createFromUnit(u, _this);
            }
            else {
                u.hasAutoBuyer = false;
            }
        });
        this.autoBuyManager.createSpecial(this);
        //#endregion
        this.allMateries = new _masteries_all_masteries__WEBPACK_IMPORTED_MODULE_7__["AllMasteries"](this);
        this.stats = new _stats_stats__WEBPACK_IMPORTED_MODULE_12__["Stats"]();
        //#region Worlds
        this.generateWorlds();
        this.currentWorld = new _world__WEBPACK_IMPORTED_MODULE_29__["World"]("home");
        this.currentWorld.name = "初始世界";
        this.currentWorld.level = new Decimal(1);
        this.currentWorld.winConditions.push(new _price__WEBPACK_IMPORTED_MODULE_10__["Price"](this.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["CONSTS"].BASE_WIN_CONDITION_MATERIALS));
        this.currentWorld.setLevel(new Decimal(1), this);
        this.setStartingStuff();
        //#endregion
        //#region Special Stuff
        this.researches.mastery.onBuy = function () {
            _this.allMateries.totalEarned++;
            _this.allMateries.masteryPoint++;
            _this.researches.masteryResDone++;
        };
        this.materials.science.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_11__["ProductionBonus"](this.experience, new Decimal(1)));
        this.setMaxTimeBank();
        this.units.forEach(function (u) {
            if (u.teamAction)
                u.teamAction.teamRes = _this.researches.team2;
            if (u.twinAction)
                u.twinAction.twinRes = _this.researches.twin;
        });
        // Extreme
        this.researches.overNineThousand.onBuy = function () {
            var malus = [
                _this.worldMalus.foodMalus1,
                _this.worldMalus.soilMalus1,
                _this.worldMalus.crystalMalus1,
                _this.worldMalus.scienceMalus1
            ].filter(function (m) { return !_this.currentWorld.notWinConditions.includes(m); });
            _this.currentWorld.notWinConditions.push(Object(lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__["default"])(malus));
            _this.currentWorld.setMalus();
            _this.currentWorld.name = "极端的 " + _this.currentWorld.name;
            _this.currentWorld.prestige = _this.currentWorld.prestige
                .times(1.1)
                .floor();
            _this.currentWorld.winConditions.forEach(function (w) {
                w.price = w.price.times(1.2).floor();
            });
            _this.worldMalus.unlocked.forEach(function (m) {
                if (m instanceof _malus__WEBPACK_IMPORTED_MODULE_6__["Malus"]) {
                    m.isKilled = false;
                    m.efficiency = 100;
                    m.quantity = m.quantity.times(10);
                    if (m.produces.length === 1 && m.producedBy.length === 1) {
                        m.quantity = m.quantity.times(20);
                    }
                    if (m.produces.length === 0)
                        m.quantity = m.quantity.times(200);
                }
            });
            _this.buildLists();
            _this.killers.unlocked.forEach(function (k) {
                k.efficiency = 100;
            });
        };
        //#endregion
        //#region Debug
        // this.materials.list.forEach(u => (u.unlocked = true));
        // this.unitGroups.forEach(g => g.list.forEach(u => u.unlock()));
        // this.tabs.tabList.forEach(t => (t.unlocked = true));
        // this.worldMalus.foodMalus1.quantity = new Decimal(100);
        // this.worldMalus.foodMalus1.quantity = new Decimal(100);
        // this.worldMalus.foodMalus2.quantity = new Decimal(10);
        // this.experience.quantity = new Decimal(1000);
        // this.allMateries.masteryPoint = 30;
        // this.experience.quantity = new Decimal(1e10);
        // this.units.forEach(u => {
        //   u.isNew = false;
        // });
        // this.researches.team1.unlocked = true;
        // this.researches.team1.done = true;
        // this.researches.team1.complete = true;
        // this.researches.team1.quantity = new Decimal(1);
        // this.researches.team1.toUnlock.forEach(u => u.unlock());
        // this.researches.team2.unlocked = true;
        // this.researches.team2.done = true;
        // this.researches.team2.quantity = new Decimal(1);
        // this.researches.team2.complete = true;
        // this.researches.team2.toUnlock.forEach(u => u.unlock());
        // this.researches.twin.unlocked = true;
        // this.researches.twin.done = true;
        // this.researches.twin.quantity = new Decimal(1);
        // this.researches.twin.complete = true;
        // this.researches.twin.toUnlock.forEach(u => u.unlock());
        // this.time.quantity = new Decimal(100);
        // console.log("World Prefix: " + World.prefix.length);
        // console.log("World Biomes: " + World.biome.length);
        // console.log("World Suffix: " + World.suffix.length);
        //#endregion
        this.unitGroups.forEach(function (g) { return g.check(true); });
        this.unitGroups.forEach(function (g) { return (g.selected = g.list.filter(function (u) { return u.unlocked; })); });
        this.buildLists();
    }
    Game.prototype.buildLists = function () {
        var _this = this;
        this.unlockedUnits = [];
        this.units.forEach(function (u) {
            if (u instanceof _full_unit__WEBPACK_IMPORTED_MODULE_5__["FullUnit"] && u.unlocked)
                _this.unlockedUnits.push(u);
        });
        var oldNum = this.unlockedGroups.length;
        this.unlockedGroups = this.unitGroups.filter(function (g) { return g.unlocked.length > 0; });
        // tslint:disable-next-line:triple-equals
        if (this.ms.options.materialPosition == 2) {
            this.unlockedGroups = this.unlockedGroups.filter(function (m) { return m !== _this.materials; });
        }
        if (oldNum !== this.unlockedGroups.length) {
            this.ms.unlockGroupEmiter.emit(this.unlockedGroups.length);
        }
    };
    Game.prototype.setMaxTimeBank = function () {
        this.maxTimeBank = this.allPrestige.time.timeBank.quantity
            .times(3600)
            .plus(7200)
            .times(1 +
            0.5 * this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].TIME_BANK) +
            2 * this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].TIME_GEN_AND_BANK));
    };
    /**
     * Update game and add time
     * @param delta time passed in milliseconds
     */
    Game.prototype.updateWithTime = function (delta) {
        var timePerSec = this.allPrestige.time.timeProducer.quantity
            .div(10)
            .times(1 +
            0.3 * this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].TIME_GEN) +
            2 * this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].TIME_GEN_AND_BANK));
        if (isNaN(this.time.quantity.toNumber())) {
            this.time.quantity = new Decimal(0);
        }
        this.time.quantity = this.time.quantity
            .plus(timePerSec.times(delta / 1000))
            .min(this.maxTimeBank);
        this.time.c = timePerSec;
        this.update(delta);
    };
    /**
     * Update function.
     * Works only with resource growing at max rate of x^3
     * When something reach zero consumers are stopped and it will update again
     * @param delta in milliseconds
     * @param force force update, used for warp in pause
     */
    Game.prototype.update = function (delta, force) {
        if (force === void 0) { force = false; }
        this.upNumber++;
        if (this.upNumber > MAX_UPDATE_TRY) {
            this.ms.toastr.error("Error: infinite loop.", "Please report to developer.");
            return;
        }
        var maxTime = delta;
        var unitZero = null;
        this.firstEndingUnit = null;
        this.unlockedUnits.forEach(function (u) {
            u.isEnding = false;
            u.endIn = Number.POSITIVE_INFINITY;
        });
        this.reloadProduction();
        for (var _i = 0, _a = this.unlockedUnits; _i < _a.length; _i++) {
            var unit = _a[_i];
            //#region get polynom
            unit.tempA = new Decimal(0);
            unit.tempB = new Decimal(0);
            unit.tempC = new Decimal(0);
            var d = unit.quantity;
            for (var _b = 0, _c = unit.producedBy.filter(function (p) { return p.producer.isActive(); }); _b < _c.length; _b++) {
                var prod1 = _c[_b];
                // x
                var prodX = prod1.prodPerSec;
                unit.tempC = unit.tempC.plus(prodX.times(prod1.producer.quantity));
                for (var _d = 0, _e = prod1.producer.producedBy.filter(function (p) {
                    return p.producer.isActive();
                }); _d < _e.length; _d++) {
                    var prod2 = _e[_d];
                    // x^2
                    var prodX2 = prod2.prodPerSec.times(prodX);
                    unit.tempB = unit.tempB.plus(prodX2.times(prod2.producer.quantity));
                    for (var _f = 0, _g = prod2.producer.producedBy.filter(function (p) {
                        return p.producer.isActive();
                    }); _f < _g.length; _f++) {
                        var prod3 = _g[_f];
                        // x^3
                        var prodX3 = prod3.prodPerSec.times(prodX2);
                        unit.tempA = unit.tempA.plus(prodX3.times(prod3.producer.quantity));
                    }
                }
            }
            unit.tempA = unit.tempA.div(6);
            unit.tempB = unit.tempB.div(2);
            if (!unit.tempA.eq(unit.a))
                unit.a = unit.tempA;
            if (!unit.tempB.eq(unit.b))
                unit.b = unit.tempB;
            if (!unit.tempC.eq(unit.c))
                unit.c = unit.tempC;
            //#endregion
            if (unit.a.lt(0) || unit.b.lt(0) || unit.c.lt(0) || d.lt(0)) {
                var solution = _utility__WEBPACK_IMPORTED_MODULE_28__["Utility"].solveEquation(unit.a, unit.b, unit.c, d).filter(function (s) { return s.gte(0); });
                if (solution.length > 0) {
                    var min = solution.reduce(function (p, c) { return p.min(c); }, new Decimal(Number.POSITIVE_INFINITY));
                    if (maxTime > min.toNumber() * 1000) {
                        maxTime = min.toNumber() * 1000;
                        unitZero = unit;
                    }
                    unit.endIn = Math.min(min.times(1000).toNumber(), unit.endIn);
                    unit.isEnding = true;
                    if (!(unit instanceof _malus__WEBPACK_IMPORTED_MODULE_6__["Malus"]) &&
                        (!this.firstEndingUnit || this.firstEndingUnit.endIn > unit.endIn)) {
                        this.firstEndingUnit = unit;
                    }
                }
            }
        }
        this.unlockedUnits
            .filter(function (u) { return u.endIn > 0; })
            .forEach(function (u) { return (u.endIn = u.endIn - maxTime); });
        if (!this.isPaused || force) {
            if (maxTime > 10) {
                this.update2(new Decimal(maxTime).div(1000));
            }
            // Something has ended
            if (unitZero) {
                //  Stop consumers
                unitZero.producedBy.filter(function (p) { return p.ratio.lt(0); }).forEach(function (p) {
                    p.producer.efficiency = 0;
                });
                unitZero.producedBy.filter(function (p) { return p.ratio.gt(0); }).forEach(function (p) {
                    p.producer.producedBy.filter(function (p2) { return p2.ratio.lt(0); }).forEach(function (p2) {
                        p2.producer.efficiency = 0;
                    });
                });
                //  Kill Malus
                if (unitZero instanceof _malus__WEBPACK_IMPORTED_MODULE_6__["Malus"]) {
                    if (unitZero.kill()) {
                        this.ms.toastr.success("", unitZero.name + " 被杀死了!");
                    }
                }
                else {
                    if (!this.ms.options.noResourceEndPopUp) {
                        this.ms.toastr.warning(unitZero.name + " 消耗光了!");
                    }
                }
            }
            var remaining = delta - maxTime;
            if (remaining > 10) {
                // this.reloadProduction();
                this.update(remaining);
            }
        }
    };
    /**
     * Sub Update function.
     * @param seconds time in seconds
     */
    Game.prototype.update2 = function (seconds) {
        this.unlockedUnits
            .filter(function (u) { return !u.a.eq(0) || !u.b.eq(0) || !u.c.eq(0); })
            .forEach(function (u) {
            u.quantity = u.quantity
                .plus(u.a.times(Decimal.pow(seconds, 3)))
                .plus(u.b.times(Decimal.pow(seconds, 2)))
                .plus(u.c.times(seconds));
        });
        this.unlockedUnits.forEach(function (u) {
            u.quantity = u.quantity.max(0);
        });
    };
    /**
     *  Reload actions costs
     *  and eventually fix quantity > 0
     */
    Game.prototype.postUpdate = function (time) {
        this.upNumber = 0;
        this.worldMalus.foodMalus1.reloadPriceMulti();
        this.worldMalus.soilMalus1.reloadPriceMulti();
        this.worldMalus.crystalMalus1.reloadPriceMulti();
        this.worldMalus.scienceMalus1.reloadPriceMulti();
        this.unlockedUnits.forEach(function (u) {
            u.quantity = u.quantity.max(0);
        });
        if (!this.isPaused)
            this.autoBuyManager.update(time);
        this.researches.toDo.forEach(function (u) { return u.reload(); });
        this.canBuyResearch = !!this.researches.toDo.find(function (r) {
            return r.unlocked &&
                r.canBuy &&
                (!r.unlimited || r.quantity.lt(r.maxAutoBuyLevel));
        });
        this.unlockedUnits.forEach(function (u) {
            u.actions.forEach(function (a) { return a.reload(); });
        });
        var team = this.researches.team2.done;
        var twin = this.researches.twin.done;
        this.unitGroups.forEach(function (g) { return g.setFlags(team, twin); });
        this.canTravel = this.currentWorld.canTravel();
        if (!this.researches.travel.done)
            this.canTravel = false;
        this.actHour.reload();
        this.actMin.reload();
    };
    /**
     * Time Warp
     * @param delta in milliseconds
     */
    Game.prototype.warp = function (delta) {
        if (delta > 0) {
            if (!this.ms.options.noWarpNotification) {
                this.ms.toastr.info(this.ms.endInPipe.transform(delta), "时间扭曲");
            }
            this.update(delta, true);
            //this.autoBuyManager.update(delta);
        }
    };
    /**
     * Calculate production per second
     */
    Game.prototype.reloadProduction = function () {
        var _this = this;
        var teamPrestigeBonus = this.allPrestige.team.betterTeam.quantity
            .times(0.3)
            .times(1 + this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].TEAM_PRESTIGE))
            .plus(1);
        this.unlockedUnits.forEach(function (u) {
            u.reloadTeamBonus(_this.researches.team1.done, teamPrestigeBonus);
            u.produces.forEach(function (p) { return p.reloadProdPerSec(_this.researches.team1.done); });
        });
    };
    /**
     * Apply world bonus
     */
    Game.prototype.applyWorldBonus = function () {
        this.worldBonus.reset();
        this.currentWorld.productionsBonus.forEach(function (b) {
            b[0].quantity = new Decimal(b[1]);
            b[0].unlocked = true;
        });
        this.currentWorld.productionsAll.forEach(function (b) {
            b[0].quantity = new Decimal(b[1]);
            b[0].unlocked = true;
        });
        this.currentWorld.productionsEfficiency.forEach(function (b) {
            b[0].quantity = new Decimal(b[1]);
            b[0].unlocked = true;
        });
    };
    Game.prototype.setStartingStuff = function () {
        this.materials.food.unlocked = true;
        this.materials.food.quantity = STARTING_FOOD;
        this.ants.queen.unlocked = true;
        this.ants.queen.quantity = new Decimal(1);
        this.ants.larva.unlocked = true;
        this.ants.larva.quantity = new Decimal(10);
        this.gatherers.drone.unlocked = true;
        this.gatherers.drone.quantity = new Decimal(1);
    };
    /**
     * Prestige, reset everything except prestige stuff
     * and move to another world
     * @param world chosen world
     */
    Game.prototype.goToWorld = function (world) {
        this.stats.logWorldCompleted(this.currentWorld, !this.canTravel);
        if (this.canTravel && this.hasSecondMastery()) {
            this.allMateries.totalEarned++;
            this.allMateries.masteryPoint++;
        }
        var newPrestige = this.experience.quantity.plus(this.currentWorld.prestige);
        this.units.forEach(function (u) { return u.reset(); });
        this.worldBonus.reset();
        this.materials.food.quantity = new Decimal(STARTING_FOOD);
        this.ants.queen.quantity = new Decimal(1);
        this.ants.larva.unlocked = true;
        this.gatherers.drone.unlocked = true;
        this.materials.food.unlocked = true;
        //  Update Experience
        if (this.canTravel) {
            this.experience.quantity = newPrestige;
            this.maxLevel = this.maxLevel
                .plus(this.currentWorld.level.div(3))
                .floor()
                .plus(1);
        }
        this.currentWorld = world;
        this.setStartingStuff();
        this.applyWorldBonus();
        this.researches.reset(this.materials.science);
        //#region Followers
        var followerMulti = this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].MORE_FOLLOWERS) + 1;
        var followerMultiGa = this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].MORE_FOLLOWERS_GA) * 3;
        var followerMultiWo = this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].MORE_FOLLOWERS_WO) * 3;
        this.units.filter(function (u) { return u.follower; }).forEach(function (u) {
            u.quantity = u.quantity.plus(u.follower.quantity.times(u.followerQuantity).times(followerMulti));
            if (u.quantity.gt(0.5)) {
                u.unlock();
                if (u.buyAction && u.buyAction.toUnlock) {
                    u.buyAction.toUnlock.forEach(function (a) { return a.unlock(); });
                }
            }
        });
        this.gatherers.list.filter(function (u) { return u.follower; }).forEach(function (u) {
            u.quantity = u.quantity.plus(u.follower.quantity.times(u.followerQuantity).times(followerMultiGa));
        });
        this.advWorkers.list.filter(function (u) { return u.follower; }).forEach(function (u) {
            u.quantity = u.quantity.plus(u.follower.quantity.times(u.followerQuantity).times(followerMultiWo));
        });
        //#endregion
        //#region Starting Team && TWin
        var startTeam = this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].TEAM_START);
        if (startTeam > 0) {
            this.units
                .filter(function (u) { return u.teamAction; })
                .map(function (u) { return u.teamAction; })
                .forEach(function (t) { return (t.quantity = t.quantity.plus(startTeam)); });
            this.researches.team1.unlocked = true;
            this.researches.team1.done = true;
            this.researches.team1.complete = true;
            this.researches.team1.quantity = new Decimal(1);
            this.researches.team1.toUnlock.forEach(function (u) { return u.unlock(); });
            this.researches.team2.unlocked = true;
            this.researches.team2.done = true;
            this.researches.team2.quantity = new Decimal(1);
            this.researches.team2.complete = true;
            this.researches.team2.toUnlock.forEach(function (u) { return u.unlock(); });
            this.materials.science.unlock();
        }
        var startTwin = this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].START_TWIN);
        if (startTwin > 0) {
            this.units
                .filter(function (u) { return u.twinAction; })
                .map(function (u) { return u.twinAction; })
                .forEach(function (t) { return (t.quantity = t.quantity.plus(startTwin)); });
            this.researches.twin.unlocked = true;
            this.researches.twin.done = true;
            this.researches.twin.quantity = new Decimal(1);
            this.researches.twin.complete = true;
            this.researches.twin.toUnlock.forEach(function (u) { return u.unlock(); });
            this.materials.science.unlock();
        }
        //#endregion
        //#region Mastery && Free Warp
        this.researches.free1hWarp.unlocked =
            this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].FREE_WARP_RES) > 0;
        if (this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].START_RESEARCHS) > 0) {
            this.advWorkers.scientificMethod1.unlocked = true;
            this.advWorkers.scientificMethod1.quantity = new Decimal(4);
            this.researches.harvesting.unlocked = true;
            this.researches.harvesting.quantity = new Decimal(4);
        }
        //#endregion
        //#region other Bugs
        if (this.currentWorld.additionalBugs.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_3__["BugTypes"].BEE)) {
            this.bees.larva.unlocked = true;
            this.bees.queen.unlocked = true;
            this.bees.larva.quantity = new Decimal(10);
            this.bees.queen.quantity = new Decimal(1);
            this.gatherers.foraggingBee.unlocked = true;
        }
        if (this.currentWorld.additionalBugs.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_3__["BugTypes"].WASP)) {
            this.wasps.larva.unlocked = true;
            this.wasps.queen.unlocked = true;
            this.wasps.larva.quantity = new Decimal(10);
            this.wasps.queen.quantity = new Decimal(1);
            this.gatherers.foraggingWasp.unlocked = true;
        }
        if (this.currentWorld.additionalBugs.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_3__["BugTypes"].SUPER_MAJOR)) {
            this.gatherers.hunter.unlocked = true;
        }
        //#endregion
        this.currentWorld.setGame();
        this.researches.reloadLists();
        this.unitGroups.forEach(function (g) { return g.check(); });
        this.buildLists();
        this.generateWorlds();
        this.tabs.prestige.unlock();
        if (this.ms.kongregate)
            setTimeout(this.ms.sendKong.bind(this.ms), 10);
        this.autoBuyManager.buildActiveList();
        return true;
    };
    Game.prototype.hasSecondMastery = function () {
        return (this.researches.overNineThousand.done &&
            this.currentWorld.level.gt(15) &&
            this.currentWorld.level.gt(this.maxLevel.times(0.5)));
    };
    //#region Unit Utils
    Game.prototype.generateWorlds = function (userMin, userMax) {
        if (userMin === void 0) { userMin = null; }
        if (userMax === void 0) { userMax = null; }
        this.reloadMaxLevel();
        if (userMin == null)
            userMin = new Decimal(1);
        if (userMax == null)
            userMax = this.realMaxLevel;
        userMax = Decimal.min(userMax, this.realMaxLevel);
        this.nextWorlds = [
            _world__WEBPACK_IMPORTED_MODULE_29__["World"].getRandomWorld(userMin, userMax, this),
            _world__WEBPACK_IMPORTED_MODULE_29__["World"].getRandomWorld(userMin, userMax, this),
            _world__WEBPACK_IMPORTED_MODULE_29__["World"].getRandomWorld(userMin, userMax, this)
        ];
    };
    Game.prototype.genSciencePrice = function (price, growRate) {
        if (growRate === void 0) { growRate = 1; }
        return [new _price__WEBPACK_IMPORTED_MODULE_10__["Price"](this.materials.science, new Decimal(price), growRate)];
    };
    Game.prototype.genExperiencePrice = function (price, growRate) {
        if (growRate === void 0) { growRate = 1.3; }
        return [new _price__WEBPACK_IMPORTED_MODULE_10__["Price"](this.experience, new Decimal(price), growRate)];
    };
    Game.prototype.addTeamAction = function (unit, price) {
        unit.generateTeamAction(this.genTeamPrice(price));
    };
    Game.prototype.addTwinAction = function (unit, price) {
        unit.generateTwinAction(this.genTwinPrice(price));
    };
    Game.prototype.reloadMaxLevel = function () {
        this.realMaxLevel = this.maxLevel.times(this.allPrestige.worldPrestige.maxLevel.quantity
            .times(0.1)
            .times(1 + 0.5 * this.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_8__["MasteryTypes"].WORLD_LEVEL_PRESTIGE))
            .plus(1));
        // const masteryMulti = this.allMateries.getSum(MasteryTypes.WORLD_LEVEL);
        // this.realMaxLevel = this.realMaxLevel.times(1 + masteryMulti / 2).floor();
    };
    //#endregion
    //#endregion
    //#region Save and Load
    Game.prototype.getSave = function () {
        return {
            u: this.units.map(function (u) { return u.getSave(); }),
            t: this.tabs.getSave(),
            r: this.researches.getSave(),
            w: this.currentWorld.getSave(),
            p: this.allPrestige.getSave(),
            m: this.maxLevel,
            a: this.isPaused,
            abm: this.autoBuyManager.getSave(),
            s: this.stats.getSave(),
            mas: this.allMateries.getSave(),
            wor: this.nextWorlds.map(function (w) { return w.getSave(); })
        };
    };
    Game.prototype.restore = function (data) {
        var _this = this;
        if ("u" in data) {
            var _loop_1 = function (s) {
                this_1.units.find(function (u) { return u.id === s.i; }).restore(s);
            };
            var this_1 = this;
            for (var _i = 0, _a = data.u; _i < _a.length; _i++) {
                var s = _a[_i];
                _loop_1(s);
            }
            if ("t" in data)
                this.tabs.restore(data.t);
            if ("mas" in data)
                this.allMateries.restore(data.mas);
            if ("r" in data)
                this.researches.restore(data.r, this.materials.science);
            if ("w" in data)
                this.currentWorld.restore(data.w, this);
            if ("p" in data)
                this.allPrestige.restore(data.p);
            if ("m" in data)
                this.maxLevel = new Decimal(data.m);
            if ("a" in data)
                this.isPaused = data.a;
            if ("abm" in data)
                this.autoBuyManager.restore(data.abm);
            if ("s" in data)
                this.stats.restore(data.s);
            if ("wor" in data) {
                this.nextWorlds = data.wor.map(function (w) {
                    var newW = new _world__WEBPACK_IMPORTED_MODULE_29__["World"]("");
                    newW.restore(w, _this);
                    return newW;
                });
            }
            //
            //  Debug
            //
            // this.materials.list.forEach(m => (m.quantity = new Decimal(1e100)));
            // this.materials.food.quantity = new Decimal(100);
            // this.ants.nest.quantity = new Decimal(70);
            // this.experience.quantity = new Decimal(1e10);
            // this.allMateries.masteryPoint = 100;
            // this.researches.spawn.unlocked = true;
            // this.advWorkers.betterWorkers.unlocked = true;
            // this.advWorkers.efficientWorkers.unlocked = true;
            //
            //
            //
            this.unitGroups.forEach(function (g) { return g.check(); });
            this.buildLists();
            this.unitGroups.forEach(function (g) { return (g.selected = g.list.filter(function (u) { return u.unlocked; })); });
            this.applyWorldBonus();
            this.reloadProduction();
            this.setMaxTimeBank();
            return true;
        }
        else {
            return false;
        }
    };
    //#region Price Utility
    Game.prototype.genTeamPrice = function (price) {
        return [new _price__WEBPACK_IMPORTED_MODULE_10__["Price"](this.materials.science, new Decimal(price), 4)];
    };
    Game.prototype.genTwinPrice = function (price) {
        return [new _price__WEBPACK_IMPORTED_MODULE_10__["Price"](this.materials.science, new Decimal(price), 10)];
    };
    return Game;
}());



/***/ }),

/***/ "./src/app/model/helper.ts":
/*!*********************************!*\
  !*** ./src/app/model/helper.ts ***!
  \*********************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _masteries_mastery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masteries/mastery */ "./src/app/model/masteries/mastery.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./production-bonus */ "./src/app/model/production-bonus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Helper = /** @class */ (function (_super) {
    __extends(Helper, _super);
    function Helper(id, ratio, game) {
        var _this = _super.call(this, id) || this;
        _this.game = game;
        _this.helpBonus = new _production_bonus__WEBPACK_IMPORTED_MODULE_2__["ProductionBonus"](_this, new Decimal(ratio));
        _this.helpBonus.getMultiplier = function () {
            if (_this.efficiency <= 0)
                return new Decimal(0);
            return new Decimal(((1 + _this.game.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_1__["MasteryTypes"].BETTER_HELPERS)) *
                _this.efficiency) /
                100);
        };
        return _this;
    }
    Helper.prototype.reloadTeamBonus = function (teamBonus, multiBonus) {
        if (teamBonus === void 0) { teamBonus = false; }
        return new Decimal(1);
    };
    return Helper;
}(_full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]));



/***/ }),

/***/ "./src/app/model/malus.ts":
/*!********************************!*\
  !*** ./src/app/model/malus.ts ***!
  \********************************/
/*! exports provided: Malus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Malus", function() { return Malus; });
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-unit */ "./src/app/model/full-unit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Malus = /** @class */ (function (_super) {
    __extends(Malus, _super);
    function Malus(id) {
        var _this = _super.call(this, id) || this;
        _this.isKilled = false;
        _this.priceMultiplier = new Decimal(1);
        _this.first = false;
        _this.hasAutoBuyer = false;
        return _this;
    }
    Malus.prototype.kill = function () {
        if (this.isKilled)
            return false;
        this.isKilled = true;
        this.efficiency = 0;
        this.quantity = new Decimal(0);
        //  Recursive kill malus
        this.producedBy.forEach(function (p) {
            if (p.producer instanceof Malus)
                p.producer.kill();
        });
        return true;
    };
    Malus.prototype.reloadPriceMulti = function () {
        if (!this.first)
            return;
        this.priceMultiplier = (this.quantity.gte(1) && this.isActive()
            ? new Decimal(this.quantity.log(20))
            : (this.priceMultiplier = new Decimal(1))).max(1);
    };
    Malus.prototype.isActive = function () {
        return !this.isKilled && _super.prototype.isActive.call(this);
    };
    Malus.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.isKilled = false;
        this.reloadPriceMulti();
    };
    //#region Save and Restore
    Malus.prototype.getSave = function () {
        var save = _super.prototype.getSave.call(this);
        if (this.isKilled)
            save.ik = this.isKilled;
        return save;
    };
    Malus.prototype.restore = function (data) {
        if (_super.prototype.restore.call(this, data)) {
            this.isKilled = !!data.ik;
            return true;
        }
        else {
            return false;
        }
    };
    return Malus;
}(_full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]));



/***/ }),

/***/ "./src/app/model/masteries/all-masteries.ts":
/*!**************************************************!*\
  !*** ./src/app/model/masteries/all-masteries.ts ***!
  \**************************************************/
/*! exports provided: AllMasteries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMasteries", function() { return AllMasteries; });
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../baseUnit */ "./src/app/model/baseUnit.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _mastery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mastery */ "./src/app/model/masteries/mastery.ts");




var AllMasteries = /** @class */ (function () {
    function AllMasteries(game) {
        this.masteryPoint = 0;
        this.totalEarned = 0;
        this.totals = new Array();
        this.scienceBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_1__["BaseUnit"]("scieMast");
        game.materials.science.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_2__["ProductionBonus"](this.scienceBonus, new Decimal(0.1)));
        this.foodBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_1__["BaseUnit"]("fooMast");
        game.materials.food.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_2__["ProductionBonus"](this.foodBonus, new Decimal(0.1)));
        this.soilBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_1__["BaseUnit"]("wooMast");
        game.materials.soil.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_2__["ProductionBonus"](this.soilBonus, new Decimal(0.1)));
        this.crystalBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_1__["BaseUnit"]("cryMast");
        game.materials.crystal.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_2__["ProductionBonus"](this.crystalBonus, new Decimal(0.1)));
        this.harvestBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_1__["BaseUnit"]("harvMast");
        var harvBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_2__["ProductionBonus"](this.harvestBonus, new Decimal(0.2));
        game.gatherers.list.forEach(function (u) {
            u.productionsEfficiency.push(harvBon);
        });
        this.materialBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_1__["BaseUnit"]("matMast");
        var matBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_2__["ProductionBonus"](this.materialBonus, new Decimal(0.1));
        game.materials.list.forEach(function (u) {
            u.productionsBonus.push(matBon);
        });
        this.armyBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_1__["BaseUnit"]("armyMast");
        var armyBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_2__["ProductionBonus"](this.armyBonus, new Decimal(2));
        game.killers.list.forEach(function (u) {
            u.productionsAll.push(armyBon);
        });
        var length = Object.keys(_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"]).length / 2;
        this.totals = new Array(length).fill(0);
        var av1 = new _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"](0, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MORE_FOLLOWERS);
        var av2 = new _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"](5, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MORE_IDLE_8H);
        var av3 = new _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"](10, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].HARVEST_BONUS);
        var av4 = new _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"](15, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SCIENCE_BONUS);
        av1.available = true;
        av1.color = _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].availableColor;
        av2.available = true;
        av2.color = _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].availableColor;
        av3.available = true;
        av3.color = _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].availableColor;
        av4.available = true;
        av4.color = _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].availableColor;
        this.starting = [av1, av2, av3, av4];
        var matGain = new _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"](20, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MATERIAL_GAIN);
        this.visMasteries = new vis__WEBPACK_IMPORTED_MODULE_0__["DataSet"]([av1, av2, av3, av4, matGain]);
        this.visEdge = new vis__WEBPACK_IMPORTED_MODULE_0__["DataSet"]([]);
        this.addMasteryLine(0, 1, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MORE_FOLLOWERS, 4, 5);
        this.addMasteryLine(5, 6, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MORE_IDLE_8H, 4, 10);
        this.addMasteryLine(10, 11, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].HARVEST_BONUS, 4, 15);
        this.addMasteryLine(15, 16, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SCIENCE_BONUS, 4, 0);
        this.addMasteryLine(0, 21, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MORE_FOLLOWERS, 3, 20);
        this.addMasteryLine(5, 25, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MORE_IDLE_8H, 3, 20);
        this.addMasteryLine(10, 30, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].HARVEST_BONUS, 3, 20);
        this.addMasteryLine(15, 35, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SCIENCE_BONUS, 3, 20);
        //  Followers
        this.addMasteryLine(0, 40, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MORE_FOLLOWERS_GA, 5);
        this.addMasteryLine(0, 45, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MORE_FOLLOWERS_WO, 5);
        this.addMasteryLine(44, 101, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].FREE_WARP_RES, 1, 49);
        //  Time
        this.addMasteryLine(5, 50, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].TIME_GEN, 5);
        this.addMasteryLine(5, 55, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].TIME_BANK, 5);
        this.addMasteryLine(54, 102, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].TIME_GEN_AND_BANK, 1, 59);
        //  Team
        this.addMasteryLine(10, 60, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].TEAM_START, 5);
        this.addMasteryLine(10, 65, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].TEAM_PRESTIGE, 5);
        this.addMasteryLine(64, 100, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].START_TWIN, 1, 69);
        //  Science && Technology
        this.addMasteryLine(15, 70, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SCIENTIFIC_METHOD, 5);
        this.addMasteryLine(15, 75, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].TECHNOLOGY_PRESTIGE, 5);
        this.addMasteryLine(74, 103, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].START_RESEARCHS, 1, 79);
        //  Single material bonus
        this.addMasteryLine(matGain.id, 80, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SCIENCE_BONUS, 3);
        this.addMasteryLine(matGain.id, 85, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].FOOD_BONUS, 3);
        this.addMasteryLine(matGain.id, 90, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SOIL_BONUS, 3);
        this.addMasteryLine(matGain.id, 95, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].CRYSTAL_BONUS, 3);
        //  World Bonus
        this.addMasteryLine(17, 105, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].BETTER_WORLD, 4);
        this.addMasteryLine(108, 110, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].DOUBLE_PREFIX, 1);
        this.addMasteryLine(7, 111, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].BETTER_WORLD_EXPERIENCE, 4);
        this.addMasteryLine(114, 116, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].DOUBLE_SUFFIX, 1);
        this.addMasteryLine(12, 117, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].WORLD_LEVEL_PRESTIGE, 4);
        this.addMasteryLine(120, 121, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].WORLD_LEVEL, 1);
        //  Helpers
        this.addMasteryLine(2, 122, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].BETTER_HELPERS, 4);
        this.addMasteryLine(125, 126, _mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].DOUBLE_ARMY, 1);
    }
    AllMasteries.prototype.getSum = function (type) {
        return this.totals[type];
    };
    AllMasteries.prototype.buy = function (id, loading) {
        var _this = this;
        if (loading === void 0) { loading = false; }
        if (this.masteryPoint < 1 && !loading) {
            return false;
        }
        var node = this.visMasteries.get(id);
        if ((node && node.available && !node.owned) || loading) {
            if (!loading) {
                this.masteryPoint--;
            }
            this.totals[node.type]++;
            var avEdges = this.visEdge.get({
                filter: function (item) {
                    return item.from === id || item.to === id;
                }
            });
            avEdges.forEach(function (avEdge) {
                var nodes = _this.visMasteries.get({
                    filter: function (item) {
                        return ((item.id === avEdge.from || item.id === avEdge.to) &&
                            !item.available &&
                            !item.owned);
                    }
                });
                if (nodes.length > 0) {
                    nodes.forEach(function (n) {
                        {
                            n.available = true;
                            n.color = _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].availableColor;
                        }
                    });
                    _this.visMasteries.update(nodes);
                }
            });
            var update = {
                id: id,
                owned: true,
                available: true,
                color: _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].ownedColor
            };
            this.visMasteries.update(update);
            if (!loading)
                this.reloadBonus();
            return true;
        }
        else {
            return false;
        }
    };
    AllMasteries.prototype.reloadBonus = function () {
        this.scienceBonus.quantity = new Decimal(this.getSum(_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SCIENCE_BONUS));
        this.foodBonus.quantity = new Decimal(this.getSum(_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].FOOD_BONUS));
        this.soilBonus.quantity = new Decimal(this.getSum(_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SOIL_BONUS));
        this.crystalBonus.quantity = new Decimal(this.getSum(_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].CRYSTAL_BONUS));
        this.harvestBonus.quantity = new Decimal(this.getSum(_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].HARVEST_BONUS));
        this.materialBonus.quantity = new Decimal(this.getSum(_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].MATERIAL_GAIN));
        this.armyBonus.quantity = new Decimal(this.getSum(_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].DOUBLE_ARMY));
    };
    AllMasteries.prototype.reset = function () {
        this.masteryPoint = this.totalEarned;
        for (var i = 0; i < this.totals.length; i++) {
            this.totals[i] = 0;
        }
        this.reloadBonus();
        var update = this.visMasteries.get();
        update.forEach(function (m) {
            m.owned = false;
            m.available = false;
            m.color = _mastery__WEBPACK_IMPORTED_MODULE_3__["notable"].find(function (n) { return n === m.type; })
                ? _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].notableColor
                : _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].normalColor;
        });
        this.visMasteries.update(update);
        this.starting.forEach(function (m) {
            m.available = true;
            m.color = _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"].availableColor;
        });
        this.visMasteries.update(this.starting);
    };
    //#region Save and Load
    AllMasteries.prototype.getSave = function () {
        return {
            own: this.visMasteries
                .get({
                filter: function (item) {
                    return item.owned;
                }
            })
                .map(function (o) { return o.id; }),
            mp: this.masteryPoint,
            to: this.totalEarned
        };
    };
    AllMasteries.prototype.restore = function (data) {
        var _this = this;
        if ("own" in data) {
            data.own.forEach(function (ow) { return _this.buy(ow, true); });
        }
        if ("mp" in data) {
            this.masteryPoint = data.mp;
        }
        if ("to" in data) {
            this.totalEarned = data.to;
        }
        this.reloadBonus();
    };
    //#endregion
    AllMasteries.prototype.addMasteryLine = function (fromN, startId, type, quantity, toN) {
        if (quantity === void 0) { quantity = 1; }
        if (toN === void 0) { toN = Number.NEGATIVE_INFINITY; }
        for (var i = 0; i < quantity; i++) {
            this.visMasteries.add(new _mastery__WEBPACK_IMPORTED_MODULE_3__["Mastery"](startId + i, type));
        }
        this.visEdge.add({ from: fromN, to: startId });
        for (var i = 0; i < quantity - 1; i++) {
            this.visEdge.add({ from: startId + i, to: startId + i + 1 });
        }
        if (toN >= 0) {
            this.visEdge.add({ from: startId + quantity - 1, to: toN });
        }
    };
    return AllMasteries;
}());



/***/ }),

/***/ "./src/app/model/masteries/mastery.ts":
/*!********************************************!*\
  !*** ./src/app/model/masteries/mastery.ts ***!
  \********************************************/
/*! exports provided: MasteryTypes, notable, Mastery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasteryTypes", function() { return MasteryTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notable", function() { return notable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mastery", function() { return Mastery; });
/* harmony import */ var _positions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positions.json */ "./src/app/model/masteries/positions.json");
var _positions_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/Object.assign({}, _positions_json__WEBPACK_IMPORTED_MODULE_0__, {"default": _positions_json__WEBPACK_IMPORTED_MODULE_0__});

var MasteryTypes;
(function (MasteryTypes) {
    MasteryTypes[MasteryTypes["MORE_FOLLOWERS"] = 0] = "MORE_FOLLOWERS";
    MasteryTypes[MasteryTypes["MORE_IDLE_8H"] = 1] = "MORE_IDLE_8H";
    MasteryTypes[MasteryTypes["FOOD_BONUS"] = 2] = "FOOD_BONUS";
    MasteryTypes[MasteryTypes["SCIENCE_BONUS"] = 3] = "SCIENCE_BONUS";
    MasteryTypes[MasteryTypes["CRYSTAL_BONUS"] = 4] = "CRYSTAL_BONUS";
    MasteryTypes[MasteryTypes["SOIL_BONUS"] = 5] = "SOIL_BONUS";
    MasteryTypes[MasteryTypes["HARVEST_BONUS"] = 6] = "HARVEST_BONUS";
    MasteryTypes[MasteryTypes["MATERIAL_GAIN"] = 7] = "MATERIAL_GAIN";
    MasteryTypes[MasteryTypes["MORE_FOLLOWERS_GA"] = 8] = "MORE_FOLLOWERS_GA";
    MasteryTypes[MasteryTypes["MORE_FOLLOWERS_WO"] = 9] = "MORE_FOLLOWERS_WO";
    MasteryTypes[MasteryTypes["TIME_GEN"] = 10] = "TIME_GEN";
    MasteryTypes[MasteryTypes["TIME_BANK"] = 11] = "TIME_BANK";
    MasteryTypes[MasteryTypes["TEAM_START"] = 12] = "TEAM_START";
    MasteryTypes[MasteryTypes["TEAM_PRESTIGE"] = 13] = "TEAM_PRESTIGE";
    MasteryTypes[MasteryTypes["SCIENTIFIC_METHOD"] = 14] = "SCIENTIFIC_METHOD";
    MasteryTypes[MasteryTypes["TECHNOLOGY_PRESTIGE"] = 15] = "TECHNOLOGY_PRESTIGE";
    MasteryTypes[MasteryTypes["START_TWIN"] = 16] = "START_TWIN";
    MasteryTypes[MasteryTypes["FREE_WARP_RES"] = 17] = "FREE_WARP_RES";
    MasteryTypes[MasteryTypes["TIME_GEN_AND_BANK"] = 18] = "TIME_GEN_AND_BANK";
    MasteryTypes[MasteryTypes["START_RESEARCHS"] = 19] = "START_RESEARCHS";
    MasteryTypes[MasteryTypes["DOUBLE_PREFIX"] = 20] = "DOUBLE_PREFIX";
    MasteryTypes[MasteryTypes["DOUBLE_SUFFIX"] = 21] = "DOUBLE_SUFFIX";
    MasteryTypes[MasteryTypes["WORLD_LEVEL"] = 22] = "WORLD_LEVEL";
    MasteryTypes[MasteryTypes["WORLD_LEVEL_PRESTIGE"] = 23] = "WORLD_LEVEL_PRESTIGE";
    MasteryTypes[MasteryTypes["BETTER_WORLD"] = 24] = "BETTER_WORLD";
    MasteryTypes[MasteryTypes["BETTER_WORLD_EXPERIENCE"] = 25] = "BETTER_WORLD_EXPERIENCE";
    MasteryTypes[MasteryTypes["BETTER_HELPERS"] = 26] = "BETTER_HELPERS";
    MasteryTypes[MasteryTypes["DOUBLE_ARMY"] = 27] = "DOUBLE_ARMY";
})(MasteryTypes || (MasteryTypes = {}));
var notable = [
    MasteryTypes.MATERIAL_GAIN,
    MasteryTypes.START_TWIN,
    MasteryTypes.FREE_WARP_RES,
    MasteryTypes.TIME_GEN_AND_BANK,
    MasteryTypes.START_RESEARCHS,
    MasteryTypes.DOUBLE_PREFIX,
    MasteryTypes.DOUBLE_SUFFIX,
    MasteryTypes.WORLD_LEVEL,
    MasteryTypes.DOUBLE_ARMY
];
var Mastery = /** @class */ (function () {
    function Mastery(id, type, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = this;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.label = "";
        this.color = "blue";
        this.available = false;
        this.owned = false;
        this.label = Mastery.getDescription(type);
        this.color = notable.find(function (n) { return n === _this.type; })
            ? Mastery.notableColor
            : Mastery.normalColor;
        if (this.id in _positions_json__WEBPACK_IMPORTED_MODULE_0___namespace) {
            this.x = _positions_json__WEBPACK_IMPORTED_MODULE_0___namespace[this.id].x;
            this.y = _positions_json__WEBPACK_IMPORTED_MODULE_0___namespace[this.id].y;
        }
    }
    Mastery.getDescription = function (type, num) {
        if (num === void 0) { num = 1; }
        var ret = "";
        switch (type) {
            case MasteryTypes.MORE_FOLLOWERS: {
                ret = "+" + 100 * num + "%\n更多的追随者";
                break;
            }
            case MasteryTypes.MORE_IDLE_8H: {
                ret = "+" + 30 * num + "% 空闲时间\n在8小时后";
                break;
            }
            case MasteryTypes.SCIENCE_BONUS: {
                ret = "+" + 10 * num + "%\n科学";
                break;
            }
            case MasteryTypes.FOOD_BONUS: {
                ret = "+" + 10 * num + "%\n食物";
                break;
            }
            case MasteryTypes.SOIL_BONUS: {
                ret = "+" + 10 * num + "%\n土壤";
                break;
            }
            case MasteryTypes.CRYSTAL_BONUS: {
                ret = "+" + 10 * num + "%\n水晶";
                break;
            }
            case MasteryTypes.HARVEST_BONUS: {
                ret = "+" + 20 * num + "% 资源\n来自采集者";
                break;
            }
            case MasteryTypes.MATERIAL_GAIN: {
                ret = "+" + 10 * num + "%\n材料获得";
                break;
            }
            case MasteryTypes.MORE_FOLLOWERS_GA: {
                ret = "+" + 300 * num + "% 的\n采集者追随者";
                break;
            }
            case MasteryTypes.MORE_FOLLOWERS_WO: {
                ret = "+" + 300 * num + "% 的\n工人追随者";
                break;
            }
            case MasteryTypes.TIME_GEN: {
                ret = "+" + 30 * num + "%\n时间 /秒";
                break;
            }
            case MasteryTypes.TIME_BANK: {
                ret = "+" + 50 * num + "%\n 时间银行";
                break;
            }
            case MasteryTypes.TIME_GEN_AND_BANK: {
                ret = "+" + 200 * num + "%\n 时间 /秒 和时间银行";
                break;
            }
            case MasteryTypes.TEAM_START: {
                ret = "开始新世界时默认就有\n" + 1 * num + " 团队升级";
                break;
            }
            case MasteryTypes.TEAM_PRESTIGE: {
                ret = "团队声望升级\n" + 100 * num + "% 更高效率";
                break;
            }
            case MasteryTypes.SCIENTIFIC_METHOD: {
                ret = "科学方法研究\n" + 100 * num + "% 更高效率";
                break;
            }
            case MasteryTypes.TECHNOLOGY_PRESTIGE: {
                ret = "技术经验升级\n" + 100 * num + "% 更高效率";
                break;
            }
            case MasteryTypes.START_TWIN: {
                ret = "开始新世界时默认就有\n" + 1 * num + " 双胞胎升级";
                break;
            }
            case MasteryTypes.FREE_WARP_RES: {
                ret = "开始新世界时默认就有 \n免费扭曲 (1小时 2小时 3小时)";
                break;
            }
            case MasteryTypes.START_RESEARCHS: {
                ret = "开始新世界时默认就有\n4 科学方法和收获";
                break;
            }
            case MasteryTypes.DOUBLE_PREFIX: {
                ret = "30% 几率出现\n双重前缀";
                break;
            }
            case MasteryTypes.DOUBLE_SUFFIX: {
                ret = "30% 几率出现\n双重后缀";
                break;
            }
            case MasteryTypes.WORLD_LEVEL: {
                ret = "减少世界旅行需求";
                break;
            }
            case MasteryTypes.BETTER_WORLD: {
                ret = "+" + 20 * num + "%\n世界加成";
                break;
            }
            case MasteryTypes.BETTER_WORLD_EXPERIENCE: {
                ret = "更好的世界声望升级\n50% 更高效率";
                break;
            }
            case MasteryTypes.WORLD_LEVEL_PRESTIGE: {
                ret = "最高等级声望升级\n50% 更高效率";
                break;
            }
            case MasteryTypes.BETTER_HELPERS: {
                ret = "+100% 加成\n来自助手";
                break;
            }
            case MasteryTypes.DOUBLE_ARMY: {
                ret = "+200%\n军队杀敌加成";
                break;
            }
        }
        return ret;
    };
    Mastery.normalColor = "#4286f4dd";
    Mastery.availableColor = "#008000dd";
    Mastery.ownedColor = "#ff0000dd";
    Mastery.notableColor = "#ffa500dd";
    return Mastery;
}());



/***/ }),

/***/ "./src/app/model/masteries/positions.json":
/*!************************************************!*\
  !*** ./src/app/model/masteries/positions.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 30, 31, 32, 35, 36, 37, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 85, 86, 87, 90, 91, 92, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 110, 111, 112, 113, 114, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, default */
/***/ (function(module) {

module.exports = {"0":{"x":-227,"y":942},"1":{"x":84,"y":906},"2":{"x":376,"y":860},"3":{"x":585,"y":669},"4":{"x":772,"y":462},"5":{"x":957,"y":219},"6":{"x":953,"y":-99},"7":{"x":924,"y":-395},"8":{"x":722,"y":-593},"9":{"x":498,"y":-766},"10":{"x":235,"y":-931},"11":{"x":-84,"y":-909},"12":{"x":-383,"y":-872},"13":{"x":-583,"y":-671},"14":{"x":-761,"y":-453},"15":{"x":-936,"y":-199},"16":{"x":-930,"y":121},"17":{"x":-904,"y":418},"18":{"x":-706,"y":614},"19":{"x":-487,"y":784},"20":{"x":1,"y":0},"21":{"x":-179,"y":713},"22":{"x":-126,"y":498},"23":{"x":-67,"y":272},"25":{"x":731,"y":155},"26":{"x":512,"y":109},"27":{"x":279,"y":63},"30":{"x":183,"y":-708},"31":{"x":130,"y":-495},"32":{"x":71,"y":-271},"35":{"x":-713,"y":-145},"36":{"x":-497,"y":-107},"37":{"x":-271,"y":-62},"40":{"x":-410,"y":1125},"41":{"x":-545,"y":1310},"42":{"x":-626,"y":1508},"43":{"x":-630,"y":1713},"44":{"x":-538,"y":1891},"45":{"x":-132,"y":1175},"46":{"x":-62,"y":1390},"47":{"x":-25,"y":1600},"48":{"x":-52,"y":1802},"49":{"x":-175,"y":1954},"50":{"x":1211,"y":175},"51":{"x":1441,"y":172},"52":{"x":1649,"y":220},"53":{"x":1819,"y":335},"54":{"x":1911,"y":512},"55":{"x":1094,"y":435},"56":{"x":1225,"y":621},"57":{"x":1373,"y":773},"58":{"x":1554,"y":864},"59":{"x":1750,"y":845},"60":{"x":148,"y":-1166},"61":{"x":87,"y":-1383},"62":{"x":66,"y":-1593},"63":{"x":115,"y":-1788},"64":{"x":258,"y":-1924},"65":{"x":428,"y":-1100},"66":{"x":579,"y":-1270},"67":{"x":679,"y":-1456},"68":{"x":700,"y":-1658},"69":{"x":619,"y":-1840},"70":{"x":-1182,"y":-137},"71":{"x":-1408,"y":-114},"72":{"x":-1617,"y":-143},"73":{"x":-1794,"y":-242},"74":{"x":-1896,"y":-413},"75":{"x":-1080,"y":-405},"76":{"x":-1219,"y":-582},"77":{"x":-1375,"y":-721},"78":{"x":-1563,"y":-794},"79":{"x":-1756,"y":-756},"80":{"x":121,"y":193},"81":{"x":224,"y":357},"82":{"x":309,"y":504},"85":{"x":-199,"y":122},"86":{"x":-369,"y":225},"87":{"x":-517,"y":315},"90":{"x":203,"y":-121},"91":{"x":375,"y":-222},"92":{"x":527,"y":-306},"95":{"x":-117,"y":-196},"96":{"x":-215,"y":-364},"97":{"x":-297,"y":-514},"100":{"x":452,"y":-1943},"101":{"x":-367,"y":1987},"102":{"x":1888,"y":708},"103":{"x":-1884,"y":-609},"105":{"x":-1094,"y":548},"106":{"x":-1268,"y":671},"107":{"x":-1435,"y":785},"108":{"x":-1598,"y":889},"110":{"x":-1746,"y":982},"111":{"x":1117,"y":-519},"112":{"x":1293,"y":-639},"113":{"x":1458,"y":-755},"114":{"x":1614,"y":-869},"116":{"x":1754,"y":-975},"117":{"x":-512,"y":-1060},"118":{"x":-638,"y":-1231},"119":{"x":-758,"y":-1393},"120":{"x":-874,"y":-1547},"121":{"x":-981,"y":-1687},"122":{"x":488,"y":1049},"123":{"x":589,"y":1229},"124":{"x":689,"y":1399},"125":{"x":800,"y":1554},"126":{"x":919,"y":1682}};

/***/ }),

/***/ "./src/app/model/prestige/all-prestige.ts":
/*!************************************************!*\
  !*** ./src/app/model/prestige/all-prestige.ts ***!
  \************************************************/
/*! exports provided: AllPrestige */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPrestige", function() { return AllPrestige; });
/* harmony import */ var _auto_buy_unlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-buy-unlock */ "./src/app/model/prestige/auto-buy-unlock.ts");
/* harmony import */ var _followers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followers */ "./src/app/model/prestige/followers.ts");
/* harmony import */ var _followers2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./followers2 */ "./src/app/model/prestige/followers2.ts");
/* harmony import */ var _swarm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swarm */ "./src/app/model/prestige/swarm.ts");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team */ "./src/app/model/prestige/team.ts");
/* harmony import */ var _technology__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./technology */ "./src/app/model/prestige/technology.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time */ "./src/app/model/prestige/time.ts");
/* harmony import */ var _world_prestige__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./world-prestige */ "./src/app/model/prestige/world-prestige.ts");








var AllPrestige = /** @class */ (function () {
    function AllPrestige() {
        this.prestigeGroups = new Array();
        this.prestigeList = new Array();
        this.followers = new _followers__WEBPACK_IMPORTED_MODULE_1__["Followers"]();
        this.followers2 = new _followers2__WEBPACK_IMPORTED_MODULE_2__["Followers2"]();
        this.time = new _time__WEBPACK_IMPORTED_MODULE_6__["Time"]();
        this.autoBuyUnlock = new _auto_buy_unlock__WEBPACK_IMPORTED_MODULE_0__["AutoBuyUnlock"]();
        this.technology = new _technology__WEBPACK_IMPORTED_MODULE_5__["Technology"]();
        this.team = new _team__WEBPACK_IMPORTED_MODULE_4__["Team"]();
        this.worldPrestige = new _world_prestige__WEBPACK_IMPORTED_MODULE_7__["WorldPrestige"]();
        this.swarm = new _swarm__WEBPACK_IMPORTED_MODULE_3__["Swarm"]();
        this.prestigeGroups.push(this.followers, this.followers2, this.swarm, this.technology, this.team, this.time, this.worldPrestige, this.autoBuyUnlock);
    }
    AllPrestige.prototype.declareStuff = function (game) {
        var _this = this;
        this.prestigeGroups.forEach(function (g) {
            g.declareStuff(game);
            g.list.forEach(function (p) { return _this.prestigeList.push(p); });
        });
    };
    //#region Save and Load
    AllPrestige.prototype.getSave = function () {
        return {
            prest: this.prestigeList.map(function (a) { return a.getSave(); })
        };
    };
    AllPrestige.prototype.restore = function (data) {
        if (!("prest" in data))
            return false;
        var _loop_1 = function (p) {
            var prest = this_1.prestigeList.find(function (u) { return u.id === p.i; });
            if (prest) {
                prest.restore(p);
            }
            else {
                console.log(p);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = data.prest; _i < _a.length; _i++) {
            var p = _a[_i];
            _loop_1(p);
        }
    };
    return AllPrestige;
}());



/***/ }),

/***/ "./src/app/model/prestige/auto-buy-unlock.ts":
/*!***************************************************!*\
  !*** ./src/app/model/prestige/auto-buy-unlock.ts ***!
  \***************************************************/
/*! exports provided: AutoBuyUnlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBuyUnlock", function() { return AutoBuyUnlock; });
/* harmony import */ var _prestige__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestige */ "./src/app/model/prestige/prestige.ts");
/* harmony import */ var _prestige_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestige-group */ "./src/app/model/prestige/prestige-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var AutoBuyUnlock = /** @class */ (function (_super) {
    __extends(AutoBuyUnlock, _super);
    function AutoBuyUnlock() {
        return _super.call(this, "autoB", "自动购买者") || this;
    }
    AutoBuyUnlock.prototype.declareStuff = function (game) {
        this.autoBuyQuantity = new _prestige__WEBPACK_IMPORTED_MODULE_0__["Prestige"]("H", game.genExperiencePrice(50));
        this.autoBuyTeam = new _prestige__WEBPACK_IMPORTED_MODULE_0__["Prestige"]("t", game.genExperiencePrice(100));
        this.autoBuyTwin = new _prestige__WEBPACK_IMPORTED_MODULE_0__["Prestige"]("T", game.genExperiencePrice(200));
        this.autoBuyMin = new _prestige__WEBPACK_IMPORTED_MODULE_0__["Prestige"]("M", game.genExperiencePrice(300));
        this.autoBuyResearch = new _prestige__WEBPACK_IMPORTED_MODULE_0__["Prestige"]("R", game.genExperiencePrice(400));
        this.list.push(this.autoBuyQuantity, this.autoBuyTeam, this.autoBuyTwin, this.autoBuyMin, this.autoBuyResearch);
        this.list.forEach(function (a) {
            a.limit = new Decimal(1);
            a.isLimited = true;
            a.toUnlock = [game.tabs.autoBuy];
        });
    };
    return AutoBuyUnlock;
}(_prestige_group__WEBPACK_IMPORTED_MODULE_1__["PrestigeGroup"]));



/***/ }),

/***/ "./src/app/model/prestige/followers.ts":
/*!*********************************************!*\
  !*** ./src/app/model/prestige/followers.ts ***!
  \*********************************************/
/*! exports provided: Followers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Followers", function() { return Followers; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _prestige__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestige */ "./src/app/model/prestige/prestige.ts");
/* harmony import */ var _prestige_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prestige-group */ "./src/app/model/prestige/prestige-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Followers = /** @class */ (function (_super) {
    __extends(Followers, _super);
    function Followers() {
        return _super.call(this, "foll", "追随者") || this;
    }
    Followers.prototype.declareStuff = function (game) {
        var _this = this;
        game.gatherers.list.filter(function (u) { return u.bugType === _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].ANT; }).forEach(function (ga) {
            var follower = new _prestige__WEBPACK_IMPORTED_MODULE_1__["Prestige"](ga.id, game.genExperiencePrice(5));
            ga.follower = follower;
            _this.list.push(follower);
        });
    };
    return Followers;
}(_prestige_group__WEBPACK_IMPORTED_MODULE_2__["PrestigeGroup"]));



/***/ }),

/***/ "./src/app/model/prestige/followers2.ts":
/*!**********************************************!*\
  !*** ./src/app/model/prestige/followers2.ts ***!
  \**********************************************/
/*! exports provided: Followers2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Followers2", function() { return Followers2; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _prestige__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestige */ "./src/app/model/prestige/prestige.ts");
/* harmony import */ var _prestige_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prestige-group */ "./src/app/model/prestige/prestige-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Followers2 = /** @class */ (function (_super) {
    __extends(Followers2, _super);
    function Followers2() {
        return _super.call(this, "foll2", "工人追随者") || this;
    }
    Followers2.prototype.declareStuff = function (game) {
        var _this = this;
        game.advWorkers.list.filter(function (u) { return u.bugType === _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].ANT; }).forEach(function (ga) {
            var follower = new _prestige__WEBPACK_IMPORTED_MODULE_1__["Prestige"](ga.id, game.genExperiencePrice(10));
            ga.follower = follower;
            _this.list.push(follower);
        });
    };
    return Followers2;
}(_prestige_group__WEBPACK_IMPORTED_MODULE_2__["PrestigeGroup"]));



/***/ }),

/***/ "./src/app/model/prestige/prestige-group.ts":
/*!**************************************************!*\
  !*** ./src/app/model/prestige/prestige-group.ts ***!
  \**************************************************/
/*! exports provided: PrestigeGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestigeGroup", function() { return PrestigeGroup; });
var PrestigeGroup = /** @class */ (function () {
    function PrestigeGroup(id, name) {
        this.id = id;
        this.name = name;
        this.list = new Array();
    }
    PrestigeGroup.prototype.declareStuff = function (game) {
        //
    };
    return PrestigeGroup;
}());



/***/ }),

/***/ "./src/app/model/prestige/prestige.ts":
/*!********************************************!*\
  !*** ./src/app/model/prestige/prestige.ts ***!
  \********************************************/
/*! exports provided: Prestige */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prestige", function() { return Prestige; });
/* harmony import */ var _actions_buy_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/buy-action */ "./src/app/model/actions/buy-action.ts");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings */ "./src/app/model/strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Prestige = /** @class */ (function (_super) {
    __extends(Prestige, _super);
    function Prestige(id, price, name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, price, null, [], id) || this;
        _this.name = name;
        if (id in _strings__WEBPACK_IMPORTED_MODULE_1__["STRINGS"].prestige) {
            _this.name = _strings__WEBPACK_IMPORTED_MODULE_1__["STRINGS"].prestige[id][0];
            _this.description = _strings__WEBPACK_IMPORTED_MODULE_1__["STRINGS"].prestige[id][1];
        }
        return _this;
    }
    return Prestige;
}(_actions_buy_action__WEBPACK_IMPORTED_MODULE_0__["BuyAction"]));



/***/ }),

/***/ "./src/app/model/prestige/swarm.ts":
/*!*****************************************!*\
  !*** ./src/app/model/prestige/swarm.ts ***!
  \*****************************************/
/*! exports provided: Swarm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swarm", function() { return Swarm; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _prestige__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prestige */ "./src/app/model/prestige/prestige.ts");
/* harmony import */ var _prestige_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prestige-group */ "./src/app/model/prestige/prestige-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Swarm = /** @class */ (function (_super) {
    __extends(Swarm, _super);
    function Swarm() {
        return _super.call(this, "swarmPrest", "虫群") || this;
    }
    Swarm.prototype.declareStuff = function (game) {
        this.larvaBonus = new _prestige__WEBPACK_IMPORTED_MODULE_2__["Prestige"]("sl", game.genExperiencePrice(10));
        this.queenBonus = new _prestige__WEBPACK_IMPORTED_MODULE_2__["Prestige"]("sq", game.genExperiencePrice(10));
        this.list = [this.larvaBonus, this.queenBonus];
        var lb = new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.larvaBonus, new Decimal(0.1));
        game.units
            .filter(function (u) { return u.tags.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].LARVA); })
            .forEach(function (u) { return u.productionsBonus.push(lb); });
        var qb = new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.queenBonus, new Decimal(0.1));
        game.units
            .filter(function (u) { return u.tags.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].QUEEN); })
            .forEach(function (u) { return u.productionsBonus.push(qb); });
    };
    return Swarm;
}(_prestige_group__WEBPACK_IMPORTED_MODULE_3__["PrestigeGroup"]));



/***/ }),

/***/ "./src/app/model/prestige/team.ts":
/*!****************************************!*\
  !*** ./src/app/model/prestige/team.ts ***!
  \****************************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
/* harmony import */ var _prestige__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestige */ "./src/app/model/prestige/prestige.ts");
/* harmony import */ var _prestige_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestige-group */ "./src/app/model/prestige/prestige-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        return _super.call(this, "teamPrest", "团队合作") || this;
    }
    Team.prototype.declareStuff = function (game) {
        this.betterTeam = new _prestige__WEBPACK_IMPORTED_MODULE_0__["Prestige"]("E", game.genExperiencePrice(10));
        this.list = [this.betterTeam];
    };
    return Team;
}(_prestige_group__WEBPACK_IMPORTED_MODULE_1__["PrestigeGroup"]));



/***/ }),

/***/ "./src/app/model/prestige/technology.ts":
/*!**********************************************!*\
  !*** ./src/app/model/prestige/technology.ts ***!
  \**********************************************/
/*! exports provided: Technology */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Technology", function() { return Technology; });
/* harmony import */ var _masteries_mastery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../masteries/mastery */ "./src/app/model/masteries/mastery.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _prestige__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prestige */ "./src/app/model/prestige/prestige.ts");
/* harmony import */ var _prestige_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prestige-group */ "./src/app/model/prestige/prestige-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Technology = /** @class */ (function (_super) {
    __extends(Technology, _super);
    function Technology() {
        return _super.call(this, "tecno", "技术") || this;
    }
    Technology.prototype.declareStuff = function (game) {
        this.farming = new _prestige__WEBPACK_IMPORTED_MODULE_2__["Prestige"]("F", game.genExperiencePrice(10));
        this.carpentry = new _prestige__WEBPACK_IMPORTED_MODULE_2__["Prestige"]("C", game.genExperiencePrice(10));
        this.mining = new _prestige__WEBPACK_IMPORTED_MODULE_2__["Prestige"]("n", game.genExperiencePrice(10));
        this.studying = new _prestige__WEBPACK_IMPORTED_MODULE_2__["Prestige"]("s", game.genExperiencePrice(10));
        this.list = [this.farming, this.carpentry, this.mining, this.studying];
        var foodBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.farming, new Decimal(0.1));
        game.materials.food.productionsBonus.push(foodBon);
        var soilBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.carpentry, new Decimal(0.1));
        game.materials.soil.productionsBonus.push(soilBon);
        var cryBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.mining, new Decimal(0.1));
        game.materials.crystal.productionsBonus.push(cryBon);
        var scieBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.studying, new Decimal(0.1));
        game.materials.science.productionsBonus.push(scieBon);
        [foodBon, soilBon, cryBon, scieBon].forEach(function (b) {
            b.getMultiplier = function () {
                return new Decimal(1 + game.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_0__["MasteryTypes"].TECHNOLOGY_PRESTIGE));
            };
        });
    };
    return Technology;
}(_prestige_group__WEBPACK_IMPORTED_MODULE_3__["PrestigeGroup"]));



/***/ }),

/***/ "./src/app/model/prestige/time.ts":
/*!****************************************!*\
  !*** ./src/app/model/prestige/time.ts ***!
  \****************************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony import */ var _prestige__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestige */ "./src/app/model/prestige/prestige.ts");
/* harmony import */ var _prestige_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestige-group */ "./src/app/model/prestige/prestige-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Time = /** @class */ (function (_super) {
    __extends(Time, _super);
    function Time() {
        return _super.call(this, "time", "时间") || this;
    }
    Time.prototype.declareStuff = function (game) {
        this.timeProducer = new _prestige__WEBPACK_IMPORTED_MODULE_0__["Prestige"]("P", game.genExperiencePrice(15));
        this.timeBank = new _prestige__WEBPACK_IMPORTED_MODULE_0__["Prestige"]("B", game.genExperiencePrice(15));
        this.list = [this.timeProducer, this.timeBank];
        this.timeBank.onBuy = function () { return game.setMaxTimeBank(); };
    };
    return Time;
}(_prestige_group__WEBPACK_IMPORTED_MODULE_1__["PrestigeGroup"]));



/***/ }),

/***/ "./src/app/model/prestige/world-prestige.ts":
/*!**************************************************!*\
  !*** ./src/app/model/prestige/world-prestige.ts ***!
  \**************************************************/
/*! exports provided: WorldPrestige */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldPrestige", function() { return WorldPrestige; });
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _prestige__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestige */ "./src/app/model/prestige/prestige.ts");
/* harmony import */ var _prestige_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prestige-group */ "./src/app/model/prestige/prestige-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var WorldPrestige = /** @class */ (function (_super) {
    __extends(WorldPrestige, _super);
    function WorldPrestige() {
        return _super.call(this, "world", "世界") || this;
    }
    WorldPrestige.prototype.declareStuff = function (game) {
        this.betterWorlds = new _prestige__WEBPACK_IMPORTED_MODULE_1__["Prestige"]("w", game.genExperiencePrice(20));
        this.betterArmy = new _prestige__WEBPACK_IMPORTED_MODULE_1__["Prestige"]("r", game.genExperiencePrice(20));
        this.maxLevel = new _prestige__WEBPACK_IMPORTED_MODULE_1__["Prestige"]("L", game.genExperiencePrice(20));
        this.list = [this.betterWorlds, this.betterArmy, this.maxLevel];
        var killBonus = new _production_bonus__WEBPACK_IMPORTED_MODULE_0__["ProductionBonus"](this.betterArmy, new Decimal(0.1));
        game.killers.list.forEach(function (k) { return k.productionsAll.push(killBonus); });
    };
    return WorldPrestige;
}(_prestige_group__WEBPACK_IMPORTED_MODULE_2__["PrestigeGroup"]));



/***/ }),

/***/ "./src/app/model/price.ts":
/*!********************************!*\
  !*** ./src/app/model/price.ts ***!
  \********************************/
/*! exports provided: Price */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/app/model/utility.ts");

var Price = /** @class */ (function () {
    function Price(base, price, growRate) {
        if (growRate === void 0) { growRate = 1.1; }
        this.base = base;
        this.growRate = growRate;
        this.canBuy = false;
        this.maxBuy = new Decimal(0);
        this.priceUser = new Decimal(0);
        this.userCanBuy = false;
        this.avIn = new Decimal(0);
        //  Price with malus
        this.realPrice = new Decimal(0);
        this.completedPercent = 0;
        this.price = new Decimal(price);
        this.realPrice = new Decimal(this.price);
    }
    Price.prototype.reloadRealPrice = function () {
        this.realPrice = this.base.malus
            ? this.price.times(this.base.malus.priceMultiplier)
            : (this.realPrice = this.price);
    };
    Price.prototype.reload = function (bought) {
        if (bought === void 0) { bought = new Decimal(0); }
        this.reloadRealPrice();
        if (this.growRate !== 1) {
            this.maxBuy = Decimal.affordGeometricSeries(this.base.quantity, this.realPrice, this.growRate, bought);
        }
        else {
            this.maxBuy = this.base.quantity.gt(0)
                ? this.base.quantity.div(this.realPrice).floor()
                : new Decimal(0);
        }
        this.canBuy = this.maxBuy.gte(1);
    };
    Price.prototype.buy = function (toBuy, start) {
        var price;
        if (this.growRate === 1) {
            price = toBuy.times(this.realPrice);
        }
        else {
            price = Decimal.sumGeometricSeries(toBuy, this.realPrice, this.growRate, start);
        }
        this.base.quantity = this.base.quantity.minus(price);
        // this.base.setUiValue();
    };
    Price.prototype.loadPriceUser = function (num, start) {
        var tempPrice = this.growRate > 1
            ? Decimal.sumGeometricSeries(num, this.realPrice, this.growRate, start)
            : this.realPrice.times(num);
        this.userCanBuy = tempPrice.lte(this.base.quantity);
        if (this.priceUser.cmp(tempPrice) !== 0)
            this.priceUser = tempPrice;
    };
    Price.prototype.getPriceForOne = function (start) {
        var num = new Decimal(1);
        return this.growRate > 1
            ? Decimal.sumGeometricSeries(num, this.realPrice, this.growRate, start)
            : this.realPrice.times(num);
    };
    Price.prototype.getTime = function () {
        if (this.priceUser.lte(this.base.quantity))
            return new Decimal(0);
        else {
            this.avIn = _utility__WEBPACK_IMPORTED_MODULE_0__["Utility"].solveEquation(this.base.a, this.base.b, this.base.c, this.base.quantity.minus(this.priceUser))
                .filter(function (s) { return s.gte(0); })
                .reduce(function (p, c) { return p.min(c); }, new Decimal(Number.POSITIVE_INFINITY));
            return this.avIn;
        }
    };
    Price.prototype.reloadPercent = function () {
        this.completedPercent = Math.floor(this.canBuy
            ? 100
            : this.base.quantity
                .times(100)
                .div(this.price)
                .toNumber());
    };
    return Price;
}());



/***/ }),

/***/ "./src/app/model/production-bonus.ts":
/*!*******************************************!*\
  !*** ./src/app/model/production-bonus.ts ***!
  \*******************************************/
/*! exports provided: ProductionBonus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionBonus", function() { return ProductionBonus; });
var ProductionBonus = /** @class */ (function () {
    function ProductionBonus(unit, quantity) {
        this.unit = unit;
        this.quantity = quantity;
        unit.usedForProductionBonus.push(this);
    }
    ProductionBonus.prototype.isActive = function () {
        return this.unit.unlocked && this.unit.quantity.gt(0);
    };
    ProductionBonus.prototype.getBonus = function () {
        if (this.isActive()) {
            return this.unit.quantity
                .times(this.quantity)
                .times(this.getMultiplier());
        }
        else
            return new Decimal(0);
    };
    ProductionBonus.prototype.getBonusPercent = function () {
        return this.getBonus().times(100);
    };
    ProductionBonus.prototype.getBonusPercentForNum = function (num) {
        return this.getForNum(num).times(100);
    };
    ProductionBonus.prototype.getForNum = function (num) {
        return num.times(this.quantity);
    };
    ProductionBonus.prototype.getMultiplier = function () {
        return new Decimal(1);
    };
    return ProductionBonus;
}());



/***/ }),

/***/ "./src/app/model/production.ts":
/*!*************************************!*\
  !*** ./src/app/model/production.ts ***!
  \*************************************/
/*! exports provided: Production */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Production", function() { return Production; });
var Production = /** @class */ (function () {
    function Production(producer, product, ratio) {
        if (ratio === void 0) { ratio = new Decimal(1); }
        this.producer = producer;
        this.product = product;
        this.ratio = ratio;
        this.prodPerSec = new Decimal(1);
        this.reloadProdPerSec();
    }
    Production.prototype.reloadProdPerSec = function (teamBonus) {
        if (teamBonus === void 0) { teamBonus = false; }
        if (this.producer.efficiency <= 0) {
            this.prodPerSec = new Decimal(0);
        }
        else {
            var bonus = new Decimal(1);
            //  Base Production
            this.prodPerSec = new Decimal(this.ratio);
            // Team Bonus
            if (teamBonus && this.producer.buyAction) {
                this.prodPerSec = this.prodPerSec.times(this.producer.bonus.plus(1));
            }
            //  Producer Bonus All
            var producerAllBonus = this.producer.productionsAll
                .filter(function (bn) { return bn.isActive(); })
                .map(function (prod) { return prod.getBonus(); })
                .reduce(function (p, n) { return p.plus(n); }, new Decimal(0));
            bonus = bonus.plus(producerAllBonus);
            // Producer Efficiency Bonus
            if (this.ratio.gt(0)) {
                var producerBonus = this.producer.productionsEfficiency
                    .filter(function (bn) { return bn.isActive(); })
                    .map(function (prod) { return prod.getBonus(); })
                    .reduce(function (p, n) { return p.plus(n); }, new Decimal(0));
                bonus = bonus.plus(producerBonus);
                // Production bonus of product
                var productBonus = this.product.productionsBonus
                    .filter(function (bn) { return bn.isActive(); })
                    .map(function (prod) { return prod.getBonus(); })
                    .reduce(function (p, n) { return p.plus(n); }, new Decimal(0));
                bonus = bonus.plus(productBonus);
            }
            this.prodPerSec = this.prodPerSec.times(bonus);
            // Efficiency slider
            this.prodPerSec = this.prodPerSec.times(this.producer.efficiency / 100);
        }
    };
    return Production;
}());



/***/ }),

/***/ "./src/app/model/research.ts":
/*!***********************************!*\
  !*** ./src/app/model/research.ts ***!
  \***********************************/
/*! exports provided: Research */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Research", function() { return Research; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./src/app/model/action.ts");
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price */ "./src/app/model/price.ts");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strings */ "./src/app/model/strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Research = /** @class */ (function (_super) {
    __extends(Research, _super);
    function Research(id, researches, unlimited) {
        if (unlimited === void 0) { unlimited = false; }
        var _this = _super.call(this, id, "", "") || this;
        _this.researches = researches;
        _this.unlimited = unlimited;
        _this.unlocked = false;
        _this.toUnlock = new Array();
        _this.maxAutoBuyLevel = 10;
        _this.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_1__["BugTypes"].ANT;
        _this.autoBuyable = true;
        _this.name = "";
        _this.description = "";
        if (id in _strings__WEBPACK_IMPORTED_MODULE_3__["STRINGS"].researches) {
            _this.name = _strings__WEBPACK_IMPORTED_MODULE_3__["STRINGS"].researches[id][0];
            _this.description = _strings__WEBPACK_IMPORTED_MODULE_3__["STRINGS"].researches[id][1];
        }
        if (!_this.unlimited) {
            _this.limit = new Decimal(1);
            _this.isLimited = true;
        }
        _this.userNum = 1;
        _this.researches.researches.push(_this);
        return _this;
    }
    Research.prototype.genPrice = function (price, science, growRate) {
        if (growRate === void 0) { growRate = 1; }
        this.prices = [new _price__WEBPACK_IMPORTED_MODULE_2__["Price"](science, price, 1)];
    };
    Research.prototype.buy = function (toBuy) {
        if (toBuy === void 0) { toBuy = new Decimal(1); }
        if (_super.prototype.buy.call(this, toBuy)) {
            if (this.toUnlock) {
                this.toUnlock.filter(function (i) { return !i.unlocked; }).forEach(function (u) { return u.unlock(); });
            }
            this.reload();
            this.researches.reloadLists();
            this.researches.game.autoBuyManager.buildActiveList();
            this.researches.toDo.forEach(function (r) {
                r.reloadAvailableTime();
            });
            return true;
        }
        else {
            return false;
        }
    };
    Research.prototype.unlock = function () {
        if (!this.unlocked &&
            (this.bugType === _bugsTypes__WEBPACK_IMPORTED_MODULE_1__["BugTypes"].ANT ||
                this.researches.game.currentWorld.additionalBugs.includes(this.bugType))) {
            this.unlocked = true;
            this.reload();
            return true;
        }
        else {
            return false;
        }
    };
    Research.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.unlocked = false;
    };
    //#region Save and Load
    Research.prototype.getSave = function () {
        var save = _super.prototype.getSave.call(this);
        if (this.unlocked)
            save.u = this.unlocked;
        if (this.maxAutoBuyLevel !== 10)
            save.mabl = this.maxAutoBuyLevel;
        return save;
    };
    Research.prototype.restore = function (data) {
        if (_super.prototype.restore.call(this, data)) {
            this.unlocked = !!data.u;
            if ("mabl" in data)
                this.maxAutoBuyLevel = data.mabl;
            return true;
        }
        else {
            return false;
        }
    };
    return Research;
}(_action__WEBPACK_IMPORTED_MODULE_0__["Action"]));



/***/ }),

/***/ "./src/app/model/stats/run.ts":
/*!************************************!*\
  !*** ./src/app/model/stats/run.ts ***!
  \************************************/
/*! exports provided: Run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Run", function() { return Run; });
var Run = /** @class */ (function () {
    function Run(endDate, startDate, worldName, experience, completed) {
        if (endDate === void 0) { endDate = new Date(); }
        if (startDate === void 0) { startDate = new Date(); }
        if (worldName === void 0) { worldName = ""; }
        if (experience === void 0) { experience = new Decimal(0); }
        if (completed === void 0) { completed = false; }
        this.endDate = endDate;
        this.startDate = startDate;
        this.worldName = worldName;
        this.experience = experience;
        this.completed = completed;
        this.expPerSec = new Decimal(0);
    }
    Run.getRun = function (data) {
        var run = new Run();
        run.restore(data);
        return run;
    };
    Run.prototype.reloadExpPerSec = function () {
        this.expPerSec = this.experience.div((this.endDate.getTime() - this.startDate.getTime()) / 1000);
    };
    //#region Save and Load
    Run.prototype.getSave = function () {
        return {
            f: this.endDate,
            w: this.worldName,
            e: this.experience,
            c: this.completed,
            s: this.startDate
        };
    };
    Run.prototype.restore = function (data) {
        if ("f" in data)
            this.endDate = new Date(data.f);
        if ("s" in data)
            this.startDate = new Date(data.s);
        if ("w" in data)
            this.worldName = data.w;
        if ("e" in data)
            this.experience = new Decimal(data.e);
        this.completed = !!data.c;
        this.reloadExpPerSec();
    };
    return Run;
}());



/***/ }),

/***/ "./src/app/model/stats/stats.ts":
/*!**************************************!*\
  !*** ./src/app/model/stats/stats.ts ***!
  \**************************************/
/*! exports provided: Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return Stats; });
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./run */ "./src/app/model/stats/run.ts");

var Stats = /** @class */ (function () {
    function Stats() {
        this.completedWorld = new Decimal(0);
        this.totalExperience = new Decimal(0);
        this.worldStartDate = new Date();
        this.runs = new Array();
        this.bestExpS = new Decimal(0);
    }
    Stats.prototype.logWorldCompleted = function (world, skip) {
        if (skip === void 0) { skip = false; }
        if (!skip) {
            this.completedWorld = this.completedWorld.plus(1);
            this.totalExperience = this.totalExperience.plus(world.prestige);
            var run = new _run__WEBPACK_IMPORTED_MODULE_0__["Run"](new Date(), this.worldStartDate, world.name, world.prestige, !skip);
            run.reloadExpPerSec();
            this.runs.unshift(run);
            this.runs[0].reloadExpPerSec();
            if (run.expPerSec.gt(this.bestExpS)) {
                this.bestExpS = new Decimal(run.expPerSec);
            }
        }
        this.worldStartDate = new Date();
        this.runs = this.runs.slice(0, 10);
    };
    //#region Save and Load
    Stats.prototype.getSave = function () {
        return {
            w: this.completedWorld,
            e: this.totalExperience,
            d: this.worldStartDate,
            r: this.runs.map(function (r) { return r.getSave(); }),
            b: this.bestExpS
        };
    };
    Stats.prototype.restore = function (data) {
        if ("w" in data)
            this.completedWorld = new Decimal(data.w);
        if ("e" in data)
            this.totalExperience = new Decimal(data.e);
        if ("d" in data)
            this.worldStartDate = new Date(data.d);
        if ("r" in data)
            this.runs = data.r.map(function (r) { return _run__WEBPACK_IMPORTED_MODULE_0__["Run"].getRun(r); });
        if ("b" in data)
            this.bestExpS = new Decimal(data.d);
    };
    return Stats;
}());



/***/ }),

/***/ "./src/app/model/strings.ts":
/*!**********************************!*\
  !*** ./src/app/model/strings.ts ***!
  \**********************************/
/*! exports provided: STRINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRINGS", function() { return STRINGS; });
var STRINGS = {
    units: {
        prest: ["经验", ""],
        time: ["时间", ""],
        //  Materials
        f: ["食物", "食物用于维持所有单位。"],
        w: ["土壤", "土壤用于构建更好的巢。"],
        c: ["水晶", "水晶是用来生产科学。"],
        s: ["科学", "科学是用来发现新事物的。"],
        //  Ants
        l: ["幼虫", "幼虫"],
        q: ["女王", "女王"],
        n: ["巢穴", "巢穴"],
        //  Ghantering
        e: ["雄蜂", "雄蜂收集食物。"],
        h: ["地质学家", "地质学家会寻找水晶。"],
        i: [
            "学生",
            [
                "学生将尝试研究科学。",
                "学生需要喝水晶。"
            ]
        ],
        //  Workers
        a: [
            "农民",
            [
                "水培农民使用晶体在没有土壤的情况下种植真菌。",
                "蚂蚁是世界上最好的真菌种植户。",
                "公元前10000年开始耕种。"
            ]
        ],
        b: ["木匠", "木匠蚂蚁在土壤中筑巢。"],
        m: [
            "矿工",
            [
                "矿工通过采矿提取水晶。",
                "不出所料，又是一个关于矿工的放置游戏。"
            ]
        ],
        d: [
            "科学家",
            [
                "科学家收集的科学。",
                "科学家需要饮用水晶。",
                "科学家和学生一样,但他们更厉害。"
            ]
        ],
        // Buildings
        aG: ["水培农场", "一个水培农场。"],
        bG: ["土壤营地", "土壤营地是用来获得更多的土壤。"],
        mG: ["水晶矿", "一个水晶矿。"],
        dG: ["大学", "大学产生毕业的科学家。"],
        //  Engineers
        aGG: ["水利工程", "水利工程师对农场有加成。"],
        bGG: ["土壤工程师", "土壤工程师生产土壤营地。"],
        mGG: ["矿山工程师", "矿山工程师生产矿山。"],
        dGG: ["教育部门", "教育部门生产大学。"],
        //  World Bonus
        1: ["食物生产加成", ""],
        2: ["土壤生产加成", ""],
        3: ["水晶生产加成", ""],
        4: ["科学生产加成", ""],
        5: ["杀敌加成", ""],
        larvaBon: ["幼虫生产加成", ""],
        queenBon: ["女王生产加成", ""],
        //  Malus
        Mf1: ["有毒真菌", "有毒真菌"],
        Mf2: ["古老的真菌", "古老的真菌"],
        Mf3: ["僵尸真菌", "僵尸真菌"],
        Mw1: ["食虫植物", ""],
        Mw2: ["捕蝇纸陷阱", ""],
        Mw3: ["猪笼草", ""],
        Mc1: ["小螨虫", ""],
        Mc2: ["螨虫", ""],
        Mc3: ["寄生螨虫", ""],
        Ms1: ["僵尸真菌孢子", ""],
        Ms2: ["僵尸真菌", ""],
        Ms3: ["僵尸真菌菌落 ", ""],
        //  Killers
        F: ["消毒蚂蚁", "消灭有毒真菌."],
        W: ["火蚂蚁", ["燃烧食肉植物", "火蚁确实存在."]],
        C: ["黑色花园蚂蚁", "杀死螨虫."],
        S: ["黄色疯狂蚂蚁", "杀死僵尸真菌."],
        HB: ["常规", "+10% 杀敌."],
        HQ: ["总部", "+10% 杀敌."],
        //  Mastery Bonus
        scieMast: ["科学专精"],
        fooMast: ["食物专精"],
        wooMast: ["土壤专精"],
        cryMast: ["水晶专精"],
        harvMast: ["收获专精"],
        matMast: ["材料专精"],
        armyMast: ["军队专精"],
        //  Supply
        fS: ["食物供应", "永不停息的食物供应"],
        wS: ["土壤供应", "永不停息的土壤供应"],
        cS: ["水晶供应", "永不停息的水晶供应"],
        //  Bee
        Z: ["觅食蜜蜂", "觅食蜜蜂"],
        cb: ["木匠蜜蜂", "木匠蜜蜂"],
        sb: ["学生蜜蜂", "学生蜜蜂"],
        Q: ["蜜蜂幼虫", "蜜蜂幼虫"],
        P: ["蜜蜂女王", "蜜蜂女王"],
        N: ["蜜蜂巢穴", "蜜蜂巢穴"],
        A: ["蜜蜂农民", "种植鲜花"],
        B: ["蜜蜂木匠", "木匠蜜蜂"],
        E: ["蜜蜂矿工", "矿工蜜蜂"],
        D: ["蜜蜂科学家", "科学家蜜蜂"],
        AG: ["鲜花农场", "种满鲜花的农场."],
        BG: ["蜜蜂土壤营地", "蜜蜂土壤营地"],
        EG: ["蜜蜂矿山", "蜜蜂矿山"],
        DG: ["蜜蜂大学", "蜜蜂大学"],
        AGG: ["花匠工程师 ", "花匠工程师生产鲜花农场."],
        BGG: ["蜜蜂土壤工程师", "蜜蜂土壤工程师生产蜜蜂土壤营地."],
        EGG: ["蜜蜂矿山工程师", "蜜蜂矿山工程师生产蜜蜂矿山."],
        DGG: ["蜜蜂教育部门", "蜜蜂教育部门."],
        //  Wasp
        x: ["觅食黄蜂", "觅食黄蜂"],
        hw: ["大黄蜂", ["大黄蜂", "一只服用类固醇的黄蜂。"]],
        sw: ["聪明的黄蜂", "聪明黄蜂"],
        y: ["黄蜂幼虫", "黄蜂幼虫"],
        z: ["黄蜂女王", "黄蜂女王"],
        r: ["黄蜂巢穴", "黄蜂巢穴"],
        v: ["黄蜂农民", "一个农民黄蜂."],
        V: ["黄蜂木匠", "一个木匠黄蜂."],
        o: ["黄蜂矿工", "一个矿工黄蜂."],
        p: ["黄蜂科学家", "一个科学家黄蜂."],
        vG: ["黄蜂农场", "黄蜂农场."],
        VG: ["黄蜂土壤营地", "黄蜂土壤营地."],
        oG: ["黄蜂矿山", "黄蜂矿山."],
        pG: ["黄蜂大学", "黄蜂大学"],
        vGG: ["黄蜂水利工程师", "黄蜂水利工程师生产黄蜂农场"],
        VGG: ["黄蜂土壤工程师", "黄蜂土壤工程师生产黄蜂土壤营地"],
        oGG: ["黄蜂矿山工程师", "黄蜂矿山工程师生产黄蜂矿山"],
        pGG: [
            "黄蜂教育部门",
            "黄蜂教育部门生产黄蜂大学。"
        ],
        //  Helpers
        lf: ["切叶蚁", "改善农业。"],
        hu: ["猎人", ""],
        mw: ["主要工人", ""],
        mh: ["大矿工", "改善采矿。"],
        sh: ["大木匠", "改善土壤收集。"]
    },
    researches: {
        t: ["团队合作", "在手动购买的基础上获得生产加成。"],
        T: ["团队合作2", "提高团队合作的加成"],
        W: ["双胞胎", "同样的价格购买更多的单位"],
        r: ["旅行", "前往一个新的世界!"],
        M: ["专精", "获得1个专精点数"],
        h: ["收获", "+100% 来自采集者的资源。"],
        1: ["1小时 扭曲", "免费的时间扭曲."],
        2: ["2小时 扭曲", "免费的时间扭曲."],
        3: ["3小时 扭曲", "免费的时间扭曲."],
        SP: ["产卵", "+50% 幼虫产量."],
        ont: [
            "极端",
            "+10% 世界等级和经验;+20% 需求; 增加随机敌人，以及提高敌人;如果当前世界等级高于15并且高于50%最大等级, 在旅行时会给予你1个专精点"
        ],
        //  Workers
        wo: ["更好的工人", "+30% 来自工人的资源产量."],
        we: ["高效的工人", "+10% 资源获得。"],
        w: ["工人", "工人"],
        a: [
            "农民",
            "水培农民使用水晶在没有土壤的情况下种植真菌。"
        ],
        b: ["木匠", "木匠蚂蚁建造由画廊组成的巢."],
        m: ["矿工", "矿工"],
        d: ["科学家", "科学家"],
        scie1: ["科学方法", "+50% 科学产量"],
        // Buildings
        u: ["建筑", "建筑生产工人."],
        aG: ["水培农场", "水培真菌农场."],
        bG: ["土壤营地", "肥沃的土壤源."],
        mG: ["矿山", "一个水晶矿."],
        dG: ["大学", "大学培养科学家."],
        //  Engineers
        e: ["工程师", "工程师建造建筑物."],
        aGG: ["水利工程师", "水利工程师生产农场."],
        bGG: ["土壤工程师", "土壤工程师生产土壤营地."],
        mGG: ["矿山工程师", "矿山工程师生产矿山."],
        dGG: ["教育部门", "教育部门生产大学"],
        //  Bee
        A: ["蜜蜂农民", "种植鲜花."],
        B: ["蜜蜂木匠", "木匠蜜蜂."],
        E: ["蜜蜂矿工", "矿工蜜蜂."],
        D: ["蜜蜂科学家", "科学家蜜蜂."],
        AG: ["鲜花农场", "种满鲜花的农场."],
        BG: ["蜜蜂土壤营地", "蜜蜂土壤营地"],
        EG: ["蜜蜂矿山", "蜜蜂矿山"],
        DG: ["蜜蜂大学", "蜜蜂大学"],
        AGG: ["花匠工程师 ", "花匠工程师生产鲜花农场"],
        BGG: ["蜜蜂土壤工程师", "蜜蜂土壤工程师生产蜜蜂土壤营地."],
        EGG: ["蜜蜂矿山工程师", "蜜蜂矿山工程师生产蜜蜂矿山."],
        DGG: ["蜜蜂教育部门", "蜜蜂教育部门."],
        // Wasp
        v: ["黄蜂农民", "一个农民黄蜂."],
        V: ["黄蜂木匠", "一个木匠黄蜂."],
        o: ["黄蜂矿工", "一个矿工黄蜂."],
        p: ["黄蜂科学家", "一个科学家黄蜂."],
        vG: ["黄蜂农场", "黄蜂农场."],
        VG: ["黄蜂土壤营地", "黄蜂土壤营地."],
        oG: ["黄蜂矿山", "黄蜂矿山."],
        pG: ["黄蜂大学", "黄蜂大学"],
        vGG: ["黄蜂水利工程师", "黄蜂水利工程师生产黄蜂农场."],
        VGG: ["黄蜂土壤工程师", "黄蜂土壤工程师生产黄蜂土壤营地."],
        oGG: ["黄蜂矿山工程师", "黄蜂矿山工程师生产黄蜂矿山."],
        pGG: [
            "黄蜂教育部门",
            "黄蜂教育部门生产黄蜂大学."
        ],
        //  Super Major
        sm: ["主宰助手", ""],
        lf: ["切叶蚁", "改善农业。"],
        mh: ["大矿工", "改善采矿。"],
        sh: ["大木匠", "改善土壤收集。"],
        //  Kill World
        aow: ["战争的艺术", "杀敌提高10%"]
    },
    worlds: {
        "1Pre": "炽热的",
        "2Pre": "树木繁茂的",
        "3Pre": "结晶的",
        "4Pre": "科学的",
        "1Suf": "食物的",
        "2Suf": "土壤的",
        "3Suf": "水晶的",
        "4Suf": "科学的",
        fBio: "农田",
        wBio: "森林",
        cBio: "矿山",
        sBio: "大学",
        fSPre: "食品供应",
        wSPre: "土壤供应",
        cSPre: "水晶供应",
        fSSuff: "食物",
        wSSuff: "土壤",
        cSSuff: "水晶",
        //  Bee
        beePre: "蜜蜂的",
        beeBio: "蜂巢",
        beeSuff: "蜜蜂的",
        //  Wasp
        waspPre: "黄蜂",
        waspBio: "巢穴",
        waspSuff: "黄蜂的",
        //  Super Major
        majorPre: "主宰",
        majorSuff: "主宰的",
        //  Malus Bonus
        mkPre: "充满敌意的",
        mkBio: "战场",
        mkSuff: "战争的",
        //  Larva
        larvaPre: "蜂群",
        larvaSuff: "幼虫",
        //  Queen
        queenPre: "高贵的",
        queenSuff: "女王"
    },
    prestige: {
        //  Followers 1
        e: ["雄蜂追随者", "开始新的世界初始有更多5个雄蜂"],
        h: ["地质学家追随者", "开始新的世界初始有更多5个地质学家"],
        i: ["学生追随者", "开始新的世界初始有更多5个学生"],
        //  Followers 2
        a: ["农民追随者", "开始新的世界初始有更多5个农民"],
        b: ["木匠追随者", "开始新的世界初始有更多5个木匠"],
        m: ["矿工追随者", "开始新的世界初始有更多5个矿工"],
        d: ["科学家追随者", "开始新的世界初始有更多5个科学家"],
        //  Time
        P: ["时间生产者", "+0.1 时间/秒"],
        B: ["时间银行", "+1 最大小时"],
        //  AutoBuy
        H: ["孵化自动购买者", "针对所有单位解锁孵化自动购买者"],
        t: ["团队自动购买者", "针对所有单位解锁团队自动购买者"],
        T: ["双胞胎自动购买者", "针对所有单位解锁双胞胎自动购买者"],
        M: ["时间扭曲自动购买者", "解锁一分钟时间扭曲自动购买者"],
        R: ["研究自动购买者", "解锁研究自动购买者"],
        //  Technology
        F: ["农业", "+10% 食物产量"],
        C: ["木匠", "+10% 土壤产量"],
        n: ["采矿", "+10% 水晶产量"],
        s: ["学习", "+10% 科学产量"],
        //  Team
        E: ["团队合作", "+30% 团队合作加成"],
        //  Worlds
        w: ["更好的世界", "+10% 世界加成"],
        r: ["更好的军队", "+10% 军队杀人物资"],
        L: ["最高等级", "+10% 最高世界等级"],
        //  Swarm
        sl: ["幼虫加成", "+10% 幼虫产量"],
        sq: ["女王加成", "+10% 女王产量"]
    },
    actions: {
        warp60: ["扭曲分钟", "时间扭曲以分钟计算"],
        warp3600: ["扭曲小时", "时间扭曲以小时计算"]
    },
    bug: {
        0: "蚂蚁",
        1: "蜜蜂",
        2: "黄蜂",
        3: "主宰"
    }
};


/***/ }),

/***/ "./src/app/model/tab.ts":
/*!******************************!*\
  !*** ./src/app/model/tab.ts ***!
  \******************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
var Tab = /** @class */ (function () {
    function Tab(id) {
        this.id = id;
        this.unlocked = false;
        //
    }
    Tab.prototype.unlock = function () {
        if (this.unlocked)
            return false;
        this.unlocked = true;
    };
    Tab.prototype.getSave = function () {
        var data = {
            i: this.id
        };
        if (this.unlocked)
            data.u = this.unlocked;
        return data;
    };
    Tab.prototype.restore = function (data) {
        if (!("i" in data && data.i === this.id))
            return false;
        this.unlocked = !!data.u;
    };
    return Tab;
}());



/***/ }),

/***/ "./src/app/model/tabs.ts":
/*!*******************************!*\
  !*** ./src/app/model/tabs.ts ***!
  \*******************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/app/model/tab.ts");

var Tabs = /** @class */ (function () {
    function Tabs() {
        this.lab = new _tab__WEBPACK_IMPORTED_MODULE_0__["Tab"]("lab");
        this.travel = new _tab__WEBPACK_IMPORTED_MODULE_0__["Tab"]("travel");
        this.prestige = new _tab__WEBPACK_IMPORTED_MODULE_0__["Tab"]("prestige");
        this.autoBuy = new _tab__WEBPACK_IMPORTED_MODULE_0__["Tab"]("autoBuy");
        this.mastery = new _tab__WEBPACK_IMPORTED_MODULE_0__["Tab"]("mastery");
        this.tabList = [
            this.lab,
            this.travel,
            this.prestige,
            this.autoBuy,
            this.mastery
        ];
    }
    Tabs.prototype.getSave = function () {
        return {
            t: this.tabList.map(function (t) { return t.getSave(); })
        };
    };
    Tabs.prototype.restore = function (data) {
        if ("t" in data) {
            var _loop_1 = function (s) {
                this_1.tabList.find(function (u) { return u.id === s.i; }).restore(s);
            };
            var this_1 = this;
            for (var _i = 0, _a = data.t; _i < _a.length; _i++) {
                var s = _a[_i];
                _loop_1(s);
            }
            return true;
        }
        else {
            return false;
        }
    };
    return Tabs;
}());



/***/ }),

/***/ "./src/app/model/unit-group.ts":
/*!*************************************!*\
  !*** ./src/app/model/unit-group.ts ***!
  \*************************************/
/*! exports provided: UnitGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitGroup", function() { return UnitGroup; });
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./research */ "./src/app/model/research.ts");


var UnitGroup = /** @class */ (function () {
    function UnitGroup(name, game) {
        this.name = name;
        this.game = game;
        this.level = 0;
        this.list = new Array();
        this.unlocked = new Array();
        this.isEnding = false;
        this.upTeam = false;
        this.upTwin = false;
        this.isExpanded = true;
        this.researchList = new Array();
        //#region ui
        this.selected = new Array();
        // Pie
        this.chartLabels = [];
        this.chartData = [];
        this.icon = "";
        //#endregion
        this.additionalBuyPreces = [];
        this.id = UnitGroup.maxId;
        UnitGroup.maxId++;
    }
    UnitGroup.prototype.check = function (noGame) {
        if (noGame === void 0) { noGame = false; }
        this.unlocked = this.list.filter(function (u) { return u.unlocked; });
        if (!noGame)
            this.game.buildLists();
    };
    UnitGroup.prototype.addUnits = function (units) {
        var _this = this;
        units.forEach(function (u) { return (u.unitGroup = _this); });
        this.list = units;
    };
    UnitGroup.prototype.declareStuff = function () {
        //
    };
    UnitGroup.prototype.setRelations = function () {
        //
    };
    UnitGroup.prototype.addWorlds = function () {
        //
    };
    UnitGroup.prototype.generateProducer = function (products) {
        var _this = this;
        var list = products.list.map(function (u) {
            var ret = new _full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"](u.id + "G");
            ret.bugType = u.bugType;
            return ret;
        });
        this.addUnits(list);
        this.list.forEach(function (u) {
            var res = new _research__WEBPACK_IMPORTED_MODULE_1__["Research"](u.id, _this.game.researches);
            res.toUnlock = [u];
            res.bugType = u.bugType;
            _this.researchList.push(res);
        });
    };
    UnitGroup.prototype.setBugType = function () {
        this.list.forEach(function (u) { return u.setBugType(u.bugType); });
    };
    UnitGroup.prototype.setFlags = function (team, twin) {
        if (team === void 0) { team = false; }
        if (twin === void 0) { twin = false; }
        this.isEnding = this.unlocked.findIndex(function (u) { return u.isEnding; }) > -1;
        if (team) {
            var teamList = this.unlocked.filter(function (u) { return u.teamAction; });
            this.upTeam =
                teamList.length > 0 &&
                    teamList
                        .map(function (u) {
                        return u.teamAction.prices[0].getPriceForOne(u.teamAction.quantity);
                    })
                        .reduce(function (p, n) { return p.plus(n); }, new Decimal(0))
                        .lte(this.game.materials.science.quantity);
        }
        else {
            this.upTeam = false;
        }
        if (twin) {
            var twinList = this.unlocked.filter(function (u) { return u.twinAction; });
            this.upTwin =
                twinList.length > 0 &&
                    twinList
                        .map(function (u) {
                        return u.twinAction.prices[0].getPriceForOne(u.twinAction.quantity);
                    })
                        .reduce(function (p, n) { return p.plus(n); }, new Decimal(0))
                        .lte(this.game.materials.science.quantity);
        }
        else {
            this.upTwin = false;
        }
    };
    UnitGroup.prototype.updateChart = function () {
        var qtList = this.selected.map(function (u) { return u.quantity; });
        var sum = qtList
            .reduce(function (p, c) { return p.plus(c); }, new Decimal(0))
            .max(1);
        var newChartData = qtList.map(function (u) {
            return Math.round(u.div(sum).toNumber() * 100);
        });
        var toChange = false;
        if (this.chartData.length === newChartData.length) {
            for (var i = 0; i < this.selected.length; i++) {
                toChange = toChange || newChartData[i] !== this.chartData[i];
            }
        }
        else
            toChange = true;
        if (toChange)
            this.chartData = newChartData;
    };
    UnitGroup.prototype.updateChartLabel = function () {
        this.chartLabels = this.selected.map(function (u) { return u.name + " %"; });
        this.updateChart();
    };
    UnitGroup.prototype.getReqNum = function (num) {
        if (isNaN(num))
            return new Decimal(0);
        if (num < 1)
            return new Decimal(0);
        return new Decimal(num);
    };
    UnitGroup.prototype.buyN = function (num) {
        var n = this.getReqNum(num);
        if (n.gt(0)) {
            this.unlocked
                .filter(function (u) { return u.unlocked && u.buyAction; })
                .sort(function (a, b) { return a.quantity.cmp(b.quantity); })
                .forEach(function (un) { return un.buyAction.buy(n); });
        }
    };
    UnitGroup.prototype.buyTeam = function (num) {
        var n = this.getReqNum(num);
        if (n.gt(0)) {
            this.unlocked
                .filter(function (u) { return u.unlocked && u.teamAction; })
                .sort(function (a, b) { return a.teamAction.quantity.cmp(b.teamAction.quantity); })
                .forEach(function (un) { return un.teamAction.buy(new Decimal(n)); });
        }
    };
    UnitGroup.prototype.buyTwins = function (num) {
        var n = this.getReqNum(num);
        if (n.gt(0)) {
            this.unlocked
                .filter(function (u) { return u.unlocked && u.twinAction; })
                .sort(function (a, b) { return a.twinAction.quantity.cmp(b.twinAction.quantity); })
                .forEach(function (un) { return un.twinAction.buy(new Decimal(n)); });
        }
    };
    UnitGroup.prototype.allCustom = function (eff) {
        this.unlocked.forEach(function (u) {
            u.efficiency = eff;
        });
    };
    UnitGroup.prototype.autoBuy = function (set) {
        this.autoBuyBuy(set);
        this.autoBuyTeam(set);
        this.autoBuyTwin(set);
    };
    UnitGroup.prototype.autoBuyBuy = function (set) {
        this.unlocked
            .filter(function (u) { return u.buyAction.autoBuyer; })
            .forEach(function (u) { return (u.buyAction.autoBuyer.active = set); });
    };
    UnitGroup.prototype.autoBuyTeam = function (set) {
        this.unlocked
            .filter(function (u) { return u.teamAction.autoBuyer; })
            .forEach(function (u) { return (u.teamAction.autoBuyer.active = set); });
    };
    UnitGroup.prototype.autoBuyTwin = function (set) {
        this.unlocked
            .filter(function (u) { return u.twinAction.autoBuyer; })
            .forEach(function (u) { return (u.twinAction.autoBuyer.active = set); });
    };
    UnitGroup.prototype.hasAutoBuy = function () {
        return (this.hasAutoBuyBuy() || this.hasAutoBuyTeam() || this.hasAutoBuyTwin());
    };
    UnitGroup.prototype.hasAutoBuyBuy = function () {
        return !!this.unlocked
            .filter(function (u) { return u.hasAutoBuyer && u.buyAction; })
            .map(function (u) { return u.buyAction.autoBuyer; })
            .find(function (a) { return a.quantity.gt(0); });
    };
    UnitGroup.prototype.hasAutoBuyTeam = function () {
        return !!this.unlocked
            .filter(function (u) { return u.hasAutoBuyer && u.teamAction; })
            .map(function (u) { return u.teamAction.autoBuyer; })
            .find(function (a) { return a.quantity.gt(0); });
    };
    UnitGroup.prototype.hasAutoBuyTwin = function () {
        return !!this.unlocked
            .filter(function (u) { return u.hasAutoBuyer && u.twinAction; })
            .map(function (u) { return u.twinAction.autoBuyer; })
            .find(function (a) { return a.quantity.gt(0); });
    };
    UnitGroup.maxId = 0;
    return UnitGroup;
}());



/***/ }),

/***/ "./src/app/model/units/ants.ts":
/*!*************************************!*\
  !*** ./src/app/model/units/ants.ts ***!
  \*************************************/
/*! exports provided: Ants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ants", function() { return Ants; });
/* harmony import */ var _baseUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseUnit */ "./src/app/model/baseUnit.ts");
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../world */ "./src/app/model/world.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var Ants = /** @class */ (function (_super) {
    __extends(Ants, _super);
    function Ants(game) {
        var _this = _super.call(this, "蚂蚁", game) || this;
        _this.icon = "ant";
        return _this;
    }
    Ants.prototype.declareStuff = function () {
        this.larva = new _full_unit__WEBPACK_IMPORTED_MODULE_3__["FullUnit"]("l");
        this.queen = new _full_unit__WEBPACK_IMPORTED_MODULE_3__["FullUnit"]("q");
        this.nest = new _full_unit__WEBPACK_IMPORTED_MODULE_3__["FullUnit"]("n");
        this.addUnits([this.nest, this.queen, this.larva]);
        this.larva.unlocked = true;
        this.queen.unlocked = true;
        this.larva.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_1__["Tags"].LARVA);
        this.queen.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_1__["Tags"].QUEEN);
        this.nest.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_1__["Tags"].NEST);
    };
    Ants.prototype.setRelations = function () {
        this.larva.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].PRICE_0, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].SWARM_PRICE_GROWRATE)
        ], [this.queen]);
        this.queen.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].PRICE_LARVAE_1.div(2), _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].SWARM_PRICE_GROWRATE),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].PRICE_QUEEN)
        ], [this.nest]);
        this.nest.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].PRICE_LARVAE_2, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].SWARM_PRICE_GROWRATE),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].PRICE_NEST),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].PRICE_NEST)
        ]);
        this.larva.addProducer(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].PROD_LARVAE);
        this.queen.addProducer(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].PROD_LARVAE);
        this.game.addTeamAction(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].TEAM_PRICE_2);
        this.game.addTeamAction(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].TEAM_PRICE_3);
        this.game.addTwinAction(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].TWIN_PRICE_2);
        this.game.addTwinAction(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].TWIN_PRICE_3);
    };
    Ants.prototype.addWorlds = function () {
        var larvaPre = new _world__WEBPACK_IMPORTED_MODULE_7__["World"]("larvaPre");
        var larvaSuff = new _world__WEBPACK_IMPORTED_MODULE_7__["World"]("larvaSuff");
        var larvaProdBonusUnit = new _baseUnit__WEBPACK_IMPORTED_MODULE_0__["BaseUnit"]("larvaBon");
        this.game.worldBonus.bonusList.push(larvaProdBonusUnit);
        var larvaBonus = new _production_bonus__WEBPACK_IMPORTED_MODULE_5__["ProductionBonus"](larvaProdBonusUnit, new Decimal(0.1));
        this.game.units
            .filter(function (u) { return u.tags.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_1__["Tags"].LARVA); })
            .forEach(function (u) { return u.productionsBonus.push(larvaBonus); });
        [larvaPre, larvaSuff].forEach(function (l) {
            l.productionsBonus.push([larvaProdBonusUnit, new Decimal(1)]);
        });
        _world__WEBPACK_IMPORTED_MODULE_7__["World"].prefix.push(larvaPre);
        _world__WEBPACK_IMPORTED_MODULE_7__["World"].suffix.push(larvaSuff);
        var queenPre = new _world__WEBPACK_IMPORTED_MODULE_7__["World"]("queenPre");
        var queenSuff = new _world__WEBPACK_IMPORTED_MODULE_7__["World"]("queenSuff");
        var queenProdBonusUnit = new _baseUnit__WEBPACK_IMPORTED_MODULE_0__["BaseUnit"]("queenBon");
        this.game.worldBonus.bonusList.push(queenProdBonusUnit);
        var queenBonus = new _production_bonus__WEBPACK_IMPORTED_MODULE_5__["ProductionBonus"](queenProdBonusUnit, new Decimal(0.1));
        this.game.units
            .filter(function (u) { return u.tags.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_1__["Tags"].QUEEN); })
            .forEach(function (u) { return u.productionsBonus.push(queenBonus); });
        [queenPre, queenSuff].forEach(function (l) {
            l.productionsBonus.push([queenProdBonusUnit, new Decimal(1)]);
        });
        _world__WEBPACK_IMPORTED_MODULE_7__["World"].prefix.push(queenPre);
        _world__WEBPACK_IMPORTED_MODULE_7__["World"].suffix.push(queenSuff);
    };
    return Ants;
}(_unit_group__WEBPACK_IMPORTED_MODULE_6__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/bees.ts":
/*!*************************************!*\
  !*** ./src/app/model/units/bees.ts ***!
  \*************************************/
/*! exports provided: Bees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bees", function() { return Bees; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../world */ "./src/app/model/world.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var Bees = /** @class */ (function (_super) {
    __extends(Bees, _super);
    function Bees(game) {
        return _super.call(this, "蜜蜂", game) || this;
    }
    Bees.prototype.declareStuff = function () {
        this.larva = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("Q");
        this.queen = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("P");
        this.nest = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("N");
        this.addUnits([this.nest, this.queen, this.larva]);
        this.larva.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].LARVA);
        this.queen.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].QUEEN);
        this.nest.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].NEST);
    };
    Bees.prototype.setRelations = function () {
        this.larva.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].SWARM_PRICE_GROWRATE)
        ], [this.queen]);
        this.queen.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_1, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].SWARM_PRICE_GROWRATE),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_QUEEN)
        ], [this.nest]);
        this.nest.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_2, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].SWARM_PRICE_GROWRATE),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_NEST),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_NEST)
        ]);
        this.larva.addProducer(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_LARVAE);
        this.queen.addProducer(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_LARVAE);
        this.game.addTeamAction(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TEAM_PRICE_2);
        this.game.addTeamAction(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TEAM_PRICE_3);
        this.game.addTwinAction(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_2);
        this.game.addTwinAction(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_3);
        this.list.forEach(function (u) { return u.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE); });
    };
    Bees.prototype.addWorlds = function () {
        var _this = this;
        var beePre = new _world__WEBPACK_IMPORTED_MODULE_5__["World"]("beePre");
        var beeBio = new _world__WEBPACK_IMPORTED_MODULE_5__["World"]("beeBio");
        var beeSuff = new _world__WEBPACK_IMPORTED_MODULE_5__["World"]("beeSuff");
        [beeBio, beePre, beeSuff].forEach(function (w) {
            w.additionalBugs.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE);
            w.winConditions.push(new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](_this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].BASE_WIN_CONDITION_OTHER.times(0.8)));
        });
        _world__WEBPACK_IMPORTED_MODULE_5__["World"].prefix.push(beePre);
        _world__WEBPACK_IMPORTED_MODULE_5__["World"].suffix.push(beeSuff);
        _world__WEBPACK_IMPORTED_MODULE_5__["World"].biome.push(beeBio);
    };
    return Bees;
}(_unit_group__WEBPACK_IMPORTED_MODULE_4__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/buildings.ts":
/*!******************************************!*\
  !*** ./src/app/model/units/buildings.ts ***!
  \******************************************/
/*! exports provided: Buildings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buildings", function() { return Buildings; });
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../research */ "./src/app/model/research.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Buildings = /** @class */ (function (_super) {
    __extends(Buildings, _super);
    function Buildings(game) {
        return _super.call(this, "建筑", game) || this;
    }
    Buildings.prototype.declareStuff = function () {
        this.generateProducer(this.game.advWorkers);
        this.firstResearch = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("u", this.game.researches);
    };
    Buildings.prototype.setRelations = function () {
        var _this = this;
        this.game.advWorkers.firstResearch.toUnlock.push(this.firstResearch);
        this.firstResearch.prices = this.game.genSciencePrice(_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].RES_PRICE_2.div(50));
        var len = this.list.length;
        var _loop_1 = function (i) {
            var product = this_1.game.advWorkers.list[i];
            var producer = this_1.list[i];
            var research = this_1.researchList[i];
            research.prices = this_1.game.genSciencePrice(_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].RES_PRICE_2);
            this_1.firstResearch.toUnlock.push(research);
            producer.generateBuyAction([
                new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](product, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].PRICE_0),
                new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](product.buyAction.prices[product.buyAction.prices.length - 1].base, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].PRICE_2)
            ]);
            var soilPrice = producer.buyAction.prices.find(function (p) { return p.base === _this.game.materials.soil; });
            if (!soilPrice) {
                soilPrice = new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](this_1.game.materials.soil, 0);
                producer.buyAction.prices.push(soilPrice);
            }
            soilPrice.price = soilPrice.price.plus(_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].PRICE_2);
            product.addProducer(producer);
            product.buyAction.prices.forEach(function (p) {
                return p.base.addProducer(producer, p.price.times(-1));
            });
            this_1.game.addTeamAction(producer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].TEAM_PRICE_2);
            this_1.game.addTwinAction(producer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].TWIN_PRICE_2);
        };
        var this_1 = this;
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        this.setBugType();
    };
    return Buildings;
}(_unit_group__WEBPACK_IMPORTED_MODULE_3__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/engineers.ts":
/*!******************************************!*\
  !*** ./src/app/model/units/engineers.ts ***!
  \******************************************/
/*! exports provided: Engineers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engineers", function() { return Engineers; });
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../research */ "./src/app/model/research.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Engineers = /** @class */ (function (_super) {
    __extends(Engineers, _super);
    function Engineers(game) {
        return _super.call(this, "工程师", game) || this;
    }
    Engineers.prototype.declareStuff = function () {
        this.generateProducer(this.game.buildings);
        this.firstResearch = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("e", this.game.researches);
    };
    Engineers.prototype.setRelations = function () {
        var _this = this;
        this.game.buildings.firstResearch.toUnlock.push(this.firstResearch);
        this.firstResearch.prices = this.game.genSciencePrice(_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].RES_PRICE_3.div(50));
        var len = this.list.length;
        var _loop_1 = function (i) {
            var product = this_1.game.buildings.list[i];
            var producer = this_1.list[i];
            var research = this_1.researchList[i];
            research.prices = this_1.game.genSciencePrice(_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].RES_PRICE_3);
            this_1.firstResearch.toUnlock.push(research);
            producer.generateBuyAction([
                new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](product, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].PRICE_ENG),
                new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](product.buyAction.prices[product.buyAction.prices.length - 1].base, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].PRICE_3)
            ]);
            var cryPrice = producer.buyAction.prices.find(function (p) { return p.base === _this.game.materials.crystal; });
            if (!cryPrice) {
                cryPrice = new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](this_1.game.materials.crystal, 0);
                producer.buyAction.prices.push(cryPrice);
            }
            cryPrice.price = cryPrice.price.plus(_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].PRICE_3);
            product.addProducer(producer);
            product.buyAction.prices.forEach(function (p) {
                return p.base.addProducer(producer, p.price.times(-1));
            });
            this_1.game.addTeamAction(producer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].TEAM_PRICE_3);
            this_1.game.addTwinAction(producer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].TWIN_PRICE_3);
        };
        var this_1 = this;
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        this.setBugType();
    };
    return Engineers;
}(_unit_group__WEBPACK_IMPORTED_MODULE_3__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/gatherers.ts":
/*!******************************************!*\
  !*** ./src/app/model/units/gatherers.ts ***!
  \******************************************/
/*! exports provided: Gatherers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gatherers", function() { return Gatherers; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Gatherers = /** @class */ (function (_super) {
    __extends(Gatherers, _super);
    function Gatherers(game) {
        return _super.call(this, "采集者", game) || this;
    }
    Gatherers.prototype.declareStuff = function () {
        this.drone = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("e");
        this.geologist = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("h");
        this.student = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("i");
        this.foraggingBee = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("Z");
        this.carpenterBee = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("cb");
        this.studentBee = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("sb");
        this.foraggingWasp = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("x");
        this.hornetWasp = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("hw");
        this.smartWasp = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("sw");
        this.hunter = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("hu");
        this.majorWorker = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("mw");
        this.addUnits([
            this.drone,
            this.geologist,
            this.student,
            this.foraggingBee,
            this.carpenterBee,
            this.studentBee,
            this.foraggingWasp,
            this.hornetWasp,
            this.smartWasp,
            this.hunter,
            this.majorWorker
        ]);
    };
    Gatherers.prototype.setRelations = function () {
        var _this = this;
        this.list.forEach(function (u) {
            if (u instanceof _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]) {
                _this.game.addTeamAction(u, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TEAM_PRICE_0);
                _this.game.addTwinAction(u, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_0);
            }
        });
        this.setAntsRelations();
        this.setBeeRelations();
        this.setMajorRelations();
        this.setWaspRelations();
        this.majorWorker.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].SUPER_MAJOR);
    };
    Gatherers.prototype.setAntsRelations = function () {
        this.drone.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.geologist]);
        this.drone.unlocked = true;
        this.geologist.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.student]);
        this.game.materials.food.addProducer(this.drone, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN);
        this.game.materials.crystal.addProducer(this.geologist, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN);
        this.game.materials.food.addProducer(this.geologist, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_GAN);
        this.student.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.game.tabs.lab, this.game.researches.team1]);
        this.game.materials.science.addProducer(this.student, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN);
        this.game.materials.crystal.addProducer(this.student, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_GAN);
    };
    Gatherers.prototype.setBeeRelations = function () {
        this.foraggingBee.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.bees.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.carpenterBee]);
        this.game.materials.food.addProducer(this.foraggingBee);
        this.foraggingBee.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE);
        this.carpenterBee.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.bees.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.studentBee]);
        this.game.materials.food.addProducer(this.carpenterBee, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_GAN);
        this.game.materials.soil.addProducer(this.carpenterBee, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN.times(0.4));
        this.game.materials.crystal.addProducer(this.carpenterBee, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN.times(0.6));
        this.carpenterBee.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE);
        this.studentBee.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.bees.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.game.tabs.lab, this.game.researches.team1]);
        this.game.materials.science.addProducer(this.studentBee, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN);
        this.game.materials.crystal.addProducer(this.studentBee, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_GAN);
        this.studentBee.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE);
    };
    Gatherers.prototype.setWaspRelations = function () {
        this.foraggingWasp.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.wasps.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.hornetWasp]);
        this.game.materials.food.addProducer(this.foraggingWasp, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN);
        this.foraggingWasp.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP);
        this.hornetWasp.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.wasps.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.smartWasp]);
        this.game.materials.crystal.addProducer(this.hornetWasp, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN);
        this.game.materials.food.addProducer(this.hornetWasp, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_GAN);
        this.hornetWasp.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP);
        this.smartWasp.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.wasps.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ]);
        this.game.materials.science.addProducer(this.smartWasp, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN);
        this.game.materials.crystal.addProducer(this.smartWasp, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_GAN);
        this.smartWasp.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP);
    };
    Gatherers.prototype.setMajorRelations = function () {
        this.hunter.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ], [this.majorWorker]);
        this.game.materials.food.addProducer(this.hunter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN);
        this.hunter.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].SUPER_MAJOR);
        this.majorWorker.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0)
        ]);
        this.majorWorker.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].SUPER_MAJOR);
        this.game.materials.soil.addProducer(this.majorWorker, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN.times(0.7));
        this.game.materials.crystal.addProducer(this.majorWorker, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_GAN.times(0.3));
        this.game.materials.food.addProducer(this.majorWorker, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_GAN);
    };
    return Gatherers;
}(_unit_group__WEBPACK_IMPORTED_MODULE_4__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/helpers.ts":
/*!****************************************!*\
  !*** ./src/app/model/units/helpers.ts ***!
  \****************************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./src/app/model/helper.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../research */ "./src/app/model/research.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../world */ "./src/app/model/world.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Helpers = /** @class */ (function (_super) {
    __extends(Helpers, _super);
    function Helpers(game) {
        return _super.call(this, "助手", game) || this;
    }
    Helpers.prototype.declareStuff = function () {
        this.leafCutter = new _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"]("lf", 0.1, this.game);
        this.minerHelper = new _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"]("mh", 0.1, this.game);
        this.soilHelper = new _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"]("sh", 0.1, this.game);
        this.general = new _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"]("HB", 0.1, this.game);
        this.headquarter = new _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"]("HQ", 0.1, this.game);
        this.addUnits([
            this.leafCutter,
            this.minerHelper,
            this.soilHelper,
            this.general,
            this.headquarter
        ]);
        this.majorHelperRes = new _research__WEBPACK_IMPORTED_MODULE_4__["Research"]("sm", this.game.researches);
    };
    Helpers.prototype.setRelations = function () {
        var _this = this;
        //#region Leaf Cutter
        this.leafCutter.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.game.addTwinAction(this.leafCutter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_1);
        this.game.materials.food.addProducer(this.leafCutter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.soil.addProducer(this.leafCutter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.units
            .filter(function (u) { return u.tags.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].FARMER); })
            .forEach(function (u) { return u.productionsEfficiency.push(_this.leafCutter.helpBonus); });
        this.leafCutter.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].SUPER_MAJOR);
        //#endregion
        //#region Miner Helper
        this.minerHelper.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.game.addTwinAction(this.minerHelper, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_1);
        this.game.materials.food.addProducer(this.minerHelper, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.soil.addProducer(this.minerHelper, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.units
            .filter(function (u) { return u.tags.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].MINER); })
            .forEach(function (u) { return u.productionsEfficiency.push(_this.minerHelper.helpBonus); });
        this.minerHelper.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].SUPER_MAJOR);
        //#endregion
        //#region Soil Helper
        this.soilHelper.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.game.addTwinAction(this.soilHelper, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_1);
        this.game.materials.food.addProducer(this.soilHelper, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.soil.addProducer(this.soilHelper, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.units
            .filter(function (u) { return u.tags.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].SOIL_G); })
            .forEach(function (u) { return u.productionsEfficiency.push(_this.soilHelper.helpBonus); });
        this.soilHelper.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].SUPER_MAJOR);
        //#endregion
        this.game.buildings.firstResearch.toUnlock.push(this.majorHelperRes);
        this.majorHelperRes.prices = this.game.genSciencePrice(_CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].RES_PRICE_2.times(5));
        this.majorHelperRes.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].SUPER_MAJOR;
        [this.leafCutter, this.minerHelper, this.soilHelper].forEach(function (u) {
            var res = new _research__WEBPACK_IMPORTED_MODULE_4__["Research"](u.id, _this.game.researches);
            res.toUnlock.push(u);
            res.prices = _this.game.genSciencePrice(_CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].RES_PRICE_2.times(10));
            _this.majorHelperRes.toUnlock.push(res);
        });
        this.general.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_2)
        ]);
        this.headquarter.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_2)
        ]);
        this.game.killers.list.forEach(function (k) {
            return k.productionsAll.push(_this.general.helpBonus, _this.headquarter.helpBonus);
        });
    };
    Helpers.prototype.addWorlds = function () {
        var majorPre = new _world__WEBPACK_IMPORTED_MODULE_6__["World"]("majorPre");
        var majorSuff = new _world__WEBPACK_IMPORTED_MODULE_6__["World"]("majorSuff");
        [majorPre, majorSuff].forEach(function (w) {
            w.additionalBugs.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].SUPER_MAJOR);
        });
        _world__WEBPACK_IMPORTED_MODULE_6__["World"].prefix.push(majorPre);
        _world__WEBPACK_IMPORTED_MODULE_6__["World"].suffix.push(majorSuff);
    };
    return Helpers;
}(_unit_group__WEBPACK_IMPORTED_MODULE_5__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/malus-killer.ts":
/*!*********************************************!*\
  !*** ./src/app/model/units/malus-killer.ts ***!
  \*********************************************/
/*! exports provided: MalusKiller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MalusKiller", function() { return MalusKiller; });
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../research */ "./src/app/model/research.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../world */ "./src/app/model/world.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var MalusKiller = /** @class */ (function (_super) {
    __extends(MalusKiller, _super);
    function MalusKiller(game) {
        var _this = _super.call(this, "军队", game) || this;
        _this.price = new Decimal(500);
        return _this;
    }
    MalusKiller.prototype.declareStuff = function () {
        this.foodMalusKiller = new _full_unit__WEBPACK_IMPORTED_MODULE_1__["FullUnit"]("F");
        this.soilMalusKiller = new _full_unit__WEBPACK_IMPORTED_MODULE_1__["FullUnit"]("W");
        this.crystalMalusKiller = new _full_unit__WEBPACK_IMPORTED_MODULE_1__["FullUnit"]("C");
        this.scienceMalusKiller = new _full_unit__WEBPACK_IMPORTED_MODULE_1__["FullUnit"]("S");
        this.addUnits([
            this.foodMalusKiller,
            this.soilMalusKiller,
            this.crystalMalusKiller,
            this.scienceMalusKiller
        ]);
        this.bonusRes = new _research__WEBPACK_IMPORTED_MODULE_4__["Research"]("aow", this.game.researches);
    };
    MalusKiller.prototype.setRelations = function () {
        var _this = this;
        //  Production
        this.game.worldMalus.foodMalus1.addProducer(this.foodMalusKiller, new Decimal(-0.1));
        this.game.worldMalus.soilMalus1.addProducer(this.soilMalusKiller, new Decimal(-0.1));
        this.game.worldMalus.crystalMalus1.addProducer(this.crystalMalusKiller, new Decimal(-0.1));
        this.game.worldMalus.scienceMalus1.addProducer(this.scienceMalusKiller, new Decimal(-0.1));
        //  Buy actions
        this.foodMalusKiller.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_2__["Price"](this.game.materials.food, this.price, 1.1)
        ]);
        this.soilMalusKiller.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_2__["Price"](this.game.materials.food, this.price, 1.1)
        ]);
        this.crystalMalusKiller.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_2__["Price"](this.game.materials.food, this.price, 1.1)
        ]);
        this.scienceMalusKiller.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_2__["Price"](this.game.materials.food, this.price, 1.1)
        ]);
        var prodBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_3__["ProductionBonus"](this.game.worldBonus.killBonus, new Decimal(0.1));
        var prodBon2 = new _production_bonus__WEBPACK_IMPORTED_MODULE_3__["ProductionBonus"](this.bonusRes, new Decimal(0.1));
        this.bonusRes.prices = this.game.genSciencePrice(_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].PRICE_2);
        //  Team and Twin
        this.list.forEach(function (u) {
            if (u instanceof _full_unit__WEBPACK_IMPORTED_MODULE_1__["FullUnit"]) {
                _this.game.addTeamAction(u, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].TEAM_PRICE_2);
                _this.game.addTwinAction(u, _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["CONSTS"].TWIN_PRICE_2);
                u.productionsAll.push(prodBon);
                u.productionsAll.push(prodBon2);
            }
        });
    };
    MalusKiller.prototype.addWorlds = function () {
        var _this = this;
        var worldPre = new _world__WEBPACK_IMPORTED_MODULE_6__["World"]("mkPre");
        var worldBio = new _world__WEBPACK_IMPORTED_MODULE_6__["World"]("mkBio");
        var worldSuff = new _world__WEBPACK_IMPORTED_MODULE_6__["World"]("mkSuff");
        [worldPre, worldBio, worldSuff].forEach(function (w) {
            w.productionsAll.push([_this.game.worldBonus.killBonus, new Decimal(1)]);
        });
        worldPre.startingUnit.push([this.game.helpers.general, new Decimal(0)]);
        worldBio.startingUnit.push([this.game.helpers.headquarter, new Decimal(0)]);
        worldSuff.startingUnlocked.push(this.bonusRes);
        _world__WEBPACK_IMPORTED_MODULE_6__["World"].prefix.push(worldPre);
        _world__WEBPACK_IMPORTED_MODULE_6__["World"].biome.push(worldBio);
        _world__WEBPACK_IMPORTED_MODULE_6__["World"].suffix.push(worldSuff);
    };
    return MalusKiller;
}(_unit_group__WEBPACK_IMPORTED_MODULE_5__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/materials.ts":
/*!******************************************!*\
  !*** ./src/app/model/units/materials.ts ***!
  \******************************************/
/*! exports provided: Materials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Materials", function() { return Materials; });
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world */ "./src/app/model/world.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Materials = /** @class */ (function (_super) {
    __extends(Materials, _super);
    function Materials(game) {
        return _super.call(this, "材料", game) || this;
    }
    Materials.prototype.declareStuff = function () {
        this.food = new _full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]("f");
        this.soil = new _full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]("w");
        this.crystal = new _full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]("c");
        this.science = new _full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]("s");
        this.food.unlocked = true;
        this.addUnits([this.food, this.soil, this.crystal, this.science]);
        this.list.forEach(function (m) { return (m.winNonLiner = false); });
    };
    Materials.prototype.addWorlds = function () {
        var length = this.list.length;
        for (var i = 0; i < length; i++) {
            var world = new _world__WEBPACK_IMPORTED_MODULE_2__["World"](this.list[i].id + "Bio");
            _world__WEBPACK_IMPORTED_MODULE_2__["World"].biome.push(world);
        }
    };
    return Materials;
}(_unit_group__WEBPACK_IMPORTED_MODULE_1__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/researches.ts":
/*!*******************************************!*\
  !*** ./src/app/model/units/researches.ts ***!
  \*******************************************/
/*! exports provided: Researches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Researches", function() { return Researches; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../research */ "./src/app/model/research.ts");



var Researches = /** @class */ (function () {
    function Researches(researchEmitter, game) {
        this.researchEmitter = researchEmitter;
        this.game = game;
        this.researches = new Array();
        this.masteryResDone = 0;
    }
    Researches.prototype.declareStuff = function () {
        this.team1 = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("t", this);
        this.team2 = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("T", this);
        this.twin = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("W", this);
        this.travel = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("r", this);
        this.mastery = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("M", this);
        this.harvesting = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("h", this, true);
        this.free1hWarp = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("1", this);
        this.free2hWarp = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("2", this);
        this.free3hWarp = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("3", this);
        this.free1hWarp.autoBuyable = false;
        this.free2hWarp.autoBuyable = false;
        this.free3hWarp.autoBuyable = false;
        this.spawn = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("SP", this, true);
        this.overNineThousand = new _research__WEBPACK_IMPORTED_MODULE_2__["Research"]("ont", this);
        this.overNineThousand.autoBuyable = false;
        this.team1.unlocked = true;
        this.reloadLists();
    };
    Researches.prototype.setRelations = function (science, game) {
        this.team1.genPrice(new Decimal(100), science);
        this.team2.genPrice(new Decimal(1e3), science);
        this.twin.genPrice(new Decimal(1e6), science);
        this.travel.genPrice(new Decimal(1e13), science);
        this.mastery.genPrice(new Decimal(1e20), science);
        this.overNineThousand.genPrice(new Decimal(1e20), science);
        this.harvesting.prices = game.genSciencePrice(1e3, 4);
        this.free1hWarp.prices = game.genSciencePrice(1);
        this.free2hWarp.prices = game.genSciencePrice(1);
        this.free3hWarp.prices = game.genSciencePrice(1);
        this.spawn.prices = game.genSciencePrice(1e6, 4);
        this.team1.toUnlock.push(this.team2);
        this.team2.toUnlock.push(this.twin);
        game.advWorkers.firstResearch.toUnlock.push(this.harvesting);
        var bonus = new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.harvesting, new Decimal(1));
        game.gatherers.list.forEach(function (u) {
            u.productionsEfficiency.push(bonus);
        });
        this.game.buildings.firstResearch.toUnlock.push(this.spawn);
        this.game.engineers.firstResearch.toUnlock.push(this.travel);
        this.travel.toUnlock.push(game.tabs.travel, this.mastery);
        this.mastery.toUnlock.push(game.tabs.mastery, this.overNineThousand);
        this.free1hWarp.toUnlock.push(this.free2hWarp);
        this.free1hWarp.onBuy = function () {
            game.warp(3600 * 1000);
        };
        this.free2hWarp.toUnlock.push(this.free3hWarp);
        this.free2hWarp.onBuy = function () {
            game.warp(2 * 3600 * 1000);
        };
        this.free3hWarp.onBuy = function () {
            game.warp(3 * 3600 * 1000);
        };
        var larvaeBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.spawn, new Decimal(0.5));
        this.game.units
            .filter(function (u) { return u.tags.includes(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].LARVA); })
            .forEach(function (l) { return l.productionsBonus.push(larvaeBon); });
    };
    Researches.prototype.reset = function (science) {
        this.reloadMasteryPrice(science);
        this.researches.forEach(function (r) {
            r.reset();
        });
        this.mastery.reload();
        this.team1.unlocked = true;
        this.reloadLists();
    };
    Researches.prototype.reloadLists = function () {
        this.toDo = this.researches.filter(function (r) {
            return r.unlocked &&
                (!r.done || (r.unlimited && r.quantity.lt(r.maxAutoBuyLevel)));
        });
        this.done = this.researches.filter(function (r) {
            return r.unlocked &&
                r.done &&
                (!r.unlimited || r.quantity.gte(r.maxAutoBuyLevel));
        });
        this.researchEmitter.emit("");
    };
    Researches.prototype.reloadMasteryPrice = function (science) {
        this.mastery.genPrice(new Decimal(1e18).times(Decimal.pow(2, this.masteryResDone)), science);
        this.mastery.genPrice(new Decimal(1e20).times(Decimal.pow(2, this.masteryResDone)), science);
    };
    //#region Save and load
    Researches.prototype.getSave = function () {
        return {
            res: this.researches.map(function (r) { return r.getSave(); }),
            mrd: this.masteryResDone
        };
    };
    Researches.prototype.restore = function (data, science) {
        if ("res" in data) {
            var _loop_1 = function (r) {
                var res = this_1.researches.find(function (u) { return u.id === r.i; });
                if (res)
                    res.restore(r);
            };
            var this_1 = this;
            for (var _i = 0, _a = data.res; _i < _a.length; _i++) {
                var r = _a[_i];
                _loop_1(r);
            }
            this.masteryResDone =
                "mrd" in data ? data.mrd : this.game.allMateries.totalEarned;
            this.reloadMasteryPrice(science);
            this.reloadLists();
            return true;
        }
        else {
            return false;
        }
    };
    return Researches;
}());



/***/ }),

/***/ "./src/app/model/units/special.ts":
/*!****************************************!*\
  !*** ./src/app/model/units/special.ts ***!
  \****************************************/
/*! exports provided: Special */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Special", function() { return Special; });
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../world */ "./src/app/model/world.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Special = /** @class */ (function (_super) {
    __extends(Special, _super);
    function Special(game) {
        return _super.call(this, "特殊", game) || this;
    }
    Special.prototype.declareStuff = function () {
        this.foodSupply = new _full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]("fS");
        this.soilSupply = new _full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]("wS");
        this.crystalSupply = new _full_unit__WEBPACK_IMPORTED_MODULE_0__["FullUnit"]("cS");
        this.addUnits([this.foodSupply, this.soilSupply, this.crystalSupply]);
    };
    Special.prototype.setRelations = function () {
        this.foodSupply.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](this.game.materials.food, new Decimal(1e3), 1.5)
        ]);
        this.soilSupply.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](this.game.materials.soil, new Decimal(1e3), 1.5)
        ]);
        this.crystalSupply.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_1__["Price"](this.game.materials.crystal, new Decimal(1e3), 1.5)
        ]);
        this.game.materials.food.addProducer(this.foodSupply, new Decimal(30));
        this.game.materials.soil.addProducer(this.soilSupply, new Decimal(30));
        this.game.materials.crystal.addProducer(this.crystalSupply, new Decimal(30));
    };
    Special.prototype.addWorlds = function () {
        [this.foodSupply, this.soilSupply, this.crystalSupply].forEach(function (supp) {
            var pre = new _world__WEBPACK_IMPORTED_MODULE_3__["World"](supp.id + "Pre");
            var suff = new _world__WEBPACK_IMPORTED_MODULE_3__["World"](supp.id + "Suff");
            [pre, suff].forEach(function (w) { return w.startingUnit.push([supp, new Decimal(1)]); });
            _world__WEBPACK_IMPORTED_MODULE_3__["World"].prefix.push(pre);
            _world__WEBPACK_IMPORTED_MODULE_3__["World"].suffix.push(suff);
        });
    };
    return Special;
}(_unit_group__WEBPACK_IMPORTED_MODULE_2__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/wasps.ts":
/*!**************************************!*\
  !*** ./src/app/model/units/wasps.ts ***!
  \**************************************/
/*! exports provided: Wasps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wasps", function() { return Wasps; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../world */ "./src/app/model/world.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var Wasps = /** @class */ (function (_super) {
    __extends(Wasps, _super);
    function Wasps(game) {
        return _super.call(this, "黄蜂", game) || this;
    }
    Wasps.prototype.declareStuff = function () {
        this.larva = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("y");
        this.queen = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("z");
        this.nest = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("r");
        this.addUnits([this.nest, this.queen, this.larva]);
        this.larva.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].LARVA);
        this.queen.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].QUEEN);
        this.nest.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].NEST);
    };
    Wasps.prototype.setRelations = function () {
        this.larva.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_0, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].SWARM_PRICE_GROWRATE)
        ], [this.queen]);
        this.queen.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_1, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].SWARM_PRICE_GROWRATE),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_QUEEN)
        ], [this.nest]);
        this.nest.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_2, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].SWARM_PRICE_GROWRATE),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_NEST),
            new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_NEST)
        ]);
        this.larva.addProducer(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_LARVAE);
        this.queen.addProducer(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_LARVAE);
        this.game.addTeamAction(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TEAM_PRICE_2);
        this.game.addTeamAction(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TEAM_PRICE_3);
        this.game.addTwinAction(this.queen, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_2);
        this.game.addTwinAction(this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_3);
        this.list.forEach(function (u) { return u.setBugType(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP); });
    };
    Wasps.prototype.addWorlds = function () {
        var _this = this;
        var waspPre = new _world__WEBPACK_IMPORTED_MODULE_5__["World"]("waspPre");
        var waspBio = new _world__WEBPACK_IMPORTED_MODULE_5__["World"]("waspBio");
        var waspSuff = new _world__WEBPACK_IMPORTED_MODULE_5__["World"]("waspSuff");
        [waspBio, waspPre, waspSuff].forEach(function (w) {
            w.additionalBugs.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP);
            w.winConditions.push(new _price__WEBPACK_IMPORTED_MODULE_3__["Price"](_this.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].BASE_WIN_CONDITION_OTHER.times(1.75)));
        });
        _world__WEBPACK_IMPORTED_MODULE_5__["World"].prefix.push(waspPre);
        _world__WEBPACK_IMPORTED_MODULE_5__["World"].suffix.push(waspSuff);
        _world__WEBPACK_IMPORTED_MODULE_5__["World"].biome.push(waspBio);
    };
    return Wasps;
}(_unit_group__WEBPACK_IMPORTED_MODULE_4__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/workers.ts":
/*!****************************************!*\
  !*** ./src/app/model/units/workers.ts ***!
  \****************************************/
/*! exports provided: Workers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workers", function() { return Workers; });
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _full_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _masteries_mastery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masteries/mastery */ "./src/app/model/masteries/mastery.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../price */ "./src/app/model/price.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../research */ "./src/app/model/research.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var Workers = /** @class */ (function (_super) {
    __extends(Workers, _super);
    function Workers(game) {
        return _super.call(this, "工人", game) || this;
    }
    Workers.prototype.declareStuff = function () {
        var _this = this;
        this.farmer = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("a");
        this.farmer.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].FARMER);
        this.carpenter = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("b");
        this.carpenter.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].SOIL_G);
        this.miner = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("m");
        this.miner.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].MINER);
        this.scientist = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("d");
        this.beeFarmer = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("A");
        this.beeFarmer.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE;
        this.beeFarmer.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].FARMER);
        this.beeCarpenter = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("B");
        this.beeCarpenter.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE;
        this.beeCarpenter.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].SOIL_G);
        this.beeMiner = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("E");
        this.beeMiner.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE;
        this.beeMiner.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].MINER);
        this.beeScientist = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("D");
        this.beeScientist.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].BEE;
        this.waspFarmer = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("v");
        this.waspFarmer.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP;
        this.waspFarmer.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].FARMER);
        this.waspCarpenter = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("V");
        this.waspCarpenter.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP;
        this.waspCarpenter.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].SOIL_G);
        this.waspMiner = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("o");
        this.waspMiner.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP;
        this.waspMiner.tags.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_0__["Tags"].MINER);
        this.waspScientist = new _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]("p");
        this.waspScientist.bugType = _bugsTypes__WEBPACK_IMPORTED_MODULE_0__["BugTypes"].WASP;
        this.scientificMethod1 = new _research__WEBPACK_IMPORTED_MODULE_6__["Research"]("scie1", this.game.researches, true);
        this.addUnits([
            this.farmer,
            this.carpenter,
            this.miner,
            this.scientist,
            this.beeFarmer,
            this.beeCarpenter,
            this.beeMiner,
            this.beeScientist,
            this.waspFarmer,
            this.waspCarpenter,
            this.waspMiner,
            this.waspScientist
        ]);
        this.firstResearch = new _research__WEBPACK_IMPORTED_MODULE_6__["Research"]("w", this.game.researches);
        this.list.forEach(function (u) {
            var res = new _research__WEBPACK_IMPORTED_MODULE_6__["Research"](u.id, _this.game.researches);
            res.toUnlock = [u];
            res.bugType = u.bugType;
            _this.researchList.push(res);
        });
        this.betterWorkers = new _research__WEBPACK_IMPORTED_MODULE_6__["Research"]("wo", this.game.researches, true);
        this.efficientWorkers = new _research__WEBPACK_IMPORTED_MODULE_6__["Research"]("we", this.game.researches, true);
    };
    Workers.prototype.setRelations = function () {
        var _this = this;
        this.farmer.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.crystal, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.carpenter.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1.times(2))
        ]);
        this.miner.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.scientist.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.ants.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.crystal, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.game.materials.food.addProducer(this.farmer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.crystal.addProducer(this.farmer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.soil.addProducer(this.carpenter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.food.addProducer(this.carpenter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.crystal.addProducer(this.miner, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.soil.addProducer(this.miner, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.science.addProducer(this.scientist, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.crystal.addProducer(this.scientist, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        //#region Bees
        this.beeFarmer.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.bees.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.crystal, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.beeCarpenter.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.bees.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1.times(2))
        ]);
        this.beeMiner.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.bees.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.beeScientist.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.bees.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.crystal, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.game.materials.food.addProducer(this.beeFarmer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.soil.addProducer(this.beeFarmer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.soil.addProducer(this.beeCarpenter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.food.addProducer(this.beeCarpenter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.crystal.addProducer(this.beeMiner, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.food.addProducer(this.beeMiner, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.science.addProducer(this.beeScientist, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.crystal.addProducer(this.beeScientist, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        //#endregion
        //#region Wasps
        this.waspFarmer.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.wasps.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.crystal, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.waspCarpenter.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.wasps.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1.times(2))
        ]);
        this.waspMiner.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.wasps.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.soil, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.waspScientist.generateBuyAction([
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.wasps.larva, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_LARVAE_0, 1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.food, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1),
            new _price__WEBPACK_IMPORTED_MODULE_4__["Price"](this.game.materials.crystal, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PRICE_1)
        ]);
        this.game.materials.food.addProducer(this.waspFarmer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.soil.addProducer(this.waspFarmer, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.soil.addProducer(this.waspCarpenter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.food.addProducer(this.waspCarpenter, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.crystal.addProducer(this.waspMiner, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.food.addProducer(this.waspMiner, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        this.game.materials.science.addProducer(this.waspScientist, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].PROD_1);
        this.game.materials.crystal.addProducer(this.waspScientist, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].CONSUME_1);
        //#endregion
        this.list.forEach(function (u) {
            if (u instanceof _full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]) {
                _this.game.addTeamAction(u, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TEAM_PRICE_1);
                _this.game.addTwinAction(u, _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].TWIN_PRICE_2);
            }
        });
        this.firstResearch.prices = this.game.genSciencePrice(new Decimal(1e3));
        this.researchList.forEach(function (r) { return (r.prices = _this.game.genSciencePrice(_CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CONSTS"].RES_PRICE_1)); });
        this.firstResearch.toUnlock = this.researchList;
        this.scientificMethod1.prices = this.game.genSciencePrice(1e4, 10);
        this.researchList[3].toUnlock.push(this.scientificMethod1);
        var scieMetBon = new _production_bonus__WEBPACK_IMPORTED_MODULE_5__["ProductionBonus"](this.scientificMethod1, new Decimal(0.5));
        scieMetBon.getMultiplier = function () {
            return new Decimal(1 + _this.game.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_3__["MasteryTypes"].SCIENTIFIC_METHOD));
        };
        this.game.materials.science.productionsBonus.push(scieMetBon);
        this.betterWorkers.prices = this.game.genSciencePrice(1e4, 4);
        this.efficientWorkers.prices = this.game.genSciencePrice(5e4, 5);
        var bonusWo = new _production_bonus__WEBPACK_IMPORTED_MODULE_5__["ProductionBonus"](this.betterWorkers, new Decimal(0.3));
        this.list.forEach(function (u) {
            u.productionsAll.push(bonusWo);
        });
        var bonusEff = new _production_bonus__WEBPACK_IMPORTED_MODULE_5__["ProductionBonus"](this.efficientWorkers, new Decimal(0.1));
        this.list.forEach(function (u) {
            u.productionsEfficiency.push(bonusEff);
        });
        this.firstResearch.toUnlock.push(this.betterWorkers, this.efficientWorkers);
        this.setBugType();
    };
    return Workers;
}(_unit_group__WEBPACK_IMPORTED_MODULE_7__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/units/world-bonus.ts":
/*!********************************************!*\
  !*** ./src/app/model/units/world-bonus.ts ***!
  \********************************************/
/*! exports provided: WorldBonus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldBonus", function() { return WorldBonus; });
/* harmony import */ var _baseUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseUnit */ "./src/app/model/baseUnit.ts");
/* harmony import */ var _production_bonus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../production-bonus */ "./src/app/model/production-bonus.ts");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world */ "./src/app/model/world.ts");



var WorldBonus = /** @class */ (function () {
    function WorldBonus() {
    }
    WorldBonus.prototype.declareStuff = function () {
        this.foodBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_0__["BaseUnit"]("1");
        this.soilBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_0__["BaseUnit"]("2");
        this.crystalBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_0__["BaseUnit"]("3");
        this.scienceBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_0__["BaseUnit"]("4");
        this.killBonus = new _baseUnit__WEBPACK_IMPORTED_MODULE_0__["BaseUnit"]("5");
        this.bonusList = [
            this.foodBonus,
            this.soilBonus,
            this.crystalBonus,
            this.scienceBonus,
            this.killBonus
        ];
    };
    WorldBonus.prototype.setRelations = function (game) {
        game.materials.food.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.foodBonus, WorldBonus.bonusValue));
        game.materials.soil.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.soilBonus, WorldBonus.bonusValue));
        game.materials.crystal.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.crystalBonus, WorldBonus.bonusValue));
        game.materials.science.productionsBonus.push(new _production_bonus__WEBPACK_IMPORTED_MODULE_1__["ProductionBonus"](this.scienceBonus, WorldBonus.bonusValue));
    };
    WorldBonus.prototype.reset = function () {
        this.bonusList.forEach(function (b) {
            b.unlocked = false;
            b.quantity = new Decimal(0);
        });
    };
    WorldBonus.prototype.addWorlds = function () {
        [
            this.foodBonus,
            this.soilBonus,
            this.crystalBonus,
            this.scienceBonus
        ].forEach(function (b) {
            var pre = new _world__WEBPACK_IMPORTED_MODULE_2__["World"](b.id + "Pre");
            pre.productionsBonus = [[b, new Decimal(1)]];
            _world__WEBPACK_IMPORTED_MODULE_2__["World"].prefix.push(pre);
            var suff = new _world__WEBPACK_IMPORTED_MODULE_2__["World"](b.id + "Suf");
            suff.productionsBonus = [[b, new Decimal(1)]];
            _world__WEBPACK_IMPORTED_MODULE_2__["World"].suffix.push(suff);
        });
    };
    WorldBonus.bonusValue = new Decimal(0.3);
    return WorldBonus;
}());



/***/ }),

/***/ "./src/app/model/units/world-malus.ts":
/*!********************************************!*\
  !*** ./src/app/model/units/world-malus.ts ***!
  \********************************************/
/*! exports provided: WorldMalus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldMalus", function() { return WorldMalus; });
/* harmony import */ var _malus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../malus */ "./src/app/model/malus.ts");
/* harmony import */ var _unit_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-group */ "./src/app/model/unit-group.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var WorldMalus = /** @class */ (function (_super) {
    __extends(WorldMalus, _super);
    function WorldMalus(game) {
        return _super.call(this, "敌人", game) || this;
    }
    WorldMalus.prototype.declareStuff = function () {
        this.foodMalus1 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mf1");
        this.foodMalus2 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mf2");
        this.foodMalus3 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mf3");
        this.soilMalus1 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mw1");
        this.soilMalus2 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mw2");
        this.soilMalus3 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mw3");
        this.crystalMalus1 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mc1");
        this.crystalMalus2 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mc2");
        this.crystalMalus3 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Mc3");
        this.scienceMalus1 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Ms1");
        this.scienceMalus2 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Ms2");
        this.scienceMalus3 = new _malus__WEBPACK_IMPORTED_MODULE_0__["Malus"]("Ms3");
        this.foodMalus1.first = true;
        this.soilMalus1.first = true;
        this.crystalMalus1.first = true;
        this.scienceMalus1.first = true;
        this.addUnits([
            this.foodMalus3,
            this.foodMalus2,
            this.foodMalus1,
            this.soilMalus3,
            this.soilMalus2,
            this.soilMalus1,
            this.crystalMalus3,
            this.crystalMalus2,
            this.crystalMalus1,
            this.scienceMalus3,
            this.scienceMalus2,
            this.scienceMalus1
        ]);
    };
    WorldMalus.prototype.setRelations = function () {
        this.foodMalus1.addProducer(this.foodMalus2, new Decimal(0.01));
        this.foodMalus2.addProducer(this.foodMalus3, new Decimal(0.01));
        this.soilMalus1.addProducer(this.soilMalus2, new Decimal(0.01));
        this.soilMalus2.addProducer(this.soilMalus3, new Decimal(0.01));
        this.crystalMalus1.addProducer(this.crystalMalus2, new Decimal(0.01));
        this.crystalMalus2.addProducer(this.crystalMalus3, new Decimal(0.01));
        this.scienceMalus1.addProducer(this.scienceMalus2, new Decimal(0.01));
        this.scienceMalus2.addProducer(this.scienceMalus3, new Decimal(0.01));
        this.foodMalus1.malusType = this.game.materials.food;
        this.soilMalus1.malusType = this.game.materials.soil;
        this.crystalMalus1.malusType = this.game.materials.crystal;
        this.scienceMalus1.malusType = this.game.materials.science;
        this.game.materials.food.malus = this.foodMalus1;
        this.game.materials.soil.malus = this.soilMalus1;
        this.game.materials.crystal.malus = this.crystalMalus1;
        this.game.materials.science.malus = this.scienceMalus1;
    };
    return WorldMalus;
}(_unit_group__WEBPACK_IMPORTED_MODULE_1__["UnitGroup"]));



/***/ }),

/***/ "./src/app/model/utility.ts":
/*!**********************************!*\
  !*** ./src/app/model/utility.ts ***!
  \**********************************/
/*! exports provided: Utility, ProductionSorter, TotalProductionSorter, UnitQuantitySorter, UnitBoughtSorter, UnitTeamSorter, UnitTwinSorter, UnitAutoHatchSorter, UnitAutoTeamSorter, UnitAutoTwinSorter, RunExpSorter, RunExpPerSecSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utility", function() { return Utility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionSorter", function() { return ProductionSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalProductionSorter", function() { return TotalProductionSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitQuantitySorter", function() { return UnitQuantitySorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitBoughtSorter", function() { return UnitBoughtSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitTeamSorter", function() { return UnitTeamSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitTwinSorter", function() { return UnitTwinSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitAutoHatchSorter", function() { return UnitAutoHatchSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitAutoTeamSorter", function() { return UnitAutoTeamSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitAutoTwinSorter", function() { return UnitAutoTwinSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunExpSorter", function() { return RunExpSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunExpPerSecSorter", function() { return RunExpPerSecSorter; });
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings */ "./src/app/model/strings.ts");

var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.getBugName = function (bug) {
        return _strings__WEBPACK_IMPORTED_MODULE_0__["STRINGS"].bug[bug];
    };
    Utility.random = function (min, max) {
        if (min === void 0) { min = new Decimal(0); }
        if (max === void 0) { max = new Decimal(1); }
        return min.plus(max.minus(min).times(Math.random()));
    };
    /**
     * Solve an equation, up to cubic equation ax^3 + bx^2 + cx + d = 0
     *
     * @param a x^3
     * @param b x^2
     * @param c x
     * @param d constant
     * @returns solutions, real roots only
     */
    Utility.solveEquation = function (a, b, c, d) {
        // Thanks to:
        // https://stackoverflow.com/questions/27176423/function-to-solve-cubic-equation-analytically
        // http://www.wolframalpha.com/calculators/equation-solver/
        if (a.abs().lt(Number.EPSILON)) {
            a = b;
            b = c;
            c = d;
            if (a.abs().lt(Number.EPSILON)) {
                // Linear case, ax+b=0
                a = b;
                b = c;
                if (a.abs().lt(Number.EPSILON)) {
                    // Degenerate case
                    return [];
                }
                return [b.times(-1).div(a)];
            }
            var D = b.pow(2).minus(a.times(c).times(4));
            if (D.abs().lt(Number.EPSILON)) {
                return [b.times(-1).div(a.times(2))];
            }
            else if (D.gt(0)) {
                return [
                    D.sqrt()
                        .minus(b)
                        .div(a.times(2)),
                    D.sqrt()
                        .plus(b)
                        .times(-1)
                        .div(a.times(2))
                ];
            }
            return [];
        }
        return Utility.solveCubic(a, b, c, d);
    };
    Utility.convertToRoman = function (num) {
        var roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        var str = "";
        for (var _i = 0, _a = Object.keys(roman); _i < _a.length; _i++) {
            var i = _a[_i];
            var q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    };
    /**
     * Solve an equation, cubic only
     *
     * @param a x^3
     * @param b x^2
     * @param c x
     * @param d constant
     * @returns solutions, real roots only
     */
    Utility.solveCubic = function (a, b, c, d) {
        var p = a
            .times(c)
            .times(3)
            .minus(b.pow(2))
            .div(3)
            .div(a)
            .div(a);
        var q = b
            .pow(3)
            .times(2)
            .minus(a
            .times(b)
            .times(c)
            .times(9))
            .plus(a
            .times(a)
            .times(d)
            .times(27))
            .div(a.pow(3).times(27));
        var roots;
        if (p.abs().lt(Number.EPSILON)) {
            roots = [q.times(-1).cbrt()];
        }
        else if (q.abs().lt(Number.EPSILON)) {
            roots = [new Decimal(0)].concat(p.lt(0)
                ? [
                    p.times(-1).sqrt(),
                    p
                        .times(-1)
                        .sqrt()
                        .times(-1)
                ]
                : []);
        }
        else {
            var D = q
                .pow(2)
                .div(4)
                .plus(p.pow(3).div(27));
            if (D.abs().lt(Number.EPSILON)) {
                // D = 0 -> two roots
                roots = [q.times(-1.5).div(p), new Decimal(3).times(q).times(p)];
            }
            else if (D.gt(0)) {
                // Only one real root
                var first = q.times(-0.5);
                var second = D.sqrt();
                var q3 = first.minus(second);
                //  workaround for aproximation
                if (q3.toNumber() === 0) {
                    // q3 = new Decimal(1).div(
                    //   Decimal.max(a.abs(), b.abs())
                    //     .max(c.abs())
                    //     .max(d.abs())
                    // );
                    return [d.div(a.abs()).cbrt()];
                }
                var u = Decimal.cbrt(q3);
                roots = [u.minus(p.div(u.times(3)))];
            }
            else {
                // D < 0, three roots, but needs to use complex numbers/trigonometric solution
                var u = new Decimal(2).times(Decimal.sqrt(p.times(-1).div(3)));
                var acos = new Decimal(q);
                acos = acos.div(p);
                acos = acos.div(u);
                acos = acos.times(3);
                //  workaround for aproximation
                if (acos.lt(-1)) {
                    return [];
                }
                //  workaround for aproximation 2
                var acos2 = Decimal.max(Decimal.min(acos, 1), -1).toNumber();
                var t = new Decimal(Math.acos(acos2) / 3);
                // const t = Math.acos(3 * q / p / u) / 3;  // D < 0 implies p < 0 and acos argument in [-1..1]
                var k = new Decimal(2).times(Math.PI).div(3);
                roots = [
                    u.times(Math.cos(t.toNumber())),
                    u.times(Math.cos(t.minus(k).toNumber())),
                    u.times(Math.cos(t.minus(k.times(2)).toNumber()))
                ];
            }
        }
        // Convert back from depressed cubic
        for (var i = 0; i < roots.length; i++) {
            roots[i] = roots[i].minus(b.div(a.times(3)));
        }
        return roots;
    };
    return Utility;
}());

//#region Clarity Datagrid custom sorterer
// tslint:disable-next-line:max-classes-per-file
var ProductionSorter = /** @class */ (function () {
    function ProductionSorter() {
    }
    ProductionSorter.prototype.compare = function (a, b) {
        return a.prodPerSec.cmp(b.prodPerSec);
    };
    return ProductionSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var TotalProductionSorter = /** @class */ (function () {
    function TotalProductionSorter() {
    }
    TotalProductionSorter.prototype.compare = function (a, b) {
        return a.prodPerSec
            .times(a.producer.quantity)
            .cmp(b.prodPerSec.times(b.producer.quantity));
    };
    return TotalProductionSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var UnitQuantitySorter = /** @class */ (function () {
    function UnitQuantitySorter() {
    }
    UnitQuantitySorter.prototype.compare = function (a, b) {
        return a.quantity.cmp(b.quantity);
    };
    return UnitQuantitySorter;
}());

// tslint:disable-next-line:max-classes-per-file
var UnitBoughtSorter = /** @class */ (function () {
    function UnitBoughtSorter() {
    }
    UnitBoughtSorter.prototype.compare = function (a, b) {
        return a.buyAction.quantity.cmp(b.buyAction.quantity);
    };
    return UnitBoughtSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var UnitTeamSorter = /** @class */ (function () {
    function UnitTeamSorter() {
    }
    UnitTeamSorter.prototype.compare = function (a, b) {
        return a.teamAction.quantity.cmp(b.teamAction.quantity);
    };
    return UnitTeamSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var UnitTwinSorter = /** @class */ (function () {
    function UnitTwinSorter() {
    }
    UnitTwinSorter.prototype.compare = function (a, b) {
        return a.twinAction.quantity.cmp(b.twinAction.quantity);
    };
    return UnitTwinSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var UnitAutoHatchSorter = /** @class */ (function () {
    function UnitAutoHatchSorter() {
    }
    UnitAutoHatchSorter.prototype.compare = function (a, b) {
        return a.buyAction.autoBuyer.quantity.cmp(b.buyAction.autoBuyer.quantity);
    };
    return UnitAutoHatchSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var UnitAutoTeamSorter = /** @class */ (function () {
    function UnitAutoTeamSorter() {
    }
    UnitAutoTeamSorter.prototype.compare = function (a, b) {
        return a.teamAction.autoBuyer.quantity.cmp(b.teamAction.autoBuyer.quantity);
    };
    return UnitAutoTeamSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var UnitAutoTwinSorter = /** @class */ (function () {
    function UnitAutoTwinSorter() {
    }
    UnitAutoTwinSorter.prototype.compare = function (a, b) {
        return a.twinAction.autoBuyer.quantity.cmp(b.twinAction.autoBuyer.quantity);
    };
    return UnitAutoTwinSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var RunExpSorter = /** @class */ (function () {
    function RunExpSorter() {
    }
    RunExpSorter.prototype.compare = function (a, b) {
        return a.experience.cmp(b.experience);
    };
    return RunExpSorter;
}());

// tslint:disable-next-line:max-classes-per-file
var RunExpPerSecSorter = /** @class */ (function () {
    function RunExpPerSecSorter() {
    }
    RunExpPerSecSorter.prototype.compare = function (a, b) {
        return a.expPerSec.cmp(b.expPerSec);
    };
    return RunExpPerSecSorter;
}());

//#endregion


/***/ }),

/***/ "./src/app/model/world.ts":
/*!********************************!*\
  !*** ./src/app/model/world.ts ***!
  \********************************/
/*! exports provided: World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
/* harmony import */ var lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/sample */ "./node_modules/lodash-es/sample.js");
/* harmony import */ var lodash_es_uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/uniq */ "./node_modules/lodash-es/uniq.js");
/* harmony import */ var _bugsTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bugsTypes */ "./src/app/model/bugsTypes.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _masteries_mastery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masteries/mastery */ "./src/app/model/masteries/mastery.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./price */ "./src/app/model/price.ts");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strings */ "./src/app/model/strings.ts");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility */ "./src/app/model/utility.ts");








var World = /** @class */ (function () {
    function World(id) {
        if (id === void 0) { id = ""; }
        this.id = id;
        this.name = "";
        this.level = new Decimal(1);
        this.prestige = new Decimal(10);
        //  Productions Bonus/Malus
        this.productionsBonus = new Array();
        this.productionsEfficiency = new Array();
        this.productionsAll = new Array();
        // Unlocked stuff
        this.startingUnlocked = new Array();
        // Starting stuff
        //  Unit, Quantity
        this.startingUnit = new Array();
        //  Wining condition
        this.winConditions = new Array();
        //  This resources must be zero
        this.notWinConditions = new Array();
        //  Additional bug
        this.additionalBugs = new Array();
        if (id !== "")
            this.name = _strings__WEBPACK_IMPORTED_MODULE_6__["STRINGS"].worlds[this.id];
    }
    World.prototype.setLevel = function (level, game) {
        this.winConditions.push(new _price__WEBPACK_IMPORTED_MODULE_5__["Price"](game.ants.nest, _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__["CONSTS"].BASE_WIN_CONDITION_OTHER));
        this.additionalBugs.push(_bugsTypes__WEBPACK_IMPORTED_MODULE_2__["BugTypes"].ANT);
        this.level = new Decimal(level).floor();
        var multi = this.level.div(5).plus(1);
        this.productionsBonus.forEach(function (b) { return (b[1] = b[1].times(multi)); });
        this.productionsEfficiency.forEach(function (b) { return (b[1] = b[1].times(multi)); });
        this.productionsAll.forEach(function (b) { return (b[1] = b[1].times(multi)); });
        this.startingUnit.forEach(function (b) { return (b[1] = b[1].times(multi)); });
        var masteryReduction = game.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_4__["MasteryTypes"].WORLD_LEVEL) * 0.015;
        this.winConditions.forEach(function (w) {
            w.price = w.price.times(multi);
            w.price = w.base.winNonLiner
                ? w.price.pow(0.7 - masteryReduction)
                : w.price.times(Decimal.pow(4, multi)).pow(0.95);
            w.price = w.price.floor();
        });
        this.prestige = this.level
            .times(10)
            .times(this.level.plus(10).log10())
            .floor();
        if (this.level.gte(5) && this.notWinConditions.length < 1) {
            var malus = [
                game.worldMalus.foodMalus1,
                game.worldMalus.soilMalus1,
                game.worldMalus.crystalMalus1,
                game.worldMalus.scienceMalus1
            ];
            this.notWinConditions.push(Object(lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__["default"])(malus));
        }
        //  Apply Prestige bonus
        var multiBonus = game.allPrestige.worldPrestige.betterWorlds.quantity.times(0.1);
        multiBonus = multiBonus.times(1 + game.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_4__["MasteryTypes"].BETTER_WORLD) * 0.2);
        multiBonus = multiBonus.plus(1);
        if (multiBonus.gt(1)) {
            [
                this.productionsBonus,
                this.productionsEfficiency,
                this.productionsAll
            ].forEach(function (prod) {
                prod.forEach(function (p) {
                    p[1] = p[1].times(multiBonus);
                });
            });
        }
    };
    World.prototype.canTravel = function () {
        this.winConditions.forEach(function (p) {
            p.canBuy = p.base.quantity.gte(p.price);
        });
        return !(this.winConditions.findIndex(function (p) { return !p.canBuy; }) > -1 ||
            this.notWinConditions.findIndex(function (n) { return !n.isKilled; }) > -1);
    };
    World.prototype.setMalus = function () {
        var _this = this;
        this.notWinConditions.forEach(function (n) {
            n.quantity = new Decimal(_this.level.times(5));
            n.producedBy.find(function (u) { return u.ratio.lt(0); }).producer.unlock();
            var n2 = n.producedBy.find(function (u) { return u.ratio.gt(0); }).producer;
            var n3 = n2.producedBy.find(function (u) { return u.ratio.gt(0); }).producer;
            n2.quantity = n.quantity.div(3.5);
            if (n2.quantity.gt(0.1)) {
                n2.unlock();
                // tslint:disable-next-line:prettier
                n3.quantity = n.quantity.div(1.5).pow(0.9);
                if (n3.quantity.gt(0.1)) {
                    n3.unlock();
                }
                else {
                    n3.quantity = new Decimal(0);
                }
            }
            else {
                n2.quantity = new Decimal(0);
            }
        });
    };
    World.prototype.setGame = function () {
        this.setMalus();
        this.startingUnit.forEach(function (s) {
            s[0].unlock();
            s[0].quantity = s[1];
        });
    };
    //#region Save and Load
    World.prototype.getSave = function () {
        return {
            n: this.name,
            l: this.level,
            pb: this.productionsBonus.map(function (b) { return [b[0].id, b[1]]; }),
            pe: this.productionsEfficiency.map(function (b) { return [b[0].id, b[1]]; }),
            pa: this.productionsAll.map(function (b) { return [b[0].id, b[1]]; }),
            wc: this.winConditions.map(function (w) { return [w.base.id, w.price]; }),
            nwc: this.notWinConditions.map(function (n) { return n.id; }),
            adb: this.additionalBugs,
            k: this.prestige
        };
    };
    World.prototype.restore = function (data, game) {
        var _this = this;
        if ("n" in data)
            this.name = data.n;
        if ("l" in data)
            this.level = new Decimal(data.l);
        if ("pb" in data) {
            this.productionsBonus = data.pb.map(function (b) { return [
                _this.findBonus(b[0], game),
                new Decimal(b[1])
            ]; });
        }
        if ("pe" in data) {
            this.productionsEfficiency = data.pe.map(function (b) { return [
                _this.findBonus(b[0], game),
                new Decimal(b[1])
            ]; });
        }
        if ("pa" in data) {
            this.productionsAll = data.pa.map(function (b) { return [
                _this.findBonus(b[0], game),
                new Decimal(b[1])
            ]; });
        }
        if ("wc" in data) {
            this.winConditions = data.wc.map(function (w) {
                return new _price__WEBPACK_IMPORTED_MODULE_5__["Price"](game.units.find(function (u) { return u.id === w[0]; }), new Decimal(w[1]), 1);
            });
        }
        if ("nwc" in data) {
            this.notWinConditions = data.nwc.map(function (nwc) {
                return game.units.find(function (u) { return u.id === nwc; });
            });
        }
        if ("adb" in data) {
            this.additionalBugs = data.adb;
        }
        this.prestige =
            "k" in data
                ? new Decimal(data.k)
                : this.level
                    .times(10)
                    .times(this.level.plus(10).log10())
                    .floor();
    };
    World.prototype.findBonus = function (id, game) {
        return game.worldBonus.bonusList.find(function (b) { return b.id === id; });
    };
    //#endregion
    // tslint:disable-next-line:member-ordering
    World.merge = function (worlds) {
        var retWorld = new World();
        retWorld.name = worlds.map(function (w) { return w.name; }).reduce(function (p, c) { return p + " " + c; });
        worlds.forEach(function (w) {
            w.productionsBonus.forEach(function (a) {
                var prod = retWorld.productionsBonus.find(function (p) { return p[0].id === a[0].id; });
                if (!prod)
                    retWorld.productionsBonus.push([a[0], new Decimal(a[1])]);
                else
                    prod[1] = prod[1].plus(a[1]);
            });
            w.productionsEfficiency.forEach(function (a) {
                var prod = retWorld.productionsEfficiency.find(function (p) { return p[0].id === a[0].id; });
                if (!prod) {
                    retWorld.productionsEfficiency.push([a[0], new Decimal(a[1])]);
                }
                else
                    prod[1] = prod[1].plus(a[1]);
            });
            w.productionsAll.forEach(function (a) {
                var prod = retWorld.productionsAll.find(function (p) { return p[0].id === a[0].id; });
                if (!prod)
                    retWorld.productionsAll.push([a[0], new Decimal(a[1])]);
                else
                    prod[1] = prod[1].plus(a[1]);
            });
            //  Starting
            w.startingUnit.forEach(function (a) {
                var un = retWorld.startingUnit.find(function (p) { return p[0].id === a[0].id; });
                if (!un)
                    retWorld.startingUnit.push([a[0], new Decimal(a[1])]);
                else
                    un[1] = un[1].plus(a[1]);
            });
            //  Win
            w.winConditions.forEach(function (a) {
                var win = retWorld.winConditions.find(function (p) { return p.base.id === a.base.id; });
                if (!win)
                    retWorld.winConditions.push(new _price__WEBPACK_IMPORTED_MODULE_5__["Price"](a.base, a.price, 1));
                else
                    win.price = win.price.plus(a.price.div(3));
            });
        });
        //  Unlocked
        retWorld.startingUnlocked = Object(lodash_es_uniq__WEBPACK_IMPORTED_MODULE_1__["default"])([].concat.apply([], worlds.map(function (w) { return w.startingUnlocked; })));
        //  Malus
        retWorld.notWinConditions = Object(lodash_es_uniq__WEBPACK_IMPORTED_MODULE_1__["default"])([].concat.apply([], worlds.map(function (w) { return w.notWinConditions; })));
        //  Bugs
        retWorld.additionalBugs = Object(lodash_es_uniq__WEBPACK_IMPORTED_MODULE_1__["default"])([].concat.apply([], worlds.map(function (w) { return w.additionalBugs; })));
        return retWorld;
    };
    // tslint:disable-next-line:member-ordering
    World.getRandomWorld = function (min, max, game) {
        var toMerge = [];
        if (game.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_4__["MasteryTypes"].DOUBLE_PREFIX) > 0 &&
            Math.random() > 0.3) {
            toMerge.push(Object(lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__["default"])(World.prefix));
        }
        toMerge.push(Object(lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__["default"])(World.prefix), Object(lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__["default"])(World.biome), Object(lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__["default"])(World.suffix));
        if (game.allMateries.getSum(_masteries_mastery__WEBPACK_IMPORTED_MODULE_4__["MasteryTypes"].DOUBLE_SUFFIX) > 0 &&
            Math.random() > 0.3) {
            toMerge.push(Object(lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__["default"])(World.suffix));
        }
        var world = World.merge(toMerge);
        world.setLevel(_utility__WEBPACK_IMPORTED_MODULE_7__["Utility"].random(min, max), game);
        return world;
    };
    World.prefix = new Array();
    World.biome = new Array();
    World.suffix = new Array();
    return World;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-vertical-nav [clrVerticalNavCollapsible]=\"true\"\n                  [clr-nav-level]=\"2\"\n                  class=\"nav-trigger--bottom\">\n\n  <clr-vertical-nav-group [(clrVerticalNavGroupExpanded)]=\"unitGroup.isExpanded\"\n                          routerLinkActive=\"active\"\n                          *ngFor=\"let unitGroup of ms.game.unlockedGroups; trackBy:getListId\">\n\n    <a class=\"font-weight-bold\"\n       clrVerticalNavLink\n       [routerLink]=\"['./group/'+unitGroup.id]\"\n       [routerLinkActive]=\"'active'\">\n      <!-- <clr-icon [attr.shape]=\"unitGroup.icon\" clrVerticalNavIcon></clr-icon> -->\n      {{unitGroup.name}}\n      <clr-icon class=\"is-error is-solid\"\n                shape=\"exclamation-triangle\"\n                *ngIf=\"unitGroup.isEnding\"></clr-icon>\n      <clr-icon class=\"is-info is-solid\"\n                shape=\"angle\"\n                *ngIf=\"unitGroup.upTeam\"></clr-icon>\n      <clr-icon class=\"is-info is-solid\"\n                shape=\"angle-double\"\n                *ngIf=\"unitGroup.upTwin\"></clr-icon>\n    </a>\n\n    <clr-vertical-nav-group-children>\n\n      <ng-container *clrIfExpanded>\n        <app-unit-line *ngFor=\"let g of unitGroup.unlocked; trackBy:getUnitId\"\n                       [unit]=\"g\"\n                       [isStopped]=\"g.isStopped()\"\n                       [isEnding]=\"g.isEnding\"\n                       [id]=\"g.id\"\n                       [name]=\"g.name\"\n                       [quantity]=\"g.quantity\"\n                       [perSec]=\"g.c\"\n                       [isNew]=\"g.isNew\"\n                       [team]=\"g.teamAction?.canBuy\"\n                       [twin]=\"g.twinAction?.canBuy\"\n                       [isMalus]=\"isMalus(g)\"></app-unit-line>\n      </ng-container>\n\n    </clr-vertical-nav-group-children>\n  </clr-vertical-nav-group>\n\n</clr-vertical-nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ app-unit-line .nav-link {\n  padding-left: 0.5rem !important;\n  padding-right: 0.35rem !important; }\n\n.qta {\n  float: right; }\n\n.fullWidth {\n  width: 100% !important; }\n\n:host /deep/ .clr-treenode-children {\n  margin-left: 0; }\n\n@media only screen and (min-width: 768px) {\n  .clr-vertical-nav {\n    width: 330px; } }\n\n:host /deep/ .clr-vertical-nav .nav-group-content .nav-text,\n.clr-vertical-nav .nav-link {\n  padding-left: 0.35rem !important; }\n\n:host /deep/ .nav-text {\n  overflow: visible !important; }\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_malus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/malus */ "./src/app/model/malus.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
    }
    NavComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.updateEmitter.subscribe(function (m) { return _this.cd.markForCheck(); });
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NavComponent.prototype.getListId = function (index, list) {
        return list.name;
    };
    NavComponent.prototype.getUnitId = function (index, base) {
        return base.id;
    };
    NavComponent.prototype.isMalus = function (unit) {
        return unit instanceof _model_malus__WEBPACK_IMPORTED_MODULE_2__["Malus"];
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-nav",
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-container]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/nav/unit-line/unit-line.component.html":
/*!********************************************************!*\
  !*** ./src/app/nav/unit-line/unit-line.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['./unit/'+id]\"\n   clrVerticalNavLink\n   routerLinkActive=\"active\">\n\n  <span class=\"clr-row clr-justify-content-between\">\n    <span class=\"resName\">\n      {{name}}\n      <clr-icon class=\"is-info is-solid\"\n                shape=\"angle\"\n                *ngIf=\"!isMalus && team\"\n                (click)=\"unit.teamAction.buy()\"></clr-icon>\n      <clr-icon class=\"is-info is-solid\"\n                shape=\"angle-double\"\n                *ngIf=\"!isMalus && twin\"\n                (click)=\"unit.twinAction.buy()\"></clr-icon>\n      <clr-icon class=\"is-warning is-solid\"\n                shape=\"pause\"\n                *ngIf=\"!isMalus && isStopped\"\n                (click)=\"unit.efficiency = 100\"></clr-icon>\n      <clr-icon class=\"is-error is-error is-solid\"\n                shape=\"exclamation-triangle\"\n                *ngIf=\"isEnding\"></clr-icon>\n      <clr-icon class=\"is-info is-solid\"\n                shape=\"info-standard\"\n                *ngIf=\"os.showI && isNew\"></clr-icon>\n\n    </span>\n    <span *ngIf=\"quantity.abs().gt(0.001)\"\n          class=\"qta monospace\">\n      {{quantity | format}}\n    </span>\n    <span class=\"perSec monospace\">\n      <span *ngIf=\"perSec.abs().gt(0.001)\"\n            [class.notEnough]=\"isEnding\">\n        {{perSec | format}}/s\n      </span>\n      &nbsp;\n    </span>\n  </span>\n</a>\n"

/***/ }),

/***/ "./src/app/nav/unit-line/unit-line.component.scss":
/*!********************************************************!*\
  !*** ./src/app/nav/unit-line/unit-line.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 768px) {\n  .resName {\n    display: inline-block;\n    padding-right: 0.5rem; }\n  a {\n    padding-left: 0.3rem; }\n  .clr-treenode-content clr-icon,\n  .clr-treenode-content .clr-icon {\n    margin-right: 0; }\n  .clr-col-xs-12 {\n    padding-left: 0 !important;\n    padding-right: 0 !important; } }\n\n@media only screen and (min-width: 768px) {\n  .resName {\n    display: inline-block;\n    width: 50%; }\n  a {\n    padding-left: 0.5rem; } }\n\n.perSec {\n  text-align: right;\n  width: 25%; }\n\n:host /deep/ .nav-link {\n  height: 1.1rem;\n  line-height: 1.1rem; }\n"

/***/ }),

/***/ "./src/app/nav/unit-line/unit-line.component.ts":
/*!******************************************************!*\
  !*** ./src/app/nav/unit-line/unit-line.component.ts ***!
  \******************************************************/
/*! exports provided: UnitLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitLineComponent", function() { return UnitLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_full_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options.service */ "./src/app/options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitLineComponent = /** @class */ (function () {
    function UnitLineComponent(os) {
        this.os = os;
        this.isMalus = false;
        //Nothing
    }
    UnitLineComponent.prototype.ngOnInit = function () {
        //
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UnitLineComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UnitLineComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Decimal)
    ], UnitLineComponent.prototype, "quantity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Decimal)
    ], UnitLineComponent.prototype, "perSec", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UnitLineComponent.prototype, "isNew", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UnitLineComponent.prototype, "isEnding", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UnitLineComponent.prototype, "isStopped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_full_unit__WEBPACK_IMPORTED_MODULE_1__["FullUnit"])
    ], UnitLineComponent.prototype, "unit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UnitLineComponent.prototype, "team", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UnitLineComponent.prototype, "twin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UnitLineComponent.prototype, "isMalus", void 0);
    UnitLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-unit-line",
            template: __webpack_require__(/*! ./unit-line.component.html */ "./src/app/nav/unit-line/unit-line.component.html"),
            styles: [__webpack_require__(/*! ./unit-line.component.scss */ "./src/app/nav/unit-line/unit-line.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.fullWidth]": "true"
            }
        }),
        __metadata("design:paramtypes", [_options_service__WEBPACK_IMPORTED_MODULE_2__["OptionsService"]])
    ], UnitLineComponent);
    return UnitLineComponent;
}());



/***/ }),

/***/ "./src/app/options-nav/credits/credits.component.html":
/*!************************************************************!*\
  !*** ./src/app/options-nav/credits/credits.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>关于</h1>\n<p>\n  蚂蚁放置2 是一款关于蚂蚁的休闲放置游戏。\n  <br /> 游戏使用了 Angular 6 和 Clarity Design System.\n  <a target=\"_blank\"\n     href=\"https://github.com/scorzy/IdleAnt2/blob/master/package.json\">游戏使用的开发工具包列表</a>.\n</p>\n\n<ul lass=\"list\">\n  <li>游戏源码:\n    <a target=\"_blank\"\n       href=\"https://github.com/scorzy/IdleAnt2\">https://github.com/scorzy/IdleAnt2</a>\n  </li>\n  <li>SubReddit:\n    <a target=\"_blank\"\n       href=\"https://www.reddit.com/r/IdleAnts/\">https://www.reddit.com/r/IdleAnts/</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/options-nav/credits/credits.component.scss":
/*!************************************************************!*\
  !*** ./src/app/options-nav/credits/credits.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/options-nav/credits/credits.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/options-nav/credits/credits.component.ts ***!
  \**********************************************************/
/*! exports provided: CreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsComponent", function() { return CreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreditsComponent = /** @class */ (function () {
    function CreditsComponent() {
    }
    CreditsComponent.prototype.ngOnInit = function () { };
    CreditsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-credits",
            template: __webpack_require__(/*! ./credits.component.html */ "./src/app/options-nav/credits/credits.component.html"),
            styles: [__webpack_require__(/*! ./credits.component.scss */ "./src/app/options-nav/credits/credits.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-area]": "true"
            }
        }),
        __metadata("design:paramtypes", [])
    ], CreditsComponent);
    return CreditsComponent;
}());



/***/ }),

/***/ "./src/app/options-nav/options-nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/options-nav/options-nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<clr-vertical-nav [clrVerticalNavCollapsible]=\"false\"\n                  [clr-nav-level]=\"2\">\n  <a clrVerticalNavLink\n     routerLink=\"/opt/save\"\n     routerLinkActive=\"active\">\n    <clr-icon shape=\"floppy\"></clr-icon>\n    保存\n  </a>\n  <a clrVerticalNavLink\n     routerLink=\"/opt/ui\"\n     routerLinkActive=\"active\">\n    <clr-icon shape=\"paint-roller\"></clr-icon>\n    界面\n  </a>\n  <a clrVerticalNavLink\n     routerLink=\"/opt/stats\"\n     routerLinkActive=\"active\">\n    <clr-icon shape=\"info-standard\"></clr-icon>\n    统计\n  </a>\n  <a clrVerticalNavLink\n     routerLink=\"/opt/credits\"\n     routerLinkActive=\"active\">\n    <clr-icon shape=\"certificate\"></clr-icon>\n    关于\n  </a>\n</clr-vertical-nav>\n"

/***/ }),

/***/ "./src/app/options-nav/options-nav.component.scss":
/*!********************************************************!*\
  !*** ./src/app/options-nav/options-nav.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/options-nav/options-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/options-nav/options-nav.component.ts ***!
  \******************************************************/
/*! exports provided: OptionsNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsNavComponent", function() { return OptionsNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionsNavComponent = /** @class */ (function () {
    function OptionsNavComponent() {
        //Nothing
    }
    OptionsNavComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    OptionsNavComponent.prototype.ngOnInit = function () {
        //Nothing
    };
    OptionsNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-options-nav",
            template: __webpack_require__(/*! ./options-nav.component.html */ "./src/app/options-nav/options-nav.component.html"),
            styles: [__webpack_require__(/*! ./options-nav.component.scss */ "./src/app/options-nav/options-nav.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-container]": "true"
            }
        }),
        __metadata("design:paramtypes", [])
    ], OptionsNavComponent);
    return OptionsNavComponent;
}());



/***/ }),

/***/ "./src/app/options-nav/save/save.component.html":
/*!******************************************************!*\
  !*** ./src/app/options-nav/save/save.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>保存</h1>\n\n<ng-container *ngIf=\"serv.kongregate\">\n  <clr-alert [clrAlertClosable]=\"false\"\n             [clrAlertType]=\"'alert-warning'\">\n    <div clr-alert-item\n         class=\"alert-item\">\n      <span class=\"alert-text\">\n        云存储是实验性的!建议导出备份。\n      </span>\n    </div>\n  </clr-alert>\n  <br />\n</ng-container>\n\n<div class=\"btn-group btn-primary\">\n  <button class=\"btn btn-success\"\n          (click)=\"serv.save()\">\n    <clr-icon shape=\"floppy\"></clr-icon>\n    保存\n  </button>\n  <button class=\"btn\"\n          (click)=\"serv.load()\">\n    <clr-icon shape=\"install\"></clr-icon>\n    加载\n  </button>\n  <button class=\"btn btn-danger\"\n          (click)=\"clearModal = true\">\n    <clr-icon shape=\"uninstall\"></clr-icon>\n    清空\n  </button>\n</div>\n\n<div class=\"btn-group btn-primary\"\n     *ngIf=\"serv.kongregate\">\n  <button class=\"btn btn-info\"\n          (click)=\"serv.playFabLogin()\">\n    <clr-icon shape=\"user\"></clr-icon>\n    Log PlayFab\n  </button>\n  <button *ngIf=\"serv.playFabLogged\"\n          class=\"btn btn-success\"\n          (click)=\"serv.savePlayFab()\">\n    <clr-icon shape=\"upload-cloud\"></clr-icon>\n    云存储\n  </button>\n  <button *ngIf=\"serv.playFabLogged\"\n          class=\"btn\"\n          (click)=\"serv.loadPlayFab()\">\n    <clr-icon shape=\"download-cloud\"></clr-icon>\n    云加载\n  </button>\n</div>\n<p>\n  <br />\n  每5分钟自动保存一次。\n  <br />\n  上次保存时间: {{serv.lastSave | date:'medium' }}\n</p>\n<h2>导出 / 导入存档</h2>\n<textarea name=\"raw\"\n          [(ngModel)]=\"exp\"\n          rows=\"3\"></textarea>\n<div class=\"btn-group btn-primary\">\n  <button class=\"btn btn-success\"\n          (click)=\"export()\">\n    导出\n  </button>\n  <button class=\"btn\"\n          (click)=\"import()\">\n    导入\n  </button>\n</div>\n<h2>自动保存设置</h2>\n<div class=\"toggle-switch\">\n  <input type=\"checkbox\"\n         id=\"t1\"\n         [(ngModel)]=\"serv.options.autosaveNotification\">\n  <label for=\"t1\">自动保存通知</label>\n</div>\n<br />\n<a href=\"https://likexia.gitee.io/idleant2/changelog.html\"\n   target=\"_blank\">更新日志\n</a>\n\n<clr-modal [(clrModalOpen)]=\"clearModal\">\n  <h3 class=\"modal-title\">重置</h3>\n  <div class=\"modal-body\">\n    <p>你确定要删除所有游戏进度？</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\"\n            class=\"btn btn-outline\"\n            (click)=\"clearModal = false\">取消</button>\n    <button type=\"button\"\n            class=\"btn btn-danger\"\n            (click)=\"this.serv.clear(); clearModal = false\">删除</button>\n  </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/options-nav/save/save.component.scss":
/*!******************************************************!*\
  !*** ./src/app/options-nav/save/save.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/options-nav/save/save.component.ts":
/*!****************************************************!*\
  !*** ./src/app/options-nav/save/save.component.ts ***!
  \****************************************************/
/*! exports provided: SaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveComponent", function() { return SaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveComponent = /** @class */ (function () {
    function SaveComponent(serv, cd) {
        this.serv = serv;
        this.cd = cd;
        this.clearModal = false;
        this.exp = "";
        //Nothing
    }
    SaveComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    SaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.saveSub = this.serv.saveEmitter.subscribe(function (s) { return _this.cd.markForCheck(); });
    };
    SaveComponent.prototype.ngOnDestroy = function () {
        this.saveSub.unsubscribe();
    };
    SaveComponent.prototype.export = function () {
        this.exp = this.serv.getSave();
    };
    SaveComponent.prototype.import = function () {
        this.serv.import(this.exp.trim());
    };
    SaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-save",
            template: __webpack_require__(/*! ./save.component.html */ "./src/app/options-nav/save/save.component.html"),
            styles: [__webpack_require__(/*! ./save.component.scss */ "./src/app/options-nav/save/save.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-area]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SaveComponent);
    return SaveComponent;
}());



/***/ }),

/***/ "./src/app/options-nav/stats/stats.component.html":
/*!********************************************************!*\
  !*** ./src/app/options-nav/stats/stats.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>统计</h1>\n<div class=\"clr-row\">\n  <div class=\"clr-col-12\tclr-col-sm-12\tclr-col-md-12\tclr-col-lg-12\tclr-col-xl-4\">\n    <h6>总计:</h6>\n    <ul class=\"list\">\n      <!-- <li>\n        Current experience:\n        <span>{{ms.game.experience | format:true}}</span>\n      </li> -->\n      <li>\n        经验获得总数:\n        <span>{{ms.game.stats.totalExperience | format:true}}</span>\n      </li>\n      <li>\n        累计获得的能力:\n        <span>{{ms.game.allMateries.totalEarned}}</span>\n      </li>\n      <li>\n        完成的世界:\n        <span>{{ms.game.stats.completedWorld | format:true}}</span>\n      </li>\n      <li>\n        最佳经验/秒:\n        <span>{{ms.game.stats.bestExpS}}</span>\n      </li>\n      <li>\n        游戏开始时间:\n        <span>{{ms.game.stats.worldStartDate | date:'medium'}}</span>\n      </li>\n    </ul>\n\n  </div>\n  <div class=\"clr-col-12\tclr-col-sm-12\tclr-col-md-12\tclr-col-lg-12\tclr-col-xl-8\">\n    <h6>最近10个世界:</h6>\n    <clr-datagrid class=\"datagrid-compact\">\n      <clr-dg-column [clrDgField]=\"'startDate'\">开始时间</clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'endDate'\">结束时间</clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'worldName'\">名称</clr-dg-column>\n      <clr-dg-column [clrDgSortBy]=\"runExpSorter\">经验</clr-dg-column>\n      <clr-dg-column [clrDgSortBy]=\"runExpPerSecSorter\">经验/秒</clr-dg-column>\n      <clr-dg-column [clrDgField]=\"'completed'\">已完成</clr-dg-column>\n\n      <clr-dg-row *clrDgItems=\"let run of ms.game.stats.runs\">\n        <clr-dg-cell>{{run.startDate | date:'medium'}}</clr-dg-cell>\n        <clr-dg-cell>{{run.endDate | date:'medium'}}</clr-dg-cell>\n        <clr-dg-cell>{{run.worldName}}</clr-dg-cell>\n        <clr-dg-cell>{{run.experience | format:true}}</clr-dg-cell>\n        <clr-dg-cell>{{run.expPerSec | format}}</clr-dg-cell>\n        <clr-dg-cell>{{run.completed}}</clr-dg-cell>\n      </clr-dg-row>\n    </clr-datagrid>\n  </div>\n  <div class=\"clr-col-12\tclr-col-sm-12\tclr-col-md-12\tclr-col-lg-12\tclr-col-xl-12\">\n    <div style=\"width: 100%\">\n      <canvas #chart></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/options-nav/stats/stats.component.scss":
/*!********************************************************!*\
  !*** ./src/app/options-nav/stats/stats.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/options-nav/stats/stats.component.ts":
/*!******************************************************!*\
  !*** ./src/app/options-nav/stats/stats.component.ts ***!
  \******************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/utility */ "./src/app/model/utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsComponent = /** @class */ (function () {
    function StatsComponent(ms) {
        this.ms = ms;
        this.runExpSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_2__["RunExpSorter"]();
        this.runExpPerSecSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_2__["RunExpPerSecSorter"]();
    }
    StatsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof preventScroll === typeof Function)
            preventScroll();
        setTimeout(function () {
            var chartCtx = _this.chartRef.nativeElement.getContext("2d");
            var totalExp = _this.ms.game.stats.runs
                .map(function (r) { return r.experience; })
                .reduce(function (a, b) { return a.plus(b); }, new Decimal(0))
                .max(1);
            var totalTime = Math.max(_this.ms.game.stats.runs
                .map(function (r) { return r.endDate.getTime() - r.startDate.getTime(); })
                .reduce(function (a, b) { return a + b; }, 0), 1);
            var reverseRun = _this.ms.game.stats.runs.slice().reverse();
            _this.chart = new Chart(chartCtx, {
                type: "bar",
                data: {
                    labels: reverseRun.map(function (r) { return r.worldName; }),
                    datasets: [
                        {
                            label: "经验 %",
                            data: reverseRun.map(function (r) {
                                return Math.floor(r.experience.div(totalExp).toNumber() * 100);
                            }),
                            backgroundColor: "rgba(255, 99, 132, 0.3)",
                            borderColor: "rgba(255,99,132,1)",
                            borderWidth: 0
                        },
                        {
                            label: "花费时间 %",
                            data: reverseRun.map(function (r) {
                                return Math.floor(((r.endDate.getTime() - r.startDate.getTime()) * 100) /
                                    totalTime);
                            }),
                            backgroundColor: "rgba(54, 162, 235, 0.3)",
                            borderColor: "rgba(54, 162, 235, 0.3)",
                            borderWidth: 0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scaleShowValues: true,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ],
                        xAxes: [
                            {
                                ticks: {
                                    autoSkip: false
                                }
                            }
                        ]
                    }
                }
            });
        }, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("chart"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatsComponent.prototype, "chartRef", void 0);
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-stats",
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/options-nav/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.scss */ "./src/app/options-nav/stats/stats.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-area]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/options-nav/ui-options/ui-options.component.html":
/*!******************************************************************!*\
  !*** ./src/app/options-nav/ui-options/ui-options.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>选项</h1>\n<form clrForm\n      class=\"clr-form clr-form-compact\">\n\n  <div class=\"form-group\">\n    <label for=\"t1\">主题:</label>\n    <div class=\"toggle-switch\">\n      <input name=\"dark\"\n             type=\"checkbox\"\n             id=\"dark\"\n             [(ngModel)]=\"ms.options.dark\"\n             (change)=\"ms.setTheme()\">\n      <label for=\"dark\">黑色</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"selects_1\">顶部颜色</label>\n    <div class=\"select\">\n      <select name=\"header\"\n              id=\"selects_1\"\n              [(ngModel)]=\"ms.options.header\"\n              (change)=\"ms.options.headerEmitter.emit(ms.options.header)\">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n        <option>6</option>\n        <option>7</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"t1\">使用另一种数字格式:</label>\n    <div class=\"toggle-switch\">\n      <input type=\"checkbox\"\n             id=\"format\"\n             name=\"format\"\n             [(ngModel)]=\"ms.options.usaFormat\"\n             (change)=\"ms.options.generateFormatter()\">\n      <label for=\"format\">开</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"numFormat\">数字格式:</label>\n    <div class=\"select\">\n      <select id=\"numFormat\"\n              name=\"numFormat\"\n              [(ngModel)]=\"ms.options.numFormat\"\n              (change)=\"ms.options.generateFormatter()\">\n        <option value=\"standard\">默认</option>\n        <option value=\"scientific\">科学计数法</option>\n        <option value=\"engineering\">工程计数法</option>\n        <option value=\"longScale\">长比例尺</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"matPos\">材料位置:</label>\n    <div class=\"select\">\n      <select id=\"matPos\"\n              name=\"matPos\"\n              [(ngModel)]=\"os.materialPosition\"\n              (change)=\"onChangeMaterialPos()\">\n        <option value=\"1\">全部</option>\n        <option value=\"2\">顶部</option>\n        <option value=\"3\">侧边</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"si\">显示我的新单位:</label>\n    <div class=\"toggle-switch\">\n      <input name=\"si\"\n             type=\"checkbox\"\n             id=\"si\"\n             [(ngModel)]=\"ms.options.showI\">\n      <label for=\"si\"></label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"nr\">禁用单位消耗完的通知:</label>\n    <div class=\"toggle-switch\">\n      <input name=\"nr\"\n             type=\"checkbox\"\n             id=\"nr\"\n             [(ngModel)]=\"os.noResourceEndPopUp\">\n      <label for=\"nr\"></label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"wn\">禁用时间扭曲通知:</label>\n    <div class=\"toggle-switch\">\n      <input name=\"wn\"\n             type=\"checkbox\"\n             id=\"wn\"\n             [(ngModel)]=\"os.noWarpNotification\">\n      <label for=\"wn\"></label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"wn\">严格单位时间:</label>\n    <div class=\"toggle-switch\">\n      <input name=\"time\"\n             type=\"checkbox\"\n             id=\"time\"\n             [(ngModel)]=\"os.timeFormatDetail\">\n      <label for=\"time\"></label>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/options-nav/ui-options/ui-options.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/options-nav/ui-options/ui-options.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/options-nav/ui-options/ui-options.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/options-nav/ui-options/ui-options.component.ts ***!
  \****************************************************************/
/*! exports provided: UiOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiOptionsComponent", function() { return UiOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options.service */ "./src/app/options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiOptionsComponent = /** @class */ (function () {
    function UiOptionsComponent(ms, os) {
        this.ms = ms;
        this.os = os;
        //
    }
    UiOptionsComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    UiOptionsComponent.prototype.ngOnInit = function () {
        //
    };
    UiOptionsComponent.prototype.onChangeMaterialPos = function () {
        this.ms.game.buildLists();
    };
    UiOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-ui-options",
            template: __webpack_require__(/*! ./ui-options.component.html */ "./src/app/options-nav/ui-options/ui-options.component.html"),
            styles: [__webpack_require__(/*! ./ui-options.component.scss */ "./src/app/options-nav/ui-options/ui-options.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-area]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _options_service__WEBPACK_IMPORTED_MODULE_2__["OptionsService"]])
    ], UiOptionsComponent);
    return UiOptionsComponent;
}());



/***/ }),

/***/ "./src/app/options.service.ts":
/*!************************************!*\
  !*** ./src/app/options.service.ts ***!
  \************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionsService = /** @class */ (function () {
    function OptionsService() {
        this.usaFormat = true;
        this.numFormat = "scientific";
        this.autosaveNotification = true;
        this.dark = false;
        this.header = 6;
        this.materialPosition = 1;
        this.showI = true;
        this.noResourceEndPopUp = false;
        this.noWarpNotification = true;
        this.timeFormatDetail = false;
        this.formatEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.headerEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        try {
            var n = 1.1;
            var separator = n.toLocaleString().substring(1, 2);
            if (separator === ",")
                this.usaFormat = false;
        }
        catch (ex) { }
        this.generateFormatter();
    }
    OptionsService.prototype.generateFormatter = function () {
        try {
            this.formatter = new numberformat.Formatter({
                format: this.numFormat,
                flavor: "short"
            });
        }
        catch (ex) {
            console.log("Error generateFormatter:" + ex);
        }
        if (!!this.formatEmitter)
            this.formatEmitter.emit(1);
    };
    //#regin Save and Load
    OptionsService.prototype.getSave = function () {
        return {
            u: this.usaFormat,
            n: this.numFormat,
            s: this.autosaveNotification,
            d: this.dark,
            h: this.header,
            m: this.materialPosition,
            i: this.showI,
            p: this.noResourceEndPopUp,
            w: this.noWarpNotification,
            t: this.timeFormatDetail
        };
    };
    OptionsService.prototype.restore = function (data) {
        if ("u" in data)
            this.usaFormat = data.u;
        if ("n" in data)
            this.numFormat = data.n;
        if ("s" in data)
            this.autosaveNotification = data.s;
        if ("d" in data)
            this.dark = data.d;
        if ("h" in data)
            this.header = data.h;
        if ("m" in data)
            this.materialPosition = data.m;
        if ("i" in data)
            this.showI = data.i;
        if ("p" in data)
            this.noResourceEndPopUp = data.p;
        if ("w" in data)
            this.noWarpNotification = data.w;
        if ("t" in data)
            this.timeFormatDetail = data.t;
        this.generateFormatter();
    };
    OptionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], OptionsService);
    return OptionsService;
}());



/***/ }),

/***/ "./src/app/polynom/polynom.component.html":
/*!************************************************!*\
  !*** ./src/app/polynom/polynom.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"monospace\">\n  <span *ngIf=\"a.abs().gt(0.01)\"\n        [class.notEnough]=\"a.lt(0)\">\n    {{a | format}}/s\n    <sup>3</sup>\n  </span>\n  <span *ngIf=\"!b.eq(0)\"\n        [class.notEnough]=\"b.lt(0)\">\n    <span *ngIf=\" b.gt(0)\">+</span>\n    {{b | format}}/s\n    <sup>2</sup>\n  </span>\n  <span *ngIf=\"!c.eq(0)\"\n        [class.notEnough]=\"c.lt(0)\">\n    <span *ngIf=\" c.gt(0)\">+</span>\n    {{c | format}}/s </span>\n</span>\n"

/***/ }),

/***/ "./src/app/polynom/polynom.component.scss":
/*!************************************************!*\
  !*** ./src/app/polynom/polynom.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "sup {\n  left: -0.6em; }\n"

/***/ }),

/***/ "./src/app/polynom/polynom.component.ts":
/*!**********************************************!*\
  !*** ./src/app/polynom/polynom.component.ts ***!
  \**********************************************/
/*! exports provided: PolynomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolynomComponent", function() { return PolynomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 *  Display polynom
 *  a t^3 + b t^2 + ct
 *
 * @export
 * @class PolynomComponent
 * @implements {OnInit}
 */
var PolynomComponent = /** @class */ (function () {
    function PolynomComponent() {
        //Nothing
    }
    PolynomComponent.prototype.ngOnInit = function () {
        //Nothing
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Decimal)
    ], PolynomComponent.prototype, "a", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Decimal)
    ], PolynomComponent.prototype, "b", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Decimal)
    ], PolynomComponent.prototype, "c", void 0);
    PolynomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-polynom",
            template: __webpack_require__(/*! ./polynom.component.html */ "./src/app/polynom/polynom.component.html"),
            styles: [__webpack_require__(/*! ./polynom.component.scss */ "./src/app/polynom/polynom.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], PolynomComponent);
    return PolynomComponent;
}());



/***/ }),

/***/ "./src/app/prestige-buy/prestige-buy.component.html":
/*!**********************************************************!*\
  !*** ./src/app/prestige-buy/prestige-buy.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <app-action [action]=\"prestige\"></app-action>\n</div>\n"

/***/ }),

/***/ "./src/app/prestige-buy/prestige-buy.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/prestige-buy/prestige-buy.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prestige-buy/prestige-buy.component.ts":
/*!********************************************************!*\
  !*** ./src/app/prestige-buy/prestige-buy.component.ts ***!
  \********************************************************/
/*! exports provided: PrestigeBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestigeBuyComponent", function() { return PrestigeBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_prestige_prestige__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/prestige/prestige */ "./src/app/model/prestige/prestige.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrestigeBuyComponent = /** @class */ (function () {
    function PrestigeBuyComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
    }
    PrestigeBuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.prestige)
            this.prestige.reload();
        this.sub = this.ms.updateEmitter.subscribe(function (m) {
            _this.prestige.reload();
            _this.prestige.reloadUserPrices();
            _this.cd.markForCheck();
        });
    };
    PrestigeBuyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PrestigeBuyComponent.prototype.getPriceId = function (index, price) {
        return price.base.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_prestige_prestige__WEBPACK_IMPORTED_MODULE_2__["Prestige"])
    ], PrestigeBuyComponent.prototype, "prestige", void 0);
    PrestigeBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-prestige-buy",
            template: __webpack_require__(/*! ./prestige-buy.component.html */ "./src/app/prestige-buy/prestige-buy.component.html"),
            styles: [__webpack_require__(/*! ./prestige-buy.component.scss */ "./src/app/prestige-buy/prestige-buy.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.card]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PrestigeBuyComponent);
    return PrestigeBuyComponent;
}());



/***/ }),

/***/ "./src/app/prestige-group/prestige-group.component.html":
/*!**************************************************************!*\
  !*** ./src/app/prestige-group/prestige-group.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"prestigeGroup\">\n  <h1>\n    {{prestigeGroup.name}}\n  </h1>\n  <div class=\"card-columns card-columns-3\">\n    <app-prestige-buy [prestige]=\"pre\"\n                      *ngFor=\"let pre of prestigeGroup.list ;trackBy:getPretId\"></app-prestige-buy>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/prestige-group/prestige-group.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/prestige-group/prestige-group.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prestige-group/prestige-group.component.ts":
/*!************************************************************!*\
  !*** ./src/app/prestige-group/prestige-group.component.ts ***!
  \************************************************************/
/*! exports provided: PrestigeGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestigeGroupComponent", function() { return PrestigeGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrestigeGroupComponent = /** @class */ (function () {
    function PrestigeGroupComponent(ms, route) {
        this.ms = ms;
        this.route = route;
    }
    PrestigeGroupComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    PrestigeGroupComponent.prototype.ngOnInit = function () {
        this.paramsSub = this.route.params.subscribe(this.getGroup.bind(this));
    };
    PrestigeGroupComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    PrestigeGroupComponent.prototype.getGroup = function (params) {
        var id = params.id;
        if (id === undefined)
            id = "fol";
        var grp = this.ms.game.allPrestige.prestigeGroups.find(function (g) { return g.id === id; });
        this.prestigeGroup = !!grp
            ? grp
            : this.ms.game.allPrestige.prestigeGroups[0];
    };
    PrestigeGroupComponent.prototype.getPretId = function (index, prestige) {
        return index + prestige.id;
    };
    PrestigeGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-prestige-group",
            template: __webpack_require__(/*! ./prestige-group.component.html */ "./src/app/prestige-group/prestige-group.component.html"),
            styles: [__webpack_require__(/*! ./prestige-group.component.scss */ "./src/app/prestige-group/prestige-group.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-area]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PrestigeGroupComponent);
    return PrestigeGroupComponent;
}());



/***/ }),

/***/ "./src/app/prestige-nav/prestige-nav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/prestige-nav/prestige-nav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<clr-vertical-nav [clrVerticalNavCollapsible]=\"false\"\n                  [clr-nav-level]=\"2\">\n\n  <a clrVerticalNavLink>\n    经验:\n    <span class=\"monospace\">{{ms.game.experience.quantity | format}}</span>\n  </a>\n\n  <a clrVerticalNavLink\n     *ngFor=\"let gr of ms.game.allPrestige.prestigeGroups; trackBy:getGroupId\"\n     [routerLink]=\"'/pre/'+gr.id\"\n     routerLinkActive=\"active\">\n    <!-- <clr-icon shape=\"floppy\"></clr-icon> -->\n    {{gr.name}}\n  </a>\n</clr-vertical-nav>\n"

/***/ }),

/***/ "./src/app/prestige-nav/prestige-nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/prestige-nav/prestige-nav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prestige-nav/prestige-nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/prestige-nav/prestige-nav.component.ts ***!
  \********************************************************/
/*! exports provided: PrestigeNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestigeNavComponent", function() { return PrestigeNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrestigeNavComponent = /** @class */ (function () {
    function PrestigeNavComponent(ms) {
        this.ms = ms;
        //
    }
    PrestigeNavComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    PrestigeNavComponent.prototype.ngOnInit = function () {
        //
    };
    PrestigeNavComponent.prototype.getGroupId = function (index, group) {
        return index + group.list[0].id;
    };
    PrestigeNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-prestige-nav",
            template: __webpack_require__(/*! ./prestige-nav.component.html */ "./src/app/prestige-nav/prestige-nav.component.html"),
            styles: [__webpack_require__(/*! ./prestige-nav.component.scss */ "./src/app/prestige-nav/prestige-nav.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-container]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], PrestigeNavComponent);
    return PrestigeNavComponent;
}());



/***/ }),

/***/ "./src/app/prestige/prestige.component.html":
/*!**************************************************!*\
  !*** ./src/app/prestige/prestige.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n\n  <app-change-world *ngIf=\"skip || ms.game.canTravel; else noTravel\"></app-change-world>\n  <ng-template #noTravel>\n\n    <h1>旅行到一个新世界\n      <button class=\"btn btn-danger-outline btn-link\"\n              (click)=\"skip = true\">跳过</button>\n    </h1>\n\n    <clr-alert [clrAlertType]=\"'alert-danger'\"\n               [clrAlertClosable]=\"false\"\n               *ngIf=\"!ms.game.researches.travel.done\">\n      <div class=\"alert-item\">\n        <span class=\"alert-text\">\n          旅行需要先完成研究旅行科技。\n        </span>\n      </div>\n    </clr-alert>\n\n    <div class=\"clr-row\">\n      <div class=\"clr-col-12 clr-col-sm-12 clr-col-md-6 clr-col-lg-6 clr-col-xl-6\">\n        <div class=\"card\">\n          <div class=\"card-block\">\n            <h3 class=\"card-title\">\n              你需要:\n            </h3>\n            <div *ngFor=\"let price of ms.game.currentWorld.winConditions; trackBy:getPriceId\">\n              <div class=\"winLabel\">\n                {{price.base.name}}\n                <span class=\"monospace\">\n                  {{price.base.quantity | format:true}}/{{price.price | format:true}}\n                </span>\n              </div>\n\n              <div class=\"progress-static\"\n                   [ngClass]=\"{'success': price.canBuy,'danger': !price.canBuy}\">\n                <div class=\"progress-meter\"\n                     [attr.data-value]=\"price.completedPercent\"\n                     [attr.data-displayval]=\"price.completedPercent\"></div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"clr-col-12 clr-col-sm-12 clr-col-md-6 clr-col-lg-6 clr-col-xl-6\"\n           *ngIf=\"ms.game.currentWorld.notWinConditions?.length > 0\">\n        <div class=\"card\">\n          <div class=\"card-block\">\n            <h3 class=\"card-title\">\n              你必须杀死:\n            </h3>\n            <ul class=\"list-unstyled\">\n              <li *ngFor=\"let malus of ms.game.currentWorld.notWinConditions; trackBy:getMalusId\">\n                <span>\n                  <clr-icon class=\"malusIcon\"\n                            [ngClass]=\"malus.isKilled ? 'ok':'no'\"\n                            [attr.shape]=\"malus.isKilled ? 'check' : 'times'\"></clr-icon>\n                  {{malus.name}}\n                </span>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/prestige/prestige.component.scss":
/*!**************************************************!*\
  !*** ./src/app/prestige/prestige.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6 {\n  margin-top: 0.1rem; }\n\n.malusIcon {\n  height: 1.5rem;\n  width: 1.5rem; }\n\n.ok {\n  color: #318700; }\n\n.no {\n  color: #e62700; }\n\n.winLabel {\n  margin-bottom: 0.4rem; }\n"

/***/ }),

/***/ "./src/app/prestige/prestige.component.ts":
/*!************************************************!*\
  !*** ./src/app/prestige/prestige.component.ts ***!
  \************************************************/
/*! exports provided: PrestigeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestigeComponent", function() { return PrestigeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrestigeComponent = /** @class */ (function () {
    function PrestigeComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.skip = false;
    }
    PrestigeComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    PrestigeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.updateEmitter.subscribe(function () {
            _this.ms.game.currentWorld.winConditions.forEach(function (w) { return w.reloadPercent(); });
            _this.cd.markForCheck();
        });
    };
    PrestigeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PrestigeComponent.prototype.getPriceId = function (index, price) {
        return "" + index + price.base.id;
    };
    PrestigeComponent.prototype.getMalusId = function (index, malus) {
        return "" + index + malus.id;
    };
    PrestigeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-prestige",
            template: __webpack_require__(/*! ./prestige.component.html */ "./src/app/prestige/prestige.component.html"),
            styles: [__webpack_require__(/*! ./prestige.component.scss */ "./src/app/prestige/prestige.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-container]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PrestigeComponent);
    return PrestigeComponent;
}());



/***/ }),

/***/ "./src/app/production-signposts/production-signposts.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/production-signposts/production-signposts.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-signpost>\n  <clr-signpost-content *clrIfOpen=\"open\"\n                        [clrPosition]=\"'left-middle'\">\n    <h3>{{production.product.name}}:</h3>\n    <ul class=\"list\">\n      <li [class.notEnough]=\"production.ratio.lt(0)\">\n        基础产量: {{production.ratio | format}}\n      </li>\n      <li>\n        可操作性: {{production.producer.efficiency}}%\n      </li>\n      <li *ngIf=\"ms.game.researches.team1.done && production.producer.buyAction\">\n        团队加成: +{{production.producer.bonus.times(100) | format}}%\n      </li>\n    </ul>\n    <div *ngIf=\"productionsAll.length +productionsEfficiency.length +  productionsBonus.length >0\">\n      <h6>附加奖励:</h6>\n      <ul class=\"list\">\n        <li *ngFor=\"let bon of productionsAll; trackBy getProdID\">\n          {{bon.unit.name}}: +{{bon.getBonusPercent() | format }}%\n        </li>\n        <li *ngFor=\"let bon of productionsEfficiency; trackBy getProdID\">\n          {{bon.unit.name}}: +{{bon.getBonusPercent() | format }}%\n        </li>\n        <li *ngFor=\"let bon of productionsBonus; trackBy getProdID\">\n          {{bon.unit.name}}: +{{bon.getBonusPercent() | format }}%\n        </li>\n      </ul>\n    </div>\n  </clr-signpost-content>\n</clr-signpost>\n"

/***/ }),

/***/ "./src/app/production-signposts/production-signposts.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/production-signposts/production-signposts.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  line-height: 0.9rem; }\n\n:host /deep/ .list {\n  margin-top: 0; }\n"

/***/ }),

/***/ "./src/app/production-signposts/production-signposts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/production-signposts/production-signposts.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductionSignpostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionSignpostsComponent", function() { return ProductionSignpostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_production__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/production */ "./src/app/model/production.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductionSignpostsComponent = /** @class */ (function () {
    function ProductionSignpostsComponent(ms) {
        this.ms = ms;
        this.open = false;
        this.productionsAll = new Array();
        this.productionsEfficiency = new Array();
        this.productionsBonus = new Array();
        //
    }
    ProductionSignpostsComponent.prototype.ngOnInit = function () {
        this.productionsAll = new Array();
        this.productionsEfficiency = new Array();
        this.productionsBonus = new Array();
        if (this.production) {
            this.productionsAll = this.production.producer.productionsAll.filter(function (bn) {
                return bn.isActive();
            });
            if (this.production.ratio.gt(0)) {
                this.productionsEfficiency = this.production.producer.productionsEfficiency.filter(function (bn) { return bn.isActive(); });
                this.productionsBonus = this.production.product.productionsBonus.filter(function (bn) { return bn.isActive(); });
            }
        }
    };
    ProductionSignpostsComponent.prototype.getProdID = function (index, bon) {
        return bon.unit.id + bon.quantity.toNumber();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_production__WEBPACK_IMPORTED_MODULE_2__["Production"])
    ], ProductionSignpostsComponent.prototype, "production", void 0);
    ProductionSignpostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-production-signposts",
            template: __webpack_require__(/*! ./production-signposts.component.html */ "./src/app/production-signposts/production-signposts.component.html"),
            styles: [__webpack_require__(/*! ./production-signposts.component.scss */ "./src/app/production-signposts/production-signposts.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], ProductionSignpostsComponent);
    return ProductionSignpostsComponent;
}());



/***/ }),

/***/ "./src/app/research/name/name.component.html":
/*!***************************************************!*\
  !*** ./src/app/research/name/name.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\n  {{name}}\n</span>\n<span *ngIf=\"unlimited && quantity.gt(0) && quantity.lte(3999)\">\n  {{quantity | roman}}\n</span>\n<span *ngIf=\"unlimited && quantity.gt(0) && quantity.gt(3999)\">\n  {{quantity | format:true}}\n</span>\n"

/***/ }),

/***/ "./src/app/research/name/name.component.scss":
/*!***************************************************!*\
  !*** ./src/app/research/name/name.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/research/name/name.component.ts":
/*!*************************************************!*\
  !*** ./src/app/research/name/name.component.ts ***!
  \*************************************************/
/*! exports provided: NameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameComponent", function() { return NameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NameComponent = /** @class */ (function () {
    function NameComponent() {
        this.name = "";
        this.unlimited = false;
        this.quantity = new Decimal(0);
        //
    }
    NameComponent.prototype.ngOnInit = function () {
        //
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NameComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NameComponent.prototype, "unlimited", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NameComponent.prototype, "quantity", void 0);
    NameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-name",
            template: __webpack_require__(/*! ./name.component.html */ "./src/app/research/name/name.component.html"),
            styles: [__webpack_require__(/*! ./name.component.scss */ "./src/app/research/name/name.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], NameComponent);
    return NameComponent;
}());



/***/ }),

/***/ "./src/app/research/research.component.html":
/*!**************************************************!*\
  !*** ./src/app/research/research.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <div class=\"card-title\">\n    <app-name [name]=\"research.name\"\n              [unlimited]=\"research.unlimited\"\n              [quantity]=\"research.quantity\"></app-name>\n  </div>\n  <div class=\"card-text p\">\n    {{research.description}}\n    <br />\n    <div *ngIf=\"!research.complete\">\n      <span>花费: </span>\n      <app-price-line *ngFor=\"let price of research.prices; trackBy:getPriceId\"\n                      [unit]=\"price.base\"\n                      [canBuy]=\"price.canBuy\"\n                      [price]=\"price.priceUser\">\n      </app-price-line>\n\n      <div *ngIf=\"research.unlimited \">\n        <label for=\"max\">最高等级:</label>\n        <input type=\"number\"\n               id=\"max\"\n               class=\"clr-input\"\n               [(ngModel)]=\"research.maxAutoBuyLevel\"\n               (change)=\"ms.game.researches.reloadLists()\"\n               min=\"0\"\n               size=\"3\">\n      </div>\n\n    </div>\n  </div>\n</div>\n<div class=\"card-footer\"\n     *ngIf=\"!research.complete\">\n  <button *ngIf=\"!research.canBuy && !canSkip\"\n          class=\"btn btn-sm btn-link\"\n          disabled>\n    不能购买. 距离可购买还有 {{research.availableIn | endIn}} \n  </button>\n  <button *ngIf=\"!research.canBuy &&  canSkip\"\n          class=\"btn btn-primary btn-sm\"\n          (click)=\"skip()\">\n    不能购买. 跳过 {{minuteSkip}} 分钟\n  </button>\n  <button *ngIf=\"research.canBuy\"\n          class=\"btn btn-sm btn-link\"\n          (click)=\"research.buy(research.realNum)\">\n    研究\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/research/research.component.scss":
/*!**************************************************!*\
  !*** ./src/app/research/research.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/research/research.component.ts":
/*!************************************************!*\
  !*** ./src/app/research/research.component.ts ***!
  \************************************************/
/*! exports provided: ResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchComponent", function() { return ResearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_research__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/research */ "./src/app/model/research.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResearchComponent = /** @class */ (function () {
    function ResearchComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.minuteSkip = 1;
        this.canSkip = false;
        //Nothing
    }
    ResearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSkip();
        this.sub = this.ms.updateEmitter.subscribe(function (m) {
            _this.research.reloadUserPrices();
            _this.research.reloadAvailableTime();
            _this.checkSkip();
            _this.cd.markForCheck();
        });
    };
    ResearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResearchComponent.prototype.getPriceId = function (index, price) {
        return price.base.id;
    };
    ResearchComponent.prototype.checkSkip = function () {
        this.canSkip = false;
        if (!this.research.canBuy) {
            this.minuteSkip = Math.ceil(Math.max(this.research.availableIn / 60000, 1));
            this.canSkip = this.ms.game.time.quantity.gt(this.minuteSkip * 60);
        }
    };
    ResearchComponent.prototype.skip = function () {
        if (this.canSkip)
            this.ms.game.actMin.buy(new Decimal(this.minuteSkip));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_research__WEBPACK_IMPORTED_MODULE_2__["Research"])
    ], ResearchComponent.prototype, "research", void 0);
    ResearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-research",
            template: __webpack_require__(/*! ./research.component.html */ "./src/app/research/research.component.html"),
            styles: [__webpack_require__(/*! ./research.component.scss */ "./src/app/research/research.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.card]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ResearchComponent);
    return ResearchComponent;
}());



/***/ }),

/***/ "./src/app/roman.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/roman.pipe.ts ***!
  \*******************************/
/*! exports provided: RomanPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RomanPipe", function() { return RomanPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/utility */ "./src/app/model/utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RomanPipe = /** @class */ (function () {
    function RomanPipe() {
    }
    RomanPipe.prototype.transform = function (num, args) {
        num = num.floor();
        return _model_utility__WEBPACK_IMPORTED_MODULE_1__["Utility"].convertToRoman(num.toNumber());
    };
    RomanPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "roman"
        })
    ], RomanPipe);
    return RomanPipe;
}());



/***/ }),

/***/ "./src/app/unit-tabs/made-by-chart/made-by-chart.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/unit-tabs/made-by-chart/made-by-chart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>{{title}}</h6>\n<div class=\"pieContainer\"\n     #pieContainer>\n  <canvas #chart> </canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/unit-tabs/made-by-chart/made-by-chart.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/unit-tabs/made-by-chart/made-by-chart.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/unit-tabs/made-by-chart/made-by-chart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/unit-tabs/made-by-chart/made-by-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: MadeByChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MadeByChartComponent", function() { return MadeByChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/CONSTANTS */ "./src/app/model/CONSTANTS.ts");
/* harmony import */ var _model_full_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/full-unit */ "./src/app/model/full-unit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MadeByChartComponent = /** @class */ (function () {
    function MadeByChartComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.consumers = false;
        this.title = "";
        //
    }
    MadeByChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.updateEmitter.subscribe(function (m) { return _this.updateData; });
    };
    MadeByChartComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MadeByChartComponent.prototype.ngOnChanges = function () {
        this.title =
            (this.consumers ? "消耗比例" : "生产比例") + " % 关于 " + this.unit.name;
        this.updateData(true);
    };
    MadeByChartComponent.prototype.ngAfterViewInit = function () {
        setTimeout(this.initChart.bind(this), 0.1);
    };
    MadeByChartComponent.prototype.initChart = function () {
        this.chartRef.nativeElement.width = this.pieContainerRef.nativeElement.clientWidth;
        this.chartRef.nativeElement.height = this.pieContainerRef.nativeElement.clientHeight;
        var canvas = this.chartRef.nativeElement;
        canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);
        Chart.defaults.global.tooltips.enabled = false;
        var chartCtx = this.chartRef.nativeElement.getContext("2d");
        this.chart = new Chart(chartCtx, {
            type: "pie",
            data: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: _model_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].CHART_COLORS.backgroundColor,
                        borderColor: _model_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["CONSTS"].CHART_COLORS.borderColor,
                        borderWidth: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { position: "right" }
            }
        });
        this.updateData();
    };
    MadeByChartComponent.prototype.updateData = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (!this.chart)
            return;
        var activeProducer = this.unit.producedBy.filter(function (p) {
            return p.producer.unlocked &&
                p.producer.quantity.gt(0) &&
                ((!_this.consumers && p.ratio.gt(0)) ||
                    (_this.consumers && p.ratio.lt(0)));
        });
        var labels = activeProducer.map(function (p) { return p.producer.name; });
        if (this.chart.data.labels.length !== labels.length || force) {
            this.chart.data.labels = labels;
        }
        var total = activeProducer
            .map(function (p) { return p.prodPerSec.times(p.producer.quantity); })
            .reduce(function (p, n) { return p.plus(n); }, new Decimal(0));
        var data = activeProducer.map(function (p) {
            return Math.floor(p.prodPerSec
                .times(p.producer.quantity)
                .div(total)
                .toNumber() * 100);
        });
        if (data.length !== this.chart.data.datasets[0].data || force) {
            this.chart.data.datasets[0].data = data;
            this.chart.update();
            this.cd.markForCheck();
        }
        else {
            var len = data.length;
            var i = 0;
            for (i = 0; i < len; i++) {
                if (data[i] !== this.chart.data.datasets[0].data)
                    break;
            }
            if (i < len) {
                this.chart.data.datasets[0].data = data;
                this.chart.update();
                this.cd.markForCheck();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_full_unit__WEBPACK_IMPORTED_MODULE_3__["FullUnit"])
    ], MadeByChartComponent.prototype, "unit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MadeByChartComponent.prototype, "consumers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("chart"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MadeByChartComponent.prototype, "chartRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pieContainer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MadeByChartComponent.prototype, "pieContainerRef", void 0);
    MadeByChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-made-by-chart",
            template: __webpack_require__(/*! ./made-by-chart.component.html */ "./src/app/unit-tabs/made-by-chart/made-by-chart.component.html"),
            styles: [__webpack_require__(/*! ./made-by-chart.component.scss */ "./src/app/unit-tabs/made-by-chart/made-by-chart.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MadeByChartComponent);
    return MadeByChartComponent;
}());



/***/ }),

/***/ "./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <div class=\"clr-col-12\tclr-col-sm-12\tclr-col-md-10\tclr-col-lg-6\tclr-col-xl-5\"\n       *ngFor=\"let autoB of autoBuyers; trackBy:getAutoBuyId\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <app-auto-buy [autoBuy]=\"autoB\"></app-auto-buy>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.ts ***!
  \********************************************************************/
/*! exports provided: UnitAutoBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitAutoBuyComponent", function() { return UnitAutoBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_full_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/full-unit */ "./src/app/model/full-unit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitAutoBuyComponent = /** @class */ (function () {
    function UnitAutoBuyComponent(ms) {
        this.ms = ms;
        this.autoBuyers = Array();
        this.ms.lastTab = 2;
    }
    UnitAutoBuyComponent.prototype.ngOnInit = function () {
        //
    };
    UnitAutoBuyComponent.prototype.ngOnChanges = function () {
        this.autoBuyers = [];
        if (this.unit.buyAction &&
            this.unit.buyAction.autoBuyer &&
            this.ms.game.allPrestige.autoBuyUnlock.autoBuyQuantity.done) {
            this.autoBuyers.push(this.unit.buyAction.autoBuyer);
        }
        if (this.unit.teamAction &&
            this.unit.teamAction.autoBuyer &&
            this.ms.game.allPrestige.autoBuyUnlock.autoBuyTeam.done) {
            this.autoBuyers.push(this.unit.teamAction.autoBuyer);
        }
        if (this.unit.twinAction &&
            this.unit.twinAction.autoBuyer &&
            this.ms.game.allPrestige.autoBuyUnlock.autoBuyTwin.done) {
            this.autoBuyers.push(this.unit.twinAction.autoBuyer);
        }
    };
    UnitAutoBuyComponent.prototype.getAutoBuyId = function (index, autoBuy) {
        return autoBuy.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"])
    ], UnitAutoBuyComponent.prototype, "unit", void 0);
    UnitAutoBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-unit-auto-buy",
            template: __webpack_require__(/*! ./unit-auto-buy.component.html */ "./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.html"),
            styles: [__webpack_require__(/*! ./unit-auto-buy.component.scss */ "./src/app/unit-tabs/unit-auto-buy/unit-auto-buy.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], UnitAutoBuyComponent);
    return UnitAutoBuyComponent;
}());



/***/ }),

/***/ "./src/app/unit-tabs/unit-tabs.component.html":
/*!****************************************************!*\
  !*** ./src/app/unit-tabs/unit-tabs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{unit.name}}</h1>\n\n<clr-tabs>\n\n  <clr-tab>\n    <button clrTabLink\n            id=\"link1\">概览</button>\n    <clr-tab-content id=\"content1\"\n                     *clrIfActive=\"ms.overviewTaActive\">\n      <app-unit [unit]=\"unit\"></app-unit>\n    </clr-tab-content>\n  </clr-tab>\n\n  <clr-tab *ngIf=\"ms.game.tabs.autoBuy.unlocked && unit.hasAutoBuyer\">\n    <button clrTabLink>自动购买者</button>\n    <clr-tab-content *clrIfActive=\"ms.prestigeTaActive\">\n      <app-unit-auto-buy [unit]=\"unit\"></app-unit-auto-buy>\n    </clr-tab-content>\n  </clr-tab>\n\n</clr-tabs>\n"

/***/ }),

/***/ "./src/app/unit-tabs/unit-tabs.component.scss":
/*!****************************************************!*\
  !*** ./src/app/unit-tabs/unit-tabs.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ clr-tabs ul {\n  margin-top: -0.4rem; }\n"

/***/ }),

/***/ "./src/app/unit-tabs/unit-tabs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/unit-tabs/unit-tabs.component.ts ***!
  \**************************************************/
/*! exports provided: UnitTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitTabsComponent", function() { return UnitTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_full_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/full-unit */ "./src/app/model/full-unit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnitTabsComponent = /** @class */ (function () {
    function UnitTabsComponent(ms, route, cd) {
        this.ms = ms;
        this.route = route;
        this.cd = cd;
        this.overviewActive = true;
        this.ms.overviewTaActive = this.ms.lastTab === 0;
        this.ms.prestigeTaActive = this.ms.lastTab !== 0;
    }
    UnitTabsComponent.prototype.ngAfterViewInit = function () {
        if (typeof preventScroll === typeof Function)
            preventScroll();
    };
    UnitTabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params.subscribe(this.getUnit.bind(this));
        this.sub = this.ms.updateEmitter.subscribe(function () { return _this.cd.markForCheck(); });
    };
    UnitTabsComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
        this.sub.unsubscribe();
    };
    UnitTabsComponent.prototype.getUnit = function (params) {
        var id = params.id;
        if (id === undefined) {
            id = this.ms.game.materials.food.id;
        }
        var b = this.ms.game.units.find(function (u) { return u.id === id; });
        if (b instanceof _model_full_unit__WEBPACK_IMPORTED_MODULE_3__["FullUnit"]) {
            this.unit = b;
            this.unit.isNew = false;
            this.ms.game.lastUnitUrl = "nav/unit/" + b.id;
            this.unit.getRandomDescription();
        }
        this.cd.markForCheck();
    };
    UnitTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-unit-tabs",
            template: __webpack_require__(/*! ./unit-tabs.component.html */ "./src/app/unit-tabs/unit-tabs.component.html"),
            styles: [__webpack_require__(/*! ./unit-tabs.component.scss */ "./src/app/unit-tabs/unit-tabs.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.content-area]": "true"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UnitTabsComponent);
    return UnitTabsComponent;
}());



/***/ }),

/***/ "./src/app/unit-tabs/unit/unit.component.html":
/*!****************************************************!*\
  !*** ./src/app/unit-tabs/unit/unit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"unit\">\n  <div class=\"clr-row\">\n    <div class=\"clr-col-xs-12\tclr-col-sm-6\tclr-col-md-6\tclr-col-lg-6\tclr-col-xl-6\">\n\n      <h5>{{unit.description}}</h5>\n\n      <p *ngIf=\"ms.game.researches.team1.done && unit.buyAction && unit.bonus.gt(0) && unit.produces.length > 0\">\n        你购买了这个 {{unit.buyAction.quantity | format}} 次; 奖励加成: + {{unit.bonus.times(100) | format}}%\n      </p>\n\n      <p *ngIf=\"unit.c.abs().gt(0.01)\">\n        产量:\n        <app-polynom [a]=\"unit.a\"\n                     [b]=\"unit.b\"\n                     [c]=\"unit.c\"></app-polynom>\n      </p>\n\n      <clr-alert *ngIf=\"unit.isEnding\"\n                 [clrAlertType]=\"malus ? 'alert-success': (ms.game.firstEndingUnit.endIn < 3600000 ? 'alert-danger':'alert-warning')\"\n                 [clrAlertClosable]=\"false\"\n                 [clrAlertSizeSmall]=\"false\">\n        <clr-alert-item>\n          <span class=\"alert-text\">\n            耗尽: {{unit.endIn | endIn}}\n          </span>\n        </clr-alert-item>\n      </clr-alert>\n\n      <clr-alert *ngIf=\"malus && malus.first && malus.isActive()\"\n                 [clrAlertType]=\"'alert-danger'\"\n                 [clrAlertSizeSmall]=\"false\"\n                 [clrAlertClosable]=\"false\">\n        <clr-alert-item>\n          <span>\n            {{malus.name}} 正在导致\n            <span class=\"monospace\"> {{malus.priceMultiplier.minus(1).times(100) | format}} %\n            </span>\n            \n            <a [routerLink]=\"'/nav/unit/'+malus.malusType.id\">\n              {{malus.malusType.name}}\n            </a>\n            价格增长.\n          </span>\n        </clr-alert-item>\n      </clr-alert>\n\n      <div *ngIf=\"unit.produces.length > 0 && !malus\">\n        <span>工作者比例: {{unit.efficiency | format}} %</span>\n\n        <p-slider [min]=\"0\"\n                  [max]=\"100\"\n                  [step]=\"0.01\"\n                  [(ngModel)]=\"unit.efficiency\"\n                  animate=\"true\"></p-slider>\n      </div>\n\n      <app-action *ngIf=\"unit.buyAction\"\n                  [action]=\"unit.buyAction\"></app-action>\n      <app-action *ngIf=\"unit.teamAction && ms.game.researches.team2.done\"\n                  [action]=\"unit.teamAction\"></app-action>\n      <app-action *ngIf=\"unit.twinAction && ms.game.researches.twin.done\"\n                  [action]=\"unit.twinAction\"></app-action>\n\n      <div *ngIf=\"madeChart\"\n           class=\"chartDiv\">\n        <app-made-by-chart [unit]=\"unit\"></app-made-by-chart>\n        <app-made-by-chart [unit]=\"unit\"\n                           [consumers]=\"true\"></app-made-by-chart>\n      </div>\n\n    </div>\n    <div class=\"clr-col-xs-12\tclr-col-sm-6 clr-col-md-6\tclr-col-lg-6 clr-col-xl-6\">\n      <div *ngIf=\"activeProduct?.length > 0\">\n        <h6>\n          {{unit.name}} 生产:\n        </h6>\n        <clr-datagrid class=\"datagrid-compact\">\n          <clr-dg-column [clrDgField]=\"'product.name'\">名称</clr-dg-column>\n          <clr-dg-column [clrDgSortBy]=\"prodSorter\">每个单位的产量/秒</clr-dg-column>\n          <clr-dg-column [clrDgSortBy]=\"totalProdSorter\">总产量</clr-dg-column>\n\n          <clr-dg-row *clrDgItems=\"let product of activeProduct\">\n            <clr-dg-cell>\n              <a [routerLink]=\"'/nav/unit/'+product.product.id\">\n                {{product.product.name}}\n              </a>\n            </clr-dg-cell>\n            <clr-dg-cell>\n              <span [class.notEnough]=\"product.ratio.lt(0)\"\n                    class=\"monospace\">\n                {{product.prodPerSec | format}}</span>\n              <app-production-signposts [production]=\"product\"></app-production-signposts>\n            </clr-dg-cell>\n            <clr-dg-cell>\n              <span [class.notEnough]=\"product.ratio.lt(0)\"\n                    class=\"monospace\">\n                {{product.prodPerSec.times(unit.quantity) | format}}\n              </span>\n            </clr-dg-cell>\n          </clr-dg-row>\n\n          <clr-dg-footer>\n            <clr-dg-pagination #pagination\n                               [clrDgPageSize]=\"10\">\n              {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}}\n            </clr-dg-pagination>\n          </clr-dg-footer>\n\n        </clr-datagrid>\n      </div>\n\n      <div *ngIf=\"activeProducer?.length > 0\">\n        <h6>\n          {{unit.name}} 产量来自:\n        </h6>\n        <clr-datagrid class=\"datagrid-compact\">\n          <clr-dg-column [clrDgField]=\"'producer.name'\">名字</clr-dg-column>\n          <clr-dg-column [clrDgSortBy]=\"prodSorter\">每个单位的产量/秒</clr-dg-column>\n          <clr-dg-column [clrDgSortBy]=\"totalProdSorter\">总产量</clr-dg-column>\n\n          <clr-dg-row *clrDgItems=\"let producer of activeProducer\">\n            <clr-dg-cell>\n              <a [routerLink]=\"'/nav/unit/'+producer.producer.id\">\n                {{producer.producer.name}}\n              </a>\n            </clr-dg-cell>\n            <clr-dg-cell>\n              <span [class.notEnough]=\"producer.ratio.lt(0)\"\n                    class=\"monospace\">\n                {{producer.prodPerSec | format}}\n              </span>\n            </clr-dg-cell>\n            <clr-dg-cell>\n              <span [class.notEnough]=\"producer.ratio.lt(0)\"\n                    class=\"monospace\">\n                {{producer.prodPerSec.times(producer.producer.quantity) | format}}</span>\n            </clr-dg-cell>\n          </clr-dg-row>\n\n          <clr-dg-footer>\n            <clr-dg-pagination #pagination\n                               [clrDgPageSize]=\"10\">\n              {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}}\n            </clr-dg-pagination>\n          </clr-dg-footer>\n\n        </clr-datagrid>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/unit-tabs/unit/unit.component.scss":
/*!****************************************************!*\
  !*** ./src/app/unit-tabs/unit/unit.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clr-row {\n  margin-left: 0;\n  margin-right: 0; }\n\napp-production-signposts {\n  float: right;\n  margin-bottom: -0.45rem;\n  margin-top: -0.45rem; }\n\n.inline {\n  display: inline; }\n\nh5 {\n  margin-bottom: 8px;\n  margin-top: 8px; }\n"

/***/ }),

/***/ "./src/app/unit-tabs/unit/unit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/unit-tabs/unit/unit.component.ts ***!
  \**************************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_full_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/full-unit */ "./src/app/model/full-unit.ts");
/* harmony import */ var _model_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/helper */ "./src/app/model/helper.ts");
/* harmony import */ var _model_malus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/malus */ "./src/app/model/malus.ts");
/* harmony import */ var _model_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/utility */ "./src/app/model/utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UnitComponent = /** @class */ (function () {
    function UnitComponent(ms, cd) {
        this.ms = ms;
        this.cd = cd;
        this.prodSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_5__["ProductionSorter"]();
        this.totalProdSorter = new _model_utility__WEBPACK_IMPORTED_MODULE_5__["TotalProductionSorter"]();
        this.activeProduct = new Array();
        this.activeProducer = new Array();
        this.autoBuyModal = false;
        this.madeChart = false;
        this.ms.lastTab = 0;
    }
    UnitComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.paramsSub = this.route.params.subscribe(this.getUnit.bind(this));
        this.sub = this.ms.updateEmitter.subscribe(function () { return _this.cd.markForCheck(); });
    };
    UnitComponent.prototype.ngOnDestroy = function () {
        // this.paramsSub.unsubscribe();
        this.sub.unsubscribe();
    };
    UnitComponent.prototype.ngOnChanges = function () {
        this.getUnit();
    };
    UnitComponent.prototype.getUnit = function () {
        if (this.unit instanceof _model_full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"]) {
            this.unit.isNew = false;
            this.malus = this.unit instanceof _model_malus__WEBPACK_IMPORTED_MODULE_4__["Malus"] ? this.unit : null;
            this.helper = this.unit instanceof _model_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] ? this.unit : null;
            this.activeProduct = this.unit.produces.filter(function (p) { return p.product.unlocked; });
            this.activeProducer = this.unit.producedBy.filter(function (p) { return p.producer.unlocked; });
            if (this.unit.buyAction)
                this.unit.buyAction.reloadUserPrices();
            if (this.unit.teamAction && this.ms.game.researches.team2.done) {
                this.unit.teamAction.reloadUserPrices();
            }
            if (this.unit.twinAction && this.ms.game.researches.twin.done) {
                this.unit.twinAction.reloadUserPrices();
            }
        }
        this.madeChart = this.ms.game.materials.list.includes(this.unit);
        this.cd.markForCheck();
    };
    UnitComponent.prototype.getActId = function (action) {
        return action.id + this.unit.id;
    };
    UnitComponent.prototype.openAutoBuyModal = function () {
        this.autoBuyModal = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_full_unit__WEBPACK_IMPORTED_MODULE_2__["FullUnit"])
    ], UnitComponent.prototype, "unit", void 0);
    UnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-unit",
            template: __webpack_require__(/*! ./unit.component.html */ "./src/app/unit-tabs/unit/unit.component.html"),
            styles: [__webpack_require__(/*! ./unit.component.scss */ "./src/app/unit-tabs/unit/unit.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UnitComponent);
    return UnitComponent;
}());



/***/ }),

/***/ "./src/app/world/world.component.html":
/*!********************************************!*\
  !*** ./src/app/world/world.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\"\n     *ngIf=\"world\"\n     (click)=\"openModal()\">\n  <h3 class=\"card-title\">{{world.name}} ({{world.level |format:true}})</h3>\n  <span class=\"p2\">经验:\n    <span class=\"monospace\">{{world.prestige | format:true}}</span>\n  </span>\n  <ul class=\"list\">\n    <li *ngFor=\"let bug of world.additionalBugs; trackBy:getBugId\">\n      {{getBugName(bug)}}\n    </li>\n    <li *ngFor=\"let bon of world.productionsBonus; trackBy:getBonusId\">\n      {{bon[0].name }} + {{bon[0].usedForProductionBonus[0].getBonusPercentForNum(bon[1]) |format }}%\n    </li>\n    <li *ngFor=\"let bon of world.productionsEfficiency; trackBy:getBonusId\">\n      {{bon[0].name }} + {{bon[0].usedForProductionBonus[0].getBonusPercentForNum(bon[1]) |format }}%\n    </li>\n    <li *ngFor=\"let bon of world.productionsAll; trackBy:getBonusId\">\n      {{bon[0].name }} + {{bon[0].usedForProductionBonus[0].getBonusPercentForNum(bon[1]) |format }}%\n    </li>\n    <li *ngFor=\"let unl of world.startingUnlocked; trackBy:getResearchId\">\n      {{unl.name}} 可用.\n    </li>\n    <li *ngFor=\"let start of world.startingUnit; trackBy:getStartId\">\n      <ng-container *ngIf=\"start[1].gt(0);else zero\">{{start[1] | format}} x {{start[0].name}}</ng-container>\n      <ng-template #zero>{{start[0].name}} 可用。</ng-template>\n    </li>\n  </ul>\n\n  <span class=\"p2\">胜利条件:</span>\n  <ul class=\"list\">\n    <li *ngFor=\"let win of world.winConditions; trackBy:getWinId\">\n      {{win.price | format:true}} {{win.base.name}}\n    </li>\n  </ul>\n\n  <div *ngIf=\"world.notWinConditions?.length > 0\">\n    <span class=\"p2\">敌人:</span>\n    <ul class=\"list\">\n      <li *ngFor=\"let mal of world.notWinConditions; trackBy:getMalusId\">\n        {{mal.name}}\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/world/world.component.scss":
/*!********************************************!*\
  !*** ./src/app/world/world.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/world/world.component.ts":
/*!******************************************!*\
  !*** ./src/app/world/world.component.ts ***!
  \******************************************/
/*! exports provided: WorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldComponent", function() { return WorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _model_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/strings */ "./src/app/model/strings.ts");
/* harmony import */ var _model_world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/world */ "./src/app/model/world.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorldComponent = /** @class */ (function () {
    function WorldComponent(ms) {
        this.ms = ms;
        this.cantTravel = true;
        this.travelMessage = false;
        //
    }
    WorldComponent.prototype.ngOnInit = function () {
        //
    };
    WorldComponent.prototype.openModal = function () {
        if (this.cantTravel)
            this.ms.worldEmitter.emit(this.world);
    };
    WorldComponent.prototype.getBugName = function (bug) {
        return bug in _model_strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].bug ? _model_strings__WEBPACK_IMPORTED_MODULE_2__["STRINGS"].bug[bug] : "";
    };
    WorldComponent.prototype.getBonusId = function (index, bonus) {
        return bonus[0].id + bonus[1].toNumber();
    };
    WorldComponent.prototype.getResearchId = function (index, resarch) {
        return index + resarch.id;
    };
    WorldComponent.prototype.getStartId = function (index, bonus) {
        return bonus[0].id + bonus[1].toNumber();
    };
    WorldComponent.prototype.getWinId = function (index, price) {
        return index + price.base.id + price.price.toString();
    };
    WorldComponent.prototype.getMalusId = function (index, malus) {
        return index + malus.id;
    };
    WorldComponent.prototype.getBugId = function (index, bug) {
        return index + bug;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_world__WEBPACK_IMPORTED_MODULE_3__["World"])
    ], WorldComponent.prototype, "world", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorldComponent.prototype, "cantTravel", void 0);
    WorldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-world",
            template: __webpack_require__(/*! ./world.component.html */ "./src/app/world/world.component.html"),
            styles: [__webpack_require__(/*! ./world.component.scss */ "./src/app/world/world.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                "[class.card]": "true",
                "[class.clickable]": "cantTravel"
            }
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], WorldComponent);
    return WorldComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    // tslint:disable-next-line:no-console
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zhaolinxu/GitHub/Games/IdleAnt2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map