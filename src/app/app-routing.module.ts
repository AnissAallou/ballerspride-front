import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VenteComponent} from "./vente/vente.component";
import {ShopComponent} from "./shop/shop.component";

const routes: Routes = [
  { path: 'vente', component: VenteComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
