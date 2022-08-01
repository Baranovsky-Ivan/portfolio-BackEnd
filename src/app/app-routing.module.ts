import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditImagenComponent } from './componentes/acerca-de/edit-imagen.component';
import { EditInformacionComponent } from './componentes/acerca-de/edit-informacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditEducacionComponent } from './componentes/plantillas/educacion/edit-educacion.component';
import { EducacionComponent } from './componentes/plantillas/educacion/educacion.component';
import { EditHabilidadesComponent } from './componentes/plantillas/hard-y-soft-skills/edit-habilidades.component';
import { EditProyectosComponent } from './componentes/plantillas/proyectos/edit-proyectos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'edithab/:id', component: EditHabilidadesComponent},
  {path: 'editpro/:id', component: EditProyectosComponent},
  {path: 'editper/:id', component: EditAcercaDeComponent},
  {path: 'editinfo/:id', component: EditInformacionComponent},
  {path: 'editimg/:id', component: EditImagenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
