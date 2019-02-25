import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'error-404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo : 'login'  },
  { path: '**', pathMatch: 'full', redirectTo : '404'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
