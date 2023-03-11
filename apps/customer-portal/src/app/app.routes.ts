import { Route } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthGuard } from 'libs/auth/src/lib/guards/auth/auth.guard';
//import { authRoutes } from '@sample-pro/auth';

export const appRoutes: Route[] = [
    {path: 'auth', loadChildren: ()=> import('@sample-pro/auth').then(m => m.AuthModule)},
    {path: 'products', loadChildren: ()=> import('@sample-pro/products').then(m => m.ProductsModule), canActivate: [AuthGuard], },
    {path: '', pathMatch: 'full', redirectTo: 'products'}
];
