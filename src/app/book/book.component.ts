import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {BookService} from './book-service/book.service';
import {Book} from '../shared/book.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  isAuthenticated = false;
  bookDetails: Book;
  show = false;
  bookAddedToCart: Book;

  constructor(private bookService: BookService,
              private authService: AuthService) { }

  ngOnInit() {
    this.bookService.onFetchBooks()
      .subscribe((resData => {
      console.log(resData);
      this.books = resData;
    }));

    this.authService.user
    .subscribe((user) => {
      this.isAuthenticated = user ? true : false;
    });
  }

  showDetails(book: Book) {
    this.bookDetails = book;
  }
  onAddedToCart(book: Book) {
    // console.log(index);
    this.bookService.onAddedBookToCart(book);
    this.show = true;
    this.bookAddedToCart = book;
    setTimeout(() => {
      this.show = null;
    }, 1500);
  }

  closeDialog() {
    this.bookDetails = null;
  }
}
