import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root'
})
export class SProyectosService {
  proUrl = 'http://localhost:8080/proyects/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.proUrl + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proUrl + `detail/${id}`);
  }

  public save(proyectos:Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.proUrl + 'create',proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.proUrl + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proUrl + `delete/${id}`);
  }
}
