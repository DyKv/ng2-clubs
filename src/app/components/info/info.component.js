"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InfoComponent = (function () {
    function InfoComponent(clubService, route, echoService) {
        this.clubService = clubService;
        this.route = route;
        this.echoService = echoService;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.clubService.getClub(params['key']); })
            .subscribe(function (club) {
            _this.club = club;
            _this.echoService.send("Club " + club.name);
        });
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    core_1.Component({
        selector: 'app-info',
        templateUrl: 'info.component.html',
        styleUrls: ['info.component.css']
    })
], InfoComponent);
exports.InfoComponent = InfoComponent;
