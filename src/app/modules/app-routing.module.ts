import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from "../components/catalog/catalog.component";
import {InfoComponent} from "../components/info/info.component";

const appRoutes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'info/:key', component: InfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
