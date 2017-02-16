import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ClubService} from "../club.service";
import {FirebaseObjectObservable} from "angularfire2";
import {Club} from "../club";
import {ActivatedRoute, Params} from "@angular/router";
import {EchoService} from "../echo.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  club: Club;

  constructor(private clubService: ClubService, private route: ActivatedRoute, private echoService: EchoService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.clubService.getClub(params['key']))
      .subscribe(club => {
        this.club = club;
        this.echoService.send(`Club ${club.name}`);
      });
  }

}
