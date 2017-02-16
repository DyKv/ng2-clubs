/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {CatalogComponent} from './catalog.component';
import {MaterialModule} from "@angular/material";
import {AngularFireModule} from "angularfire2";
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from '@angular/common';
import {ClubService} from "../../services/club.service";
import {EchoService} from "../../services/echo.service";
import {environment} from "../../../environments/environment";

const appRoutes: Routes = [
  {path: '', component: CatalogComponent},
];

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogComponent],
      imports: [
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        ClubService,
        EchoService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
