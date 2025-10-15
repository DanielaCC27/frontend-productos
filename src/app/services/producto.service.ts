import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private http = inject(HttpClient);

  getProductos() {
    // Si luego proxéas /api, cambia a `${environment.apiBaseUrl}/api/productos`
    return this.http.get<Producto[]>(`${environment.apiBaseUrl}/productos`);
  }
}
