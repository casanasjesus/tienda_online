import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from '../producto/producto.component';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
})
export class ListadoProductosComponent {
  productos: { [llave: string]: Producto } = {};

  constructor(
    private readonly productoService: ProductoService,
    private readonly router: Router
  ) {}

  cargarProductos(): void {
    this.productoService
      .listarProductos()
      .subscribe((productos: { [llave: string]: Producto } = {}) => {
        this.productos = productos;
      });
  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  obtenerLlaves(): string[] {
    if (this.productos) {
      return Object.keys(this.productos);
    } else {
      return [];
    }
  }

  agregarProducto(): void {
    this.router.navigate(['agregar']);
  }
}
