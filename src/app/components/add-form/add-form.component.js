"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var club_1 = require("../club");
var AddFormComponent = (function () {
    function AddFormComponent(clubService, /*private router: Router,*/ dialogRef) {
        this.clubService = clubService;
        this.dialogRef = dialogRef;
        this.club = new club_1.Club();
        this.loading = false;
    }
    AddFormComponent.prototype.ngOnInit = function () {
    };
    AddFormComponent.prototype.add = function (f) {
        var _this = this;
        this.loading = true;
        this.clubService.uploadImage(this.logoFile, this.club.name + "." + this.logoFile.name.split('.').pop()).then(function (snapshot) {
            return snapshot.downloadURL;
        }).then(function (logo) {
            _this.club.logo = logo;
            _this.clubService.create(_this.club).then(function (data) {
                _this.dialogRef.close();
            });
        });
    };
    AddFormComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.logoFile = fileList[0];
        }
    };
    return AddFormComponent;
}());
__decorate([
    core_1.Input()
], AddFormComponent.prototype, "club", void 0);
AddFormComponent = __decorate([
    core_1.Component({
        selector: 'app-add-form',
        templateUrl: 'add-form.component.html',
        styleUrls: ['add-form.component.css']
    })
], AddFormComponent);
exports.AddFormComponent = AddFormComponent;
