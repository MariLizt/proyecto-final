import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TallasService {

  constructor() { }

  retornar() {
    return [
              {
                tallanum1: 38, 
                tallanum2: 40, 
                tallanum3: 42, 
                tallanum4: 44, 
                tallanum5: 48, 
                tallanum6: 52,
              },
              {
                tallaalf1: "XXS", 
                tallaalf2: "XS", 
                tallaalf3: "S", 
                tallaalf4: "M", 
                tallaalf5: "L", 
                tallaalf6: "XL",
              }
           ];
  }
}
