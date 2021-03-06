import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { CrearMultaComponent } from './pages/crear-multa/crear-multa.component';
import { PrincipalComponent } from './pages/principal/principal.component';

import { MultarComponent } from './pages/multar/multar.component'

// guards
import { PrivadoGuard } from './guards/privado.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent, canActivate: [PrivadoGuard] },
  { path: 'crear-multa', component: CrearMultaComponent, canActivate: [PrivadoGuard] },
  { path: 'multar', component: MultarComponent, canActivate: [PrivadoGuard] },
  { path: 'error-404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo : 'login'  },
  { path: '**', pathMatch: 'full', redirectTo : 'error-404'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
