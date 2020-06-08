import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book-service/book.service';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.css']
})
export class CarouselProductsComponent implements OnInit {

  books: Book[] = [];
  bookDetails: Book;
  show = false;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.onFetchBooks()
    .subscribe((resData => {
    // console.log(resData);
    this.books = resData;
  }));
  }

  showDetails(book: Book) {
    this.bookDetails = book;
    this.show = true;
  }


  closeDialog() {
    this.show = false;
  }
}
