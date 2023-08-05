import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent {

  descripcion: string = 'Mostrar texto desde TS';

  @HostBinding('class') customClass = 'clase-prueba';

}
