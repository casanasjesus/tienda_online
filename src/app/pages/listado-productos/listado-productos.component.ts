import { Component } from '@angular/core';
import { Producto } from '../../components/producto/producto.model';
import { ProductoComponent } from '../../components/producto/producto.component';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
})
export class ListadoProductosComponent {
  productos: { [llave: string]: Producto } = {};
  productosSubscripcion: Subscription | null = null;

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
    this.productosSubscripcion =
      this.productoService.productosActualizados.subscribe((productos) => {
        this.productos = productos;
      });
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

  ngOnDestroy(): void {
    if (this.productosSubscripcion !== null) {
      this.productosSubscripcion.unsubscribe();
    }
  }
}
