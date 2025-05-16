import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProductoComponent } from '../producto/producto.component';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [FormularioComponent, ProductoComponent],
  templateUrl: './listado-productos.component.html',
})
export class ListadoProductosComponent {
  productos: Producto[] = [];

  constructor(private readonly productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.productos;
  }
}
