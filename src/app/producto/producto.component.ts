import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
})
export class ProductoComponent {
  @Input() producto!: Producto;

  constructor(private readonly productoService: ProductoService) {}

  emitirDetalleProducto() {
    this.productoService.detalleProductoEmitter.emit(this.producto);
  }
}
