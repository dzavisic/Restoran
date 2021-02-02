import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { NarudzbeComponent } from './components/narudzbe/narudzbe.component';
import { OnamaComponent } from './components/onama/onama.component';
import { LokacijaComponent } from './components/lokacija/lokacija.component';
import { RezervacijaComponent } from './components/rezervacija/rezervacija.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ponuda', component: PonudaComponent },
  { path: 'narudzbe', component: NarudzbeComponent },
  { path: 'onama', component: OnamaComponent },
  { path: 'lokacija', component: LokacijaComponent},
  { path: 'rezervacija', component: RezervacijaComponent }
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
