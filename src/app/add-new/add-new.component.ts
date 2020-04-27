import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BookService} from '../book/book-service/book.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  constructor(private bookService: BookService) { }


  ngOnInit() {
  }

  onSubmit() {
    this.bookService.onPost(this.form.value)
      .subscribe((books) => {
        console.log(books);
      });
    // console.log(this.form.value);
    this.bookService.newBookAddedDialog();
    this.bookService.dialogCloses();
    this.form.reset();
  }

}
