import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

import { PrincipalComponent } from './pages/principal/principal.component';
import { ListarMultasComponent } from './pages/listar-multas/listar-multas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'listar-multas', component: ListarMultasComponent },
  { path: 'error-404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo : 'principal'  },
  { path: '**', pathMatch: 'full', redirectTo : '404'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
