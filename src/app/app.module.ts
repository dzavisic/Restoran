import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { NarudzbeComponent } from './components/narudzbe/narudzbe.component';
import { OnamaComponent } from './components/onama/onama.component';
import { LokacijaComponent } from './components/lokacija/lokacija.component';
import { RezervacijaComponent } from './components/rezervacija/rezervacija.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PonudaComponent,
    NarudzbeComponent,
    OnamaComponent,
    LokacijaComponent,
    RezervacijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
