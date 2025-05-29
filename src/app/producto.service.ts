import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: { [llave: string]: Producto } = {};

  constructor(private readonly datosService: DatosService) {}

  listarProductos() {
    return this.datosService.listarProductos();
  }

  guardarProducto(producto: Producto): void {
    /* if (producto.id === null) {
      producto.id = this.idProducto++;
      this.productos.push(producto);
    } else {
      const index = this.productos.findIndex(
        (currentProducto: Producto) => currentProducto.id === producto.id
      );
      if (index !== -1) {
        this.productos[index] = producto;
      }
    } */
  }

  getProductoByLlave(llave: string): Producto | undefined {
    return undefined;
    // return this.productos.find((producto: Producto) => producto?.id === id);
  }

  eliminarProducto(idProducto: number): void {
    /* const index = this.productos.findIndex(
      (producto: Producto) => producto.id === idProducto
    );

    if (index !== -1) {
      this.productos.splice(index, 1);
    } */
  }
}
