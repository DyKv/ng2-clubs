import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule, MdButton, MdButtonModule} from "@angular/material";
import {Routes, RouterModule} from "@angular/router";
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {CatalogComponent} from './catalog/catalog.component';
import {AddFormComponent} from './add-form/add-form.component';
import {ClubService} from "./club.service";
import {ClubValidatorDirective} from './club-validator.directive';
import {InfoComponent} from './info/info.component';
import {EchoService} from "./echo.service";
import {environment} from '../environments/environment';
import {APP_BASE_HREF} from '@angular/common';


const appRoutes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'info/:key', component: InfoComponent}
];

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
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
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
