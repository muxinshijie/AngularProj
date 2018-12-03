import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import {ModelComponent} from './model/model.component';

const routes: Routes = [
  {path: '', redirectTo: '/muxin', pathMatch: 'full'},
  {path: 'muxin', component: TemplateComponent},
  {path: 'shijie', component: ModelComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
