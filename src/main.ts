import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Productos } from './app/components/productos/productos';

bootstrapApplication(Productos, appConfig)
  .catch(err => console.error(err));
