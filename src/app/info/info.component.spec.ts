/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

import { InfoComponent } from './info.component';
import {ClubService} from "../club.service";
import {ActivatedRoute, RouterModule, Routes} from "@angular/router";
import { CatalogComponent } from '../catalog/catalog.component'
import {APP_BASE_HREF} from '@angular/common';
import {EchoService} from "../echo.service";

const appRoutes: Routes = [
  //{ path: '', component: CatalogComponent },
  { path: 'info/:key', component: InfoComponent }
];

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComponent ],
      imports: [
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        ClubService,
        EchoService,
        {provide: APP_BASE_HREF, useValue : '/info/x' }
      ],
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
