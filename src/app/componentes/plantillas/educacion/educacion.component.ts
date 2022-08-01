import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educ: Educacion[] = [];

  nombreEdu: string = '';
  inicioEdu: string = '';
  finEdu: string = '';
  imgEdu: string = '';

  constructor(private sEducacion: SEducacionService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => {this.educ = data;})
  }

  onCreate(): void {
    const educ = new Educacion(this.nombreEdu, this.inicioEdu, this.finEdu, this.imgEdu);
    this.sEducacion.save(educ).subscribe(data => {alert("Educacion añadida");
    window.location.reload();
    }, err => {
    alert("Fallo");
    window.location.reload();
    }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(data => {
        this.cargarEducacion();
    }, err => {
      alert("No se pudo borrar la educacion");
    }
    )
    }
  }
}
