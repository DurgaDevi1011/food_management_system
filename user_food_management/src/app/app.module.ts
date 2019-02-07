import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { NguCarouselModule } from '@ngu/carousel';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SearchrestaurantsComponent } from './searchrestaurants/searchrestaurants.component';
import { Globals } from './globals';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    SearchrestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDaf7aJ5o0MZZxRoYklT6MBCvrcFbCAKM4',
      libraries: ["places"]
}),
FormsModule ,
ReactiveFormsModule,
NguCarouselModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
