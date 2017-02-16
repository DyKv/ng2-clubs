import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Club} from "../../models/club";
import {ClubService} from "../../services/club.service";
import {EchoService} from "../../services/echo.service";

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
