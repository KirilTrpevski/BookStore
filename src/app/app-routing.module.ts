import {NgModule} from '@angular/core';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AddNewComponent} from './add-new/add-new.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';
const routes: Routes = [
  {path: '', redirectTo: '/book', pathMatch: 'full' },
  {path: 'book', component: BookComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'new', component: AddNewComponent, canActivate: [AuthGuard]},
  {path: 'book-admin', component: AuthComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {

}
