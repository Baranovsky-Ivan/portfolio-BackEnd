import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { HardYSoftSkillsComponent } from './componentes/plantillas/hard-y-soft-skills/hard-y-soft-skills.component';
import { ProyectosComponent } from './componentes/plantillas/proyectos/proyectos.component';
import { PersonaService } from './service/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/plantillas/educacion/educacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditEducacionComponent } from './componentes/plantillas/educacion/edit-educacion.component';
import { EditHabilidadesComponent } from './componentes/plantillas/hard-y-soft-skills/edit-habilidades.component';
import { EditProyectosComponent } from './componentes/plantillas/proyectos/edit-proyectos.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditInformacionComponent } from './componentes/acerca-de/edit-informacion.component';
import { EditImagenComponent } from './componentes/acerca-de/edit-imagen.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    BannerComponent,
    AcercaDeComponent,
    HardYSoftSkillsComponent,
    ProyectosComponent,
    EducacionComponent,
    HomeComponent,
    EditEducacionComponent,
    EditHabilidadesComponent,
    EditProyectosComponent,
    EditAcercaDeComponent,
    EditInformacionComponent,
    EditImagenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
