import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {path: 'pages/create', component: CreateComponent},
  {path: 'pages/list', component: ListComponent},
  {path: 'pages/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
