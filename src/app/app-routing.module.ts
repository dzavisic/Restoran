import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { AboutComponent } from './components/about/about.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { LoginComponent } from './components/login/login.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AuthGuard } from './auth.guard';
import { CmspanelComponent } from './components/cmspanel/cmspanel.component';
import { CmschefComponent } from './components/cmschef/cmschef.component';
import { CmsmenuComponent } from './components/cmsmenu/cmsmenu.component';
import { CmscoursesComponent } from './components/cmscourses/cmscourses.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'orderform', component: OrderFormComponent},
  { path: 'login', component: LoginComponent },
  { path: 'kitchen', component: KitchenComponent, canActivate: [AuthGuard] },
  { path: 'cmspanel', component: CmspanelComponent, canActivate: [AuthGuard] },
  { path: 'cmspanel/cmschef', component: CmschefComponent, canActivate: [AuthGuard] },
  { path: 'cmspanel/cmsmenu', component: CmsmenuComponent, canActivate: [AuthGuard] },
  { path: 'cmspanel/cmscourses', component: CmscoursesComponent, canActivate: [AuthGuard] },
  { path: 'cmspanel/reservations', component: ReservationsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
