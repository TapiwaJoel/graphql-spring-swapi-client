import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./people/people.module')
        .then(m => m.PeopleModule),
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
