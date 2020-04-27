import {Injectable} from '@angular/core';
import {Book} from '../../shared/book.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCardService {
  booksOnCard: Book[] = [];
  booksChanged = new Subject<Book[]>();

  constructor() {
  }

  addedToCart(book: Book) {
    this.booksOnCard.push(book);
    this.booksChanged.next(this.booksOnCard.slice());
  }

  getCartItems() {
    return this.booksOnCard.slice();
  }

  deleteFromCart(index: number) {
    this.booksOnCard.splice(index, 1);
    this.booksChanged.next(this.booksOnCard.slice());
  }
}
