import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';

const authRoutes: Route[] = [
    { path: 'login', component: LoginComponent }
];


@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
  })
export class AuthRouteModule { }
  
