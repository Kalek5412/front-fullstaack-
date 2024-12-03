import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {path:'',component:ListarComponent},
  {path:'nuevo',component:NuevoComponent},
  {path:'editar/:id',component:EditarComponent},
  {
    path: '**',
    redirectTo: '/order'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
