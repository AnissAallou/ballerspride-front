import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { VenteComponent } from './vente/vente.component';
import { ShopComponent } from './shop/shop.component';
import { FootballComponent } from './football/football.component';
import { HandballComponent } from './handball/handball.component';
import { BasketballComponent } from './basketball/basketball.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    VenteComponent,
    ShopComponent,
    FootballComponent,
    HandballComponent,
    BasketballComponent,
    DetailComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
