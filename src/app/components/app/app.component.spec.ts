/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from "@angular/material";
import {Routes, RouterModule} from "@angular/router";
import {AngularFireModule} from 'angularfire2';
import {CatalogComponent} from '../catalog/catalog.component';
import {AddFormComponent} from '../add-form/add-form.component';
import {ClubService} from "../../services/club.service";
import {ClubValidatorDirective} from '../../directives/club-validator.directive';
import {InfoComponent} from '../info/info.component';
import {EchoService} from "../../services/echo.service";
import {environment} from '../../../environments/environment';
import {APP_BASE_HREF} from '@angular/common';

const appRoutes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'info/:key', component: InfoComponent}
];

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CatalogComponent,
        AddFormComponent,
        ClubValidatorDirective,
        InfoComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        ClubService,
        EchoService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
    }).compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Clubs');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar span').textContent).toContain('Clubs');
  }));
});
