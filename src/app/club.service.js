"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var ClubService = (function () {
    function ClubService(af, fa) {
        this.af = af;
        this.storageRef = fa.storage().ref();
        this.databaseRef = fa.database().ref();
    }
    Object.defineProperty(ClubService, "IMAGES_DIR", {
        get: function () {
            return "images";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClubService, "CLUBS_DIR", {
        get: function () {
            return "clubs";
        },
        enumerable: true,
        configurable: true
    });
    ClubService.prototype.getClubs = function (name) {
        if (name === void 0) { name = null; }
        var query;
        if (name) {
            query = {
                query: {
                    orderByChild: 'name',
                    equalTo: name
                }
            };
        }
        return this.af.database.list("/" + ClubService.CLUBS_DIR, query);
    };
    ClubService.prototype.getClub = function (key) {
        return this.af.database.object("/" + ClubService.CLUBS_DIR + "/" + key);
    };
    ClubService.prototype.create = function (club) {
        return this.af.database.list("/" + ClubService.CLUBS_DIR).push(club);
    };
    ClubService.prototype.uploadImage = function (file, name) {
        return this.storageRef.child(ClubService.IMAGES_DIR + "/" + name).put(file);
    };
    ClubService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(angularfire2_1.FirebaseApp))
    ], ClubService);
    return ClubService;
}());
exports.ClubService = ClubService;
