/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClubService } from './club.service';
import {AngularFire, FirebaseUrl} from "angularfire2";
import {Token} from "@angular/compiler";
import {Provider} from '@angular/core';

describe('ClubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubService, AngularFire]
    });
  });

  it('should ...', inject([ClubService], (service: ClubService) => {
    expect(service).toBeTruthy();
  }));
});
