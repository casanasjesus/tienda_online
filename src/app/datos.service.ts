import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  url = 'https://tienda-online-7b9dd-default-rtdb.firebaseio.com/';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly loginService: LoginService
  ) {}

  listarProductos(): Observable<{ [llave: string]: Producto }> {
    const token = this.loginService.getIdToken();
    const url = `${this.url}datos.json?auth=${token}`;

    return this.httpClient.get<{ [llave: string]: Producto }>(url);
  }

  agregarProducto(producto: Producto): Observable<any> {
    const token = this.loginService.getIdToken();
    const url = `${this.url}datos.json?auth=${token}`;

    return this.httpClient.post(url, producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url = `${this.url}datos/${llave}.json?auth=${token}`;

    return this.httpClient.put(url, producto);
  }

  eliminarProducto(llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url = `${this.url}datos/${llave}.json?auth=${token}`;

    return this.httpClient.delete(url);
  }
}
