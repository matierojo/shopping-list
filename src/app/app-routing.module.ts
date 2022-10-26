import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemComponent } from './components/additem/additem.component';
import { ItemsComponent } from './components/items/items.component';
import { PutitemComponent } from './components/putitem/putitem.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path: 'add',
    component: AdditemComponent
  },
  {
    path: 'update/:id',
    component: PutitemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
