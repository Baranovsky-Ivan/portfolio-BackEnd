import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AgregarQuitarComponent } from './componentes/plantillas/agregar-quitar/agregar-quitar.component';
import { EstudiosComponent } from './componentes/plantillas/estudios/estudios.component';
import { HardYSoftSkillsComponent } from './componentes/plantillas/hard-y-soft-skills/hard-y-soft-skills.component';
import { ProyectosComponent } from './componentes/plantillas/proyectos/proyectos.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    BannerComponent,
    AcercaDeComponent,
    AgregarQuitarComponent,
    EstudiosComponent,
    HardYSoftSkillsComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
