import {Component, OnInit, Input} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {ClubService} from "../../services/club.service";
import {Club} from "../../models/club";

@Component({
  selector: 'app-add-form',
  templateUrl: 'add-form.component.html',
  styleUrls: ['add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Input() club: Club;
  private logoFile: File;
  loading: boolean;

  constructor(private clubService: ClubService, private dialogRef: MdDialogRef<AddFormComponent>) {
    this.club = new Club();
    this.loading = false;
  }

  ngOnInit() {
  }

  add() {
    this.loading = true;
    this.clubService.uploadImage(this.logoFile, `${this.club.name}.${this.logoFile.name.split('.').pop()}`).then((snapshot) => {
      return snapshot.downloadURL;
    }).then((logo) => {
      this.club.logo = logo;
      this.clubService.create(this.club).then(() => {
        this.dialogRef.close();
      });
    });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.logoFile = fileList[0];
    }
  }

}
