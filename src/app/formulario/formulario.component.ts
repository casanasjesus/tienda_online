import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoService } from '../producto.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  idProducto: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private readonly productoService: ProductoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const producto = this.productoService.getProductoById(Number(id));

      if (producto) {
        this.idProducto = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
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

    const producto = new Producto(
      this.idProducto,
      this.descripcionInput,
      this.precioInput
    );

    this.productoService.guardarProducto(producto);

    this.idProducto = null;
    this.descripcionInput = '';
    this.precioInput = null;

    this.router.navigate(['/']);
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
