import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearcherComponent } from './searcher/searcher.component';
import { EnlacesComponent } from './enlaces/enlaces.component';

@NgModule({
  declarations: [
    AppComponent,
    RedesSocialesComponent,
    NavbarComponent,
    SearcherComponent,
    EnlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
