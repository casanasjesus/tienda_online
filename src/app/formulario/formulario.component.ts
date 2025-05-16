import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoService } from '../producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private readonly productoService: ProductoService) {}

  agregarProducto(event: Event) {
    event.preventDefault();

    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);

    this.productoService.agregarProducto(producto);

    this.descripcionInput = '';
    this.precioInput = null;
  }
}
