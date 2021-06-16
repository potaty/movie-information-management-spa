import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from '../app/create/create.component';
import { ListComponent } from '../app/list/list.component';
import { ModifyComponent } from '../app/modify/modify.component';
import { HelpComponent } from '../app/help/help.component';
import { NotFoundComponent } from './error/notfound.component';
import { HelpModifyComponent } from './help-modify/help-modify.component';
import { HelpCreateComponent } from './help-create/help-create.component';
const routes: Routes = [
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
  {
    path: 'add-movie',
    component: CreateComponent
  }, {
    path: 'modify-movie',
    component: ModifyComponent
  }, {
    path: 'movie-list',
    component: ListComponent
  }, {
    path: 'help',
    component: HelpComponent
  }, {
    path: 'help-modify',
    component: HelpModifyComponent,
  }, {
    path: 'help-create',
    component: HelpCreateComponent,
  }, { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
