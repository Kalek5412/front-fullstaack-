import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'order', loadChildren:()=>import(`./order/order.module`).then(m=>m.OrderModule)},
  {path:'order-detail', loadChildren:()=>import(`./order-detail/order-detail.module`).then(m=>m.OrderDetailModule)},
  {path:'book', loadChildren:()=>import(`./book/book.module`).then(m=>m.BookModule)},
  {path:'client', loadChildren:()=>import(`./client/client.module`).then(m=>m.ClientModule)},
  {path:'', loadChildren:()=>import(`./home/home.module`).then(m=>m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
