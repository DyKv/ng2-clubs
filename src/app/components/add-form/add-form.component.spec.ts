/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AddFormComponent} from './add-form.component';
import {MaterialModule, MdDialog} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../../environments/environment";
import {ClubService} from "../../services/club.service";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";

describe('AddFormComponent', () => {
  let component: AddFormComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFormComponent],
      imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        ClubService,
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AddFormComponent]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(AddFormComponent);
    component = dialogRef.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
