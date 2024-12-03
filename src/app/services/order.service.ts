import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Order } from '../models/order';
import { Client } from '../models/client';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    const url = `${base_url}/order`;
    return this.http.get<Order[]>(url) 
  }

  getClients(): Observable<Client[]> {
    const url = `${base_url}/client`;
    return this.http.get<Client[]>(url) 
  }


  postOrden(order:Order): Observable<any>{
    const url = `${base_url}/order`;
    return this.http.post<any>(url,order);
  }

  putOrden(id:number, order:Order): Observable<any>{
    const url = `${base_url}/order`;
    return this.http.put<any>(url+`/${id}`,order);
  }

  DeletOrden(id: number): Observable<any>{
    const url = `${base_url}/order`;
    return this.http.delete<any>(url+`/${id}`);
  }

  getOrderById(id:number): Observable<any> {
    const url = `${base_url}/order/${id}`;
    return this.http.get<any>(url);
  }
}
