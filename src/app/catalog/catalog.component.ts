import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Router} from "@angular/router";
import {ClubService} from "../club.service";
import {Club} from "../club";
import {AddFormComponent} from "../add-form/add-form.component";
import {MdDialog} from "@angular/material";
import {EchoService} from "../echo.service";

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})
export class CatalogComponent implements OnInit {

  clubs: FirebaseListObservable<Club[]>;

  constructor(private clubService: ClubService, private router: Router, private dialog: MdDialog, private echoService: EchoService) {
    this.echoService.send(`Clubs`);
  }

  ngOnInit() {
    this.clubs = this.clubService.getClubs();
  }

  addDialog(): void {
    this.dialog.open(AddFormComponent, {
      height: '250px'
    });
    //this.router.navigate(['/add']);
  }

  clubInfo(club: Club) {
    this.router.navigate(['/info', club['$key']]);
  }

}
