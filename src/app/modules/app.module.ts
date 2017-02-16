import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from "@angular/material";
import {AngularFireModule} from 'angularfire2';
import {AppComponent} from '../components/app/app.component';
import {CatalogComponent} from '../components/catalog/catalog.component';
import {AddFormComponent} from '../components/add-form/add-form.component';
import {ClubService} from "../services/club.service";
import {ClubValidatorDirective} from '../directives/club-validator.directive';
import {InfoComponent} from '../components/info/info.component';
import {EchoService} from "../services/echo.service";
import {environment} from '../../environments/environment';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    AddFormComponent,
    ClubValidatorDirective,
    InfoComponent
  ],
  entryComponents: [
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    ClubService,
    EchoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
