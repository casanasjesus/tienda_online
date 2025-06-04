import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoService } from '../producto.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-formulario',
    imports: [FormsModule],
    templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  llaveProducto: string | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private readonly productoService: ProductoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const llave = this.route.snapshot.paramMap.get('llave');

    if (llave) {
      const producto = this.productoService.getProductoByLlave(llave);

      if (producto) {
        this.llaveProducto = llave;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }

  limpiarFormulario(): void {
    this.llaveProducto = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }

  redirigirInicio(): void {
    this.router.navigate(['/']);
  }

  guardarProducto(event: Event): void {
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

    this.productoService.guardarProducto(producto, this.llaveProducto);
    this.limpiarFormulario();
    this.redirigirInicio();
  }

  eliminarProducto(): void {
    if (this.llaveProducto !== null) {
      this.productoService.eliminarProducto(this.llaveProducto);
      this.limpiarFormulario();
      this.redirigirInicio();
    }
  }
}
