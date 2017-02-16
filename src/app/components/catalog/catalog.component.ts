import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';
import {Router} from "@angular/router";
import {MdDialog} from "@angular/material";
import {Club} from "../../models/club";
import {ClubService} from "../../services/club.service";
import {EchoService} from "../../services/echo.service";
import {AddFormComponent} from "../add-form/add-form.component";

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
  }

  clubInfo(club: Club) {
    this.router.navigate(['/info', club['$key']]);
  }

}
