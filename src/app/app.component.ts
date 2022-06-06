import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombres: string = "";
  apellidoPaterno: string = "";
  apellidoMaterno: string = "";
  fechanacimiento: string = "";
  sexo: string = "";
  curp: string = "";



  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    console.log("NG ON INIT")

    const apiURL ='http://localhost:1337/api/curps/1' ;

    this.http.get(apiURL).subscribe((data: any) => {
      console.log(data)
      this.nombres = data.data.attributes.Nombre
      this.apellidoPaterno = data.data.attributes.Apellido_paterno
      this.apellidoMaterno = data.data.attributes.Apellido_materno
      this.fechanacimiento = data.data.attributes.Fecha_nacimiento
      this.sexo = data.data.attributes.Sexo
      this.curp = data.data.attributes.Curp

    });
  }

}
