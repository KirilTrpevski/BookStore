import {Component, OnInit, ViewChild} from '@angular/core';
import {ShoppingCardService} from './shopping-cart-service/shopping-card.service';
import {Book} from '../shared/book.model';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  books: Book[] = [];
  finalPrice: number;

  constructor(private cartService: ShoppingCardService,
              private router: Router) {
  }

  ngOnInit() {
    this.books = this.cartService.getCartItems();
    this.total();
    this.cartService.booksChanged
      .subscribe((books: Book[]) => {
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
    this.total();
    this.cartService.booksChanged
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }



  total() {
    setTimeout(() => {
      const el = document.getElementsByName("cena");
      let sum=0;
      for(let i=0; i<el.length; i++){
        // console.log(el.item(i).innerText.slice(1, el.item(i).innerText.length));
        sum+= +el.item(i).innerText.slice(1, el.item(i).innerText.length)
      }
      console.log(sum.toFixed(2));
      this.finalPrice = +sum.toFixed(2);
      return sum.toFixed(2);
    }, 100);
  }

  }
