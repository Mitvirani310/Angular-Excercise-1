import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CityComponent } from './city/city.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'products', component: ProductComponent },
  { path: 'users',component: UserComponent},
  { path: 'cities',component: CityComponent},
  { path: 'products/:id',component : ProductDetailComponent},
  { path: 'cities/:id',component : CityDetailComponent},
  { path: 'users/:id',component : UserDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
