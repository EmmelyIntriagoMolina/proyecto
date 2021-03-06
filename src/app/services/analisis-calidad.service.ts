import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnalisisCalidad } from '../models/analisisCalidad';

@Injectable({
  providedIn: 'root'
})
export class AnalisisCalidadService {

  URL =`http://172.16.5.98:3333/ordenTrabajo`

  constructor(private http:HttpClient) { }

  //Métodos Análisis de Calidad

  //Ingresar - GET
  postAnalisisCalidad(analisisCalidad:AnalisisCalidad){
    return this.http.post(`${this.URL}/guiasRemision/analisisCalidad/guardarAnalisis/`, analisisCalidad)
  } 

  //Consulta individual
  getAnalisisCalidadID(id:number){
    return this.http.get(`${this.URL}/guiasRemision/analisisCalidad/${id}`);
  }

  

}
