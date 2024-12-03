import { Book } from "./book";

export class Carrito{
    book:Book;
    cantidad:number;
    
    constructor(book:Book, cantidad:number=1){
        this.book=book;
        this.cantidad=cantidad;
    }
}