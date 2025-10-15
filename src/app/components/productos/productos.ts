import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../services/producto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
})
export class Productos {
  titulo = 'Listado de Productos desde el Backend';
  private productoSvc = inject(ProductoService);

  productos$: Observable<Producto[]> = this.productoSvc.getProductos();

  trackById = (_: number, p: Producto) => p.id;
}

