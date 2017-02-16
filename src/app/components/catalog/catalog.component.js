"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var add_form_component_1 = require("../components/add-form/add-form.component");
var CatalogComponent = (function () {
    function CatalogComponent(clubService, router, dialog, echoService) {
        this.clubService = clubService;
        this.router = router;
        this.dialog = dialog;
        this.echoService = echoService;
        this.echoService.send("Clubs");
    }
    CatalogComponent.prototype.ngOnInit = function () {
        this.clubs = this.clubService.getClubs();
    };
    CatalogComponent.prototype.addDialog = function () {
        this.dialog.open(add_form_component_1.AddFormComponent, {
            height: '250px'
        });
    };
    CatalogComponent.prototype.clubInfo = function (club) {
        this.router.navigate(['/info', club['$key']]);
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    core_1.Component({
        selector: 'app-catalog',
        templateUrl: 'catalog.component.html',
        styleUrls: ['catalog.component.css']
    })
], CatalogComponent);
exports.CatalogComponent = CatalogComponent;
