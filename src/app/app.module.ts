import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app-routing.module';
import { BookComponent } from './book/book.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddNewComponent } from './add-new/add-new.component';
import {BookService} from './book/book-service/book.service';
import {ShortenPipe} from './shared/pipes/shorten.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BookDetailComponent} from './book/book-details/book-details.component'
import { AuthComponent } from './auth/auth.component';
import { SuccessDialogComponent } from './book/success-dialog/success-dialog/success-dialog.component';
import { CarouselComponent } from './book/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselProductsComponent } from './book/carousel/carousel-products/carousel-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    BookComponent,
    ShoppingCartComponent,
    AddNewComponent,
    ShortenPipe,
    SpinnerComponent,
    AuthComponent,
    BookDetailComponent,
    SuccessDialogComponent,
    CarouselComponent,
    CarouselProductsComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRouting,
        FormsModule,
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBlaqh37CiAqmDLXC1iJI5UnPPAkN53lM0'
        }),
        ReactiveFormsModule,
        NgbModule
    ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
