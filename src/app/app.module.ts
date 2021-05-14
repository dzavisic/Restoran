import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { AboutComponent } from './components/about/about.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { LoginComponent } from './components/login/login.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelnavComponent } from './components/panelnav/panelnav.component';
import { CmspanelComponent } from './components/cmspanel/cmspanel.component';
import { CmschefComponent } from './components/cmschef/cmschef.component';
import { CmsmenuComponent } from './components/cmsmenu/cmsmenu.component';
import { CmscoursesComponent } from './components/cmscourses/cmscourses.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    OrderComponent,
    AboutComponent,
    ReservationComponent,
    OrderFormComponent,
    LoginComponent,
    KitchenComponent,
    PanelnavComponent,
    CmspanelComponent,
    CmschefComponent,
    CmsmenuComponent,
    CmscoursesComponent,
    ReservationsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
