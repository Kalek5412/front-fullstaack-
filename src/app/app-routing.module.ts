import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from './order/order.module';

const routes: Routes = [
  {path:'order', loadChildren:()=>import(`./order/order.module`).then(m=>m.OrderModule)},
  {path:'home', loadChildren:()=>import(`./home/home.module`).then(m=>m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
