import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{CategoryComponent} from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import{ProductComponent} from './product/product.component';

const routes: Routes = [
  { path : 'product/:id', component: ProductDetailsComponent},
  { path : '', redirectTo: '/category', pathMatch: 'full'},
  { path:'category',component:CategoryComponent},
  { path:'product',component:ProductComponent},
  { path : '**', component: ProductNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
