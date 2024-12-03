import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  formOrder: FormGroup;
  id: number;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(){
    this.initDataForm();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadOrderData(this.id);

  }

  private initDataForm() {
    this.formOrder = this.fb.group({
      client_id: ['', Validators.required],
      total: ['', Validators.required],
      doc_type: ['', Validators.required],
      doc_number: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  irListaOrder() {
    this.router.navigate(['/order']);
  }

 loadOrderData(id: number) {
  this.orderService.getOrderById(id).subscribe({
    next: (res) => {
      console.log('Orden cargada:', res);
      this.formOrder.patchValue(res);
    },
    error: (err) => {
      Swal.fire('Error', 'No se pudo cargar la orden.', 'error');
      console.error(err);
    }
  });
  }

  updateCreate(): void {
    const order: Order = this.formOrder.value;
    this.orderService.putOrden(this.id, order).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Orden creada correctamente.', 'success');
        this.irListaOrder();
      },
      error: (err) => {
        Swal.fire('Error', 'No se pudo crear la orden.', 'error');
        console.error(err);
      },
    });
  }
}
