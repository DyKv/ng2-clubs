import {Injectable, Inject} from '@angular/core';
import {Club} from "./club";
import {AngularFire, FirebaseListObservable, FirebaseApp, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class ClubService {

  private storageRef: firebase.storage.Reference;
  private databaseRef: firebase.database.Reference;

  static get IMAGES_DIR() {
    return "images"
  }

  static get CLUBS_DIR() {
    return "clubs"
  }

  constructor(private af: AngularFire, @Inject(FirebaseApp) fa: any /*firebase.app.App*/) {
    this.storageRef = fa.storage().ref();
    this.databaseRef = fa.database().ref();
  }

  getClubs(name: string = null): FirebaseListObservable<Club[]> {
    let query;
    if (name) {
      query = {
        query: {
          orderByChild: 'name',
          equalTo: name
        }
      }
    }
    return this.af.database.list(`/${ClubService.CLUBS_DIR}`, query);
  }

  getClub(key: string): FirebaseObjectObservable<Club> {
    return this.af.database.object(`/${ClubService.CLUBS_DIR}/${key}`);
  }

  create(club: Club): firebase.Promise<void> {
    return this.af.database.list(`/${ClubService.CLUBS_DIR}`).push(club);
  }

  uploadImage(file: File, name: string): any {
    return this.storageRef.child(`${ClubService.IMAGES_DIR}/${name}`).put(file);
  }

}
