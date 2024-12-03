import { Book } from "./book";
import { Order } from "./order";

export interface OrderDetail {
    Book: Book;
    Order: Order;
    id: number,
    order_id: string,
    book_id: string,
    detail_price: number,
    quantity: number,  
 
}