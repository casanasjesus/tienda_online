import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
})
export class ProductoComponent {
  @Input() producto!: Producto;
  @Input() llave!: string;

  constructor(private readonly router: Router) {}

  editarProducto(): void {
    this.router.navigate(['editar', this.llave]);
  }
}
