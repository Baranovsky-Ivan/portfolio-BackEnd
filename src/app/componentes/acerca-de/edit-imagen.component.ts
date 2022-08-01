import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelo/persona.modelo';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-imagen',
  templateUrl: './edit-imagen.component.html',
  styleUrls: ['./edit-imagen.component.css']
})
export class EditImagenComponent {

  personas : Persona = null;

  constructor(private personaService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute){ 
    
  }

  ngOnInit(){

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

