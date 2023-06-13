import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

@Injectable()
export class ClientesService {

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: '0'
      },
      {
        id: 1,
        nombre: '1'
      },
      {
        id: 2,
        nombre: '2'
      },
      {
        id: 3,
        nombre: '3'
      },
      {
        id: 4,
        nombre: '4'
      },
      {
        id: 5,
        nombre: '5'
      }
    ];
    this.clientes = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      comentario: '',
      grupo: 0
    };
  }
}
