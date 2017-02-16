import {Directive, forwardRef} from "@angular/core";
import {NG_ASYNC_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
import {Observable} from "rxjs";
import {ClubService} from "../services/club.service";

@Directive({
  selector: '[appClubValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ClubValidatorDirective), multi: true
    }
  ]
})
export class ClubValidatorDirective implements Validator {

  constructor(private clubService: ClubService) {
  }

  validate(c: AbstractControl): Promise<{[key: string]: any}>|Observable<{[key: string]: any}> {
    return this.validateUniqueClub(c.value).first();
  }

  validateUniqueClub(name: string) {
    return Observable.create(observer => {
      this.clubService.getClubs(name).subscribe((result) => {
        if (result.length > 0) {
          observer.next({exist: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      });
    });
  }

}
