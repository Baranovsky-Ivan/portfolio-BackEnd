import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proy: Proyectos[] = [];

  nombrePro: string = '';
  descripcionPro: string = '';
  urlPro: string = '';

  constructor(private sProyectos: SProyectosService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(data => {this.proy = data;})
  }

  onCreate(): void {
    const proy = new Proyectos(this.nombrePro, this.descripcionPro, this.urlPro);
    this.sProyectos.save(proy).subscribe(data => {alert("Proyecto añadida");
    window.location.reload();
    }, err => {
    alert("Fallo");
    window.location.reload();
    }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(data => {
        this.cargarProyectos();
    }, err => {
      alert("No se pudo borrar el proyecto");
    }
    )
    }
  }

}