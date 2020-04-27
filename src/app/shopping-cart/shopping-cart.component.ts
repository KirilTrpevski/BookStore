import {Component, OnInit} from '@angular/core';
import {ShoppingCardService} from './shopping-cart-service/shopping-card.service';
import {Book} from '../shared/book.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  books: Book[] = [];

  constructor(private cartService: ShoppingCardService,
              private router: Router) {
  }

  ngOnInit() {
    this.books = this.cartService.getCartItems();
    this.cartService.booksChanged
      .subscribe((books) => {
        this.books = books;
      });
  }

  backToShopping() {
    this.router.navigate(['/book']);
  }

  calculatePrice(price: number, amount) {
    // console.log(price);
    // console.log(amount.value);
    return +(price * amount.value).toFixed(2);
  }

  delete(index) {
    this.cartService.deleteFromCart(index);
    this.cartService.booksChanged
      .subscribe((books) => {
        this.books = books;
      });
  }

  total() {
    const element = document.getElementsByName('cena');
    let sum = 0;
    // console.log(element.length);
    for (let i = 0; i < element.length; i++) {
      sum += +element[i].innerText.slice(1, element[i].innerText.length);
    }
    console.log(sum);
    return sum.toFixed(2);
  }

}
