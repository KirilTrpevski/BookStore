import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {User} from '../shared/user.model';
import {Router} from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  private tokenExpTimer: any;
  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJG4LfxaW1nI_1cmB8JtyDseceHoJquUg',
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      tokenExpDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData.tokenExpDate));

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expDuration = new Date(userData.tokenExpDate).getTime() - new Date() . getTime();
      this.autoLogOut(expDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/book']);
    localStorage.removeItem('userData');
    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
  }

  autoLogOut(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expDate);
    this.user.next(user);
    this.autoLogOut(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An unknown error occurred'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }
    switch (errorRes.error.error.message) {
      case  'EMAIL_EXISTS':
        errorMsg = 'This email is already used';
        break;
      case  'EMAIL_NOT_FOUND':
        errorMsg = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'The password was incorrect';
        break;
    }
    return throwError(errorMsg);
  }
}
