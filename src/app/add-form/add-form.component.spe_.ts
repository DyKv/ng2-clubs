/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFormComponent } from './add-form.component';
import {MaterialModule, MdDialogModule, MdDialogRef, MdDialog} from "@angular/material";
import {NgForm, FormsModule} from "@angular/forms";
import {ClubService} from "../club.service";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../environments/environment";
import {RouterModule} from "@angular/router";

describe('AddFormComponent', () => {
  let component: AddFormComponent;
  let fixture: ComponentFixture<AddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormComponent ],
      imports: [
        //  BrowserModule,
          FormsModule,
        // HttpModule,
        MaterialModule.forRoot(),
        //RouterModule.forRoot(appRoutes),
        MdDialogModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        ClubService,
        MdDialogRef
        //EchoService,
       // {provide: APP_BASE_HREF, useValue : '/info/x' }
      ],
    })
    .compileComponents();
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
