import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CorouselComponent } from './corousel/corousel.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CanvasComponent } from './canvas/canvas.component';
import { SummerCollectionsComponent } from './summer-collections/summer-collections.component';
import { ProductComponent } from './product/product.component';
import { InstagramComponent } from './instagram/instagram.component';
import { NewsComponent } from './news/news.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CorouselComponent,
    ProductsComponent,
    ProductDetailComponent,
    ShopComponent,
    ShopDetailsComponent,
    ShoppingCartComponent,
    BlogComponent,
    BlogDetailsComponent,
    CheckoutComponent,
    AboutUsComponent,
    ContactComponent,
    CanvasComponent,
    SummerCollectionsComponent,
    ProductComponent,
    InstagramComponent,
    NewsComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent],
  exports: [SearchPipe],
})
export class AppModule { }
