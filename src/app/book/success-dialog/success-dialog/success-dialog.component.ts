import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit {

  @Input() book: Book;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
}
