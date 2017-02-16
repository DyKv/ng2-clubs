"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var ClubValidatorDirective = ClubValidatorDirective_1 = (function () {
    function ClubValidatorDirective(clubService) {
        this.clubService = clubService;
    }
    ClubValidatorDirective.prototype.validate = function (c) {
        return this.validateUniqueClub(c.value).first();
    };
    ClubValidatorDirective.prototype.validateUniqueClub = function (name) {
        var _this = this;
        return rxjs_1.Observable.create(function (observer) {
            _this.clubService.getClubs(name).subscribe(function (result) {
                if (result.length > 0) {
                    observer.next({ exist: true });
                }
                else {
                    observer.next(null);
                }
                observer.complete();
            });
        });
    };
    return ClubValidatorDirective;
}());
ClubValidatorDirective = ClubValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[appClubValidator]',
        providers: [
            {
                provide: forms_1.NG_ASYNC_VALIDATORS,
                useExisting: core_1.forwardRef(function () { return ClubValidatorDirective_1; }), multi: true
            }
        ]
    })
], ClubValidatorDirective);
exports.ClubValidatorDirective = ClubValidatorDirective;
var ClubValidatorDirective_1;
