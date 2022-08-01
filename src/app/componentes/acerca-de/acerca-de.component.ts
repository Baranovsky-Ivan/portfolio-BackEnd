import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/persona.modelo';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  pers: Persona[] = [];

  nombre: string = '';
  apellido: string = '';
  titulo: string = '';
  img: string = '';
  info: string = '';

  constructor(private sPersona: PersonaService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.sPersona.lista().subscribe(data => {this.pers = data;})
  }

  onCreate(): void {
    const educ = new Persona(this.nombre, this.apellido, this.titulo, this.img, this.info);
    this.sPersona.save(educ).subscribe(data => {alert("Persona añadida");
    window.location.reload();
    }, err => {
    alert("Fallo");
    window.location.reload();
    }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sPersona.delete(id).subscribe(data => {
        this.cargarPersona();
    }, err => {
      alert("No se pudo borrar la educacion");
    }
    )
    }
  }
}
