import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private idProducto = 1;
  productos: Producto[] = [];

  constructor() {
    this.inicializarProducto();
  }

  inicializarProducto() {
    const producto1 = new Producto(this.idProducto++, 'Pantalón', 130.0);
    const producto2 = new Producto(this.idProducto++, 'Camisa', 80.0);
    const producto3 = new Producto(this.idProducto++, 'Playera', 50.0);

    this.productos.push(producto1, producto2, producto3);
  }

  guardarProducto(producto: Producto): void {
    if (producto.id === null) {
      producto.id = this.idProducto++;
      this.productos.push(producto);
    } else {
      const index = this.productos.findIndex(
        (currentProducto: Producto) => currentProducto.id === producto.id
      );
      if (index !== -1) {
        this.productos[index] = producto;
      }
    }
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find((producto: Producto) => producto?.id === id);
  }
}
