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
  productos: Producto[] = [];

  constructor(
    private readonly productoService: ProductoService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.productos = this.productoService.productos;
  }

  agregarProducto() {
    this.router.navigate(['agregar']);
  }
}
