import {Component, OnInit, Input} from '@angular/core';
import {Club} from "../club";
import {ClubService} from "../club.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Input() club: Club;
  private logoFile: File;
  loading: boolean;

  constructor(private clubService: ClubService, /*private router: Router,*/ private dialogRef: MdDialogRef<AddFormComponent>) {
    this.club = new Club();
    this.loading = false;
  }

  ngOnInit() {
  }

  add(f: NgForm) {
    this.loading = true;
    this.clubService.uploadImage(this.logoFile, `${this.club.name}.${this.logoFile.name.split('.').pop()}`).then((snapshot) => {
      console.log(snapshot.downloadURL);
      return snapshot.downloadURL;
    }).then((logo) => {
      this.club.logo = logo;
      this.clubService.create(this.club).then((data) => {
        console.log(data);
        //this.router.navigate(['/']);
        this.dialogRef.close();
      });
    });
    /*Promise.all([
      this.clubService.create(this.club),
      this.clubService.uploadImage(this.logoFile, this.logoFile.name)
    ]).then((data) => {
      console.log(data);
      this.router.navigate(['/']);
    });*/
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.logoFile = fileList[0];
      //this.club.logo = this.logoFile.name;
    }
  }

}
