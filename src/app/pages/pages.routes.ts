import { RouterModule ,Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { PacientesComponent } from "./pacientes/pacientes.component";
import { HomeComponent } from "./home/home.component";


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'pacientes', component: PacientesComponent },
           
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
