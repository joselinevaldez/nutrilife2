import {NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderdesktopComponent } from './headerdesktop/headerdesktop.component';
@NgModule({


    declarations: [
        HeaderComponent,
        SidebarComponent,
        HeaderdesktopComponent
       
        
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        HeaderdesktopComponent
        
    ],
    imports: [
       
    ]

})
export class SharedModule{}
