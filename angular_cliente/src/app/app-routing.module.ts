import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';

import { PrincipalComponent } from './components/principal/principal.component';
import { ListarMultasComponent } from './components/listar-multas/listar-multas.component';

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
