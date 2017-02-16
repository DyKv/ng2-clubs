/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {AddFormComponent} from './add-form.component';
import {MaterialModule, MdDialogModule, MdDialogRef, MdDialog, MdDialogTitle} from "@angular/material";
import {NgForm, FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {RouterModule} from "@angular/router";
import {environment} from "../../../environments/environment";
import {ClubService} from "../../services/club.service";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";

describe('AddFormComponent', () => {
  let component: AddFormComponent;
  let fixture: ComponentFixture<AddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFormComponent],
      imports: [
        //  BrowserModule,
        //FormsModule,
        // HttpModule,
        MaterialModule.forRoot(),
        //BrowserDynamicTestingModule,
        //RouterModule.forRoot(appRoutes),
        //MdDialogModule.forRoot(),

        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        ClubService,
        //MdDialogRef
        //EchoService,
        // {provide: APP_BASE_HREF, useValue : '/info/x' }
      ]
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AddFormComponent]
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
