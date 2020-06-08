import {Book} from '../../shared/book.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {exhaustMap, map, take} from 'rxjs/operators';
import {ShoppingCardService} from '../../shopping-cart/shopping-cart-service/shopping-card.service';
import {AuthService} from '../../auth/auth.service';


@Injectable()
export class BookService {

  constructor(private http: HttpClient, private cardService: ShoppingCardService,
              private authService: AuthService) {
  }

  onPost(receivedBook: Book) {
    // const book = new Book(receivedBook.title, receivedBook.genre, receivedBook.author, receivedBook.price,
    //   receivedBook.description, receivedBook.year, receivedBook.image, receivedBook.pieces);
    // console.log(receivedBook);
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.post('https://bookstore-a5335.firebaseio.com/books.json', receivedBook,
        {
          params: new HttpParams().set('auth', user.token)
        });
    }));

  }

  onFetchBooks() {
    return this.http.get<Book[]>('https://bookstore-a5335.firebaseio.com/books.json')
      .pipe(map((books: Book[]) => {
        const bookArray: Book[] = [];
        for (const i in books) {
          bookArray.push({...books[i]});
        }
        return bookArray;
      }));
  }

  onAddedBookToCart(book: Book) {
    this.cardService.addedToCart(book);
  }
}
