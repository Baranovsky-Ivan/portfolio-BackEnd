import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades';
import { SHabilidadesService } from 'src/app/service/s-habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {

  habilidades : Habilidades = null;

  constructor(private sHabilidades: SHabilidadesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sHabilidades.detail(id).subscribe(data => {
      this.habilidades = data;
    }, err => {
      alert("Error al modificar la habilidad");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sHabilidades.update(id, this.habilidades).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar el estudio");
      this.router.navigate(['']);
    }
    )
  }
}
