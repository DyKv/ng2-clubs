/* tslint:disable:no-unused-variable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var angularfire2_1 = require("angularfire2");
var catalog_component_1 = require("./catalog/catalog.component");
var add_form_component_1 = require("./add-form/add-form.component");
var club_service_1 = require("./club.service");
var club_validator_directive_1 = require("./club-validator.directive");
var info_component_1 = require("./info/info.component");
var echo_service_1 = require("./echo.service");
var environment_1 = require("../environments/environment");
var common_1 = require("@angular/common");
var appRoutes = [
    { path: '', component: catalog_component_1.CatalogComponent },
    { path: 'info/:key', component: info_component_1.InfoComponent }
];
describe('AppComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent,
                catalog_component_1.CatalogComponent,
                add_form_component_1.AddFormComponent,
                club_validator_directive_1.ClubValidatorDirective,
                info_component_1.InfoComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule.forRoot(),
                router_1.RouterModule.forRoot(appRoutes),
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
            ],
            providers: [
                club_service_1.ClubService,
                echo_service_1.EchoService,
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ],
        }).compileComponents();
    });
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'app works!'", testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Clubs');
    }));
    it('should render title in a h1 tag', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('md-toolbar span').textContent).toContain('Clubs');
    }));
});
