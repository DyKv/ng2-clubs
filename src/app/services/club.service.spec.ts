/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ClubService} from './club.service';
import {AngularFireModule} from "angularfire2";
import {environment} from "../../environments/environment";


describe('ClubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubService],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    });

  });

  it('should ...', inject([ClubService], (service: ClubService) => {
    expect(service).toBeTruthy();
  }));
});
