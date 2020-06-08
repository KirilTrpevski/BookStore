import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import {BookService} from '../book-service/book.service'
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['book-details.component.css']
})

export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  @Output() close = new EventEmitter<void>();

  ngOnInit() {
  }

  constructor(private bookService: BookService) {
  }

  addToCart(book: Book) {
    this.bookService.onAddedBookToCart(book);
    alert('The product has beed added to cart');
  }

  onclose() {
    this.close.emit();
  }


}
