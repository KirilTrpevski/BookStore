import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCardService} from '../shopping-cart/shopping-cart-service/shopping-card.service';
import {Book} from '../shared/book.model';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  userSub: Subscription;
  isAuthenicated = false;
  constructor(private cardService: ShoppingCardService, private authService: AuthService) { }


  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.cardService.booksChanged
      .subscribe((books) => {
        this.books = books;
        console.log(this.books.length);
      });

    this.userSub = this.authService.user
      .subscribe((user) => {
        this.isAuthenicated = user ? true : false; // !!user
      });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
