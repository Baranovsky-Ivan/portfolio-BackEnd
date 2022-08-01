import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades';
import { SHabilidadesService } from 'src/app/service/s-habilidades.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-hard-y-soft-skills',
  templateUrl: './hard-y-soft-skills.component.html',
  styleUrls: ['./hard-y-soft-skills.component.css']
})
export class HardYSoftSkillsComponent implements OnInit {
  habi: Habilidades[] = [];

  nombreHab: string = '';
  porcentajeHab: string = '';
  imgHab: string = '';

  constructor(private sHabilidades: SHabilidadesService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidades();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void {
    this.sHabilidades.lista().subscribe(data => {this.habi = data;})
  }

  onCreate(): void {
    const habi = new Habilidades(this.nombreHab, this.porcentajeHab, this.imgHab);
    this.sHabilidades.save(habi).subscribe(data => {alert("Habilidad añadida");
    window.location.reload();
    }, err => {
    alert("Fallo");
    window.location.reload();
    }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sHabilidades.delete(id).subscribe(data => {
        this.cargarHabilidades();
    }, err => {
      alert("No se pudo borrar la habilidad");
    }
    )
    }
  }
}