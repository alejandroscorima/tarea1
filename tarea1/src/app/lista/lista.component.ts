import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  listaItems = [
    { id: 1, nombre: 'Item 1' },
    { id: 2, nombre: 'Item 2' },
    { id: 3, nombre: 'Item 3' }
  ];

  nombreItem: string ='';

  agregarItem() {
    const nuevoItem = {
      id: this.listaItems.length + 1,
      nombre: this.nombreItem
    };
    this.listaItems.push(nuevoItem);
    this.nombreItem = '';
  }

}
