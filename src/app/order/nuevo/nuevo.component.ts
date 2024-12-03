import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'],
})
export class NuevoComponent implements OnInit{
  clients: any[] = []; 
  formOrder:FormGroup;

  constructor(private orderService: OrderService, private router: Router, private fb:FormBuilder) {}

  ngOnInit(){
    this.initDataForm();
    this.loadClients();
  }

  private initDataForm(): void{
    this.formOrder=this.fb.group({
      client_id:['',Validators.required],
      total:['',Validators.required],
      doc_type:['',Validators.required],
      doc_number:['',[Validators.required, Validators.pattern(/^\d+$/)]]
    })
  }

  postCreate(): void{
    if (this.formOrder.invalid) {
      Swal.fire('Error', 'Por favor completa todos los campos correctamente.', 'error');
      return;
    }
    const order: Order = this.formOrder.value; 
    console.log('Datos enviados:', order);

    this.orderService.postOrden(order).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Orden creada correctamente.', 'success');
        this.irListaOrder();
        this.formOrder.reset(); 
      },
      error: (err) => {
        Swal.fire('Error', 'No se pudo crear la orden.', 'error');
        console.error(err);
      }
    });
  }


  irListaOrder(){
    this.router.navigate(['/order'])
  }

  private loadClients() {
    this.orderService.getClients().subscribe({
      next: (data) => {
        this.clients = data; // Almacena los clientes obtenidos
      },
      error: (err) => {
        console.error('Error al cargar clientes:', err);
        Swal.fire('Error', 'No se pudieron cargar los clientes.', 'error');
      },
    });
  }
}
