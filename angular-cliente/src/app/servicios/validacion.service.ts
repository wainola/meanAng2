import { Injectable } from '@angular/core';

@Injectable()
export class ValidacionService {

  constructor() { }

  validacionEmail(correo){
    // usando expresion regular para validar el correo.
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(correo);
  }

  validacionData(data){
    if(data.nombre === undefined || data.usuario === undefined || data.direccion === undefined || data.correo === undefined || data.password === undefined){
      return false;
    }
    else{
      return true;
    }
  }

}
