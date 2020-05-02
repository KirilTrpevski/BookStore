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
import { DialogDataComponent } from './book/book-item/dialog-data/dialog-data.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SuccessComponent} from './book/book-item/sucess/success.component';
import { NewBookAddedDialogComponent } from './book/book-item/new-book-added-dialog/new-book-added-dialog.component';
import { AuthComponent } from './auth/auth.component';

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
    DialogDataComponent,
    SuccessComponent,
    NewBookAddedDialogComponent,
    AuthComponent
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
        ReactiveFormsModule
    ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
