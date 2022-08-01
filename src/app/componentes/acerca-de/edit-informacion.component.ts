import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelo/persona.modelo';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-informacion',
  templateUrl: './edit-informacion.component.html',
  styleUrls: ['./edit-informacion.component.css']
})
export class EditInformacionComponent implements OnInit {
  personas : Persona = null;

  constructor(private personaService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data => {
      this.personas = data;
    }, err => {
      alert("Error al modificar el estudio");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.personas).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar el estudio");
      this.router.navigate(['']);
    }
    )
  }
}
