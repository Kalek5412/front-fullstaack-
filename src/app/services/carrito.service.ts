import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment.development';
import { Carrito } from '../models/carrito';
import { Observable } from 'rxjs';

const base_url = environment.base_url;

export interface _BookCar {
  book: Book;
  cantidad: number;
  precio_total: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  private listCarrito: Carrito[]=[];


  constructor(private http: HttpClient) {}

  getBook(): Observable<any> {
    const url = `${base_url}/book`;
    return this.http.get<any>(url);
  }

  busquedaGlobal(termino: string): Observable<any> {
    const url = `${base_url}/busqueda/${termino}`;
    return this.http.get(url);
  }

  getCarrito(){
    return this.listCarrito;
  }

  agregar(book:Book, cantidad:number=1){
    const index = this.listCarrito.findIndex(item=>item.book.id==book.id);
    if(index==-1){
      const item = new Carrito(book,cantidad);
      this.listCarrito.push(item); 
    }else{
      this.actualizar(index,this.listCarrito[index].cantidad+cantidad);
    }
  }

  actualizar(index:number,cantidad:number){
    if(index>=0 && index < this.listCarrito.length){
      this.listCarrito[index].cantidad=cantidad;
    }
  }


  total(){
    const total=this.listCarrito.reduce((sum,item)=>
      sum+item.book.current_price*item.cantidad,0
    );
    return total;
  }

  eliminar(index: number){
    if(index>=0 && index < this.listCarrito.length){
      this.listCarrito.splice(index,1)
    }
  }

}
