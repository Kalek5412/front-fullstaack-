import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Carrito } from 'src/app/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  listCarrito: Carrito[]=[];
  books: Book[] = [];
  //public carritoServ: CarritoService;

  ngOnInit(): void {
    this.cargarBook();
    this.getListCarrito();
    console.log(this.getListCarrito);
  }
  constructor(
    private bookServ: CarritoService,
    private activatedRoute: ActivatedRoute
  ) {}

  onSearch(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    if (input.length < 3) {
      this.bookServ.busquedaGlobal(input).subscribe((res) => {
        //console.log(res);
        this.books = res.books;
      });
    }
  }

  cargarBook() {
    this.bookServ.getBook().subscribe(
      (data) => {
        console.log('datos recibos', data), (this.books = data);
      },
      (err) => {
        console.log('haya eror', err);
      }
    );
  }

 

  getListCarrito(){
    this.listCarrito=this.bookServ.getCarrito();
  }

  trackByFn(index: number, item: Book): any {
    return item.id; 
  }

  agregarBook(item: Book) {
    this.bookServ.agregar(item);
  }

  totalPagar(){
   return  this.bookServ.total();
  }

  eliminarItem(index: number){
    this.bookServ.eliminar(index);
    this.getListCarrito();
  }
  setDefaultImage(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = './assets/images/image.png'; 

  }
}
