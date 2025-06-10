import { Injectable } from '@angular/core';
import { Producto } from '../components/producto/producto.model';
import { DatosService } from './datos.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: { [llave: string]: Producto } = {};
  productosActualizados = new Subject<{ [llave: string]: Producto }>();

  constructor(private readonly datosService: DatosService) {}

  listarProductos(): Observable<{ [llave: string]: Producto }> {
    return this.datosService.listarProductos();
  }

  setProductos(productos: { [llave: string]: Producto }): void {
    this.productos = productos;
    this.productosActualizados.next(this.productos);
  }

  actualizarListaProductos(): void {
    this.listarProductos().subscribe(
      (productos: { [llave: string]: Producto }) => {
        this.setProductos(productos);
      }
    );
  }

  guardarProducto(producto: Producto, llave: string | null = null): void {
    if (llave === null) {
      this.datosService.agregarProducto(producto).subscribe(() => {
        console.log(this.actualizarListaProductos());
      });
    } else {
      this.datosService.modificarProducto(producto, llave).subscribe(() => {
        this.actualizarListaProductos();
      });
    }
  }

  getProductoByLlave(llave: string): Producto | undefined {
    return this.productos[llave];
  }

  eliminarProducto(llave: string): void {
    this.datosService.eliminarProducto(llave).subscribe(() => {
      this.actualizarListaProductos();
    });
  }
}
