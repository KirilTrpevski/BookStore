import {Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BookService} from './book-service/book.service';
import {Book} from '../shared/book.model';
import {MatDialog} from '@angular/material/dialog';
import {DialogDataComponent} from './book-item/dialog-data/dialog-data.component';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  @ViewChild('secondDialog', {static: true}) dialogRef: TemplateRef<any>;

  constructor(private bookService: BookService, private dialog: MatDialog) { }

  ngOnInit() {
    this.bookService.onFetchBooks()
      .subscribe((resData => {
      console.log(resData);
      this.books = resData;
    }));
  }

  showDetails(book: Book) {
    // this.bookService.bookDetails(book);
    this.dialog.open(DialogDataComponent, {
      data: book,
    });
  }
  onAddedToCart(book: Book) {
    // console.log(index);
    this.bookService.onAddedBookToCart(book);
    this.bookService.sucessDialog(book);
    this.bookService.dialogCloses();
  }
}
