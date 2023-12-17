import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CityComponent } from './city/city.component';
import { UserComponent } from './user/user.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,
    FooterComponent,
    ProductComponent,
    UserComponent,
    CityComponent,
    ProductDetailComponent,
    CityDetailComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
