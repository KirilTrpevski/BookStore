import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Book} from '../../../shared/book.model';
import {BookService} from '../../book-service/book.service';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})
export class DialogDataComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public book: Book,
              private bookService: BookService) { }

  ngOnInit(): void {
  }

  addToCart(book: Book) {
    this.bookService.onAddedBookToCart(book);
    this.bookService.sucessDialog(book);
    this.bookService.dialogCloses();
  }
}
