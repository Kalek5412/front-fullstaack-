import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  orders: any[] = [];
  Client:Client;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.cargarOrdenes();
  }

  cargarOrdenes(){
    this.orderService.getOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log('Órdenes:', this.orders);
      },
      (error) => {
        console.error('Error al obtener órdenes:', error);
      }
    );
  }

  eliminarOrden(id:number){
    Swal.fire({
      title: "Estas seguro ?",
      text: "quiere elimianr la orden!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.DeletOrden(id).subscribe(
          res=>{
              this.cargarOrdenes()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          //next:(data)=>this.obtenerClientes(),})
      })
    }
  })
}



}
