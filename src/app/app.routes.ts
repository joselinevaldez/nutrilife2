import { RouterModule, Routes} from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';

import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
const appRoutes: Routes = [

      { path: 'login', component: LoginComponent},
    { path: '**', component: PacientesComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
