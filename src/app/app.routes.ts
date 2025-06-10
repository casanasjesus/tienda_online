import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuardianService } from './services/login-guardian.service';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: ListadoProductosComponent,
    canActivate: [LoginGuardianService],
  },
  {
    path: 'listado',
    component: ListadoProductosComponent,
    canActivate: [LoginGuardianService],
  },
  {
    path: 'agregar',
    component: FormularioComponent,
    canActivate: [LoginGuardianService],
  },
  {
    path: 'editar/:llave',
    component: FormularioComponent,
    canActivate: [LoginGuardianService],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
