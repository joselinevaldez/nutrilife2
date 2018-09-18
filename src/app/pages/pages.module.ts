import { PacientesComponent } from './pacientes/pacientes.component';

import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

//modulo 
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
    declarations: [
        PagesComponent,
       
        PacientesComponent,
        HomeComponent
    ],
    exports: [
       
        PacientesComponent,
        HomeComponent
        
    ],
    imports: [
       SharedModule,
       PAGES_ROUTES
    ]
})
export class PagesModule { }
